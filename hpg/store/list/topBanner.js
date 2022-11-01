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
            hbF.debug.log('btnExample 버튼클릭', vo.getText());

            hbF.popup.getBindObject('confirm')
                .returnFocus(evt)
                .openPopup({
                    title: '타이틀',
                    message: '알림 메시지' + '1234'.split().map(_=>'<div style="margin-top:300px;">스크롤</div>').join(''),
                    ok: '예',
                    cancel: '아니오'
                })
                .then(result=> {
                    hbF.debug.log('--confirm result--', result);
                    return hbF.popup.getBindObject('alert')
                        .returnFocus(evt)
                        .openPopup({
                            title: '타이틀',
                            message: '알림 메시지',
                        });
                })
                .then(result=> {
                    hbF.debug.log('--alert result--', result);
                })
                .catch(reason=> {
                    hbF.debug.error('--popup error--', reason);
                });
        });
    }
});
