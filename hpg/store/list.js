// 어플리케이션 시작
hbF({
    htmls: [
        {selector: '#navbar', url: '/design-002/hpg/gnb/tpl.navbar.html'},
        {selector: '#footer', url: '/design-002/hpg/gnb/tpl.footer.html'},
    ],
    implements: [
        '/design-002/libs/webapp/hbF.popup.js'
    ],
    scripts: [
        '/design-002/hpg/gnb/gnb.js',
        'list/topBanner.js',
        'list/lastItems.js',
    ]
});
