//
// 네비게이션 바
hbF.binder('navbar', vo=> {
    const getLocationParam = _=> {
        if(!location.search) return {};

        const json = '{"' + location.search.replace(/\??/, '')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') + '"}';
        hbF.debug.log('navbar::파라미터:', json);
        return JSON.parse(json);
    };
    const initHandle = _=> {
        const {word=''} = getLocationParam();
        vo.word.value = word;
    };
    const bindEvent = _=> {
        // 검색하기
        vo.search.event('click', evt=> {
            evt.preventDefault();

            hbF.debug.log('검색단어::', vo.word.value);
            if(!vo.word.value) return hbF.popup.getBindObject('alert')
                .returnFocus(evt)
                .openPopup('검색 할 단어를 입력 하세요.')
                .then(_=> vo.word.focus());

            const {pathname, search} = location;
            if(/word=/.test(search)) {
                location.href = pathname + search.replace(/(word=)(.*[^&]?)/, `$1${vo.word.value}`);
            } else {
                location.href = pathname + `?word=${vo.word.value}`;
            }
        });
    };

    // 핸들 초기화
    initHandle();
    // 이벤트 바인딩
    bindEvent();
});
