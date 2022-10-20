/**
 * 웹 어플리케이션 함수(Web Application Function)
 * - onLoad: 웹 어플리케이션 로드 완료 시 수행 할 리스너 함수
 * - scripts: 스크립트 파일 추가
 * - htmls: 페이지에 HTML 삽입
 *   - selector: html 삽입할 엘리먼트 셀렉터
 *   - url: html 파일 경로
 * 
 * @param {Object} [arg={}] 설정값
 * @param {() => void} arg.onLoad
 * @param {Array<string>=} arg.scripts
 * @param {Array<{selector: string, url: string}>=} arg.htmls
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

            el.innerHTML = await (await fetch(url, {cache: 'no-cache'})).text();
        }));
    };

    // 페이지 로딩 처리 리스너 호출
    waf.nextFrame(next=> next([...pageHolder].forEach(fn=> fn())))
        // HTML 삽입
        .then(_=> fetchHtmls())
        // 스크립트 추가
        // 어플리케이션 로드 완료 리스너 호출
        .then(_=> waf.nextFrame(next=> next([...pageLoad].forEach(fn=> fn()))))
    return waf;
}
(app=> {
    //
    // 화면 갱신 후 처리 수행
    app.nextFrame = cb=> new Promise(rs=> requestAnimationFrame(_=> (cb ? cb(rs) : rs())));

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

    // 디버그모드 설정
    Object.defineProperty(app, 'debug', {
        get() {return false;},
        set(vl) {},
    });
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
})({});
