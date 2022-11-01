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
        hbF.debug.log('lastItems 핸들 초기화');
        // 데이터 출력
        datas.forEach(each=> appendItemList(each));
    }
    /**이벤트 설정 */
    function bindEvent() {
        hbF.debug.log('lastItems 이벤트 바이딩');
    }

    function appendItemList(data) {
        vo.itemList.appendItem('item', voItem=> {
            voItem.setText(data);
            voItem.btnBuy.event('click', evt=> {
                hbF.debug.log('--구매--', data);

                const topBanner = hbF.binder.getBindObject('topBanner');
                hbF.debug.log('topBanner text', topBanner.getText());
            });
        });
    }
});
