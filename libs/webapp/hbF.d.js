/**
 * **HTML 바인딩 함수(HTML binder Function)**
 * 
 * **메소드**
 * - setStatus: 어플리케이션 수행 상태를 설정 합니다.
 * - getStatus: 어플리케이션 수행 상태를 반환 합니다.
 * - addEventListener: 어플리케이션의 지정한 이벤트 타입이 수신 될때 마다 호출 될 함수를 등록합니다.
 * - bindProperty: 속성을 추가 합니다.
 * 
 * **유틸리티**
 * - debug: 디버깅 처리 객체 입니다.
 * - storage: 스토리지 관리 객체 입니다.
 * - binder: 엘리먼트 바인딩을 위한 객체 입니다.
 * @param {object} config 설정값
 * - htmls: HTML 추가
 * - implements: 의존성 스크립트 추가
 * - scripts: 스크립트 추가
 * @param {Array<{selector: string, url: string}>=} config.htmls
 * @param {Array<string>=} config.implements
 * @param {Array<string>=} config.scripts
 */
function hbF(config={}) {}
/**
 * 어플리케이션 수행 상태값
 * @typedef {'loading'|'ready'|'failed'} HBF_STATUS
 * @type {HBF_STATUS}
 */
hbF.status = undefined;
/**
 * 어플리케이션 수행 상태를 설정 합니다.
 * @param {HBF_STATUS} status 
 * @returns 
 */
hbF.setStatus = status=> {};
/**
 * 어플리케이션 수행 상태를 반환 합니다.
 * @returns {HBF_STATUS}
 */
hbF.getStatus = ()=> undefined;
/**
 * 어플리케이션의 지정한 이벤트 타입이 수신 될때 마다 호출 될 함수를 등록합니다.
 * @param {HBF_STATUS} type 이벤트 타입
 * @param {()=> void} callback 이벤트 수행 함수
 * @returns {void}
 */
hbF.addEventListener = (type, callback)=> {};
/**
 * 속성을 추가 합니다.
 * @param {string} signature 속성 키값
 * @param {{
 *   get?: ()=> any,
 *   set?: (arg:any)=> void
 * }} property 속성에 부여할 게터/세터
 * @returns {ValueObject}
 */
hbF.bindProperty = (signature, property)=> hbF;


// ===== 디버깅 객체 =====
/**
 * 디버깅 모드를 활성화 / 비활성화 처리 합니다.
 * @example
 * // 디버깅을 활성화.
 * hbF.debug = true;
 * // 디버깅 비활성화
 * hbF.debug = false;
 */
hbF.debug = {
    /**콘솔 로그를 출력 합니다. */
    log(...args) {},
    /**콘솔 스택 로그를 출력 합니다. */
    info(...args) {},
    /**콘솔 오류를 출력 합니다. */
    error(...args) {},
    /**중단점을 설정 합니다. */
    get break() {},
    /**로그 레벨(모든 로그 출력) */
    get sysLevel() {},
    /**로그 레벨(시스템 로그 출력하지 않음) */
    get logLevel() {},
    /**로그 레벨(경고 로그만 출력함) */
    get infoLevel() {},
};

// ===== 스토리지 객체 =====
/**
 * 웹 스토리지 저장 / 읽기 처리 합니다.
 */
