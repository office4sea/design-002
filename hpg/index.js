// 어플리케이션 시작
hbF({
    htmls: [
        {selector: '#navbar', url: '/design-002/hpg/gnb/tpl.navbar.html'},
        {selector: '#footer', url: '/design-002/hpg/gnb/tpl.footer.html'},
        {selector: '#iaStore', url: '/design-002/hpg/store/index.md'},
        {selector: '#iaPayment', url: '/design-002/hpg/payment/index.md'},
        {selector: '#iaMyinfo', url: '/design-002/hpg/myinfo/index.md'},
        {selector: '#iaEtc', url: '/design-002/hpg/etc/index.md'},
    ],
    implements: [],
    scripts: []
});

// 페이지 로딩중
hbF.addEventListener('loading', _=> {
    hbF.debug.log('loading');
    hbF.debug.info('loading');
});
// 페이지 로딩 완료
hbF.addEventListener('ready', next=> {
    setTimeout(_=> {
        hbF.debug.log('ready1');
        next();
    }, 1000);
    return next;
});
hbF.addEventListener('ready', _=> {
    hbF.debug.log('ready2');
});

// 상점
hbF.binder('iaStore', vo=> {
    initHandle();
    bindEvent();

    /**초기화 */
    function initHandle() {
        hbF.debug.log('iaStore initHandle');
    }
    /**이벤트 설정 */
    function bindEvent() {
        hbF.debug.log('iaStore bindEvent');
    }
});
// 구매정보
// 내정보
// 기타
