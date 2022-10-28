hbF.binder('lastItems', vo=> {
    const datas = [{
        prdName: '캔콜라 500ml 박스',
        prdInfo: '캔콜라 500ml캔 * 30개',
        prdInfo: '10,000원',
    }, {
        prdName: '사이다 500ml 박스',
        prdInfo: '사이다 500ml캔 * 30개',
        prdInfo: '20,000원',
    }];
    
    initHandle();
    bindEvent();

    /**초기화 */
    function initHandle() {
        hbF.debug.log('lastItems initHandle');
        vo.title.removeClass('placeholder');
        hbF.debug.log('-x-', vo, vo.getHandles());

        // 데이터 출력
        datas.forEach(each=> appendItemList(each));
    }
    /**이벤트 설정 */
    function bindEvent() {
        hbF.debug.log('lastItems bindEvent');
    }

    function appendItemList(data) {
        vo.itemList.appendItem('item', voItem=> {
            voItem.setText(data);
            voItem.btnBuy.event('click', evt=> {
                hbF.debug.log('--구매--', data);
            });
        });
    }
});
