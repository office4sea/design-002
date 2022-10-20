waf.addEventListener('pageHolder', _=> {
    const {utils} = waf;

    // 네비게이션바
    const navbar = utils.query('#navbar', {
        innerHTML: `
        <div class="container-fluid container-lg">
            <a class="navbar-brand">
                <img src="/img/logo.svg" alt="금강상사" class="d-inline-block align-text-top" style="width:30px; height:24px;">
                금강상사
            </a>
            <button class="navbar-toggler placeholder" type="button" disabled>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body flex-row-reverse">
                    <ul class="navbar-nav">
                        <li class="nav-item me-3"><a class="nav-link placeholder" style="width:80px;">&nbsp;</a></li>
                        <li class="nav-item me-3"><a class="nav-link placeholder" style="width:80px;">&nbsp;</a></li>
                        <li class="nav-item me-3"><a class="nav-link placeholder" style="width:80px;">&nbsp;</a></li>
                        <li class="nav-item me-3"><a class="nav-link placeholder" style="width:80px;">&nbsp;</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `
    });

    // 네비게이션바 그림자 처리
    const navbarSpy = _=> {
        const {documentElement: {scrollTop}} = document;
    
        if (scrollTop) navbar.classList.add('shadow');
        else {
            navbar.classList.remove('shadow');
        }
    };
    window.addEventListener('scroll', navbarSpy), navbarSpy();

    // 푸터
    utils.query('#footer', {
        innerHTML: `
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted placeholder me-3">회사소개</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted placeholder me-3">이용약관</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted placeholder me-3">개인정보처리방침</a></li>
            </ul>
            <p class="text-center text-muted">
              <span class="placeholder">© 2022 Company, Inc</span>
            </p>
        </footer>
        `
    });
});
