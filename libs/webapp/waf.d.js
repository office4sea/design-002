/**
 * 화면 갱신 후 처리 수행
 * 
 * @param {(next: (value: any)=> void)=> void =} callback 
 * @returns {Promise<any>}
 * @example
 * // 비동기 수행에 대한 순차 처리
 * // callback 함수에 전달된 next 파라미터로 비동기 수행 귀결
 * console.log(1);
 * const next = await waf.nextFrame(next=> {
 *     setTimeout(_=> {
 *         console.log(2);
 *         next('1122');
 *     });
 * });
 * console.log(3, {next});
 */
waf.nextFrame = callback=> new Promise(_=>{});

/**
 * 요청 경로의 파일로 부터 HTML 텍스트를 반환 합니다.
 * 
 * @param {string} url 
 * @returns {Promise<string>}
 */
waf.fetchHtml = async url=> (await fetch(url)).text();

/**
 * 어플리케이션 로드전 페이지 로딩 처리를 위한 리스너
 */
waf.onProgress = ()=> {};

/**
 * 지정한 유형의 이벤트를 대상이 수신할 때마다 호출할 함수를 설정합니다.
 * - type: 이벤트 유형
 *   - pageLoad: 어플리케이션 로드 완료
 *   - pageHolder: 어플리케이션 로딩중 전처리
 *
 * @param {'pageLoad'|'pageHolder'} type 
 * @param {()=> void} listener 
 */
waf.addEventListener = (type, listener)=> {};


/**
 * 디버깅 객체
 * @type {boolean}
 */
waf.debug = undefined;
waf.log;
console.log.bind(window);


/**
 * 유틸리티
 */
waf.utils = {
    /**
     * 엘리먼트 객체 검색(document.querySelector)
     * 
     * @param {string} selector 검색 할 셀렉터
     * @param {=} option 적용할 프로퍼티
     * @returns {HTMLElement | null}
     */
    query(selector, option) {
    },
};
