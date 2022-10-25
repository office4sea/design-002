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
waf.nextFrame = callback=> new Promise(_=> {});

/**
 * 요청 경로의 파일로 부터 HTML 텍스트를 반환 합니다.
 * 
 * @param {string} url 
 * @returns {Promise<string>}
 */
waf.fetchHtml = url=> new Promise(_=> {});

/**
 * 요청 경로의 스크립트 파일을 추가 합니다.
 * 
 * @param {string} url 
 * @returns {Promise<string>}
 */
 waf.requireScript = url=> new Promise(_=> {});

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

// ========== 스토리지 객체 ========== //
/**
 * 스토리지 객체
 */
waf.storage = {
    /** 로컬 스토리지 */
    local: WebStorage,
    /** 세션 스토리지 */
    session: WebStorage,
    /** 쿠키 */
    cookie: {
        /**
         * 쿠키 키값 설정
         * @param {Array<string>} keys
         * @returns {void}
         */
        addKeys(keys) {}
    }
};
const WebStorage = {
    /**
     * 스토리지 키값을 설정합니다.
     * 설정된 키값을 getter/setter로 사용됩니다.
     * @param {Array<string>} keys
     * @returns {void}
     * @example
     * // 키값 설정
     * storage.local.addKeys(['sample_key1', 'sample_key2']);
     * // 데이터 저장
     * storage.local.sample_key1 = 'data';
     * // 데이터 조회
     * console.log(storage.local.sample_key1);
     */
    addKeys(keys) {},
    /**
     * 스토리지에 저장된 데이터를 반환 합니다.
     * @param {string} ky 
     * @returns {*}
     */
    getItem(ky) {},
    /**
     * 스토리지에 데이터를 저장 합니다.
     * @param {*} ky
     * @param {*} vl
     */
    setItem(ky, vl) {},
    /**
     * 스토리지 항목(키값)을 삭제 합니다.
     * @param {*} ky
     */
    removeItem(ky) {},
    /**
     * 정규식과 일치하는 스토리지 항목(키값)을 모두 삭제합니다.
     * 값이 없을 경우 스토리지를 초기화 합니다.
     * @param {RegExp=} regExp
     */
    clear(regExp) {}
};

// ========== 디버깅 객체 ========== //
/**
 * 디버깅 객체
 * 
 */
waf.debug = {
    /**
     * 콘솔 로그를 출력 합니다.
     * @param {...any=} args
     */
    log(...args) {},
    /**
     * 콘솔 로그와 콜 스택을 출력 합니다.
     * @param {...any=} args
     */
    info(...args) {},
    /**
     * 프로세스 수행을 중단(throw) 합니다.
     * @param {...any=} args
     */
    error(...args) {},
    /**
     * 중단점을 설정 합니다.
     * @readonly
     */
    get break() {},
};


// ========== 유틸리티 ========== //
/** 유틸리티 */
waf.utils = {
    /**
     * 셀렉터와 일치하는 엘리먼트 객체를 검색 합니다.
     * 옵션값 존재시 검색된 엘리먼트의 프로퍼티를 세팅합니다.
     * @param {string} selector 검색 할 셀렉터
     * @param {=} option 적용할 프로퍼티
     * @returns {HTMLElement | null}
     */
    query(selector, option) {},

    /**
     * 셀렉터와 일치하는 모든 엘리먼트 객체를 검색 합니다.
     * 옵션값 존재시 검색된 엘리먼트의 프로퍼티를 세팅합니다.
     * @param {string} selector 검색 할 셀렉터
     * @param {=} option 적용할 프로퍼티
     * @returns {HTMLElement | null}
     */
     queryAll(selector, option) {},
};

// ========== 엘리먼트 바인딩 ========== //
/**
 * 엘리먼트를 제어 할수 있는 바인딩 객체를 반환 합니다.
 * 
 * @param {string} id 설정값
 * @param {(vo:ValueObject)=> void} onBind 
 * @returns {ValueObject}
 */
waf.voBind = (id, onBind)=> ValueObject;
const ValueObject = {
    /**
     * 바인딩된 엘리먼트 객체
     * @readonly
     * @returns {ElementHandle}
     */
    get el() {},
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
};
/**엘리먼트 핸들 객체 */
const ElementHandle = Object.assign(new HTMLElement(), {
    /**
     * 이벤트를 등록 합니다.
     * @param {string} type 이벤트 타입
     * @param {(ev:Event)=> void} listener 이벤트 리스너
     */
    event(type, listener) {},
    /**
     * 내용 비우기
     * @return {HTMLElement}
     */
    empty() {},
    /**
     * 속성값을 조회/변경
     * @param {string} ky 대상의 속성 키
     * @param {string=} vl 값을 전달하지 않으면 조회된 값을 반환 합니다.
     * @returns {string|void}
     */
     attr(ky, vl) {},
    /**
     * 클래스를 추가합니다.
     * @param {string|Array<string>} name 추가 할 클래스명
     * @return {HTMLElement}
     */
    addClass(name) {},
    /**
     * 클래스를 삭제합니다.
     * @param {string|Array<string>} name 삭제 할 클래스명
     * @return {HTMLElement}
     */
    removeClass(name) {},
    /**
     * 클래스 존재 여부를 확인 합니다.
     * @param {string} name 클래스명
     * @return {boolean}
     */
    hasClass(name) {},
});
