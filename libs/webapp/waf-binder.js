(voBind=> Object.assign(waf, {voBind}))
((id, onBind)=> {
    const {debug, voBind} = waf;

    const voMap = {}; // vo 핸들 모음
    const getVoMapData = (prop, targets)=> Object.keys(voMap)
        .reduce((result, ky)=> {
            if(!targets || targets.has(ky)) {
                result[ky] = voMap[ky][prop];
            }
            return result;
        }, {});
    const setVoMapData = (prop, arg)=> arg && Object.entries(arg)
        .forEach(([ky, vl])=> {
            if(voMap[ky]) {
                voMap[ky][prop] = vl;
            }
        });
    const voResult = {
        getText(arg) {
            return getVoMapData('text', arg && new Set(arg));
        },
        setText(arg) {
            return setVoMapData('text', arg), this;
        },
        getHtml(arg) {
            return getVoMapData('html', arg && new Set(arg));
        },
        setHtml(arg) {
            return setVoMapData('html', arg), this;
        },
        getValue(arg) {
            return getVoMapData('value', arg && new Set(arg));
        },
        setValue(arg) {
            return setVoMapData('value', arg), this;
        },
    };
    if(!id) return debug.error('invalid config: id is require');

    if(voBind.hasOwnProperty(id)) return debug.error(`duplicate voBind(${id})`);
    Object.defineProperty(voBind, id, {get() {return voResult}});

    const el = document.getElementById(id);
    if(!el) return debug.error(`not defined element(${id})`);
    Object.defineProperty(voResult, 'el', {get() {return el}});

    //
    // ===== vo 객체 수집 =====
    const setVoElementProperty = el=> {
        [{
            ky: 'text',
            get: _=> el.textContent,
            set: textContent=> Object.assign(el, {textContent})
        }, {
            ky: 'html',
            get: _=> el.innerHTML,
            set: innerHTML=> Object.assign(el, {innerHTML})
        }].forEach(({ky, get, set})=> Object.defineProperty(el, ky, {get, set}));
    };
    const addVoElementMethod = el=> {
        // 이벤트 리스너
        el.event = (type, listener)=> el.addEventListener(type, listener);
        // 어트리뷰트 게터/세터
        el.attr = (ky, vl)=> {
            if(ky) {
                return vl ? el.setAttribute(ky, vl) : el.getAttribute(ky);
            }
        };
        // 클래스 추가
        el.addClass = vl=> {
            (Array.isArray(vl) ? vl : [vl]).forEach(v=> el.classList.add(v));
            return el;
        };
        // 클래스 삭제
        el.removeClass = vl=> {
            (Array.isArray(vl) ? vl : [vl]).forEach(v=> el.classList.remove(v));
            return el;
        };
        // 클래스 검색
        el.hasClass = vl=> el.classList.contains(vl);
    };

    // vo 객체 수집 및 처리
    [...el.querySelectorAll('[data-vo]')]
        .forEach(el=> {
            const {dataset:{vo}} = el;
            // vo 게터 설정
            if(voResult.hasOwnProperty(vo)) return debug.info(`voBind(${id}) duplicate vo(${vo})`);
            Object.defineProperty(voResult, vo, {get() {return el}});

            // 엘리먼트 객체 프로퍼티 설정
            setVoElementProperty(el);
            // 엘리먼트 객체 기능 추가
            addVoElementMethod(el);

            // addItem
            // ===== 엘리먼트 아이템 수집 =====
            el.querySelectorAll('[data-vo-item]')

            // voMap 엘리먼트 저장
            voMap[vo] = el;
        });

    onBind && onBind(voResult);
    return voResult;
});
