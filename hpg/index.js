waf({
    htmls: [
        {selector: '#navbar', url: '/hpg/gnb/tpl.navbar.html'},
        {selector: '#footer', url: '/hpg/gnb/tpl.footer.html'},
        {selector: '#ai-store', url: '/hpg/store/index.md'},
    ]
})
.addEventListener('pageLoad', _=> {
    console.log('--pageLoad--');
})