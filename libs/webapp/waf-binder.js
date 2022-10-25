(voBind=> Object.assign(waf, {voBind}))
((id, onBind)=> {
    const {debug, voBind} = waf;

    const voMap = {}; // vo 핸들 모음
    const voHellper = getHellper(voMap);
    const voResult = voHellper.getBindResult();

    // 파라미터 체크
    if(!id) return debug.error('invalid config: id is require');

    // 바인딩 아이디 중복 체크
    if(voBind.hasOwnProperty(id)) return debug.error(`duplicate voBind(${id})`);

    // 바인드 엘리먼트 검색
    const el = document.getElementById(id);
    if(!el) return debug.error(`not defined element(${id})`);

    Object.defineProperty(voResult, 'el', {get() {return el}});
    Object.defineProperty(voBind, id, {get() {return voResult}});

    // 바인드 엘리먼트 기능 확장
    voHellper.mixinElement(el);

    // data-vo-item 수집
    [...el.querySelectorAll('[data-vo]')].forEach(el=> {
        const items = [...el.querySelectorAll('[data-vo-item]')];
        if(items.length == 0) return;

        el._itemTemplate = items.reduce((tpl, el)=> {
            const {outerHTML, dataset:{voItem}} = el;

            el.remove();
            tpl[voItem] = outerHTML;
            return tpl;
        }, {});

        el.appendItem = (name, onBindItem)=> {
            if(!name) return;

            const itemMap = {}; // vo 핸들 모음
            const itemHellper = getHellper(itemMap);
            const itemResult = itemHellper.getBindResult();

            const innerHTML = el._itemTemplate[name];
            const {firstChild} = Object.assign(document.createElement('div'), {innerHTML});

            Object.defineProperty(itemResult, 'el', {get() {return firstChild}});
            // vo 엘리먼트 기능 확장
            itemHellper.mixinElement(firstChild);
            // data-vo 수집
            itemHellper.assignPropertys(itemResult, firstChild.querySelectorAll('[data-vo]'));

            el.appendChild(firstChild);
            onBindItem && onBindItem(itemResult);
            return itemResult;
        };
    });

    // data-vo 수집
    voHellper.assignPropertys(voResult, el.querySelectorAll('[data-vo]'));

    // 바이딩 완료 함수 후킹
    onBind && onBind(voResult);
    return voResult;

    //
    // ===== 헬퍼 함수 =====
    function getHellper(voMap) {
        const result = {};

        /**바인딩 객체 */
        result.getBindResult = _=> {
            // 저장된 vo 객체 반환
            const getVoMapData = (prop, targets)=> Object.keys(voMap)
                .reduce((result, ky)=> {
                    if(!targets || targets.has(ky)) {
                        result[ky] = voMap[ky][prop];
                    }
                    return result;
                }, {});
            // vo 객체 저장
            const setVoMapData = (prop, arg)=> arg && Object.entries(arg)
            .forEach(([ky, vl])=> {
                if(voMap[ky]) {
                    voMap[ky][prop] = vl;
                }
            });

            return {
                getText(arg) {
                    return getVoMapData('text', arg && new Set(arg));
                },
                setText(arg) {
                    return setVoMapData('text', arg), this;
                },
                getHtml(arg) {
                    return getVoMapData('html', arg && new Set(arg));
                },
                setHtml(arg) {
                    return setVoMapData('html', arg), this;
                },
                getValue(arg) {
                    return getVoMapData('value', arg && new Set(arg));
                },
                setValue(arg) {
                    return setVoMapData('value', arg), this;
                }
            };
        };

        /**엘리먼트 기능 확장 */
        result.mixinElement = el=> {
            mixinElementProperty(el);
            mixinElementMethod(el);
            return el;
        };
        // 프로퍼티 추가
        const mixinElementProperty = el=> {
            [{
                ky: 'text',
                get: _=> el.textContent,
                set: textContent=> Object.assign(el, {textContent})
            }, {
                ky: 'html',
                get: _=> el.innerHTML,
                set: innerHTML=> Object.assign(el, {innerHTML})
            }].forEach(({ky, get, set})=> Object.defineProperty(el, ky, {get, set}));
        };
        // 엘리먼트 메소드 추가
        const mixinElementMethod = el=> {
            // 이벤트 리스너
            el.event = (type, listener)=> {
                type && el.addEventListener(type, listener);
                return el;
            };
            // 어트리뷰트 게터/세터
            el.attr = (ky, vl)=> ky && (vl ? el.setAttribute(ky, vl) : el.getAttribute(ky));
            // 엘리먼트 비우기
            el.empty = _=> Object.assign(el, {innerHTML: ''});
            // 클래스 추가
            el.addClass = vl=> {
                if(vl) {
                    (Array.isArray(vl) ? vl : [vl]).forEach(v=> el.classList.add(v));
                    return el;
                }
            };
            // 클래스 삭제
            el.removeClass = vl=> {
                if(vl) {
                    (Array.isArray(vl) ? vl : [vl]).forEach(v=> el.classList.remove(v));
                    return el;
                }
            };
            // 클래스 검색
            el.hasClass = vl=> el.classList.contains(vl);
        };

        /**대상의 속성값에 전달된 엘리먼트 리스트 추가 */
        result.assignPropertys = (target, voList)=> {
            [...voList].forEach(el=> {
                const {dataset:{vo}} = el;
                if(target.hasOwnProperty(vo)) return debug.info(`duplicate vo(${vo})`, target.el);

                // vo 게터 설정
                Object.defineProperty(target, vo, {get() {return el}});
                // 엘리먼트 기능 확장 / voMap 저장
                voMap[vo] = result.mixinElement(el);
            });
        };

        return result;
    }
});
