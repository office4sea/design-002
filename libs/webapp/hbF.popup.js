/**
 * 팝업 바인더
 */
hbF.bindProperty('popup', hbF.invoke(_=> {
    const openPopups = [];
    const getBindHelper = vo=> {
        const status = {isOpen: false};
        const trigger = {resolve: undefined, reject: undefined};
        const cloneObject = vl=> {
            if(Array.isArray(vl)) return vl.slice(0);
            if(typeof vl == 'object') return Object.assign({}, vl);
            return vl;
        };
        const openPopup = {
            get() {return openPopup._getter},
            _getter(arg) {
                const _openVisible = _=> {
                    // 팝업 노출
                    Object.assign(vo.el.addClass('d-block'), {tabIndex: 0});
                    requestAnimationFrame(_=> vo.el.addClass('show').focus());
                    // 오픈된 팝업 관리
                    openPopups.forEach(each=> requestAnimationFrame(_=> each.el.removeClass('show')));
                    openPopups.unshift(vo);
                };
                const _openAction = (resolve, reject)=> {
                    if(status.isOpen) return hbF.debug.error(`popup(${vo.id}) is opened`), reject(`popup(${vo.id}) is opened`);
                    else {
                        status.isOpen = true;
                    }

                    // 팝업 노출 처리
                    _openVisible();
                    // 종료 트리거 저장
                    Object.assign(trigger, {resolve, reject});
                    // 오픈 이벤트 후킹
                    const {open} = vo.getEvents();
                    open && open(cloneObject(arg))
                }

                return new Promise(_openAction);
            }
        };
        const closePopup = {
            get() {
                if(!status.isOpen) throw `popup(${vo.id}) is not opened`;
                else {
                    status.isOpen = false;
                }

                const _closeVisible = _=> {
                    // 현재 팝업 숨김
                    openPopups.shift().el.removeClass(['show', 'd-block']);

                    // 이전 팝업 노출
                    const [prevPopup] = openPopups;
                    // 포커스 원위치로
                    if(!prevPopup) returnFocus.focus();
                    else {
                        prevPopup.el.addClass('show');
                        if(!returnFocus.focus()) {
                            prevPopup.el.focus();
                        }
                    }
                };

                _closeVisible();
                const resolve = result=> trigger.resolve(cloneObject(result));
                const reject = result=> trigger.reject(cloneObject(result));
                return {resolve, reject};
            },
        };
        const returnFocus = {
            focusTarget: undefined,
            get() {return returnFocus._getter},
            _getter(focusTarget) {
                returnFocus.focusTarget = returnFocus._getTarget(focusTarget);
                return vo;
            },
            _getTarget(focusTarget) {
                if(!focusTarget) return;

                if(focusTarget instanceof Event) {
                    const {target, currentTarget} = focusTarget;
                    return currentTarget || target;
                } else if(typeof focusTarget == 'string') {
                    return document.querySelector(focusTarget);
                }

                return focusTarget;
            },
            focus() {
                const {focusTarget} = returnFocus;
                if(!focusTarget) return;

                focusTarget.focus();
                return Object.assign(returnFocus, {focusTarget:undefined});
                // const {focusTarget} = returnFocus;
                // if(!focusTarget) return;

                // if(focusTarget instanceof Event) {
                //     const {target, currentTarget} = focusTarget;
                //     (currentTarget || target)?.focus();
                //     return Object.assign(returnFocus, {focusTarget:undefined});
                // }
                // if(typeof focusTarget == 'string') {
                //     const target = document.querySelector(focusTarget);
                //     target?.focus();
                //     return Object.assign(returnFocus, {focusTarget:undefined});
                // }

                // focusTarget.focus();
                // return Object.assign(returnFocus, {focusTarget:undefined});
            }
        };

        return {
            /**팝업 오픈/종료 트리거 */
            trigger,
            openPopup, closePopup, returnFocus
        };
    };

    const popup = (id, onPopupBinder)=> {
        if(!onPopupBinder) return hbF.debug.error(`popup(${id}): invalid onPopupBinder`);
        
        hbF.binder(id, vo=> {
            const helper = getBindHelper(vo);

            // 리턴포커스 설정
            vo.bindProperty('returnFocus', helper.returnFocus);
            // 팝업오픈
            vo.bindProperty('openPopup', helper.openPopup);
            // 팝업종료
            vo.bindProperty('closePopup', helper.closePopup);

            // 팝업 바인딩 객체 저장
            Object.defineProperty(popup, id, {
                get() { return vo }
            });
            // 팝업 콜백 호출
            onPopupBinder(vo);
        });
    };
    // 팝업 바인딩 객체 반환
    popup.getBindObject = hbF.binder.getBindObject;
    return {
        get() {return popup}
    };
}));


/**
 * 공통 팝업 세팅(페이지 로딩 완료)
 */
hbF.addEventListener('ready', _=> {
    const makePopupElement = attribute=> {
        const div = document.createElement('div');
        const [first] = document.body.children;
        return Object.assign(first.appendChild(div), attribute);
    };
    const appendAlertHtml = _=> {
        makePopupElement({
            id: 'alert',
            outerHTML: `
            <div id="alert" class="modal fade bg-black bg-opacity-50" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 data-vo="title" class="modal-title fs-5">알림</h1>
                        </div>
                        <div data-vo="message" class="modal-body">내용</div>
                        <div class="modal-footer">
                            <button data-vo="ok" type="button" class="btn btn-primary">확인</button>
                        </div>
                    </div>
                </div>
            </div>`
        });
    };
    const bindAlertPopup = _=> {
        hbF.popup('alert', vo=> {
            const initHandle = _=> hbF.debug.sys('alert::초기화');
            const bindEvent = _=> {
                // 확인 클릭
                vo.ok.event('click', evt=> vo.closePopup.resolve());
            };

            // 핸들러 초기화
            initHandle();
            // 이벤트 바인딩
            bindEvent();
            // 팝업오픈 이벤트 처리
            vo.addEvent('open', param=> {
                vo.setHtml((typeof param == 'string') ? {message: param} : param);
            });
        });
    }
    const appendConfirmHtml = _=> {
        makePopupElement({
            id: 'confirm',
            outerHTML: `
            <div id="confirm" class="modal fade bg-black bg-opacity-50" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 data-vo="title" class="modal-title fs-5">알림</h1>
                        </div>
                        <div data-vo="message" class="modal-body">내용</div>
                        <div class="modal-footer">
                            <button data-vo="ok" type="button" class="btn btn-primary">확인</button>
                            <button data-vo="cancel" type="button" class="btn btn-secondary">취소</button>
                        </div>
                    </div>
                </div>
            </div>`
        });
    };
    const bindConfirmPopup = _=> {
        hbF.popup('confirm', vo=> {
            const initHandle = _=> hbF.debug.sys('confirm::초기화');
            const bindEvent = _=> {
                // 확인 클릭
                vo.ok.event('click', evt=> vo.closePopup.resolve(true));
                // 취소 클릭
                vo.cancel.event('click', evt=> vo.closePopup.resolve(false));
            };

            // 핸들러 초기화
            initHandle();
            // 이벤트 바인딩
            bindEvent();
            // 팝업오픈 이벤트
            vo.addEvent('open', param=> {
                vo.setHtml((typeof param == 'string') ? {message: param} : param);
            });
        });
    };

    // 컨펌 팝업
    appendConfirmHtml(), bindConfirmPopup();
    // 알럿 팝업
    appendAlertHtml(), bindAlertPopup();
});
