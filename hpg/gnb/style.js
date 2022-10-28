hbF.addEventListener('loading', _=> {
    const {debug} = hbF;

    // 네비게이션바 그림자 처리
    debug.log('네비게이션바 그림자 처리');
    const navbar = document.querySelector('#navbar');
    const navbarSpy = _=> {
        const {documentElement: {scrollTop}} = document;

        if (scrollTop) navbar.classList.add('shadow');
        else {
            navbar.classList.remove('shadow');
        }
    };
    window.addEventListener('scroll', navbarSpy), navbarSpy();
});
