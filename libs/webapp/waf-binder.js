(voBind=> {
    Object.assign(waf, {voBind});
})((config, onBind)=> {
    const {debug, voBind} = waf;
    const {id} = config;

    const voMap = {}; // vo 핸들 모음
    const voResult = {
        getText(arg) {
            const targets = arg && new Set(arg);
            return Object.keys(voMap).reduce((result, ky)=> {
                if(!targets || targets.has(ky)) {
                    result[ky] = voMap[ky].text;
                }
                return result;
            }, {});
        },
        setText(arg) {
            if(!arg) return this;

            Object.entries(arg).forEach(([ky, vl])=> {
                if(voMap[ky]) {
                    voMap[ky].text = vl;
                }
            });
            return this;
        },
    };
    if(!id) return debug.error('invalid config: id is require');

    if(voBind.hasOwnProperty(id)) return debug.error(`duplicate voBind(${id})`);
    Object.defineProperty(voBind, id, {get() {return voResult}});

    const el = document.getElementById(id);
    if(!el) return debug.error(`not defined element(${id})`);
    Object.defineProperty(voResult, 'el', {get() {return el}});

    // vo 객체 수집 및 처리
    [...el.querySelectorAll('[data-vo]')]
        .forEach(el=> {
            const {dataset:{vo}} = el;
            if(voResult.hasOwnProperty(vo)) return debug.info(`voBind(${id}) duplicate vo(${vo})`);

            // vo 게터 설정
            Object.defineProperty(voResult, vo, {get() {return el}});
            // text
            Object.defineProperty(el, 'text', {
                get() { return el.textContent },
                set(textContent) { Object.assign(el, {textContent}) }
            });
            // addItem
            // 이벤트 리스너
            el.event = (type, listener)=> el.addEventListener(type, listener);
            // vo 해들 저장
            voMap[vo] = el;
        });

    onBind && onBind(voResult);
    return voResult;
});

    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
    // waf.requireScript('/design-002/hpg/store/list/cart.js')
    //     .then(_=> {
    //         console.log('--x--', _, xxx);
    //     })

    // setTimeout(_=> {
    //     // 상단 베너
    //     waf.fetchHtml('/design-002/hpg/store/list/tpl.top-banner.html')
    //         .then(innerHTML=> utils.query('#top-banner', {innerHTML}))
    //         // 배너 애니메이션
    //         .then(el=> new bootstrap.Carousel(el).cycle());
    // }, 1000);
