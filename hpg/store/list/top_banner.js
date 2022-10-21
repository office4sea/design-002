waf.voBind({
    id: 'top_banner',
}, vo=> {
    waf.debug.log('-vo-', vo);
    initValue(), bindEvent();
    // vo.el;
    // vo.getText();
    // vo.getHtml();
    // vo.getValue();
    // vo.getProp();
    // vo.getAttr();

    // vo.btnEx.event('click', _=> {
    // });

    function initValue() {
        waf.debug.log('-el-', vo.el);
        vo.setText({
            headline: '1234',
            btnExample: '1122'
        });
    }
    function bindEvent() {
        vo.btnExample.event('click', evt=> {
            vo.headline.text = '112233';
            waf.debug.log('-btnExample-', vo.getText(), vo.getText(['btnExample']));
        });
    }
});