hbF.storage = {
    /**로컬 스토리지 */
    local: hbF_Storage,
    /**세션 스토리지 */
    session: hbF_Storage,
    /**쿠키 */
    cookie: {
        /**
         * 쿠키값 반환
         * @param {string} ky
         * @returns {string|null}
         */
        getItem(ky) {},
        /**
         * 쿠키값 저장
         * @param {string} ky
         * @param {string} vl
         * @returns {void}
         */
        setItem(ky, vl) {},
        /**
         * 쿠키값 저장
         * @param {string} ky
         * @returns {void}
         */
        removeItem(ky) {},
    }
};
const hbF_Storage = {
    /**
     * 스토리지 키값을 설정합니다.
     * 설정된 키값을 getter/setter로 사용됩니다.
     * @param {string|Array<string>} keys
     * @returns {void}
     * @example
     * // 키값 설정
     * storage.local.setKeys('sample_key1');
     * storage.local.setKeys(['sample_key1', 'sample_key2']);
     * // 데이터 저장
     * storage.local.sample_key1 = 'data';
     * // 데이터 조회
     * console.log(storage.local.sample_key1);
     */
    setKeys(keys) {},
    /**
     * 스토리지에 저장된 데이터(객체)를 반환 합니다.
     * @param {string} ky 조회키
     * @returns {object}
     */
    getJson(ky) {},
    /**
     * 스토리지에 저장된 데이터(텍스트)를 반환 합니다.
     * @param {string} ky 조회키
     * @returns {string}
     */
    getItem(ky) {},
    /**
     * 스토리지에 데이터를 저장 합니다.
     * @param {string} ky 조회키
     * @param {*} vl
     */
    setItem(ky, vl) {},
    /**
     * 스토리지의 항목을 삭제 합니다.
     * @param {string} ky 조회키
     */
    removeItem(ky) {},
    /**
     * 정규식과 일치하는 스토리지 항목을 모두 삭제합니다.
     * 값이 없을 경우 스토리지를 초기화 합니다.
     * @param {RegExp=} regExp
     */
    clear(regExp) {}
};

// ===== 바인딩 객체 =====
/**
 * 엘리먼트를 제어 할수 있는 바인딩 객체를 생성합니다.
 * @param {string} id 대상 엘리먼트 아이디
 * @param {(vo: ValueObject & Object<string, voHaldle>)=> void} callback 바인딩 될때 수행될 프로시저
 * @returns {void}
 */
hbF.binder = (id, callback)=> {};
/**
 * 바인딩된 객체를 반환 합니다.
 * @param {string} id 
 * @returns {ValueObject & Object<string, voHaldle>}
 */
