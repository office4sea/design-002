waf.voBind('top_banner', vo=> {
    initHandle(); // 객체 초기화
    bindEvent(); // 이벤트 바인딩

    function initHandle() {
        waf.debug.log(vo.headline.hasClass('placeholder'))
        vo.headline.removeClass('placeholder');
        vo.headline.addClass(['a', 'b']);
    }
    function bindEvent() {
        vo.btnExample.event('click', evt=> {
            waf.debug.log('-btnExample-', vo.getValue());
        });
    }
});
