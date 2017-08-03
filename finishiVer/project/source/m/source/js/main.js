(function ($) {
    'use strice';
    $.fn.extend({
        popupWindow: function (instanceSettings) {

            return this.each(function () {

                $(this).click(function () {


                    $.fn.popupWindow.defaultSettings = {

                        centerBrowser: 0, // center window over browser window? {1 (YES) or 0 (NO)}. overrides top and left //브라우저 정중앙 1:true , 0:false;
                        centerScreen: 0, // center window over entire screen? {1 (YES) or 0 (NO)}. overrides top and left  //화면 정중앙 1:true , 0:false;
                        height: 500, // 팝업 기본 height값
                        left: 0, // 팝업 기본 left값
                        location: 0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
                        menubar: 0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
                        resizable: 0, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
                        scrollbars: 0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
                        status: 0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
                        width: 500, // sets the width in pixels of the window.
                        windowName: null, // name of window set from the name attribute of the element that invokes the click
                        windowURL: null, // url used for the popup
                        top: 0, // top position when the window appears.
                        toolbar: 0 // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
                    };

                    settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});

                    var windowFeatures = 'height=' + settings.height +
                            ',width=' + settings.width +
                            ',toolbar=' + settings.toolbar +
                            ',scrollbars=' + settings.scrollbars +
                            ',status=' + settings.status +
                            ',resizable=' + settings.resizable +
                            ',location=' + settings.location +
                            ',menuBar=' + settings.menubar;

                    settings.windowName = this.name || settings.windowName;
                    settings.windowURL = this.href || settings.windowURL;
                    var centeredY, centeredX;

                    if (settings.centerBrowser) {

                        if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (navigator.userAgent.indexOf("msie") != -1)) { //IE브라우저 탐색
                            centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120) / 2) - (settings.height / 2)));
                            centeredX = window.screenLeft + ((((document.body.offsetWidth + 20) / 2) - (settings.width / 2)));
                        } else {
                            centeredY = window.screenY + (((window.outerHeight / 2) - (settings.height / 2)));
                            centeredX = window.screenX + (((window.outerWidth / 2) - (settings.width / 2)));
                        }
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus();
                    } else if (settings.centerScreen) {
                        centeredY = (screen.height - settings.height) / 2;
                        centeredX = (screen.width - settings.width) / 2;
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus();
                    } else {
                        window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + settings.left + ',top=' + settings.top).focus();
                    }
                    return false;
                });

            });
        },
        flowtype: function (options) {

            $.fn.flowtype.default = {
                maximum: 9999,
                minimum: 1,
                maxFont: 9999,
                minFont: 1,
                fontRatio: 35
            }

            options = $.extend({}, $.fn.flowtype.default, options);

            var changes = function (el) {
                var $el = $(el),
                        elw = $el.width(),
                        width = elw > options.maximum ? options.maximum : elw < options.minimum ? options.minimum : elw,
                        fontBase = width / options.fontRatio,
                        fontSize = fontBase > options.maxFont ? options.maxFont : fontBase < options.minFont ? options.minFont : fontBase;
                $el.css('font-size', fontSize + 'px');
            };

            return this.each(function () {
                var that = this; //resize를 위한 that
                $(window).resize(function () {
                    changes(that);
                });
                changes(this);
            });
        },
        tab: function (option) { // 탭버튼으로 on/off제어
            option = $.extend({}, $.fn.tab.option, option);

            var navB = $(this).find(option.navB);
            var contents = option.contents;
            var events = option.events || 'click';
            var activeClass = option.activeClass || 'on';
            var idx = option.idx

            function init() {
                navB.off(events, tabOn).on(events, tabOn);
            }

            function tabOn(e, idx) {
                var idx = $(this).parent().index();
                navB.removeClass(activeClass);
                navB.eq(idx).addClass(activeClass);
                contents.removeClass(activeClass);
                contents.eq(idx).addClass(activeClass);
                e.preventDefault();
            }

            this.actived = function (idx) {
                navB.eq(idx).addClass(activeClass);
                contents.eq(idx).addClass(activeClass);
            }

            init();
            return this.each(function () {});  //각 인덱스 return값
        },
        btnClicked: function ($container, option) {
            option = $.extend({}, $.fn.btnClicked.option, option);
            var activeBtnImg = $(this);
            var events = option.events || 'click';
            var activeClass = option.activeClass || 'on';
            var imgs = option.imgs || false;

            function init() {
                activeBtnImg.off(events, buttonOn).on(events, buttonOn)
            }

            //동작부분
            function buttonOn(e) {
                if (!$(this).hasClass(activeClass)) {
                    $(this).addClass(activeClass)
                } else {
                    $(this).removeClass(activeClass)
                }


                //이미지 제어부분
                if (imgs) {
                    $(this).hasClass(activeClass)
                            ?
                            $(this).find('img').attr({
                        src: $(this).find('img').attr('src').replace('_off', '_on')
                    })
                            :
                            $(this).removeClass(activeClass).find('img').attr({
                        src: $(this).find('img').attr('src').replace('_on', '_off')
                    })
                }
                e.preventDefault();
            }

            init();
        },
        btnClickActive: function (option) {
            option = $.extend({}, $.fn.btnClickActive.option, option);
            var activeBtn = $(this);
            var events = option.events || 'click';
            var activeClass = option.activeClass || 'on';
            var imgs = option.imgs || false;

            function init() {
                activeBtn.off(events, buttonOn).on(events, buttonOn);
            }

            function buttonOn(e, idx) {
                var idx = $(this).index();

                activeBtn.removeClass(activeClass);
                $(this).addClass(activeClass);

                if (imgs) {
                    activeBtn.find('img').attr({
                        src: activeBtn.find('img').attr('src').replace('_on', '_off')
                    })
                    activeBtn.eq(idx).find('img').attr({
                        src: activeBtn.eq(idx).find('img').attr('src').replace('_off', '_on')
                    })
                }

                e.preventDefault();
            }

            this.actived = function (idx) {
                activeBtn.eq(idx).addClass(activeClass);
                if (imgs) {
                    activeBtn.eq(idx).find('img').attr({
                        src: activeBtn.eq(idx).find('img').attr('src').replace('_off', '_on')
                    })
                }
            }


            init();
            return this.each(function () {});
        },
        activeBtns: function (option) { //이미지 replace on/off제어
            option = $.extend({}, $.fn.activeBtns.option, option);
            var activeBt = $(this);
            var events = option.events || 'mouseenter'

            function init() {
                activeBt.off(events, countAct).on(events, countAct)
            }

            function countAct(e) {
                $(this).on('mouseleave', function () {
                    $(this).find('img').attr({
                        src: $(this).find('img').attr('src').replace('_on', '_off')
                    })
                })
                $(this).find('img').attr({
                    src: $(this).find('img').attr('src').replace('_off', '_on')
                })

                e.preventDefault();
            }

            init();
        },
        modal: function (option) {
            return this.each(function () {
                option = $.extend({}, $.fn.modal.option, option);
                var that = this; //최상위 this값 참조
                var element = $(that);  //레이어팝업을 여는 버튼들 이값들은  아래 each로 각자 자신의 this값을 리턴
                var dimmed = option.dimmed || "dimmed"; //딤드처리하는 클래스명 옵션에서 정해지지않으면 디폴트값오른쪽
                var closedBtn = option.closedBtn || ".btn-return, .btn-close, .btn-cancel, .btn.ok"; //레이어팝업 닫기버튼 옵션에서 정해지지않으면 디폴트값오른쪽
                var layerInner = option.layerInner || ".layer-inner";  // 여기 자식들의 합의 크기로 wrapper의 height fix
                var resizeOn = option.resizeOn; //모바일에서 사용안할시에 리사이즈 할필요없음
                var wrapper = option.wrapper || "wrap"; //height fix하여 스크롤생성시키는 wrapper
                var layerCon = option.layerCon || "noInner" //
                var heightMinus = option.heightMinus || 0; //layerInner의 위아래 패딩 위아래 마진값
                var revers = option.revers || false;
                var mobile = option.mobile;  //mobile인지 아닌지 판단.
                var video = true;
                var target = element.data('target') || element.attr('href'); // 버튼의 data값이나 a태그의 href의 값을
                target = $(target); //다시 레이어팝업의 식별자로 집어넣는다.

                if (!target.length)
                    return; //타겟이 없으면 함수종료

                var childrens = $(layerInner).children(); // layerInner와 타겟의 자식들
                var closebtn = $(closedBtn); //닫는버튼들
                var $document = $('html, body'); // 모바일을 위한 변수
                var $window = $(window);
                var $dimd = $('<div></div>', {'addClass': dimmed}); //딤드처리할 변수
                var totalHeight = 0;


                //기본 함수 실행
                var _init = function () {
                    element.on("click", that.open);
                    if (revers === true) {
                        target.find('>div').not(layerInner).on("click", that.close);
                        closebtn.on("click", that.close);
                    } else {
                        closebtn.on("click", that.close);
                    }
                };

                //레이어팝업 resizeOn이 true일때 리사이즈
                this.resize = function (isFirst) {
                    var wrapHeight = 0;
                    var $el; //디스값 초기화
                    if (isFirst == true) { //인자값이 true이면
                        totalHeight = 0;
                        $.each(childrens, function () { //layerInner의 자손들은
                            $el = $(this); //각자의 class가 layerCon에 해당되지않으면 그 height값은
                            if (!$el.hasClass(layerCon)) {
                                totalHeight += Math.max(this.offsetHeight, $el.height()); //layerCon에 해당하지않는 자식은 자기의 offsetHeight(border,padding,margin등모든값)랑 비교하여 더 큰값이 totalheight더해지게 된다.
                            }
                        });
                    }

                    wrapHeight = $(window).height() - totalHeight - heightMinus;     //최종 리사이즈값은 윈도우헤이트에서 noInner가 아닌값빼기  layerInner의 마진탑바텀,패딩탑바텀값 빼기로 변수에담아두고
                    $('.' + wrapper).height(wrapHeight); // 최종적으로 wrapper는 이값으로 정해진다.
                };

                //레이어팝업 열릴때 실행
                this.open = function () {
                    var progress = option.progress; //프로그레스바를 쓸지 안쓸지 판단.
                    if (mobile == true) {
                        $document.css({'height': "100%", 'overflow': "hidden"});
                    } // 모바일이 true면 body,html을 height:100%로
                    target.append($dimd); //딤드처리를한다.
                    target.addClass('on') //target에서 후처리를 할경우 이 on클래스로 한다.
                    target.show(); //target값을 보여준다.

                    if (mobile && resizeOn) { //resizeOn이 true이면 리사이즈 실행(선행으로 mobile이 true상태여야함 )
                        $window.on('resize.Modal', that.resize);
                        that.resize(true)
                    }
                    ;



                    // 매거진 progress바
                    if (progress == true) { //progress가 true이면 디폴트값은 false임
                        var wrapperH = target.height() //target의 height
                        var layerPops = target.find('.' + wrapper + '>div') //wrapper의 자식들
                        var lengths = layerPops.length;   //wrapper의 자식들의 값
                        var conH = 0;

                        for (var i = 0; i < lengths; i++) {
                            conH += layerPops.eq(i).height() //wrapper의 자식들을 순회하여 conH에 값을담는다.
                        }


                        target.find('.' + wrapper).scroll(function () { //target의 wrapper를 스크롤할때
                            var progressB = -1 * ($(this).children().offset().top / (conH - wrapperH)) //wrapper의 값에서 현재 레이어팝업의 높이값을 뺀값을 오프셋탑값으로 나누고 음수를 양수로 바꾼다. Math.abs를 쓸경우 다 양수로 변해서 음수로 넘어가는 값을 받기위해 쓰지않는다.
                            var getprogressB = Math.round(progressB * 100) //그값은 100으로 곱하여 소숫점의 퍼센트값을 받고 math.round로 의미없는 소수점값은 버린다.
                            getprogressB <= 0 ? target.find('.progressBar').css({width: '0'}) : getprogressB > 100 ? target.find('.progressBar').css({width: '100%'}) : target.find('.progressBar').css({width: '' + getprogressB + '%'})
                            //0보다 작으면 프로그레스바는 무조건 0으로 멈추고 100보다 크면 프로그레스바는 무조건 100프로로 작다면 프로그레스바는 세팅된값으로 설정된다.
                        });
                    }
                };

                //레이어팝업 닫힐때 실행
                this.close = function () {
                    $dimd.remove(); //딤드삭제
                    $document.css({'height': "", 'overflow': ""}); //모바일설정시 초기화
                    target.removeClass('on') //target에서 후처리를 할경우 이 on클래스로 한다.
                    target.hide(); // 타겟을 사라지게한다.
                    if (mobile && resizeOn) {
                        $window.off('resize.Modal', that.resize);
                    }

                    target.find('iframe').attr('src', '')

                    return false;
                };

                // 초기 로딩후 실행.
                _init();
            });
        },
        gnbScroll: function (option) {
            option = $.extend({}, $.fn.gnbScroll.option, option);
            var that = this;
            var active = option.active || 'active';
            var gnb = option.gnb || $(this);
            var headerH = option.headerH || gnb.outerHeight(true);
            var half_height = ($(window).height() - headerH) / 2;
            var contents = option.contents || $('.wrap_contents');
            var contentsDiv = option.contentsDiv || $('.subOn');
            var resetMenu = gnb.find("li.on").removeClass('on');
            var nMenuCount = gnb.find('li').length;
            var con = [];

            if (!gnb)
                return;

            function init() {
                that.scrolls();
                that.buttons();
            }

            this.scrolls = function () {
                var thisTop = $(window).scrollTop();
                if (nMenuCount !== contentsDiv.length)
                    return console.log('gnb와 subOn숫자를 맞춰주세요');
                thisTop > headerH ? gnb.addClass(active) : gnb.removeClass(active);

                for (var i = 0; i < nMenuCount; i++) {
                    var half = i == 0 ? 0 : half = i == nMenuCount - 1 ? half_height : 0;
                    con[i] = contentsDiv.eq(i).offset().top - headerH;
                }

                for (var i = 0; i < nMenuCount; i++) {
                    if (thisTop >= con[i] && (i == nMenuCount - 1 || thisTop < con[i + 1])) {
                        gnb.find('li').eq(i).addClass("on").siblings().removeClass('on');
                    }
                }
            }

            this.buttons = function () {
                gnb.find('a').on('click', function (e) {
                    $('body, html').stop(true, false).animate({scrollTop: ($($(this).attr("href")).offset().top - (($(this).attr("href") == ($(this).attr("href") - headerH)) ? 0 : headerH))}, "slow");
                    e.preventDefault();
                });
            }

            init()
        },
        viewPort: function (option) {
            option = $.extend({}, $.fn.gnbScroll.option, option);
            var that = this;
            var active = option.active || 'active';

            var contents = option.contents || $('.wrap_contents');
            var contentsDiv = option.contentsDiv || $('.viewCheck');
            var viewHeight = contentsDiv.height();
            var nMenuCount = contentsDiv.length;
            var con = [];

            if (!contentsDiv)
                return;

            function init() {

                that.scrolls();
            }

            this.scrolls = function () {
                var thisTop = $(window).scrollTop();
                var wHeight = document.body.scrollHeight;
                var plusHeight = $('.bottomWrap').prev().outerHeight(true) * 2 - 250;


                //thisTop > 300 ? $('.bottomWrap').addClass('static') : $('.bottomWrap').removeClass('static') 
                if (thisTop + plusHeight > wHeight) {
                    TweenLite.to($('.bottomWrap'), 0.5, {top: '0',
                        ease: Sine.easeOut});
                } else {
                    TweenLite.to($('.bottomWrap'), 0.5, {top: '-100px',
                        ease: Sine.easeOut});
                }


                for (var i = 0; i < nMenuCount; i++) {
                    //var half = i == 0 ? 0 : half = i == nMenuCount - 1 ? $(window).height() - contentsDiv.eq(i).height() : 0;
                    con[i] = contentsDiv.eq(i).offset().top;
                }
                for (var i = 0; i < nMenuCount; i++) {
                    if (thisTop >= con[i] && (i == nMenuCount - 1 || thisTop < con[i + 1])) {
                        contentsDiv.eq(i).addClass("on").siblings().removeClass('on');
                        TweenLite.to($('.lines'), 0.5, {height: thisTop + 150 + 'px',
                            ease: Sine.easeOut});


                        contentsDiv.eq(i).filter('.on').each(function () {
                            var thisBgCount = Math.floor((thisTop - $(this).offset().top) / $(this).height() * 100);
                            var thisBgCount2 = Math.floor((thisTop - $(this).offset().top));
                            var thisBgCount3 = ($(this).height() + thisTop)
                            if ($(this).find('.actionWrap')) {
                                if ($(this).filter('.news')) {
                                    TweenLite.to($(this).filter('.news').find('.action1'), 0.3, {left: '0',
                                        ease: Expo.easeInOut});
                                    TweenLite.to($(this).filter('.news').find('.action2'), 0.3, {right: '0',
                                        ease: Expo.easeInOut});
                                }
                                if ($(this).filter('.stylepick')) {
                                    TweenLite.to($(this).filter('.stylepick').find('.action1'), 0.3, {top: '5px', left: '50px',
                                        ease: Elastic.easeInOut});
                                    TweenLite.to($(this).filter('.stylepick').find('.action2'), 0.3, {top: 0,
                                        ease: Elastic.easeInOut});
                                }
                                if ($(this).filter('.webzine')) {
                                    TweenLite.to($(this).filter('.webzine').find('.action'), 0.3, {right: '0',
                                        ease: Elastic.easeInOut});
                                }
                                if ($(this).filter('.brand')) {
                                    TweenLite.to($(this).filter('.brand').find('.ab'), 0.3, {left: '0',
                                        ease: Sine.easeInOut});
                                    TweenLite.to($(this).filter('.brand').find('.st img'), 0.3, {right: '0',
                                        ease: Sine.easeInOut});
                                }


                            }




                        })

                    }
                }
            }



            init()
        },
        placeholder: function () { //input플레이스홀더
            return this.each(function () {
                var $this = $(this);
                if (!!$this.val() || !!$this.attr('placeholder')) {

                    $this.siblings(".placeholder").hide();
                }

                function placeholderShow() {
                    $this.siblings(".placeholder").hide();
                }

                function placeholderClick() {
                    $this.siblings(".placeholder").hide();
                    $this.focus();
                }

                function placeholderHide() {
                    if (!$this.val() == "" || !!$this.attr('placeholder')) {
                        $this.siblings(".placeholder").hide();
                    } else {
                        $this.siblings(".placeholder").show();
                    }
                }

                $this
                        .on("focusin", placeholderShow)
                        .on("focusout", placeholderHide);

                $this.siblings(".placeholder")
                        .on("click", placeholderClick)
            });
        },
        inputMaxP: function (option) { //maxlength넘어가면 다음input으로 포커스 이동
            option = $.extend({}, $.fn.inputMaxP.option, option);
            var nextInput = option.nextInput || $('input.next');
            var noNext = option.noNext;
            var $this = this;
            $this.keyup(function () {
                var charLimit = $(this).attr("maxlength");
                if (this.value.length >= charLimit) {
                    noNext === true
                            ?
                            $(this).siblings().find(nextInput).focus()
                            :
                            $(this).siblings('input').focus()
                    return false;
                }
            })
        },
        WeekPlaner: function (option) {
            option = $.extend({}, $.fn.WeekPlaner.defaults, option);

            var year = new Date().getFullYear(),
                    month = new Date().getMonth() + 1,
                    day = new Date().getDate(),
                    _this = this;

            defaults = {
                currentYear: null,
                currentMonth: null,
                currentDay: null,
                currentEndDay: null
            }


            init = function () {
                var date = option.year + '' + _this.zerofilter(option.month) + '' + _this.zerofilter(option.day);
                // 날짜 설정.
                option.currentYear = option.year;
                option.currentMonth = option.month;
                option.currentDay = option.day;


                _this.makeWeekDate();


            }

            this.makeWeekDate = function () {
                var _this = this,
                        dayArr = [],
                        dataArr = [],
                        dayStrArr = [],
                        currentDate;

                dayArr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                dayStrArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                if ((option.currentYear % 4 == 0 && option.currentYear % 100 != 0) || option.currentYear % 400 == 0) {
                    dayArr[2] = 29;
                }
                ;

                for (var i = -1, y, m, strMonth; i < 2; i++) {
                    y = parseInt(option.currentYear);
                    m = parseInt(option.currentMonth) + i;
                    if (m == 0) {
                        y = y - 1;
                        m = 12;
                    } else if (m == 13) {
                        y = y + 1;
                        m = 1;
                    }
                    strMonth = _this.zerofilter(m);
                    for (var j = 1, strDay; j <= dayArr[m]; j++) {
                        strDay = _this.zerofilter(j);
                        currentDate = y + '' + strMonth + '' + strDay;
                        dataArr.push('<li class="calendar ' + dayStrArr[new Date(y + '-' + strMonth + '-' + strDay).getDay()] + '" data-date="' + currentDate + '">' + '<button>' + strDay + '</button>' + '</li>');

                    }
                    ;

                    console.log(currentDate)

                    $(this).append(dataArr)


                }
                ;
            }

            this.zerofilter = function (num) { //10이하숫자를 0으로 시작하게 만듬
                var su = parseInt(num);
                return su < 10 ? '0' + su : su + '';
            }


            init()
        },
        Calendars: function (option) {
            option = $.extend({}, $.fn.WeekPlaner.defaults, option);

            var year = new Date().getFullYear(),
                    month = new Date().getMonth() + 1,
                    day = new Date().getDate(),
                    _this = this;
            htmlYear = option.htmlYear || $('#headYear'),
                    htmlMonth = option.htmlMonth || $('#headMonth'),
                    calendar = option.calendar || 'calendar',
                    active = option.active || 'on'

            defaults = {
                currentYear: null,
                currentMonth: null,
                currentDay: null,
                currentEndDay: null
            }


            init = function () {
                var date = option.year + '' + _this.zerofilter(option.month) + '' + _this.zerofilter(option.day);
                // 날짜 설정.
                option.currentYear = option.year;
                option.currentMonth = option.month;
                option.currentDay = option.day;

                _this.makeWeekDate();
                _this.setTitle();

            }





            this.setTitle = function () {
                var date = option.year + '' + _this.zerofilter(option.month) + '' + _this.zerofilter(option.day);
                htmlYear.text(option.currentYear);
                htmlMonth.text(_this.zerofilter(option.currentMonth));
                $('[data-date=' + date + ']').addClass(active);
            }

            this.makeWeekDate = function () {
                var _this = this,
                        dayArr = [],
                        dataArr = [],
                        dayStrArr = [],
                        dataT = [],
                        currentDate;

                dayArr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                dayStrArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                if ((option.currentYear % 4 == 0 && option.currentYear % 100 != 0) || option.currentYear % 400 == 0) {
                    dayArr[2] = 29;
                }
                ;

                for (var i = 0, y, m, strMonth; i < 1; i++) {
                    y = parseInt(option.currentYear);
                    m = parseInt(option.currentMonth) + i;

                    if (m == 0) {
                        y = y - 1;
                        m = 12;
                    } else if (m == 13) {
                        y = y + 1;
                        m = 1;
                    }
                    strMonth = _this.zerofilter(m);
                    for (var j = 1, strDay; j <= dayArr[m]; j++) {
                        strDay = _this.zerofilter(j);
                        currentDate = y + '' + strMonth + '' + strDay;

                        dataArr.push('<li class="' + calendar + ' ' + dayStrArr[new Date(y + '-' + strMonth + '-' + strDay).getDay()] + '" data-date="' + currentDate + '">' + '<button>' + strDay + '</button>' + '</li>');

                    }

                    $(this).append(dataArr);

                }
                ;
            }

            this.zerofilter = function (num) { //10이하숫자를 0으로 시작하게 만듬
                var su = parseInt(num);
                return su < 10 ? '0' + su : su + '';
            }

            init()
        }
    })
    //extend end


    $.uiExe = {
        common: {
            init: function () {
                $('.openup').modal();
            }
        },
        main: {
            opt: {
                header: $('#header'),
                headerH: $('#header').height()
            },
            init: function () {
                this.mainSwipe();
                this.gnbButton();
                this.mainGall();
                this.newsSwipe();
                this.styleSwipe();
                this.collectionSwipe();
                var mainScroll = this.scrolls;
                this.sharedButton();
                this.styleProduct();
                mainScroll($(window), $('.top_btn'), $('body,html'));
            },
            scrolls: function (scrollTarget, target, topTarget) {
                if (!scrollTarget)
                    return console.log('스크롤 대상을 적어주세요');
                if (!target)
                    return console.log('애니메이션 타겟이없습니다');

                var scrolled;


                document.addEventListener("touchmove", function () {
                    scrolled = true;
                }, false);


                document.addEventListener("touchend", function () {
                    scrolled = false;
                    setTimeout(function () {
                        target.css({bottom: '-200px'});
                    }, 3000)
                }, false);


                scrollTarget.on('scroll', function () {
                    hasScrolled();
                });




                function hasScrolled() {
                    var st = scrollTarget.scrollTop();
                    var urls = $('#urlText').attr('data-url');


                    var header = $('#header').height();
                    if (scrolled = true && st > 200) {
                        anime({
                            targets: '.top_btn',
                            bottom: 30,
                            duration: 500,
                            easing: 'easeOutSine'
                        });
                    } else if (st < 200) {
                        anime({
                            targets: '.top_btn',
                            bottom: -200,
                            duration: 500,
                            easing: 'easeOutSine'
                        });
                    }

                    if (st >= header) {
//                        $('#header').addClass('fixed');
//                        $('.menu-button').addClass('fixed');
//                        $('#container').addClass('fixed');
                    } else {
                        setTimeout(function () {
//                            $('.menu-button').removeClass('fixed');
//                            $('#header').removeClass('fixed');
//                            $('#container').removeClass('fixed');
                        }, 500)

                    }
                }


                function buttonUp() {
                    target.on('click', function () {
                        topTarget.stop().animate({scrollTop: 0});
                    });
                }

                buttonUp();


            },
            dim: function (detail) {
                var dimmed = $('<div></div>', {'addClass': 'dimmed'});
                $('body,html,#wrap').addClass('modal');
                if (detail) {
                    $('#wrap').append(dimmed);
                }
            },
            closedPop: function (target) {
                target.removeClass('active');
                $('body,html,#wrap').removeClass('modal');
                $('.dimmed').remove();
            },
            closed: function (target, detail) {
                target.removeClass('animated active');
                $('body,html,#wrap').removeClass('modal');
                target.stop().animate({scrollTop: 0});


                if (detail) {
                    target.removeClass('active');
                }

            },
            sharedButton: function () {
                setTimeout(function () {
                    $('.banner_title_zone .dmt-snsToggle').on("click", function (e) {
                        e.preventDefault();
                        if ($(this).data("show") == "no") {
                            $(this).next().slideUp('fast');
                            $(this).data("show", "yes");
                        } else {
                            $(this).next().slideDown('fast');
                            $(this).data("show", "no");
                        }
                    });
                }, 500);
                
                /*

                var SnsShare = function (eles, options) {

                    $.extend(this, options);

                    $(eles).on('click', function (e) {
                        e.stopPropagation();
                        $(eles).next().slideToggle('fast');
                        var that = $(eles).next();
                        $('body,html').on('click', function (e) {
                            if (that.css('display') == 'block') {
                                if (!that.has(e.target).length) {
                                    that.slideUp('fast');
                                }
                            }
                        });
                    });

                };
                
                $.fn.SnsShare = function () {
                    return this.each(function () {
                        new SnsShare(this);
                    });
                };

                $('.banner_title_zone .dmt-snsToggle').SnsShare();
                
                */

            },
            styleProduct: function (saveUrl) {
                var dimmed = this.dim;
                var detail = this.detailAjaxSave;
                var closedPop = this.closedPop;
                $('.detail_modal li a').each(function () {
                    $(this).on('click', function (e) {
                        var frame = $(this).parent().attr('data-detail');
                        if (!frame)
                            return;
                        frameUrl = frame - 1;
                        $('.detailPop').addClass('active');
                        dimmed(true);
                        $('#urlText').attr('data-saveurl', '?layer=10:' + frame + '');
                        detail(frameUrl, $('.detailPop .productTop'));
                        e.preventDefault();
                    });
                });

                $('.detailPop .closeBtn').on('click', function (e) {
                    $('.popDefault .wrapping').scrollTop(0);
                    $('#urlText').removeAttr('data-saveurl');
                    closedPop($('.detailPop'));
                    e.preventDefault();
                });

            },
            detailPop: function (frame) {
                var dimmed = this.dim;
                var closedPop = this.closedPop;
                var detailAjax = this.detailAjaxSave;
                var scrolls = this.scrolls;

                scrolls($('.detailPop .wrapping'), $('.detailPop .top_btn'), $('.detailPop .wrapping'))
                $('.detailPop').addClass('active');
                dimmed(true);
                $('.detailPop').find('.closeBtn').on('click', function () {
                    closedPop($('.detailPop'));
                });
                detailAjax(frame - 1, $('.detailPop .productTop'));
                $('#urlText').attr('data-saveurl', '?layer=10:' + frame + '');

            },
            gnbButton: function () {
                var count = true;
                var dimmed = this.dim;
                var close = this.closed;
                $('.opened').on('click', function () {
                    if (count === true) {
                        dimmed();
                        $(this).addClass('cross');
                        $('#gnb').addClass('animated active');
                        count = false;
                    } else {
                        $(this).removeClass('cross');
                        close($('#gnb'));
                        count = true;
                    }
                });
            },
            mainGall: function () {
                var mainGall = new Swiper('.main-gall', {
                    nested: true,
                    slidesPerView: '1',
                    centeredSlides: true,
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                });
            },
            mainSwipe: function () {
                var mainContents = [];
                var videoAjaxSave = this.videoAjaxSave;
                var videoAjaxSave2 = this.videoAjaxSave2;

                mainSwiper = new Swiper('.main-swipe-wrap', {
                    slidesPerView: 'auto',
                    followFinger: true,
                    autoHeight: true,
                    calculateHeight: true,
                    touchAngle: (45), 
                    threshold: 70,
                    onInit: function (swiper) {
                        var index = swiper.activeIndex;
                        $(swiper.slides).each(function () {
                            mainContents.push($(this).height());
                        });
                        $(swiper.container).height($(swiper.slides).height());



                    },
                    onTransitionStart: function (swiper) {
                        var index = swiper.activeIndex;

                    },
                    onTransitionEnd: function (swiper) {
                        var swipeIndex = swiper.activeIndex;
                       
                            $('.banner_title_zone .dmt-snsToggle').next().slideUp('fast');
                            $('.banner_title_zone .dmt-snsToggle').data("show", "yes");
                      
                        setTimeout(function () {
                            $(swiper.container).height(mainContents[swipeIndex]);
                        }, 500)



                        setTimeout(function () {
                            switch (swipeIndex) {
                                case 1 :
                                    var dataUrl = $('#urlText').attr('data-url');
                                    var numbs = /[^0-9]/g;
                                    dataUrl = dataUrl.replace(numbs, '');
                                    dataUrl.length == 3 ? dataUrl[1] = dataUrl[2] : '';
                                    var nums = 0;
                                    nums = dataUrl[1] - 1;
                                    var heightOn = $('.news-swipe .swiper-slide').eq(nums).height();
                                    $('.swiper-slide').removeClass('onup');
                                    $('.news-swipe .swiper-slide').addClass('onup');
                                    $('.main-swipe-wrap').height(heightOn);
                                    $('.video_list_ajax').remove();
                                    break;
                                case 2 :
                                    var dataUrl = $('#urlText').attr('data-url');
                                    var numbs = /[^0-9]/g;
                                    dataUrl = dataUrl.replace(numbs, '');
                                    dataUrl.length == 3 ? dataUrl[1] = dataUrl[2] : '';
                                    var nums = 0;
                                    nums = dataUrl[1] - 1;
                                    var heightOn = $('.style-swipe .swiper-slide').eq(nums).height();
                                    $('.swiper-slide').removeClass('onup');
                                    $('.style-swipe .swiper-slide').addClass('onup');
                                    $('.main-swipe-wrap').height(heightOn);
                                    $('.video_list_ajax').remove();
                                    break;
                                case 3 :
                                    var dataUrl = $('#urlText').attr('data-url');
                                    var numbs = /[^0-9]/g;
                                    dataUrl = dataUrl.replace(numbs, '');
                                    dataUrl.length == 3 ? dataUrl[1] = dataUrl[2] : '';
                                    var nums = 0;
                                    nums = dataUrl[1] - 1;
                                    var heightOn = $('.collection-swipe .swiper-slide').eq(nums).height();
                                    $('.swiper-slide').removeClass('onup');
                                    $('.collection-swipe .swiper-slide').addClass('onup');
                                    $('.main-swipe-wrap').height(heightOn);
                                    $('.video_list_ajax').remove();
                                    break;
                                case 6 :
                                    setTimeout(function () {
                                        videoAjaxSave($('.videoList'));
                                    }, 500);

                                    var dataUrl = window.location.search;



                                    $('.video_tab li a').each(function (e) {
                                        $(this).on('click', function (e) {
                                            var tabs = $(this).attr('href');
                                            if (tabs == '#first') {
                                                $('#urlText').attr('data-url', '?layer=6:1');
                                                videoAjaxSave($('.videoList'));
                                                $('.video_tab li a').removeClass('active');
                                                $('.video_tab li.first a').addClass('active');
                                            } else {
                                                $('#urlText').attr('data-url', '?layer=8:1');
                                                videoAjaxSave2($('.videoList'));
                                                $('.video_tab li a').removeClass('active');
                                                $('.video_tab li.second a').addClass('active');
                                            }

                                            e.preventDefault();
                                        })
                                    });

                                    if (dataUrl == '?layer=6:1') {
                                        setTimeout(function () {
                                            videoAjaxSave($('.videoList'));
                                            $('.video_tab li').removeClass('active');
                                            $('.video_tab li.first').addClass('active');
                                        }, 500);
                                        dataUrl = $('#urlText').attr('data-url', '?layer=6:1');

                                    } else if (dataUrl == '?layer=8:1') {
                                        setTimeout(function () {
                                            videoAjaxSave2($('.videoList'));
                                            $('.video_tab li').removeClass('active');
                                            $('.video_tab li.second').addClass('active');
                                        }, 500);
                                        dataUrl = $('#urlText').attr('data-url', '?layer=8:1');
                                    }

                                    break;

                                default :
                                    $('.video_list_ajax').remove();
                                    break;
                            }
                        }, 500)
                    }

                });
                var navSwiper = new Swiper('.nav-swiper', {
                    nested: true,
                    centeredSlides: true,
                    followFinger: true,
                    slidesPerView: 'auto',
                    touchRatio: 1,
                    slideToClickedSlide: true,
                    threshold: 50,
                    touchReleaseOnEdges: true,
                    onInit: function (swiper) {

                    },
                    onTransitionEnd: function (swiper) {
                        setTimeout(function () {
                            var thisIndex = $('#mainNav').find('.swiper-slide-active').index();
                            $('.swipe_go li').eq(thisIndex).find('a').trigger('click');
                        }, 300)
                    }
                });

                $('.swipe_go li a').each(function () {
                    $(this).on('click', function (e) {
                        var index = $(this).parent().index();

                        $('.swipe_go li a').removeClass('disabled');
                        $(this).addClass('disabled');
                        if (index != 0 && !$('#urlText').attr('data-url')) {
                            frame == 0 ? frame = 1 : frame;
                            $('#urlText').attr('data-url', '?layer=' + index + ':' + frame + '');
                        }
                        if ($('#urlText').attr('data-url')) {
                            var dataUrl = $('#urlText').attr('data-url')
                            var numbs = /[^0-9]/g;
                            setTimeout(function () {
                                dataUrl = dataUrl.replace(numbs, '');
                                dataUrl.length == 3 ? dataUrl[1] = dataUrl[2] : '';
                                var nums = dataUrl[0];
                                if (nums != index) {
                                    if ($('#con-wrap > div').find('.banner-wrapper')) {
                                        var indexing = $('#con-wrap > div').eq(index).find('.banner-wrapper > div > div.swiper-slide-active').index();
                                        indexing = indexing + 1;
                                        indexing != 0 ? $('#urlText').attr('data-url', '?layer=' + index + ':' + indexing + '') : $('#urlText').attr('data-url', '?layer=' + index + ':1');
                                    }
                                }
                            }, 400);
                        }

                        mainSwiper.slideTo(index);
                        if (!$('.swipe_go li a').hasClass('disabled')) {
                            $('.main-swipe-wrap').height(mainContents[index]);
                        }
                        if ($('.menu-button').hasClass('cross')) {
                            $('.opened').trigger('click');
                        }
                        e.preventDefault();
                    });
                });


                mainSwiper.params.control = navSwiper;
                navSwiper.params.control = mainSwiper;

            },
            newsSwipe: function (frame) {
                //var newsContents = [];                
                var newsGall = new Swiper('.news-swipe', {
                    nested: true,
                    centeredSlides: true,
                    calculateHeight: true,
                    threshold: 70,
                    slidesPerView: '1',
                    pagination: '.new-pagination',
                    paginationClickable: true,
                    onInit: function (swiper) {
                        var swipeIndex = swiper.activeIndex;
                        $(swiper.slides).each(function (a) {
                            newsContents.push($(this).height());
                        });



                        $(swiper.container).height($(swiper.slides).height());

                        if (frame) {
                            frame = frame + 1
                            $('#urlText').attr('data-url', '?layer=1:' + frame + '');
                            setTimeout(function () {
                                $('.main-swipe-wrap').height(newsContents[frame]);
                                $(swiper.container).height(newsContents[frame]);
                            }, 300)
                            swiper.slideTo(frame);


                        }
                    },
                    onTransitionEnd: function (swiper) {
                        var swipeIndex = swiper.activeIndex;
                        url = swipeIndex + 1;

                        $('#urlText').attr('data-url', '?layer=1:' + url + '');
                        setTimeout(function () {
                            $('.main-swipe-wrap').height(newsContents[swipeIndex]);
                            $(swiper.container).height(newsContents[swipeIndex]);
                        }, 300)

                    }

                });

            },
            styleSwipe: function (frame) {
                //var styleContents = [];
                var styleGall = new Swiper('.style-swipe', {
                    nested: true,
                    centeredSlides: true,
                    calculateHeight: true,
                    threshold: 70,
                    slidesPerView: '1',
                    pagination: '.style-pagination',
                    paginationClickable: true,
                    onInit: function (swiper) {
                        var swipeIndex = swiper.activeIndex;
                        $(swiper.slides).each(function (a) {
                            styleContents.push($(this).height());
                        });

                        $(swiper.container).height($(swiper.slides).height());



                        if (frame) {
                            //$('#urlText').attr('data-url', '?layer' + frame +':' + frame + 1 + '');
                            setTimeout(function () {
                                $('.main-swipe-wrap').height(styleContents[frame]);
                                $(swiper.container).height(styleContents[frame]);
                            }, 300)
                            swiper.slideTo(frame);


                        }
                    },
                    onTransitionEnd: function (swiper) {
                        var swipeIndex = swiper.activeIndex;
                        url = swipeIndex + 1;
                        $('#urlText').attr('data-url', '?layer=2:' + url + '');
                        setTimeout(function () {
                            $('.main-swipe-wrap').height(styleContents[swipeIndex]);
                            $(swiper.container).height(styleContents[swipeIndex]);
                        }, 300)

                    }

                });


            },
            collectionSwipe: function (frame) {
                //var styleContents = [];
                var collectionGall = new Swiper('.collection-swipe', {
                    nested: true,
                    centeredSlides: true,
                    calculateHeight: true,
                    threshold: 70,
                    slidesPerView: '1',
                    pagination: '.style-pagination',
                    paginationClickable: true,
                    onInit: function (swiper) {
                        var swipeIndex = swiper.activeIndex;
                        $(swiper.slides).each(function (a) {
                            collectionContents.push($(this).height());
                        });

                        $(swiper.container).height($(swiper.slides).height());



                        if (frame) {
                            //$('#urlText').attr('data-url', '?layer' + frame +':' + frame + 1 + '');
                            setTimeout(function () {
                                $('.main-swipe-wrap').height(collectionContents[frame]);
                                $(swiper.container).height(collectionContents[frame]);
                            }, 300)
                            swiper.slideTo(frame);


                        }
                    },
                    onTransitionEnd: function (swiper) {
                        var swipeIndex = swiper.activeIndex;
                        url = swipeIndex + 1;
                        $('#urlText').attr('data-url', '?layer=3:' + url + '');
                        setTimeout(function () {
                            $('.main-swipe-wrap').height(collectionContents[swipeIndex]);
                            $(swiper.container).height(collectionContents[swipeIndex]);
                        }, 300);

                    }

                });


            },
            videoAjaxSave: function (target) {
                $.ajax({
                    type: "GET",
                    url: "/json/videoList.json",
                    dataType: "json",
                    cache: false,
                    success: function (data) {

                        var urls = $('#urlText').attr('data-url')
                        var matching = urls.match(/\d+/g);
                        matching.length == 3 ? matching[1] = matching[2] : '';
                        var layer_results = matching[0];
                        var frame_results = matching[1];


                        if (layer_results == 6) {
                            $('.video_tab ul li').removeClass('active');
                            $('.video_tab ul li').eq(0).addClass('active');
                            $('.mores').show();
                            $('.videoPop h2').removeClass('one');
                            $('.defaultBottom').removeClass('one');
                            $('.video_tab').removeClass('one');
                            $('.popDefault .popupFooter').removeClass('one');
                            $('.popDefault .popWrapping').removeClass('one');
                            var inner = "<ul class='video_list_ajax'>";
                            var maxLength = 2;

                            for (i = 0; i < maxLength; i++) {
                                var indexing = i + 1;
                                inner += "<li>"
                                inner += "<div class='videoWrapper'>"
                                inner += "<video id='introVideo" + indexing + "' preload='auto' controls poster=" + data[i].poster + ">"
                                inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                inner += "</div>"
                                inner += "<p>#" + indexing + "</p>"
                                inner += "<div class='shareSns'>"
                                inner += "<button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>"
                                inner += "<div class='dmt-snsList'>"
                                inner += "<ul>"
                                inner += "<li class='pro-dmt-fb' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                inner += "<li class='pro-dmt-tw' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                inner += "<li class='pro-dmt-story' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp' ></a></li>"
                                inner += "</ul>"
                                inner += "</div>"
                                inner += "</div>"
                                inner += "</li>"

                            }

                            target.html(inner);
                            setTimeout(function () {
                                $('.main-swipe-wrap').height($('.videoSlide').height());
                            }, 500);

                            $('.dmt-snsToggle').each(function () {
                                $(this).on('click', function (e) {
                                    e.stopPropagation();
                                    $(this).next().slideToggle('fast');
                                    var that = $(this).next();
                                    $('body,html').on('click', function (e) {
                                        if (that.css('display') == 'block') {
                                            if (!that.has(e.target).length) {
                                                that.slideUp('fast');
                                            }
                                        }
                                    })
                                });
                            });




                            setTimeout(function () {
                                $('.mores').on('click', function () {
                                    var oldLength = maxLength;
                                    var dataLength = data.length;

                                    maxLength = maxLength + 2;

                                    if (maxLength > dataLength) {
                                        maxLength = dataLength;
                                        $('.mores').hide();
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto' controls poster=" + data[i].poster + ">"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>"
                                            inner += "<div class='dmt-snsList'>"
                                            inner += "<ul>"
                                            inner += "<li class='pro-dmt-fb' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-tw' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-story' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp' ></a></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</div>"
                                            inner += "</li>"

                                        }
                                        target.html(inner);
                                        setTimeout(function () {
                                            $('.main-swipe-wrap').height($('.videoSlide').height());
                                        }, 500);
                                        $('.dmt-snsToggle').each(function () {
                                            $(this).on('click', function (e) {
                                                e.stopPropagation();
                                                $(this).next().slideToggle('fast');
                                                var that = $(this).next();
                                                $('body,html').on('click', function (e) {
                                                    if (that.css('display') == 'block') {
                                                        if (!that.has(e.target).length) {
                                                            that.slideUp('fast');
                                                        }
                                                    }
                                                })
                                            });
                                        });
                                        videoSns();
                                    } else {
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto' controls poster=" + data[i].poster + ">"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>"
                                            inner += "<div class='dmt-snsList'>"
                                            inner += "<ul>"
                                            inner += "<li class='pro-dmt-fb' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-tw' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-story' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp' ></a></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</div>"
                                            inner += "</li>"
                                        }
                                        target.html(inner);
                                        setTimeout(function () {
                                            $('.main-swipe-wrap').height($('.videoSlide').height());
                                        }, 500);
                                        $('.dmt-snsToggle').each(function () {
                                            $(this).on('click', function (e) {
                                                e.stopPropagation();
                                                $(this).next().slideToggle('fast');
                                                var that = $(this).next();
                                                $('body,html').on('click', function (e) {
                                                    if (that.css('display') == 'block') {
                                                        if (!that.has(e.target).length) {
                                                            that.slideUp('fast');
                                                        }
                                                    }
                                                })
                                            });
                                        });
                                        videoSns();
                                    }

                                });


                            }, 500)

                            function videoSns() {
                                $('.pro-dmt-fb').on('click', function () {
                                    popup('videoFacebook', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.pro-dmt-tw').on('click', function () {
                                    popup('videoTwitter', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.pro-dmt-story').on('click', function () {
                                    popup('videoKakaostory', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                            }

                            videoSns();
                        } else if (layer_results == 7) {

                            frame_results = frame_results - 1;
                            $('.mores').hide();
                            $('.videoPop h2').addClass('one');
                            $('.defaultBottom').addClass('one');
                            $('.video_tab').addClass('one');
                            $('.popDefault .popWrapping').addClass('one');
                            $('.popDefault .popupFooter').addClass('one');

                            var inner = "<div class='urlPlay'>";

                            inner += "<video id='introVideo" + frame_results + "' preload='auto' controls poster=" + data[frame_results].poster + ">"
                            inner += "<source src=" + data[frame_results].videoAd + " type='video/mp4' />"

                            target.html(inner)
                        }
                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            videoAjaxSave2: function (target) {
                $.ajax({
                    type: "GET",
                    url: "/json/videoList2.json",
                    dataType: "json",
                    cache: false,
                    success: function (data) {

                        var urls = $('#urlText').attr('data-url')
                        var matching = urls.match(/\d+/g);
                        matching.length == 3 ? matching[1] = matching[2] : '';
                        var layer_results = matching[0];
                        var frame_results = matching[1];


                        if (layer_results == 8) {
                            $('.video_tab ul li').removeClass('active');
                            $('.video_tab ul li').eq(1).addClass('active');
                            $('.mores').show();
                            $('.videoPop h2').removeClass('one');
                            $('.defaultBottom').removeClass('one');
                            $('.video_tab').removeClass('one');
                            $('.popDefault .popupFooter').removeClass('one');
                            $('.popDefault .popWrapping').removeClass('one');
                            var inner = "<ul class='video_list_ajax'>";
                            var maxLength = 2;

                            for (i = 0; i < maxLength; i++) {
                                var indexing = i + 1;
                                inner += "<li>"
                                inner += "<div class='videoWrapper'>"
                                inner += "<video id='introVideo" + indexing + "' preload='auto' controls poster=" + data[i].poster + ">"
                                inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                inner += "</div>"
                                inner += "<p>#" + indexing + "</p>"
                                inner += "<div class='shareSns'>"
                                inner += "<button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>"
                                inner += "<div class='dmt-snsList'>"
                                inner += "<ul>"
                                inner += "<li class='pro-dmt-fb' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                inner += "<li class='pro-dmt-tw' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                inner += "<li class='pro-dmt-story' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp' ></a></li>"
                                inner += "</ul>"
                                inner += "</div>"
                                inner += "</div>"
                                inner += "</li>"

                            }

                            target.html(inner);
                            setTimeout(function () {
                                $('.main-swipe-wrap').height($('.videoSlide').height());
                            }, 500);

                            $('.dmt-snsToggle').each(function () {
                                $(this).on('click', function (e) {
                                    e.stopPropagation();
                                    $(this).next().slideToggle('fast');
                                    var that = $(this).next();
                                    $('body,html').on('click', function (e) {
                                        if (that.css('display') == 'block') {
                                            if (!that.has(e.target).length) {
                                                that.slideUp('fast');
                                            }
                                        }
                                    })
                                });
                            });




                            setTimeout(function () {
                                $('.mores').on('click', function () {
                                    var oldLength = maxLength;
                                    var dataLength = data.length;

                                    maxLength = maxLength + 2;

                                    if (maxLength > dataLength) {
                                        maxLength = dataLength;
                                        $('.mores').hide();
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto' controls poster=" + data[i].poster + ">"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>"
                                            inner += "<div class='dmt-snsList'>"
                                            inner += "<ul>"
                                            inner += "<li class='pro-dmt-fb' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-tw' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-story' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp' ></a></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</div>"
                                            inner += "</li>"

                                        }
                                        target.html(inner);
                                        setTimeout(function () {
                                            $('.main-swipe-wrap').height($('.videoSlide').height());
                                        }, 500);
                                        $('.dmt-snsToggle').each(function () {
                                            $(this).on('click', function (e) {
                                                e.stopPropagation();
                                                $(this).next().slideToggle('fast');
                                                var that = $(this).next();
                                                $('body,html').on('click', function (e) {
                                                    if (that.css('display') == 'block') {
                                                        if (!that.has(e.target).length) {
                                                            that.slideUp('fast');
                                                        }
                                                    }
                                                })
                                            });
                                        });
                                        videoSns();
                                    } else {
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto' controls poster=" + data[i].poster + ">"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>"
                                            inner += "<div class='dmt-snsList'>"
                                            inner += "<ul>"
                                            inner += "<li class='pro-dmt-fb' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-tw' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'></a></li>"
                                            inner += "<li class='pro-dmt-story' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp' ></a></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</div>"
                                            inner += "</li>"
                                        }
                                        target.html(inner);
                                        setTimeout(function () {
                                            $('.main-swipe-wrap').height($('.videoSlide').height());
                                        }, 500);
                                        $('.dmt-snsToggle').each(function () {
                                            $(this).on('click', function (e) {
                                                e.stopPropagation();
                                                $(this).next().slideToggle('fast');
                                                var that = $(this).next();
                                                $('body,html').on('click', function (e) {
                                                    if (that.css('display') == 'block') {
                                                        if (!that.has(e.target).length) {
                                                            that.slideUp('fast');
                                                        }
                                                    }
                                                })
                                            });
                                        });
                                        videoSns();
                                    }

                                });


                            }, 500)

                            function videoSns() {
                                $('.pro-dmt-fb').on('click', function () {
                                    popup('videoFacebook', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.pro-dmt-tw').on('click', function () {
                                    popup('videoTwitter', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.pro-dmt-story').on('click', function () {
                                    popup('videoKakaostory', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                            }

                            videoSns();
                        } else if (layer_results == 9) {

                            frame_results = frame_results - 1;
                            $('.mores').hide();
                            $('.videoPop h2').addClass('one');
                            $('.defaultBottom').addClass('one');
                            $('.video_tab').addClass('one');
                            $('.popDefault .popWrapping').addClass('one');
                            $('.popDefault .popupFooter').addClass('one');

                            var inner = "<div class='urlPlay'>";

                            inner += "<video id='introVideo" + frame_results + "' preload='auto' controls poster=" + data[frame_results].poster + ">"
                            inner += "<source src=" + data[frame_results].videoAd + " type='video/mp4' />"

                            target.html(inner);
                        }
                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            detailAjaxSave: function (hrefIndex, target) {
                $.ajax({
                    type: "GET",
                    url: "/m/json/detail.json",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        var inner = "";
                        var Indexing = hrefIndex + 1;

                        inner += "<div class='detailWrapper'>"
                        inner += "<div class='one'>"
                        inner += "<ul class='swiper-wrapper'>"
                        inner += "</ul>"
                        inner += "</div>"
                        inner += "<div class='shareSns'>"
                        inner += "<button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>"
                        inner += "<div class='dmt-snsList'>"
                        inner += "<ul>"
                        inner += "<li class='pro-dmt-fb' data-url='?layer=10:" + Indexing + "'><a href='#' class='dmt-sp'></a></li>"
                        inner += "<li class='pro-dmt-tw' data-url='?layer=10:" + Indexing + "'><a href='#' class='dmt-sp'></a></li>"
                        inner += "<li class='pro-dmt-story' data-url='?layer=10:" + Indexing + "'><a href='#' class='dmt-sp' ></a></li>"
                        inner += "</ul>"
                        inner += "</div>"
                        inner += "</div>"
                        inner += "<div class='detailText'>"
                        inner += "<h3>" + data[hrefIndex].detailHead + "</h3>"
                        inner += "<div class='linked'>"
                        inner += "<a href=" + data[hrefIndex].detailLink + " target='_blank'>" + data[hrefIndex].detailBuy + "</a>"
                        inner += "<a href=" + data[hrefIndex].detailRelative + " target='_blank'>" + data[hrefIndex].detailLinkText + "</a>"
                        inner += "</div>"
                        inner += "<div class='detailVideo'>"
                        inner += "<video id='detailVideo" + Indexing + "' preload='auto' controls poster=" + data[hrefIndex].detailMain + ".jpg>"
                        inner += "<source src=" + data[hrefIndex].detailVideoM + " type='video/mp4' />"
                        inner += "</video>"
                        inner += "</div>"
                        inner += "</div>"
                        inner += "</div>"
                        inner += "<div class='productList'>"
                        inner += "<ul>"
                        inner += "<li><img src=" + data[hrefIndex].detailImg01 + ".png></li>"
                        inner += "<li><img src=" + data[hrefIndex].detailImg02 + ".png></li>"
                        inner += "<li class='color_bottom'><img src=" + data[hrefIndex].detailImg03 + ".png></li>"
                        inner += "<li><img src=" + data[hrefIndex].detailImg04 + ".png></li>"
                        inner += "</ul>"
                        inner += "</div>"

                        target.html(inner);


                        for (i = 0; i < data[hrefIndex].detailColor.length; i++) {
                            var slideLength = "<li class='swiper-slide'><img src=" + data[hrefIndex].detailColor[i] + ".jpg></li>"
                            $('.one .swiper-wrapper').append(slideLength);

                        }

                        var one = new Swiper('.one', {
                            nested: true,
                            centeredSlides: true,
                            followFinger: true,
                            loop: true,
                            effect: 'fade',
                            autoplay: 3000,
                            slidesPerView: 1,
                            touchRatio: 1,
                            threshold: 50,
                            touchReleaseOnEdges: true

                        });






                        function detailSns() {
                            $('.pro-dmt-fb').on('click', function () {
                                popup('facebook', 'window.location.href', 'DIMATTO VIDEO', $(this));
                            });

                            $('.pro-dmt-tw').on('click', function () {
                                popup('twitter', 'window.location.href', 'DIMATTO VIDEO', $(this));
                            });

                            $('.pro-dmt-story').on('click', function () {
                                popup('kakaostory', 'window.location.href', 'DIMATTO VIDEO', $(this));
                            });


                        }

                        detailSns();

                        $('.detailPop .dmt-snsToggle').each(function () {
                            $(this).on('click', function (e) {
                                e.stopPropagation();
                                $(this).next().slideToggle('fast');
                                var that = $(this).next();
                                $('.detailPop,.detailPop .wrapping').on('click', function (e) {
                                    if (that.css('display') == 'block') {
                                        if (!that.has(e.target).length) {
                                            that.slideUp('fast');
                                        }
                                    }
                                })
                            });
                        });


                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            videos: function () {
                var closedPop = this.closedPop;
                var dimmed = this.dim;
                dimmed(true);
                $('.videoPop').find('.closeBtn').on('click', function (e) {
                    closedPop($('.videoPop'));
                    $('.urlPlay').remove();
                    e.preventDefault();
                });
                $('.videoPop').addClass('active');
                this.videoAjaxSave($('.videoList'));
                this.videoAjaxSave2($('.videoList'));

            }
        }
    }
}(jQuery))

