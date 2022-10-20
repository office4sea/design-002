waf({
    htmls: [
        {selector: '#navbar', url: '/design-002/hpg/gnb/tpl.navbar.html'},
        {selector: '#footer', url: '/design-002/hpg/gnb/tpl.footer.html'},
    ]
});

waf.addEventListener('pageLoad', _=> {
    const {utils} = waf;

    setTimeout(_=> {
        // 상단 베너
        waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
            .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
            // 배너 애니메이션
            .then(el=> new bootstrap.Carousel(el).cycle());
    }, 1000);
});

waf.addEventListener('pageHolder', _=> {
    const {utils} = waf;

    // 상단베너
    utils.query('#top-banner', {
        innerHTML: `
        <div class="carousel-inner">
            <div class="carousel-item active">
                <svg class="d-block w-100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                <div class="container">
                    <div class="carousel-caption text-start">
                        <h1 class="placeholder">Example headline.</h1>
                        <p><button class="btn btn-lg btn-primary disabled placeholder col-3"></button></p>
                    </div>
                </div>
            </div>
        </div>
        `
    });

    const htmlCards = cnt=> {
        const result = [];
        while(result.length < cnt) {
            result.push(`<div class="col">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-4">
                            <svg class="border-0 img-thumbnail h-100 w-100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>No Image</title>
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                            </svg>
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title"><small class="placeholder">캔콜라 500ml 박스</small></h5>
                                <p class="card-text">
                                    <small class="text-muted placeholder">캔콜라 500ml캔 * 30개</small>
                                    <span class="placeholder">판매가: 10,000원</span>
                                </p>
                                <p class="card-text">
                                    <button type="button" class="btn btn-outline-primary placeholder">구매하기</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
        }
        return result.join('');
    };
    // 최근 구매 상품
    utils.query('#last-items', {
        innerHTML: `
        <h2 class="pb-2 border-bottom placeholder">최근 구매 상품</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">${htmlCards(3)}</div>
        `
    });
    // 카테고리 상품
    utils.query('#category-items', {
        innerHTML: `
        <h2 class="pb-2 border-bottom placeholder">카테고리 상품</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">${htmlCards(4)}</div>
        `
    });
});