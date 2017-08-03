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
                        TweenLite.to($('.lines'), 0.5, {height: thisTop + 293 + 'px',
                            ease: Sine.easeOut});
                        
                        /*
                        
                         if (con[i] == $('.viewCheck.news').offset().top) {
                             setTimeout(function(){
                                  var inner = '';

                            inner += "<video id='introVideo1' preload='auto'>"
                            inner += "<source src='/video/details33.mp4' type='video/mp4' />"
                            inner += "</video>"



                            $('.news_con02 .videoArea').html(inner);
                             },300)
                           
                            
                           
                        }
                        
                        */

                        
                       



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
                                        ease: Elastic.easeOut});
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
            init: function () {

                //main시작시 인터렉션
                var mainTimeLine = new TimelineLite();
                mainTimeLine.to($('.mainTop h1 .action2'), 0.5, {rotation: -720,
                    ease: Expo.easeIn});
                mainTimeLine.to($('.mainTop h1 .action'), 0.5, {width: '27px',
                    ease: Elastic.easeInOut});
                TweenLite.to($('.mainTop .rightBanner'), 0.5, {top: '75px',
                    ease: Expo.easeInOut});
                TweenLite.to($('.mainTop .leftBanner'), 0.5, {left: '0',
                    ease: Power2.easeIn});
                
               if($('.loading')){
                     mainTimeLine.to($('.loading_action'), 2, {rotation: -360, repeat:-1,
                    ease: Expo.easeIn});
               }
                
              


                //mainTop 상단 우측배너

                //슬라이드 총 length값과 현재값 받아오기
                $('.right-slider').on('init', function (event, slick) {
                    var currents = '0' + (slick.currentSlide + 1)
                    var length = '0' + slick.$slides.length
                    $('.sliderCurrent .current').text(currents)
                    $('.sliderCurrent .sliderLength').text(length)
                });

                $('.right-slider').slick({
                    autoplay: true,
                    autoplaySpeed: 3000
                })

                //슬라이드 될때 현재값 바꾸기
                $('.right-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    var currents = '0' + (nextSlide + 1)
                    $('.sliderCurrent .current').text(currents)
                });

                //최하단 상품 slider                  
                $('.bottomSlider .styleList').slick({
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    responsive: [
                        {
                            breakpoint: 1765,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        },
                        {
                            breakpoint: 1500,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }
                    ]
                });



                //동영상 hover했을때 컨트롤러 추가
                $('video').on('mouseenter', function () {
                    $(this).attr('controls', 'controls')
                }).on('mouseleave', function () {
                    $(this).removeAttr('controls', '')
                });

                //이미지 on,off 
                $('.onoffHover .replace').activeBtns();
                $('.collection .right').mouseenter(function () {
                    TweenLite.to($('.collection .right img.action'), 0.7, {scale: 1.1,
                        ease: Sine.easeInOut});
                }).mouseleave(function () {
                    TweenLite.to($('.collection .right img.action'), 0.7, {scale: 1,
                        ease: Sine.easeInOut});
                });

                $('.webzine_cover').mouseenter(function () {
                    TweenLite.to($('.webzine_cover img.action'), 0.7, {scale: 1.1,
                        ease: Sine.easeInOut});
                }).mouseleave(function () {
                    TweenLite.to($('.webzine_cover img.action'), 0.7, {scale: 1,
                        ease: Sine.easeInOut});
                });

                $('.topBtn,#footer h2 a').on('click', function (e) {
                    $('body, html').stop(true, false).animate({scrollTop: 0, ease: Sine.easeInOut});
                    e.preventDefault();
                });


            }
        },
        subPopup: {
            opened: {
                stylePop: $('.stylepickPop'),
                styleMainList: $('.styleList .stylepick_pop,.styleList .textArea'),
                styleSlider: $('.stylepick_list_slider'),
                styleContents: $('.styleContents > div'),
                collectionPop: $('.collectionPop'),
                collectionMainList: $('.collection .viewCheck'),
                collectionSlider: $('.collection_list_slider'),
                collectionContents: $('.collectionContents > div'),
                newsPop: $('.newsPop'),
                newsMainList: $('.news_pop .textArea a'),
                newsSlider: $('.news_list_slider'),
                newsContents: $('.newsContents > div'),
                detailPop: $('.detailPop'),
                detailMainList: $('.bottomSlider a.onoffHover'),
                gnbPop: $('.gnbPop'),
                brandPop: $('.brandPop'),
                brandPopButton: $('.brandWrapper a.onoffHover'),
                commonChecked: $('#urlText'),
                videoPop: $('.videoPop')
            },
            dim: function (gnb) {
                var dimmed = $('<div></div>', {'addClass': 'dimmed'});
                var outControl = $('<div></div>', {'addClass': 'sdimmed'});
                $('#wrap').append(dimmed, outControl)
                $('body,html,#wrap').addClass('modal');



                $('.sdimmed').on('click', function (e) {
                    if ($('#urlText').attr('data-saveurl')) {
                        $('.popDefault.active.ex .exCloseBtn').trigger('click');
                    } else {
                        $('.popDefault.active .closeBtn').trigger('click');
                    }
                    $(this).remove();
                });

                if (gnb) {
                    $('body,html,#wrap').addClass('modal');
                }
            },
            scrolls: function (scrolls, target) {
                if (!scrolls)
                    return console.log('스크롤 대상을 적어주세요');
                if (!target)
                    return console.log('애니메이션 타겟이없습니다')

                var didScroll;
                var lastScrollTop = 0;
                var delta = 5;

                scrolls.on('scroll', function () {
                    didScroll = true;
                });


                setInterval(function () {
                    if (didScroll) {
                        hasScrolled();
                        buttonUp();
                        didScroll = false;
                    }
                }, 250);

                function hasScrolled() {
                    var st = scrolls.scrollTop();
                    if (Math.abs(lastScrollTop - st) <= delta)
                        return;
                    if (st == 0 || st > lastScrollTop) {
                        TweenLite.to(target, 0.2, {bottom: -100,
                            ease: Sine.easeInOut});
                    } else {
                        // Scroll Up
                        if (st) {
                            TweenLite.to(target, 0.2, {bottom: 0,
                                ease: Sine.easeInOut});
                        }
                    }
                    lastScrollTop = st;
                }


                function buttonUp() {
                    target.on('click', function () {
                        TweenLite.to(scrolls, 0.5, {scrollTop: 0,
                            ease: Sine.easeInOut});
                    })
                }


            },
            openOffset: function (target) {
                var upTo = target.offset().top;
                return upTo;
            },
            closed: function (target, gnb, gnbajax) {
                if ($(window).width() > 1900) {
                    $('.lines').css('left', '0')
                }
                target.find('.popWrapping').scrollTop(0);
                target.removeClass('active');
                $('body,html,#wrap').removeClass('modal');
                if($('.sdimmed')){
                    $('.sdimmed').remove();
                }



                if (gnb) {
                    TweenLite.to(target, 0.5, {left: '-488px', ease: Power2.easeInOut});

                }

                if (gnbajax) {
                    $('body,html,#wrap').addClass('modal');
                }


            },
            init: function () {
                this.stylePop();
                this.newsPop();
                this.gnbPop();
                this.detailPop();
                this.brandPop();
                this.collectionPop();
            },
            popCase: function (cases) {
                switch (cases) {
                    case 'stylepickPop' :
                        return 1;
                    case 'newsPop' :
                        return 2;
                    case 'collectionPop' :
                        return 3;
                    case 'brandPop' :
                        return 4;
                    case 'detailPop' :
                        return 5;
                    case 'videoPop' :
                        return 6;
                    default :
                        return;
                }
            },
            shareChecked: function (target, layer, frame) {
                var checked = this.popCase;
                frame = 1
                var url = "?layer=" + checked(layer) + ":" + frame + ""
                target.attr('data-url', url)
                return url;
            },
            shares: function (target, layer, frame, saveUrl) {
                function checked(layer) {
                    switch (layer) {
                        case 'stylepickPop' :
                            return 1;
                        case 'newsPop' :
                            return 2;
                        case 'collectionPop' :
                            return 3;
                        case 'brandPop' :
                            return 4;
                        case 'detailPop' :
                            return 5;
                        case 'videoPop' :
                            return 6;
                        default :
                            return;
                    }
                }
                frame != undefined ? frame : frame = 1;
                var url = "?layer=" + checked(layer) + ":" + frame + ""
                if (!saveUrl) {
                    target.attr('data-url', url);
                } else {
                    target.attr('data-saveurl', url);
                }

                return url;
            },
            gnbPop: function () {
                var dimmed = this.dim;
                var gnbPops = this.opened.gnbPop;
                var close = this.closed;
                var urlText = this.opened.commonChecked;
                var shareSns = this.shares;
                var videoLoad = this.videoAjaxSave;
                var videoLoad2 = this.videoAjaxSave2;
                var videoDom = $('.videoPop .videoList');
                var videoP = $('.videoPop');
                var styleAjaxSave = this.styleAjaxSave;
                var styleCon = this.opened.styleContents;
                var newsAjaxSave = this.newsAjaxSave;
                var newsCon = this.opened.newsContents;
                var collectionAjaxSave = this.collectionAjaxSave;
                var collectionCon = this.opened.collectionContents;


                $('.gnbBtn').on('click', function () {
                    TweenLite.to(gnbPops, 0.5, {left: '0', ease: Power2.easeInOut});
                    dimmed(true);
                });

                gnbPops.find('.closeBtn').on('click', function () {
                    close(gnbPops, true);
                    $('.dimmed').remove();
                });


                gnbPops.find('.gnbList li a').each(function () {
                    $(this).on('click', function (e) {
                        close(gnbPops, true, true);
                        var linked = $(this).attr('href');
                        var linkedPop = linked.replace('#', '.');
                        var cases = linked.replace('#', '');
                        shareSns(urlText, cases);

                        switch (cases) {
                            case 'stylepickPop' :
                                setTimeout(function () {
                                    styleAjaxSave($('.styleAjax'), styleCon);
                                }, 300);
                                setTimeout(function () {
                                    $('.stylepick_list_slider .slick-dots .slick-active button').trigger('click');
                                }, 400)
                                break;
                            case 'newsPop' :
                                setTimeout(function () {
                                    newsAjaxSave($('.newsAjax'), newsCon)
                                }, 300);
                                setTimeout(function () {
                                    $('.news_list_slider .slick-dots .slick-active button').trigger('click');
                                }, 400)
                                break;
                            case 'collectionPop' :
                                setTimeout(function () {
                                    collectionAjaxSave($('.collectionAjax'), collectionCon)
                                }, 300);
                                setTimeout(function () {
                                    $('.collection_list_slider .slick-dots .slick-active button').trigger('click');
                                }, 400)
                                break;
                            case 'videoPop' :
                                videoLoad(6, videoDom);
                                videoLoad2(8, videoDom);
                                $('.video_tab li a').each(function (e) {
                                    $(this).on('click', function (e) {
                                        var tabs = $(this).attr('href');
                                        if (tabs == '#first') {
                                            urlText.attr('data-url', '?layer=6:1');
                                            videoLoad(6, videoDom);
                                        } else {
                                            urlText.attr('data-url', '?layer=8:1');
                                            videoLoad2(8, videoDom);
                                        }

                                        e.preventDefault();
                                    })
                                });
                                videoP.find('.closeBtn').on('click', function (e) {
                                    close(videoP);
                                    $('.video_list_ajax').remove();
                                    $('.dimmed').remove();
                                    e.preventDefault();
                                });
                                break;
                            default :
                                break;
                        }
                        $(linkedPop).addClass('active');
                        $(linkedPop).find('.slick-dots li').eq(0).trigger('click');
                        $(linkedPop).find('.tabContents div').removeClass('on');
                        $(linkedPop).find('.tabContents div').eq(0).addClass('on');
                        e.preventDefault();
                    })
                })
            },
            urlBrandPop: function () {
                var popWrap = this.opened.brandPop;
                var mainPopButton = this.opened.brandPopButton;
                var returnMenu = this.openOffset(mainPopButton);
                var dimmed = this.dim;
                var close = this.closed;
                var commonChecked = this.opened.commonChecked;
                var saveLocation = window.location.search;


                commonChecked.attr('data-url', saveLocation);
                popWrap.addClass('active');
                dimmed();


                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();
                    e.preventDefault();
                });
            },
            brandPop: function () {
                var popWrap = this.opened.brandPop;
                var mainPopButton = this.opened.brandPopButton;
                var returnMenu = this.openOffset(mainPopButton);
                var urlText = this.opened.commonChecked;
                var dimmed = this.dim;
                var close = this.closed;
                var scrolling = this.scrolls;

                var url = this.shares(urlText, 'brandPop');



                mainPopButton.filter('.textArea a').each(function () {
                    $(this).on('click', function (e) {
                        urlText.attr('data-url', url);
                        popWrap.addClass('active');
                        dimmed();
                        e.preventDefault();
                    });
                });
                scrolling(popWrap.find('.popWrapping'), popWrap.find('.buttonWrapping button'))





                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();
                    e.preventDefault();
                });



            },
            styleAjaxSave: function (target, targetContents) {
                $.ajax({
                    type: "GET",
                    url: "../json/style.json",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        var inner = "<div class='stylepick_list_slider'>";

                        $.each(data, function (index, entry) {
                            index = index + 1;
                            index < 9 ? index = '0' + index : index;

                            inner += "<div>"
                            inner += "<a href='#' id='style" + index + "'>"
                            inner += "<div class='imgWrapper'>"
                            inner += "<img src=" + entry.banners + ".jpg>"
                            inner += "</div>"
                            inner += "<p>" + entry.stylename + "</p>"
                            inner += "</a>"
                            inner += "</div>"

                            target.html(inner);

                            $('.stylepick_list_slider').on('init', function (event, slick) {
                                var currents = (slick.currentSlide);
                                var index = slick.currentSlide + 1
                                targetContents.removeClass('on');
                                targetContents.eq(currents).addClass('on');


                            });


                            $('.stylepick_list_slider').slick({
                                centerMode: true,
                                slidesToShow: 3,
                                dots: true,
                                variableWidth: true
                            });





                            $('.stylepick_list_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                var currents = '0' + (nextSlide);
                                targetContents.removeClass('on');
                                targetContents.eq(currents).addClass('on');
                            });

                            $('.stylepick_list_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                                var current = currentSlide + 1;
                                var url = "?layer=1:" + current + ""
                                $('#urlText').attr('data-url', url);


                            });

                            /*                            
                             $('.stylepick_list_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                             var current = currentSlide+1;
                             var currents = currentSlide
                             var currentUrl = window.location.search;                                
                             var currentFrame = currentUrl.substr(-1,1);
                             var urlString = location.href;
                             
                             
                             if(current != currentFrame){
                             currentFrame = current
                             var url = "?layer=1:"+currentFrame+""   
                             $('#urlText').attr('data-url',url)
                             
                             }
                             
                             });
                             */



                        })

                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            urlStylePop: function (thisHash) {
                var popWrap = this.opened.stylePop;
                var mainPopButton = this.opened.styleMainList;
                var popSlider = this.opened.styleSlider;
                var popContents = this.opened.styleContents;
                var returnMenu = this.openOffset(mainPopButton);
                var commonChecked = this.opened.commonChecked;
                var styleAjaxSave = this.styleAjaxSave;
                var styleAjaxCon = this.styleAjaxCon;
                var dimmed = this.dim;
                var close = this.closed;
                var saveLocation = window.location.search;
                popWrap.addClass('active');
                dimmed();
                commonChecked.attr('data-url', saveLocation);
                styleAjaxSave($('.styleAjax'), popContents);
                setTimeout(function () {
                    popWrap.find('.slick-dots li').eq(thisHash).trigger('click')
                }, 300);

                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();
                    e.preventDefault();
                });
            },
            stylePop: function () {
                //stylepick 팝업부분
                var popWrap = this.opened.stylePop;
                var mainPopButton = this.opened.styleMainList;
                var popSlider = this.opened.styleSlider;
                var popContents = this.opened.styleContents;
                var returnMenu = this.openOffset(mainPopButton);
                var styleAjaxSave = this.styleAjaxSave;
                var dimmed = this.dim;
                var close = this.closed;
                var urlText = this.opened.commonChecked;
                var popUpup = this.shares;
                var ajaxLoad = this.detailAjaxSave;
                var shares = this.shares;
                var scrolling = this.scrolls;





                scrolling(popWrap.find('.popWrapping'), popWrap.find('.buttonWrapping button'));

                mainPopButton.find('a.onoffHover').each(function () {
                    $(this).on('click', function (e) {
                        setTimeout(function () {
                            styleAjaxSave($('.styleAjax'), popContents)
                        }, 300);
                        var thisHref = $(this).attr('href');
                        popWrap.addClass('active');
                        dimmed();
                        e.preventDefault();


                        if (popWrap.hasClass('active')) {

                            var thisHash = new String(thisHref);
                            var numbs = /[^0-9]/g;
                            thisHash = thisHref.replace(numbs, '');
                            thisHash = thisHash.replace(/(^0+)/, "");
                            var fixedHref = thisHash;
                            thisHash = thisHash - 1;


                            var newUrl = shares(urlText, 'stylepickPop', fixedHref)
                            $('#urlText').attr('data-url', newUrl)
                            /*
                             if (urlString.match(oldUrl)){
                             window.location.replace(urlString.replace(oldUrl, newUrl));
                             }
                             */



                            setTimeout(function () {
                                popWrap.find('.slick-dots li').eq(thisHash).trigger('click');
                            }, 400);
                            popWrap.find('.slick-dots').tab({
                                contents: popContents,
                                navB: '>li button'
                            });
                        }
                    });
                });

                $('.aj li a').each(function () {
                    var ajaxDom = $('.detailPop .productTop');
                    var ajaxDom2 = $('.detailPop .productList');
                    $(this).on('click', function (e) {
                        var thisHref = $(this).attr('href');
                        thisHref = new String(thisHref)
                        var numbs = /[^0-9]/g;
                        thisHref = thisHref.replace(numbs, '');
                        var fixedHref = thisHref;
                        thisHref = thisHref - 1;
                        popUpup($('#urlText'), 'detailPop', fixedHref, true)
                        //close(popWrap,false,true);
                        $('.detailPop').addClass('active ex')
                        ajaxLoad(thisHref);
                        e.preventDefault();

                    });
                })

                popWrap.find('.closeBtn').on('click', function (e) {
//                    var removeAddress = window.location.search
//                    window.location.replace(urlString.replace(removeAddress, ''));
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();


                    e.preventDefault();
                });



            },
            collectionAjaxSave: function (target, targetContents) {
                $.ajax({
                    type: "GET",
                    url: "../json/collection.json",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        var inner = "<div class='collection_list_slider'>";

                        $.each(data, function (index, entry) {
                            index = index + 1;
                            index < 9 ? index = '0' + index : index;

                            inner += "<div>"
                            inner += "<a href='#' id='collection" + index + "'>"
                            inner += "<div class='imgWrapper'>"
                            inner += "<img src=" + entry.banners + ".jpg>"
                            inner += "</div>"
                            inner += "<p>" + entry.stylename + "</p>"
                            inner += "</a>"
                            inner += "</div>"

                            target.html(inner);


                            $('.collection_list_slider').on('init', function (event, slick) {
                                var currents = (slick.currentSlide);
                                var index = slick.currentSlide + 1
                                targetContents.removeClass('on');
                                targetContents.eq(currents).addClass('on');


                            });

                            $('.collection_list_slider').slick({
                                centerMode: true,
                                slidesToShow: 3,
                                dots: true,
                                variableWidth: true
                            });


                            $('.collection_list_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                var currents = '0' + (nextSlide);
                                targetContents.removeClass('on');
                                targetContents.eq(currents).addClass('on');
                            });

                            $('.collection_list_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                                var current = currentSlide + 1;
                                var url = "?layer=3:" + current + ""
                                $('#urlText').attr('data-url', url)


                            });



                        })

                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            urlcollectionPop: function (thisHash) {
                var popWrap = this.opened.collectionPop;
                var mainPopButton = this.opened.collectionMainList;
                var popSlider = this.opened.collectionSlider;
                var popContents = this.opened.collectionContents;
                var returnMenu = this.openOffset(mainPopButton);
                var commonChecked = this.opened.commonChecked;
                var styleAjaxSave = this.collectionAjaxSave;
                var dimmed = this.dim;
                var close = this.closed;
                var saveLocation = window.location.search;


                popWrap.addClass('active');
                dimmed();
                commonChecked.attr('data-url', saveLocation);
                styleAjaxSave($('.collectionAjax'), popContents);

                setTimeout(function () {
                    popWrap.find('.slick-dots li').eq(thisHash).trigger('click')
                }, 300);

                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();
                    e.preventDefault();
                });
            },
            collectionPop: function () {
                //stylepick 팝업부분
                var popWrap = this.opened.collectionPop;
                var mainPopButton = this.opened.collectionMainList;
                var popSlider = this.opened.collectionSlider;
                var popContents = this.opened.collectionContents;
                var returnMenu = this.openOffset(mainPopButton);
                var styleAjaxSave = this.collectionAjaxSave;
                var dimmed = this.dim;
                var close = this.closed;
                var urlText = this.opened.commonChecked;
                var popUpup = this.shares;
                var ajaxLoad = this.detailAjaxSave;
                var shares = this.shares;
                var scrolling = this.scrolls;
                var videoAjax = this.videoAjaxSave;
                var videoAjax2 = this.videoAjaxSave2;
                var videopopWrap = this.opened.videoPop;
                var videoDom = $('.videoPop .videoList');


                scrolling(popWrap.find('.popWrapping'), popWrap.find('.buttonWrapping button'))

                mainPopButton.find('a.popOn').each(function () {
                    $(this).on('click', function (e) {
                        setTimeout(function () {
                            styleAjaxSave($('.collectionAjax'), popContents)
                        }, 300)
                        var thisHref = $(this).attr('href');
                        popWrap.addClass('active');
                        dimmed();
                        e.preventDefault();


                        if (popWrap.hasClass('active')) {

                            var thisHash = new String(thisHref);
                            var numbs = /[^0-9]/g;
                            thisHash = thisHref.replace(numbs, '');
                            thisHash = thisHash.replace(/(^0+)/, "");
                            var fixedHref = thisHash;
                            thisHash = thisHash - 1;


                            var newUrl = shares(urlText, 'collectionPop', fixedHref)
                            $('#urlText').attr('data-url', newUrl)
                            /*
                             if (urlString.match(oldUrl)){
                             window.location.replace(urlString.replace(oldUrl, newUrl));
                             }
                             */



                            setTimeout(function () {
                                popWrap.find('.slick-dots li').eq(thisHash).trigger('click');
                            }, 400);
                            popWrap.find('.slick-dots').tab({
                                contents: popContents,
                                navB: '>li button'
                            });
                        }
                    });
                });

                mainPopButton.find('a.videoOn').each(function () {
                    $(this).on('click', function (e) {
                        setTimeout(function () {
                            videoAjax(6, $('.videoPop .videoList'))
                        }, 300)
                        var thisHref = $(this).attr('href');
                        videopopWrap.addClass('active');
                        dimmed();
                        e.preventDefault();



                        if (videopopWrap.hasClass('active')) {

                            var thisHash = new String(thisHref);
                            var numbs = /[^0-9]/g;
                            thisHash = thisHref.replace(numbs, '');
                            thisHash = thisHash.replace(/(^0+)/, "");
                            var fixedHref = thisHash;
                            thisHash = thisHash - 1;


                            var newUrl = shares(urlText, 'videoPop', fixedHref)
                            $('#urlText').attr('data-url', newUrl);

                            $('.video_tab li a').each(function (e) {
                                $(this).on('click', function (e) {
                                    var tabs = $(this).attr('href');
                                    if (tabs == '#first') {
                                        urlText.attr('data-url', '?layer=6:1');
                                        videoAjax(6, videoDom);
                                    } else {
                                        urlText.attr('data-url', '?layer=8:1');
                                        videoAjax2(8, videoDom);
                                    }

                                    e.preventDefault();
                                })
                            });

                        }
                    });
                });

                $('.aj li a').each(function () {
                    var ajaxDom = $('.detailPop .conlist');
                    $(this).on('click', function (e) {
                        var thisHref = $(this).attr('href');
                        thisHref = new String(thisHref)
                        var numbs = /[^0-9]/g;
                        thisHref = thisHref.replace(numbs, '');
                        var fixedHref = thisHref;
                        thisHref = thisHref - 1;
                        popUpup($('#urlText'), 'detailPop', fixedHref, true)
                        //close(popWrap,false,true);
                        $('.detailPop').addClass('active ex')
                        ajaxLoad(thisHref, ajaxDom);
                        e.preventDefault();

                    });
                })

                popWrap.find('.closeBtn').on('click', function (e) {
//                    var removeAddress = window.location.search
//                    window.location.replace(urlString.replace(removeAddress, ''));
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();


                    e.preventDefault();
                });

                videopopWrap.find('.closeBtn').on('click', function (e) {
                    close(videopopWrap);
                    $('.dimmed').remove();
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.videoAjax').remove();
                    e.preventDefault();
                });



            },
            newsAjaxSave: function (target, targetContents) {
                $.ajax({
                    type: "GET",
                    url: "/json/news.json",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        var inner = "<div class='news_list_slider'>";

                        $.each(data, function (index, entry) {
                            index = index + 1;
                            index < 9 ? index = '0' + index : index;

                            inner += "<div>"
                            inner += "<a href='#' id='news" + index + "'>"
                            inner += "<div class='imgWrapper'>"
                            inner += "<img src=" + entry.banners + ".jpg>"
                            inner += "</div>"
                            inner += "<p>" + entry.stylename + "</p>"
                            inner += "</a>"
                            inner += "</div>"

                            target.html(inner);


                            $('.news_list_slider').on('init', function (event, slick) {
                                var currents = (slick.currentSlide);
                                var index = slick.currentSlide + 1
                                targetContents.removeClass('on');
                                targetContents.eq(currents).addClass('on');


                            });

                            $('.news_list_slider').slick({
                                centerMode: true,
                                slidesToShow: 3,
                                dots: true,
                                variableWidth: true
                            });


                            $('.news_list_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                                var currents = '0' + (nextSlide);
                                targetContents.removeClass('on');
                                targetContents.eq(currents).addClass('on');
                            });

                            $('.news_list_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                                var current = currentSlide + 1;
                                var url = "?layer=2:" + current + ""
                                $('#urlText').attr('data-url', url)


                            });



                        });

                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            urlNewsPop: function (frameHash) {
                var popWrap = this.opened.newsPop;
                var mainPopButton = this.opened.newsMainList;
                var popContents = this.opened.newsContents;
                var returnMenu = this.openOffset(mainPopButton);
                var dimmed = this.dim;
                var close = this.closed;
                var commonChecked = this.opened.commonChecked;
                var ajaxLoad = this.newsAjaxSave;
                var saveLocation = window.location.search;


                popWrap.addClass('active');
                dimmed();
                commonChecked.attr('data-url', saveLocation);
                ajaxLoad($('.newsAjax'), popContents);

                setTimeout(function () {
                    popWrap.find('.slick-dots li').eq(frameHash).trigger('click')
                }, 300);

                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();
                    e.preventDefault();
                });
            },
            newsPop: function () {
                //stylepick 팝업부분
                var popWrap = this.opened.newsPop;
                var mainPopButton = this.opened.newsMainList;
                var popContents = this.opened.newsContents;
                var returnMenu = this.openOffset(mainPopButton);
                var dimmed = this.dim;
                var close = this.closed;
                var urlText = this.opened.commonChecked;
                var ajaxLoad = this.newsAjaxSave;
                var shares = this.shares;
                var scrolling = this.scrolls;


                scrolling(popWrap.find('.popWrapping'), popWrap.find('.buttonWrapping button'))

                mainPopButton.filter('a.popOn').each(function () {
                    $(this).on('click', function (e) {
                        setTimeout(function () {
                            ajaxLoad($('.newsAjax'), popContents);
                        }, 300)
                        var thisHref = $(this).attr('href');
                        popWrap.addClass('active');
                        dimmed();
                        e.preventDefault();


                        if (popWrap.hasClass('active')) {

                            var thisHash = new String(thisHref);
                            var numbs = /[^0-9]/g;
                            thisHash = thisHref.replace(numbs, '');
                            thisHash = thisHash.replace(/(^0+)/, "");
                            var fixedHref = thisHash;
                            thisHash = thisHash - 1;


                            var newUrl = shares(urlText, 'newsPop', fixedHref)
                            $('#urlText').attr('data-url', newUrl)
                            /*
                             if (urlString.match(oldUrl)){
                             window.location.replace(urlString.replace(oldUrl, newUrl));
                             }
                             */
                            setTimeout(function () {
                                popWrap.find('.slick-dots li').eq(thisHash).trigger('click');
                            }, 400);


                            popWrap.find('.slick-dots').tab({
                                contents: popContents,
                                navB: '>li button'
                            });
                        }
                    });
                });


                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();

                    e.preventDefault();
                });



            },
            detailAjaxSave: function (hrefIndex, target, target2) {
                $.ajax({
                    type: "GET",
                    url: "/json/detail",
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        var inner = "";
                        var inner2 = '';

                        inner += "<div class='detailWrapper'>"
                        inner += "<div class='one'>"
                        inner += "</div>"
                        inner += "<div class='detailText'>"
                        inner += "<div><img src=" + data[hrefIndex].detailMain + ".jpg></div>"
                        inner += "<h2>" + data[hrefIndex].detailHead + "</h2>"
                        inner += "<div class='linked'>"
                        inner += "<a href=" + data[hrefIndex].detailLink + " target='_blank'>" + data[hrefIndex].detailBuy + "</a>"
                        inner += "<a href=" + data[hrefIndex].detailRelative + " target='_blank'>" + data[hrefIndex].detailLinkText + "</a>"
                        inner += "</div>"
                        inner += "</div>"
                        inner += "</div>"

                        inner2 += "<ul>"
                        inner2 += "<li><img src=" + data[hrefIndex].detailImg01 + ".png></li>"
                        inner2 += "<li><img src=" + data[hrefIndex].detailImg02 + ".png></li>"
                        inner2 += "<li class='color_bottom'><img src=" + data[hrefIndex].detailImg03 + ".png></li>"
                        inner2 += "<li><img src=" + data[hrefIndex].detailImg04 + ".png></li>"
                        inner2 += "</ul>"

                        $('.detailPop .productTop').html(inner);
                        $('.detailPop .productList').html(inner2);



                        for (i = 0; i < data[hrefIndex].detailColor.length; i++) {
                            var slideLength = "<div><img src=" + data[hrefIndex].detailColor[i] + ".jpg></div>"
                            $('.one').append(slideLength)
                        }

                        $('.one').slick({
                            autoplay: true,
                            fade: true,
                            cssEase: 'linear',
                            autoplaySpeed: 2000,
                        });

                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            urldetailPop: function (layer, thisHash) {
                var popWrap = this.opened.detailPop;
                var mainPopButton = this.opened.detailMainList;
                var returnMenu = this.openOffset(mainPopButton);
                var dimmed = this.dim;
                var close = this.closed;
                var ajaxLoad = this.detailAjaxSave;
                var ajaxDom = $('.detailPop .productTop');
                var ajaxDom2 = $('.detailPop .productList');
                var commonChecked = this.opened.commonChecked;
                var saveLocation = window.location.search;


                commonChecked.attr('data-url', saveLocation);

                popWrap.addClass('active');
                ajaxLoad(layer, ajaxDom, ajaxDom2, thisHash);
                dimmed();


                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();
                    e.preventDefault();
                });
            },
            detailPop: function () {
                //stylepick 팝업부분               
                var popWrap = this.opened.detailPop;
                var mainPopButton = this.opened.detailMainList;
                var dimmed = this.dim;
                var close = this.closed;
                var returnMenu = this.openOffset(mainPopButton);
                var ajaxLoad = this.detailAjaxSave;
                var ajaxDom = $('.detailPop .productTop');
                var ajaxDom2 = $('.detailPop .productList');
                var urlText = this.opened.commonChecked;
                var url = this.shares;
                var scrolling = this.scrolls;


                scrolling(popWrap.find('.popWrapping'), popWrap.find('.buttonWrapping button'))


                mainPopButton.each(function () {
                    $(this).on('click', function (e) {
                        var thisHref = $(this).attr('href');
                        thisHref = new String(thisHref)
                        var numbs = /[^0-9]/g;
                        thisHref = thisHref.replace(numbs, '');
                        var fixedHref = thisHref;
                        thisHref = thisHref - 1;
                        popWrap.addClass('active');
                        var newUrl = url(urlText, 'detailPop', fixedHref);

                        dimmed(true, mainPopButton);

                        e.preventDefault();
                        if (popWrap.hasClass('active')) {
                            ajaxLoad(thisHref);
                        }
                    });
                });



                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap)
                    TweenLite.to($('body,html'), 0.5, {scrollTop: returnMenu,
                        ease: Power2.easeInOut});
                    $('.dimmed').remove();
                    e.preventDefault();
                });

                popWrap.find('.exCloseBtn').on('click', function (e) {
                    close(popWrap);
                    urlText.removeAttr('data-saveurl')
                    popWrap.removeClass('ex')
                    $('.dimmed').remove();
                    dimmed();
                    e.preventDefault();
                });





            },
            videoAjaxSave: function (hrefIndex, target) {
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
                            var maxLength = 4;

                            for (i = 0; i < maxLength; i++) {
                                var indexing = i + 1;
                                inner += "<li>"
                                inner += "<div class='videoWrapper'>"
                                inner += "<video id='introVideo" + indexing + "' preload='auto'>"
                                inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                inner += "</div>"
                                inner += "<div class='shareSns'>"
                                inner += "<p>#" + indexing + "</p>"
                                inner += "<ul>"
                                inner += "<li class='dmt-fb2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_facebook.png' alt='페이스북 공유' /></a></li>"
                                inner += "<li class='dmt-tw2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_twee.png' alt='트위터 공유' /></a></li>"
                                inner += "<li class='dmt-story2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp' ><img src='/images/share_kakao.png' alt='카카오스토리 공유' /></a></li>"
                                inner += "<li class='dmt-url' data-url='?layer=7:" + indexing + "'><button class='dmt-sp videoCopy-button'><img src='/images/share_url.png' alt='url 복사하기' /></button></li>"
                                inner += "</ul>"
                                inner += "</div>"
                                inner += "</li>"

                            }

                            target.html(inner);
                            $('video').on('mouseenter', function () {
                                $(this).attr('controls', 'controls')
                            }).on('mouseleave', function () {
                                $(this).removeAttr('controls', '')
                            });


                            setTimeout(function () {
                                $('.mores').on('click', function () {
                                    var oldLength = maxLength;
                                    var dataLength = data.length;

                                    maxLength = maxLength + 4;

                                    if (maxLength > dataLength) {
                                        maxLength = dataLength;
                                        $('.mores').hide();
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto'>"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<ul>"
                                            inner += "<li class='dmt-fb2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_facebook.png' alt='페이스북 공유' /></a></li>"
                                            inner += "<li class='dmt-tw2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_twee.png' alt='트위터 공유' /></a></li>"
                                            inner += "<li class='dmt-story2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp' ><img src='/images/share_kakao.png' alt='카카오스토리 공유' /></a></li>"
                                            inner += "<li class='dmt-url' data-url='?layer=7:" + indexing + "'><button class='dmt-sp videoCopy-button'><img src='/images/share_url.png' alt='url 복사하기' /></button></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</li>"

                                        }
                                        target.html(inner);
                                        $('video').on('mouseenter', function () {
                                            $(this).attr('controls', 'controls')
                                        }).on('mouseleave', function () {
                                            $(this).removeAttr('controls', '')
                                        });
                                        videoSns();
                                    } else {
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto'>"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<ul>"
                                            inner += "<li class='dmt-fb2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_facebook.png' alt='페이스북 공유' /></a></li>"
                                            inner += "<li class='dmt-tw2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_twee.png' alt='트위터 공유' /></a></li>"
                                            inner += "<li class='dmt-story2' data-url='?layer=7:" + indexing + "'><a href='#' class='dmt-sp' ><img src='/images/share_kakao.png' alt='카카오스토리 공유' /></a></li>"
                                            inner += "<li class='dmt-url' data-url='?layer=7:" + indexing + "'><button class='dmt-sp videoCopy-button'><img src='/images/share_url.png' alt='url 복사하기' /></button></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</li>"
                                        }
                                        target.html(inner);
                                        $('video').on('mouseenter', function () {
                                            $(this).attr('controls', 'controls')
                                        }).on('mouseleave', function () {
                                            $(this).removeAttr('controls', '')
                                        });
                                        videoSns();
                                    }

                                });
                            }, 500)

                            function videoSns() {
                                $('.dmt-fb2').on('click', function () {
                                    popup('videoFacebook', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.dmt-tw2').on('click', function () {
                                    popup('videoTwitter', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.dmt-story2').on('click', function () {
                                    popup('videoKakaostory', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.videoCopy-button').on('click', function (e) {
                                    var thisUrl = $(this).parent().attr('data-url')
                                    var url = window.location.hostname + thisUrl;
                                    console.log(thisUrl)
                                    var videoCopy = new Clipboard('.videoCopy-button', {
                                        text: function () {
                                            return url;
                                        }
                                    });

                                    videoCopy.on('success', function (e) {
                                        alert("URL이 복사되었습니다. 원하는 곳에 붙여넣기(Ctrl+V)해주세요.");

                                    });

                                    videoCopy.on('error', function (e) {
                                        prompt("Ctrl+C 또는 길게 눌러 복사하세요.", url);
                                        //console.log(e);
                                    });
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

                            inner += "<video id='introVideo" + frame_results + "' preload='auto'>"
                            inner += "<source src=" + data[frame_results].videoAd + " type='video/mp4' />"

                            target.html(inner);
                            
                            $('video').on('mouseenter', function () {
                                $(this).attr('controls', 'controls')
                            }).on('mouseleave', function () {
                                $(this).removeAttr('controls', '')
                            });

                        }
                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            videoAjaxSave2: function (hrefIndex, target) {
                $.ajax({
                    type: "GET",
                    url: "/json/videoList2.json",
                    dataType: "json",
                    cache: false,
                    success: function (data) {

                        var urls = $('#urlText').attr('data-url')
                        var matching = urls.match(/\d+/g);
                        matching.length == 3 ? matching[1] = matching[2] : ''
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
                            var maxLength = 4;

                            for (i = 0; i < maxLength; i++) {
                                var indexing = i + 1;
                                inner += "<li>"
                                inner += "<div class='videoWrapper'>"
                                inner += "<video id='introVideo" + indexing + "' preload='auto' controls>"
                                inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                inner += "</div>"
                                inner += "<div class='shareSns'>"
                                inner += "<p>#" + indexing + "</p>"
                                inner += "<ul>"
                                inner += "<li class='dmt-fb2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_facebook.png' alt='페이스북 공유' /></a></li>"
                                inner += "<li class='dmt-tw2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_twee.png' alt='트위터 공유' /></a></li>"
                                inner += "<li class='dmt-story2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp' ><img src='/images/share_kakao.png' alt='카카오스토리 공유' /></a></li>"
                                inner += "<li class='dmt-url' data-url='?layer=9:" + indexing + "'><button class='dmt-sp videoCopy-button'><img src='/images/share_url.png' alt='url 복사하기' /></button></li>"
                                inner += "</ul>"
                                inner += "</div>"
                                inner += "</li>"

                            }

                            target.html(inner);
                            $('video').on('mouseenter', function () {
                                $(this).attr('controls', 'controls')
                            }).on('mouseleave', function () {
                                $(this).removeAttr('controls', '')
                            });


                            setTimeout(function () {
                                $('.mores').on('click', function () {
                                    var oldLength = maxLength;
                                    var dataLength = data.length;

                                    maxLength = maxLength + 4;

                                    if (maxLength > dataLength) {
                                        maxLength = dataLength;
                                        $('.mores').hide();
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto'>"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<ul>"
                                            inner += "<li class='dmt-fb2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_facebook.png' alt='페이스북 공유' /></a></li>"
                                            inner += "<li class='dmt-tw2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_twee.png' alt='트위터 공유' /></a></li>"
                                            inner += "<li class='dmt-story2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp' ><img src='/images/share_kakao.png' alt='카카오스토리 공유' /></a></li>"
                                            inner += "<li class='dmt-url' data-url='?layer=9:" + indexing + "'><button class='dmt-sp videoCopy-button'><img src='/images/share_url.png' alt='url 복사하기' /></button></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</li>"

                                        }
                                        target.html(inner);
                                        $('video').on('mouseenter', function () {
                                            $(this).attr('controls', 'controls')
                                        }).on('mouseleave', function () {
                                            $(this).removeAttr('controls', '')
                                        });
                                        videoSns();
                                    } else {
                                        for (i = oldLength; i < maxLength; i++) {
                                            var indexing = i + 1;
                                            inner += "<li>"
                                            inner += "<div class='videoWrapper'>"
                                            inner += "<video id='introVideo" + indexing + "' preload='auto'>"
                                            inner += "<source src=" + data[i].videoAd + " type='video/mp4' />"
                                            inner += "</div>"
                                            inner += "<div class='shareSns'>"
                                            inner += "<p>#" + indexing + "</p>"
                                            inner += "<ul>"
                                            inner += "<li class='dmt-fb2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_facebook.png' alt='페이스북 공유' /></a></li>"
                                            inner += "<li class='dmt-tw2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp'><img src='/images/share_twee.png' alt='트위터 공유' /></a></li>"
                                            inner += "<li class='dmt-story2' data-url='?layer=9:" + indexing + "'><a href='#' class='dmt-sp' ><img src='/images/share_kakao.png' alt='카카오스토리 공유' /></a></li>"
                                            inner += "<li class='dmt-url' data-url='?layer=9:" + indexing + "'><button class='dmt-sp videoCopy-button'><img src='/images/share_url.png' alt='url 복사하기' /></button></li>"
                                            inner += "</ul>"
                                            inner += "</div>"
                                            inner += "</li>"
                                        }
                                        target.html(inner);
                                        $('video').on('mouseenter', function () {
                                            $(this).attr('controls', 'controls')
                                        }).on('mouseleave', function () {
                                            $(this).removeAttr('controls', '')
                                        });
                                        videoSns();
                                    }

                                });
                            }, 500)

                            function videoSns() {
                                $('.dmt-fb2').on('click', function () {
                                    popup('videoFacebook', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.dmt-tw2').on('click', function () {
                                    popup('videoTwitter', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.dmt-story2').on('click', function () {
                                    popup('videoKakaostory', 'window.location.href', 'DIMATTO VIDEO', $(this));
                                });

                                $('.videoCopy-button').on('click', function (e) {
                                    var thisUrl = $(this).parent().attr('data-url')
                                    var url = window.location.hostname + thisUrl;
                                    console.log(thisUrl);
                                    var videoCopy = new Clipboard('.videoCopy-button', {
                                        text: function () {
                                            return url;
                                        }
                                    });

                                    videoCopy.on('success', function (e) {
                                        alert("URL이 복사되었습니다. 원하는 곳에 붙여넣기(Ctrl+V)해주세요.");

                                    });

                                    videoCopy.on('error', function (e) {
                                        prompt("Ctrl+C 또는 길게 눌러 복사하세요.", url);
                                        //console.log(e);
                                    });
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

                            inner += "<video id='introVideo" + frame_results + "' preload='auto'>"
                            inner += "<source src=" + data[frame_results].videoAd + " type='video/mp4' />"

                            target.html(inner);
                            $('video').on('mouseenter', function () {
                                $(this).attr('controls', 'controls')
                            }).on('mouseleave', function () {
                                $(this).removeAttr('controls', '')
                            });
                        }
                    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Status: " + textStatus);
                    }, timeout: 3000
                });
            },
            urlvideoPop: function (layer) {
                var popWrap = this.opened.videoPop;
                var dimmed = this.dim;
                var close = this.closed;
                var ajaxLoad = this.videoAjaxSave;
                var ajaxLoad2 = this.videoAjaxSave2;
                var ajaxDom = $('.videoPop .videoList');
                var commonChecked = this.opened.commonChecked;
                var saveLocation = window.location.search;
                var scrolling = this.scrolls;

                scrolling(popWrap.find('.popWrapping'), popWrap.find('.buttonWrapping button'));
                commonChecked.attr('data-url', saveLocation);

                ajaxLoad(layer, ajaxDom);
                ajaxLoad2(layer, ajaxDom);

                $('.video_tab li a').each(function (e) {
                    $(this).on('click', function (e) {
                        var tabs = $(this).attr('href');
                        if (tabs == '#first') {
                            commonChecked.attr('data-url', '?layer=6:1');
                            ajaxLoad(layer, ajaxDom);
                        } else {
                            commonChecked.attr('data-url', '?layer=8:1');
                            ajaxLoad2(layer, ajaxDom);
                        }

                        e.preventDefault();
                    })
                });



                popWrap.addClass('active');


                dimmed();


                popWrap.find('.closeBtn').on('click', function (e) {
                    close(popWrap);
                    $('.mores').show();
                    $('.videoPop h2').removeClass('one');
                    $('.defaultBottom').removeClass('one');
                    $('.popDefault .popWrapping').removeClass('one');
                    $('.videoList').children().remove();
                    $('.dimmed').remove();
                    e.preventDefault();
                });
            }
        }
    }


    $.relatives = {
        common: function (xx) {
            $('.counted ul').removeClass();
            $('.counted ul').addClass(xx);
        },
        w1920: function () {
            $('body').css({background: '#fb6257'});
            this.common('active');
        },
        w1024: function () {
            $('body').css({background: 'green'});
            this.common('two');
        },
        w720: function () {
            $('body').css({background: 'blue'});
            this.common('three');

        },
        defalut: function () {
            $('body').css({background: '#fff'});
        }
    }


}(jQuery))
