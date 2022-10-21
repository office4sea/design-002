/**
 * **웹 어플리케이션 함수(Web Application Function)**
 * 
 * 파라미터의 순서대로 기능을 수행 합니다.
 * 
 * - htmls: 페이지에 HTML 삽입
 *   - selector: html 삽입할 엘리먼트 셀렉터
 *   - url: html 파일 경로
 * - libs: 스크립트 의존성 파일 추가
 * - scripts: 스크립트 파일 추가
 * 
 * @param {Object} [arg={}] 설정값
 * @param {Array<{selector: string, url: string}>=} arg.htmls
 * @param {Array<string>=} arg.libs
 * @param {Array<string>=} arg.scripts
 */
function waf(arg={}) {
    const {pageHolder, pageLoad} = waf.getListener();
    const fetchHtmls = _=> {
        const {htmls} = arg;
        if(!htmls) return;

        return Promise.all(htmls.map(async ({selector, url})=> {
            if(!selector || !url) return 1;

            const el = document.querySelector(selector);
            if(!el) return 2;

            el.innerHTML = await waf.fetchHtml(url);
        }));
    };
    const requireScripts = scripts=> {
        if(!scripts) return;

        return Promise.all(scripts.map(url=> waf.requireScript(url)));
    };

    // 중복실행 방지
    if(waf._isRunning) return waf.debug.error('application is running');
    else {
        waf._isRunning = true;
    }

    // 페이지 로딩 처리 리스너 호출
    waf.nextFrame(next=> next([...pageHolder].forEach(fn=> fn())))
        // HTML 삽입 및 의존성 파일 추가
        .then(_=> Promise.all([fetchHtmls(), requireScripts(arg.libs)]))
        .then(_=> waf.nextFrame())
        // 스크립트 추가
        .then(_=> requireScripts(arg.scripts))
        .then(_=> waf.nextFrame())

        // 어플리케이션 로드 완료 리스너 호출
        .then(_=> [...pageLoad].forEach(fn=> fn()));
    return waf;
}
(app=> {
    //
    // 화면 갱신 후 처리 수행
    app.nextFrame = cb=> new Promise(rs=> requestAnimationFrame(_=> (cb ? cb(rs) : rs())));
    // html 파일 요청 처리
    app.fetchHtml = async url=> {
        if(!url) return Promise.resolve(undefined);
        else {
            return (await fetch(url, {cache: 'no-cache'})).text();
        }
    };
    // 스크립트 파일 추가
    app.requireScript = url=> {
        return new Promise(resolve=> {
            if(!url) return resolve(undefined);

            const {head} = document;
            const script = head.appendChild(document.createElement('script'));
            script.src = /\?/.test(url) ? url : `${url}?${new Date().getTime()}`;
            script.onload = _=> resolve(url);
            script.onerror = _=> resolve(undefined);
        });
    };

    //
    // 어플리케이션 리스너 처리
    const listener = {
        pageHolder: new Set, // 어플리케이션 로딩중
        pageLoad: new Set, // 어플리케이션 로드 완료
    };
    app.getListener = _=> Object.assign({}, listener);
    app.addEventListener = (name, procedure)=> {
        if(!listener[name]) return;
        if(!procedure || typeof procedure != 'function') return;

        listener[name].add(procedure);
    };
})(waf);

//
// utils
(utils=> {
    Object.assign(waf, {utils});

    // 엘리먼트 객체 검색
    utils.query = (vl, opt)=> {
        const el = document.querySelector(vl);
        return el && Object.assign(el, opt);
    };
    // 셀렉터와 일치하는 모든 엘리먼트 객체 검색
    utils.queryAll = (vl, opt)=> {
        const el = document.querySelectorAll(vl);
        if(!el || !el.length) return [];

        return [...el].map(el=> Object.assign(el, opt));
    };
})({});

//
// storage
(storage=> {
    Object.assign(waf, {storage});

    const getStorage = target=> {
        const inValue = v=> (typeof v == 'string') ? v : JSON.stringify(v);
        const outValue = v=> /^(?:\{.*\}|\[.*\])$/.test(v) ? JSON.parse(v) : v;

        return {
            addKeys(keys) {
                Array.isArray(keys) && keys.forEach(ky=> {
                    if(this.hasOwnProperty(ky)) return;

                    Object.defineProperty(this, ky, {
                        get() {
                            return outValue(target.getItem(ky));
                        },
                        set(vl) {
                            target.setItem(ky, inValue(vl))
                        }
                    });
                });
            },
            getItem(ky) {
                return outValue(target.getItem(ky));
            },
            setItem(ky, vl) {
                target.setItem(ky, inValue(vl));
            },
            removeItem(ky) {
                target.removeItem(ky);
            },
            clear(regExp) {
                if(!regExp) return target.clear();

                Object.entries(target).forEach(([k])=> {
                    regExp.test(k) && target.removeItem(k)
                });
            }
        };
    };
    // 로컬 스토리지
    storage.local = getStorage(localStorage);
    // 세션 스토리지
    storage.session = getStorage(sessionStorage);
    // 쿠키
    storage.cookie = {
        addKeys(keys) {
            Array.isArray(keys) && keys.forEach(ky=> {
                if(this.hasOwnProperty(ky)) return;

                Object.defineProperty(this, ky, {
                    get() {
                        const elements = document.cookie.split('; ');

                        let result;
                        while(result = elements.pop()) {
                            if(result.indexOf(ky) == 0) {
                                return result.substring(ky.length + 1, result.length);
                            }
                        }
                        return result;
                    },
                    set() {
                        document.cookie = `${ky}=${vl}; path=/; expries=${new Date()}`;
                    }
                });
            });
        },
    };
})({});

//
// debug
(_=> {
    const {storage:{session}} = waf;
    session.addKeys(['waf_debug']);

    Object.defineProperty(waf, 'debug', {
        get() {
            const result = {
                break: undefined,
                send: _=>_,
                log: _=>_, info: _=>_,
                error(...args) {
                    console.error(...args);
                    if(session.waf_debug) {
                        const error = new Error(JSON.stringify(args,null,' '));
                        result.send && result.send(error.stack);
                    }
                }
            };
            if(!session.waf_debug) return result;

            result.log = console.log.bind(window, '%clog|', 'color:red');
            result.info = console.warn.bind(window, '%c info|', 'color:red');
            Object.defineProperty(result, 'break', {
                get() {debugger}
            });

            return result;
        },
        set(vl) {
            session.waf_debug = vl;
        }
    });
})();