hbF.binder.getBindObject = id=> {};
const voHaldle = Object.assign(new HTMLElement, {
    /**엘리먼트 텍스트 조회/출력 */
    text: '',
    /**엘리먼트 HTML 마커블 조회/출력 */
    html: '',
    /**
     * 이벤트 등록 메소드
     * @param {string} type 이벤트 타입
     * @param {(event: Event)=> void} listener 호출될 이벤트 리스너
     * @returns {voHaldle}
     */
    event(type, listener) {},
    /**
     * 어트리뷰트 속성 조회/변경
     * @param {string} ky 
     * @param {string} vl 
     * @return {string|null}
     */
    attr(ky, vl) {},
    /**
     * 엘리먼트 HTML 비우기
     * @returns {voHaldle}
     */
    empty() {},
    /**
     * 엘리먼트 클래스 추가
     * @param {string|Array<string>} classNames 클래스이름 문자 배열 또는 문자
     * @returns {voHaldle}
     */
    addClass(classNames) {},
    /**
     * 엘리먼트 클래스 삭제
     * @param {string|Array<string>} classNames 클래스이름 문자 배열 또는 문자
     * @param {*} classNames 
     * @returns {voHaldle}
     */
    removeClass(classNames) {},
    /**
     * 엘리먼트 클래스 존재 여부 확인
     * @param {*} className
     * @returns {voHaldle}
     */
    hasClass(className) {},
    /**
     * vo-item 디렉티브에 해당 하는 바인딩 객체를 추가 합니다.
     * @param {string} name 추가할 item 명칭
     * @param {(vo:ValueObject)=> void} onBindItem 
     * @returns {ValueObject}
     * @example
     * // html
     * <ul data-vo="list">
     *   <li data-vo-item="notFound">데이터 없음</li>
     *   <li data-vo-item="tuple">
     *       <strong data-vo="title">제목</strong>
     *       <span data-vo="info">내용</span>
     *   </li>
     * </ul>
     * 
     * // javascript
     * var table = [
     *   {title: 'a1', info: 'b1'},
     *   {title: 'a2', info: 'b2'},
     * ];
     * 
     * // list 엘리먼트 비우기
     * vo.list.empty();
     * // 데이터 없음 처리
     * if(table.length == 0) vo.list.appendItem('notFound');
     * else {
     *   // 데이터를 순회 하면 텍스트 출력
     *   table.forEach(each=> {
     *      vo.list.appendItem('tuple', voItem=> voItem.setText(each));
     *   });
     * }
     */
    appendItem(name, onBindItem) {},
});
const ValueObject = {
    /**
     * 바인딩된 엘리먼트 객체
     * @readonly
     * @returns {voHaldle}
     */
    get el() {},
    /**
     * vo 객체 핸들 리스트를 반환
     * @returns {Object<string, voHaldle>}
     */
    getHandles() {},
    /**
     * vo객체의 텍스트 값을 반환 합니다.
     * @param {Array<string>=} arg 반환값의 키를 배열로 전달 합니다.
     * @returns {*}
     */
    getText(arg) {},
    /**
     * 매개변수의 키값과 일치하는 vo객체의 텍스트 값을 출력 합니다.
     * @param {Map<string,string>} arg 출력값
     * @returns {*}
     */
    setText(arg) {},
    /**
     * vo객체의 마크업(HTML) 값을 반환 합니다.
     * @param {Array<string>=} arg 반환값의 키를 배열로 전달 합니다.
     * @returns {*}
     */
    getHtml(arg) {},
    /**
     * 매개변수의 키값과 일치하는 vo객체를 마크업(HTML) 형태로 출력 합니다.
     * @param {Map<string,string>} arg 출력값
     * @returns {*}
     */
    setHtml(arg) {},
    /**
     * vo객체의 input 값을 반환 합니다.
     * @param {Array<string>=} arg 반환값의 키를 배열로 전달 합니다.
     * @returns {*}
     */
    getValue(arg) {},
    /**
     * 매개변수의 키값과 일치하는 vo객체의 input 값을 출력 합니다.
     * @param {Map<string,string>} arg 출력값
     * @returns {*}
     */
    setValue(arg) {},
    /**
     * vo-item 디렉티브에 해당 하는 바인딩 객체를 추가 합니다.
     * @param {string} name 추가할 item 명칭
     * @param {(vo:ValueObject)=> void} onBindItem 
     * @returns {ValueObject}
     * @example
     * // html
     * <ul data-vo="list">
     *   <li data-vo-item="notFound">데이터 없음</li>
     *   <li data-vo-item="tuple">
     *       <strong data-vo="title">제목</strong>
     *       <span data-vo="info">내용</span>
     *   </li>
     * </ul>
     * 
     * // javascript
     * var table = [
     *   {title: 'a1', info: 'b1'},
     *   {title: 'a2', info: 'b2'},
     * ];
     * 
     * // list 엘리먼트 비우기
     * vo.list.empty();
     * // 데이터 없음 처리
     * if(table.length == 0) vo.list.appendItem('notFound');
     * else {
     *   // 데이터를 순회 하면 텍스트 출력
     *   table.forEach(each=> {
     *      vo.list.appendItem('tuple', voItem=> voItem.setText(each));
     *   });
     * }
     */
    appendItem(name, onBindItem) {},
    /**
     * 등록된 이벤트 리스너를 반환 합니다.
     * @returns {Object<string, (arg: any)=>void>}
     */
    getEvents() {},
    /**
     * 이벤트 발생시 호출될 함수를 등록합니다.
     * @param {string} 이벤트 타입
     * @param {(arg: any)=> void} 이벤트 발생 시 호출 될 함수
     * @returns {ValueObject}
     */
    addEvent(type, listener) {},
    /**
     * 속성을 추가 합니다.
     * @param {string} signature 
     * @param {{
     *   get?: ()=> any,
     *   set?: (arg:any)=> void
     * }} property
     * @returns {ValueObject}
     */
    bindProperty(signature, property) {},
};
