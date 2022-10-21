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
 * ID값과 일치하는 엘리먼트를 제어하는 바인딩 객체를 반환 합니다.
 * 
 * @param {{
 * id: string
 * }} config 설정값
 * - id: 엘리먼트 id
 * @param {(vo:ValueObject)=> void} onBind 
 * @returns {ValueObject}
 */
waf.voBind = (config, onBind)=> ValueObject;
const ValueObject = {
    /**
     * 바인딩된 엘리먼트 객체
     * @readonly
     * @returns {HTMLElement}
     */
     get el() {},
};
