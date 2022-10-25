waf.voBind('top_banner', vo=> {
    initHandle(); // 초기화
    bindEvent(); // 이벤트 바인딩

    function initHandle() {
        vo.headline.removeClass('placeholder');
        vo.btnExample.removeClass(['placeholder', 'disabled']);
    }
    function bindEvent() {
        vo.btnExample.event('click', evt=> {
            waf.debug.log('-btnExample-', vo.getText());
        });
    }
});

waf.voBind('last_items', vo=> {
    initHandle(); // 초기화
    bindEvent(); // 이벤트 바인딩

    function initHandle() {
        // vo.itemList.appendItem('notFound');
        [
            {
                prdName: '캔콜라 500ml 박스',
                prdInfo: '캔콜라 500ml캔 * 30개',
                prdInfo: '10,000원',
            }, {
                prdName: '사이다 500ml 박스',
                prdInfo: '사이다 500ml캔 * 30개',
                prdInfo: '20,000원',
            }
        ].forEach(each=> _appendItemList(each));

        function _appendItemList(data) {
            vo.itemList.appendItem('item', voItem=> {
                voItem.setText(data);
                voItem.btnBuy.event('click', evt=> {
                    // waf.debug.log('--구매--', data);
                    vo.itemList.empty();
                });
            });
        }
    }
    function bindEvent() {
    }
});