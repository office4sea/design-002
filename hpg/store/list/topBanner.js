hbF.binder('topBanner', vo=> {
    initHandle();
    bindEvent();

    /**초기화 */
    function initHandle() {
        hbF.debug.log('topBanner initHandle');
        vo.headline.removeClass('placeholder');
        vo.btnExample.removeClass(['placeholder', 'disabled']);
    }
    /**이벤트 설정 */
    function bindEvent() {
        hbF.debug.log('topBanner bindEvent');

        // 버튼클릭 이벤트
        vo.btnExample.event('click', evt=> {
            hbF.debug.log('-btnExample-', vo.getText());
        });
    }
});
