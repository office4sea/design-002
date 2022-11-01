// ===== 팝업 객체 =====
/**
 * 팝업 엘리먼트를 제어 할수 있는 바인딩 객체를 생성합니다.
 * @param {string} id 대상 엘리먼트 아이디
 * @param {(vo: PopupObject & Object<string, voHaldle>)=> void} callback 바인딩 될때 수행될 프로시저
 * @returns {void}
 */
hbF.popup = (id, callback)=> {};
/**
 * 바인딩된 팝업 객체를 반환 합니다.
 * @param {string} id 
 * @returns {PopupObject & Object<string, voHaldle>}
 */
hbF.popup.getBindObject = id=> {};
const PopupObject = Object.assign(ValueObject, {
    /**
     * 팝업 종료 시 시점 처리할 엘리먼트를 세팅 합니다.
     * @param {string|HTMLElement|Event} target 포커싱 타겟
     * @returns {PopupObject}
     */
    returnFocus(target) {return PopupObject},
    /**
     * 팝업을 호출 합니다.
     * @param {*} param 
     * @returns {Promise<any>}
     */
    openPopup(param) {return new Promise()},
    closePopup: {
        /**
         * 팝업을 정상 종료 처리 합니다.
         * @param {*} result 결과 값
         */
        resolve(result) {},
        /**
         * 팝업을 종료 거부 처리 합니다.
         * @param {*} reason 거부 사유
         */
        reject(reason) {}
    }
});
