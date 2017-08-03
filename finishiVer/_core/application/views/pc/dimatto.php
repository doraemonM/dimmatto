<!doctype html>
<html lang="ko">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
        <meta name="viewport" content="width=1280" />
        <meta name="robots" content="All, index,follow" />
        <meta name="format-detection" content="telephone=no">
        <meta name="Descript-xion" content="Dimatto- Pick your style" />
        <meta name="Keywords" content="쇼핑몰,동대문" />
        <meta property="fb:app_id" content="1850012518562288">
        <meta property="og:title" content="dimatto">
        <meta property="og:url" content="http://www.dimatto.com/en/pc/html/details7.html">
        <meta property="og:description" content="Unique street styles! Here are some of the must-buy items! Dimatto!">
        <meta property="og:image" content="http://www.dimatto.com/thumbnail/thumbnail.png">
        <link rel="stylesheet" href="/css/common.css">
        <link rel="stylesheet" href="/css/slick.css">
        <link rel="stylesheet" href="/css/main.css">
        <style type="text/css">
         
            
        </style>

    </head>

    <body>  
<!--        <div class="loading">
            <img class="loading_action" src="/images/loading.png" alt="dimatto" />
        </div>-->
        <div id="urlText"></div>
        <div id="wrap">    
            <!-- GNB 메뉴 -->
            <div class="gnbPop">
                <a href="#" class="closeBtn"><img src="/images/gnbClosed.png" alt="" /></a>
                <ul class="gnbList">
                    <li><a href="#newsPop">TALK&amp;ISSUE</a></li>     
                    <li><a href="#stylepickPop">STYLE PICK</a></li>
                    <li><a href="#collectionPop">RUNWAY DIMATTO</a></li>
                    <li><a href="#webzinPop">S.PICK MAGAZINE</a></li>
                    <li><a href="#brandPop">ABOUT DIMATTO</a></li>       
                    <li><a href="#videoPop">EDITOR'S CHOICE</a></li> 
                </ul>
                <div class="lang">
                    <ul>
                        <?php if ($this->session->lang !== "kr") : ?>
                            <li><a href="<?= base_url() ?>lang/set/kr">KOREAN</a></li>
                        <?php endif; ?>
                        <?php if ($this->session->lang !== "en") : ?>
                            <li><a href="<?= base_url() ?>lang/set/en">ENGLISH</a></li>
                        <?php endif; ?>
                        <?php if ($this->session->lang !== "cn") : ?>
                            <li><a href="<?= base_url() ?>lang/set/cn">CHINESE</a></li>
                        <?php endif; ?>
                    </ul>
                </div>
                <div class="sns">
                    <a href="https://www.facebook.com/dimatto.story/" target="_blank"><img src="/images/facebook.png" alt="" /></a>
                    <a href="https://www.instagram.com/dimatto_kr" target="_blank"><img src="/images/instagram.png" alt="" /></a>
                </div>
                <div class="family">
                    <select>
                        <option value="familysite" style="color:white">FAMILY SITE</option>
                        <option value="http://www.stiledimatto.com/" style="color:white">Stile Dimatto</option>
                    </select>
                    <button class="family_site_btn">GO</button>
                </div>
            </div>
            <!-- 브랜드 팝업 -->
            <div class="brandPop popDefault">
                <a href="#" class="closeBtn">x</a>
                <div class="popOver">
                    <div class="popWrapping">                     
                        <h2><img src="/images/brand/brandHead.png" alt="brand story" /></h2>                        
                        <div class="brandTop topImg">
                            <img src="/images/brand/brandTops.jpg" alt="" />
                            <div class="shareSns">
                                <ul>                   
                                    <li class="dmt-fb"><a href="#" class="dmt-sp" onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_facebook.png" alt="페이스북 공유" /></a></li> 
                                    <li class="dmt-tw"><a href="#" class="dmt-sp" onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><img src="/images/share_twee.png" alt="트위터 공유" /></a></li>                                     
                                    <li class="dmt-story"><a href="#" class="dmt-sp" onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_kakao.png" alt="카카오스토리 공유" /></a></li> 
                                    <li class="dmt-url"><button class="dmt-sp copy-button"><img src="/images/share_url.png" alt="url 복사하기" /></button></li> 
                                </ul> 
                            </div>
                        </div>                        
                        <div class="textWrapping">
                            <h3>
                                <?= uText("INDEPENDENT GIRLS<br>FROM DIMATTO") ?>
                            </h3>
                            <p class="nanum">
                                <?= uText("전세계에서 펼쳐지는 가장 트렌디한 룩을 생중계하는 dimatto.<br>현재의 런웨이는 패션쇼장이 아닌 도시의 스트리트, 분위기 있는 카페 테라스,<br>공항에서 마주하는 리얼 웨이이죠. 가장 동 시대적인 현재의 트렌드를 담아내는 dimatto!<br>베이직하고 일상적인 아이템을 dimatto의 감성으로 풀어냅니다.") ?>                                
                            </p>
                        </div>                        
                        <ul class="brandLook defaultBottom">
                            <li class="left">              
                                <div><img src="/images/brand/brand1_1.png" alt="" /></div>
                                <div class="ab">
                                    <img src="/images/brand/brand1_2.png" alt="" />
                                    <p>
                                        <?= uText("새로운 것에 관심을 집중하고<br>음악과 아트 그리고 모험을 즐기는 그녀!<br>SNS와 일상이 연결된 18-23세 여성들이<br>지금 현재 주목하고 있는 아이템을 소개합니다!<br>물론 입는 법, 즐기는 법까지요.") ?>
                                    </p>
                                </div>
                            </li>
                            <li class="right">
                                <div class="ab">
                                    <img src="/images/brand/brand2_1.png" alt="" />
                                    <p>
                                        <?= uText("자유롭고 웨어러블 한 젊은 도시 여성의<br>스타일리시 캐주얼 룩.<br>현재의 트렌드를 반영한 데일리 룩.<br>스트릿 트렌드를 가미한 위트 있는 스타일링.") ?>
                                    </p>
                                </div>
                                <div>
                                    <img src="/images/brand/brand2_2.png" alt="" />                                    
                                </div>
                            </li>
                            <li class="center">
                                <div><img src="/images/brand/brand3.png" alt="" /></div>
                            </li>
                        </ul>
                    </div>
                    <div class="popupFooter">
                        <div class="buttonWrapping">
                            <button><img src="/images/popupTop.png" alt="" /></button>
                        </div>                        
                        <p>Copyright©2017 DCG All rights reserved.</p>
                    </div>
                </div>   
            </div>
            <!-- 스타일픽 팝업 -->
            <div class="stylepickPop popDefault">
                <a href="#" class="closeBtn">x</a>
                <div class="popOver">
                    <div class="popWrapping">                   
                        <h2><img src="/images/stylepick/stylepickHead.png" alt="stylepick" /></h2>                        
                        <div class="styleAjax">

                        </div>  
                        <div class="styleContents defaultBottom">
                            <?= $this->load->view("style_contents") ?>
                        </div>
                    </div>
                </div>
                <div class="popupFooter">
                    <div class="buttonWrapping">
                        <button><img src="/images/popupTop.png" alt="" /></button>
                    </div>                        
                    <p>Copyright©2017 DCG All rights reserved.</p>
                </div>
            </div>
            <!-- 뉴스 팝업 -->
            <div class="newsPop popDefault">    
                <a href="#" class="closeBtn">x</a>
                <div class="popOver">
                    <div class="popWrapping">                   
                        <h2><img src="/images/news/newsHead.png" alt="news" /></h2>  
                        <div class="newsAjax">

                        </div>                       
                        <div class="newsContents defaultBottom">
                            <?= $this->load->view("news_contents") ?>                            
                        </div>
                    </div>
                </div>
                <div class="popupFooter">
                    <div class="buttonWrapping">
                        <button><img src="/images/popupTop.png" alt="" /></button>
                    </div>                        
                    <p><?= uText("Copyright©2017 DCG All rights reserved.") ?></p>
                </div>
            </div>
            <!-- 디테일 팝업 -->
            <div class="detailPop popDefault">   
                <a href="#" class="closeBtn">x</a>
                <a href="#" class="exCloseBtn">x</a>            
                <div class="popOver">
                    <div class="popWrapping">          
                        <h2><img src="/images/product/productHead.png" alt="PRODUCT" /></h2>
                        <div class="productTop">

                        </div>
                        <div class="shareSns">
                            <ul>                   
                                <li class="dmt-fb"><a href="#" class="dmt-sp" onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_facebook.png" alt="페이스북 공유" /></a></li> 
                                <li class="dmt-tw"><a href="#" class="dmt-sp" onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><img src="/images/share_twee.png" alt="트위터 공유" /></a></li>                                     
                                <li class="dmt-story"><a href="#" class="dmt-sp" onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_kakao.png" alt="카카오스토리 공유" /></a></li> 
                                <li class="dmt-url"><button class="dmt-sp copy-button"><img src="/images/share_url.png" alt="url 복사하기" /></button></li> 
                            </ul> 
                        </div>
                        <div class="productList defaultBottom"></div>
                    </div>
                    <div class="popupFooter">
                        <div class="buttonWrapping">
                            <button><img src="/images/popupTop.png" alt="" /></button>
                        </div>                        
                        <p><?= uText("Copyright©2017 DCG All rights reserved.") ?></p>
                    </div>
                </div>
            </div>
            <!-- 콜렉션 팝업 -->
            <div class="collectionPop popDefault">
                <a href="#" class="closeBtn">x</a>
                <div class="popOver">
                    <div class="popWrapping">                   
                        <h2><img src="/images/collection/collectionHead.png" alt="collection" /></h2>  
                        <div class="collectionAjax">

                        </div>                       
                        <div class="collectionContents defaultBottom">
                            <div class="on">
                                <div class="topImg">
                                    <img src="/images/collection/top_img.jpg" alt="" />
                                    <div class="shareSns">
                                        <ul>                   
                                            <li class="dmt-fb"><a href="#" class="dmt-sp" onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_facebook.png" alt="페이스북 공유" /></a></li> 
                                            <li class="dmt-tw"><a href="#" class="dmt-sp" onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><img src="/images/share_twee.png" alt="트위터 공유" /></a></li>                                     
                                            <li class="dmt-story"><a href="#" class="dmt-sp" onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_kakao.png" alt="카카오스토리 공유" /></a></li> 
                                            <li class="dmt-url"><button class="dmt-sp copy-button"><img src="/images/share_url.png" alt="url 복사하기" /></button></li> 
                                        </ul> 
                                    </div>
                                </div>
                                <div class="textWrapping">
                                    <h3 class="subHead">
                                        <?= uText("2016 S/S COLLECTION1") ?>
                                    </h3>                                    
                                </div>                                   
                                <div class="collectionImg">
                                    <ul>
                                        <li class="top_list"><img src="/images/collection/collection01.jpg" alt="" /></li>
                                        <li class="rightAb top_list">
                                            <div class="lineSection">
                                                <p><img src="/images/collection/collectionImg.png" alt="" /></p>
                                            </div>
                                            <img src="/images/collection/collection02.jpg" alt="" />
                                        </li>
                                        <li><img src="/images/collection/collection03.jpg" alt="" /></li>
                                        <li class="rightAb">
                                            <img src="/images/collection/collection04.jpg" alt="" />
                                            <div class="lineSection">
                                                <p><img src="/images/collection/collectionImg.png" alt="" /></p>
                                            </div>
                                        </li>
                                        <li><img src="/images/collection/collection05.jpg" alt="" /></li>
                                        <li class="rightAb">
                                            <img src="/images/collection/collection06.jpg" alt="" />
                                            <div class="lineSection">
                                                <p><img src="/images/collection/collectionImg.png" alt="" /></p>
                                            </div>
                                        </li>
                                        <li><img src="/images/collection/collection07.jpg" alt="" /></li>
                                        <li class="rightAb">
                                            <img src="/images/collection/collection08.jpg" alt="" />
                                            <div class="lineSection">
                                                <p><img src="/images/collection/collectionImg.png" alt="" /></p>
                                            </div>
                                        </li>
                                        <li><img src="/images/collection/collection09.jpg" alt="" /></li>
                                        <li class="rightAb">
                                            <img src="/images/collection/collection10.jpg" alt="" />
                                            <div class="lineSection">
                                                <p><img src="/images/collection/collectionImg.png" alt="" /></p>
                                            </div>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div class="topImg">
                                    <img src="/images/collection/top_img.jpg" alt="" />
                                    <div class="shareSns">
                                        <ul>                   
                                            <li class="dmt-fb"><a href="#" class="dmt-sp" onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_facebook.png" alt="페이스북 공유" /></a></li> 
                                            <li class="dmt-tw"><a href="#" class="dmt-sp" onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><img src="/images/share_twee.png" alt="트위터 공유" /></a></li>                                     
                                            <li class="dmt-story"><a href="#" class="dmt-sp" onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_kakao.png" alt="카카오스토리 공유" /></a></li> 
                                            <li class="dmt-url"><button class="dmt-sp copy-button"><img src="/images/share_url.png" alt="url 복사하기" /></button></li> 
                                        </ul> 
                                    </div>
                                </div>
                                <h3>2016 S/S COLLECTION2</h3>
                            </div>
                            <div>
                                <div class="topImg">
                                    <img src="/images/collection/top_img.jpg" alt="" />
                                    <div class="shareSns">
                                        <ul>                   
                                            <li class="dmt-fb"><a href="#" class="dmt-sp" onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_facebook.png" alt="페이스북 공유" /></a></li> 
                                            <li class="dmt-tw"><a href="#" class="dmt-sp" onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><img src="/images/share_twee.png" alt="트위터 공유" /></a></li>                                     
                                            <li class="dmt-story"><a href="#" class="dmt-sp" onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_kakao.png" alt="카카오스토리 공유" /></a></li> 
                                            <li class="dmt-url"><button class="dmt-sp copy-button"><img src="/images/share_url.png" alt="url 복사하기" /></button></li> 
                                        </ul> 
                                    </div>
                                </div>
                                <h3>2016 F/W COLLECTION1</h3>
                            </div>
                            <div>
                                <div class="topImg">
                                    <img src="/images/collection/top_img.jpg" alt="" />
                                    <div class="shareSns">
                                        <ul>                   
                                            <li class="dmt-fb"><a href="#" class="dmt-sp" onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_facebook.png" alt="페이스북 공유" /></a></li> 
                                            <li class="dmt-tw"><a href="#" class="dmt-sp" onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><img src="/images/share_twee.png" alt="트위터 공유" /></a></li>                                     
                                            <li class="dmt-story"><a href="#" class="dmt-sp" onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_kakao.png" alt="카카오스토리 공유" /></a></li> 
                                            <li class="dmt-url"><button class="dmt-sp copy-button"><img src="/images/share_url.png" alt="url 복사하기" /></button></li> 
                                        </ul> 
                                    </div>
                                </div>
                                <h3>2016 F/W COLLECTION2</h3>   
                            </div>
                            <div>5<div class="shareSns">
                                    <ul>                   
                                        <li class="dmt-fb"><a href="#" class="dmt-sp" onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_facebook.png" alt="페이스북 공유" /></a></li> 
                                        <li class="dmt-tw"><a href="#" class="dmt-sp" onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><img src="/images/share_twee.png" alt="트위터 공유" /></a></li>                                     
                                        <li class="dmt-story"><a href="#" class="dmt-sp" onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><img src="/images/share_kakao.png" alt="카카오스토리 공유" /></a></li> 
                                        <li class="dmt-url"><button class="dmt-sp copy-button"><img src="/images/share_url.png" alt="url 복사하기" /></button></li> 
                                    </ul> 
                                </div></div>
                            <div>6</div>                    
                        </div>
                    </div>
                    <div class="popupFooter">
                        <div class="buttonWrapping">
                            <button><img src="/images/popupTop.png" alt="" /></button>
                        </div>                        
                        <p>Copyright©2017 DCG All rights reserved.</p>
                    </div>
                </div>
            </div>
            <!-- 비디오 팝업 -->
            <div class="videoPop popDefault">
                <a href="#" class="closeBtn">x</a>
                <div class="popOver">
                    <div class="popWrapping">    
                        <h2><img src="/images/video/videoHead.png" alt="news" /></h2>   
                        <div class="defaultBottom">
                            <div class="video_tab">
                                <ul>
                                    <li><a href="#first">10-SECOND</a></li>
                                    <li><a href="#second">SEASONAL</a></li>
                                </ul>
                            </div>

                            <div class="videoList">

                            </div>
                            <p class="moreBtn">
                                <button class="mores onoffHover"><img src="/images/readmore_off.png" alt="read more" /></button>
                            </p>
                        </div>
                    </div>
                    <div class="popupFooter">
                        <div class="buttonWrapping">
                            <button><img src="/images/popupTop.png" alt="" /></button>
                        </div>                        
                        <p>Copyright©2017 DCG All rights reserved.</p>
                    </div>
                </div>
            </div>

            <div class="lines">

            </div>            
            <div class="mainTop viewCheck ">                     
                <button class="gnbBtn"><img src="/images/gnbBtn.png" alt="gnb버튼" /></button>
                <h1>
                    <img class="action" src="/images/logoAction.png" alt="" />
                    <img class="action2" src="/images/logo.png" alt="dimatto-pick your style" />
                </h1>
                <div class="leftBanner">
                    <img src="/images/mainBanner01.png" alt="" />
                </div>
                <div class="rightBanner">
                    <h2>
                        <img src="/images/mainRightHead.png" alt="New arrival" />
                    </h2>
                    <div class="sliderCurrent">
                        <p class="current"></p>
                        <p class="kiho">/</p>
                        <p class="sliderLength"></p>
                    </div>
                    <div class="right-slider">
                        <div><img src="/images/right-slider01.jpg" alt="" /></div>
                        <div><img src="/images/right-slider01.jpg" alt="" /></div>
                        <div><img src="/images/right-slider01.jpg" alt="" /></div>
                        <div><img src="/images/right-slider01.jpg" alt="" /></div> 
                        <div><img src="/images/right-slider01.jpg" alt="" /></div> 
                        <div><img src="/images/right-slider01.jpg" alt="" /></div> 
                        <div><img src="/images/right-slider01.jpg" alt="" /></div>                         
                    </div>

                </div>
            </div>
            <div id="container">
                <div class="viewCheck news">
                    <h2 class="actionWrap">
                        <img class="action1" src="/images/news_arrow01.png" alt="" />
                        <span>
                            <img src="/images/containerHead01.png" alt="dimatto news" />
                        </span>
                        <img class="action2" src="/images/news_arrow02.png" alt="" />
                    </h2>
                    <div class="viewCheck news_pop">
                        <div class="news_con01">
                            <img src="/images/new01.jpg" alt=""  />
                            <div class="textArea">                               
                                <p><?= uText("#꿈꾸고_노래하고_사랑하라 <라라랜드> 패션 | 엠마 스톤처럼 반짝이게 입기") ?></p>
                                <a href="#news01" class="onoffHover popOn"><img src="/images/readmore_off.png" alt="read more" /></a>
                            </div>
                        </div>
                        <div class="news_con02">
                            <div class="videoArea">
                                <video id="introVideo" preload="none" poster="/images/video/main_poster01.jpg">
                                    <source src="http://img.dimatto.com/video/dimatto_2016_1.mp4" type="video/mp4" />     
                                    <div class="novideo"><img src="/images/img_intro.png" alt=""></div>
                                </video>    
                            </div>
                            <div class="textArea">                                 
                                <a href="#news02" class="onoffHover popOn"><img src="/images/readmore_off.png" alt="read more" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="viewCheck stylepick">
                    <div class="styleList actionWrap">
                        <h2>
                            <img class="action2 " src="/images/containerHead02.png" alt="style pick" />
                        </h2>
                        <ul class="stylepick_pop">
                            <li>
                                <a href="#style06" class="onoffHover">
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/stylePick01.png" alt="" />
                                        </div>
                                    </div>
                                </a>

                            </li>
                            <li class="media2">
                                <a href="#style02" class="onoffHover">
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/stylePick02.png" alt="" />
                                        </div>
                                    </div>
                                </a>                                
                            </li>
                            <li class="media1">
                                <a href="#style05" class="onoffHover">
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/stylePick03.png" alt="" />
                                        </div>
                                    </div>
                                </a>                                
                            </li>
                        </ul>
                        <div class="textArea">
                            <h3><?= uText("PINK PINK PARADE") ?></h3>
                            <p><?= uText("핑크를 향한 애정은 무한대!") ?></p>
                            <a href="#style01" class="onoffHover"><img src="/images/readmore_off.png" alt="read more" /></a>
                        </div>
                    </div>                 
                    <div class="modelView actionWrap">                       
                        <img class="action1" src="/images/stylepickIcon.png" alt="" />                        
                        <img  src="/images/stylepickModel.png" alt="" />
                                                    
                    </div>
                </div>
                <div class="viewCheck collection">
                    <h2 class="actionWrap">                        
                        <span>
                            <img src="/images/containerHead03.png" alt="dimatto news"  />
                        </span>                        
                    </h2>
                    <div class="viewCheck">
                        <div class="collection_con01">
                            <div class="videoArea">
                                <video id="collectionVideo1" preload="none" poster="/images/video/main_poster02.jpg">
                                    <source src="http://img.dimatto.com/video/dimatto_2016_26.mp4" type="video/mp4" />     
                                    <div class="novideo"><img src="/images/img_collection.png" alt=""></div>
                                </video>     
                                <video id="collectionVideo2" preload="none" class="even" poster="/images/video/main_poster03.jpg">
                                    <source src="http://img.dimatto.com/video/dimatto_2016_25.mp4" type="video/mp4" />     
                                    <div class="novideo"><img src="/images/img_collection.png" alt=""></div>
                                </video>    
                                <video id="collectionVideo3" class="clear" preload="none" poster="/images/video/main_poster04.jpg">
                                    <source src="http://img.dimatto.com/video/dimatto_2016_24.mp4" type="video/mp4" />     
                                    <div class="novideo"><img src="/images/img_collection.png" alt=""></div>
                                </video>    
                                <video id="collectionVideo4" preload="none" class="even" poster="/images/video/main_poster05.jpg">
                                    <source src="http://img.dimatto.com/video/dimatto_2016_23.mp4" type="video/mp4" />     
                                    <div class="novideo"><img src="/images/img_collection.png" alt=""></div>
                                </video>    
                                <div class="textArea">                              
                                    <a href="#video1" class="onoffHover videoOn"><img src="/images/readmore_off.png" alt="read more" /></a>
                                </div>                                 
                            </div>

                        </div>
                        <div class="collection_con02">
                            <div class="right">
                                <a href="#collection5" class="popOn">
                                    <img class="action "  src="/images/collenction.jpg" alt="" />
                                    <div class="white-dimmed">
                                        <img src="/images/dimmedText.png" alt="readmore" />
                                    </div>
                                </a>
                            </div>                           
                        </div>

                    </div>
                </div>  
                <div class="viewCheck webzine">
                    <div class="actionWrap">
                        <h2><img  class="action" src="/images/containerHead04.png" alt="WEB ZINE" /></h2>
                    </div>                    
                    <a href="#" class="webzine_cover">
                        <div>
                            <img  class="action " src="/images/webzine.jpg" alt="" />
                            <div class="white-dimmed">
                                <img src="/images/dimmedText.png" alt="readmore" />
                            </div>
                        </div>
                    </a>                    
                </div>
                <div class="viewCheck brand"> 
                    <div class="brandWrapper">
                        <div class="actionWrap">
                            <p class="ab"><img src="/images/brand01.jpg" alt=""  /></p>
                            <p class="st"><img  src="/images/brand02.jpg" alt=""  /></p>
                            <h2><img src="/images/containerHead05.png" alt="brand story" /></h2>
                            <div class="textArea">
                                <h3><?= uText("Real-time broadcast of the latest fashion Trend") ?></h3>
                                <p>
                                    <?= uText("전세계에서 펼쳐지는 가장 트렌디한 룩을 생중계하는 dimatto.<br>현재의 런웨이는 패션쇼장이 아닌 도시의 스트리트, 분위기 있는 카페 테라스,<br>공항에서 마주하는 리얼 웨이이죠. 가장 동 시대적인 현재의 트렌드를 담아내는 dimatto!<br>베이직하고 일상적인 아이템을 dimatto의 감성으로 풀어냅니다.") ?>
                                </p>
                                <a href="#" class="onoffHover"><img src="/images/readmore_off.png" alt="read more" /></a>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="viewCheck bottomWrap">
                    <h2><img  class="action" src="/images/containerHead06.png" alt="EDITOR'S CHOICE" /></h2>
                    <div class="bottomSlider">
                        <div class="styleList">
                            <div class="lists">
                                <a href="#detail1" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider01.png" alt="" />
                                        </div>
                                    </div>
                                </a>                             
                            </div>
                            <div class="lists">
                                <a href="#detail2" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider02.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail3" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider03.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail4" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider04.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail5" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider05.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail6" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider05.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail7" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider01.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail8" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider02.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail9" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider03.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div class="lists">
                                <a href="#detail10" class="onoffHover">                                   
                                    <div class="replace">
                                        <img src="/images/styleListPop_off.png" alt="" />
                                    </div>                                    
                                    <div class="styleLists">
                                        <div class="img">
                                            <img src="/images/bottomSlider04.png" alt="" />
                                        </div>
                                    </div>
                                </a>     
                            </div>

                        </div>

                    </div>                    
                </div>


            </div>
            <div id="footer">
                <a href="#" class="topBtn"><img src="/images/topButton.png" alt="" /></a>
                <h2><a href="#"><img src="/images/footerLogo.png" alt="dimatto" /></a></h2>
                <p>
                    <span><?= uText("CG Inc.") ?></span>
                    <span><?= uText("대표 : 오승범") ?></span>
                    <span><?= uText("사업자등록번호 : No. 431-88-00293") ?></span>
                    <span><?= uText("서울 종로구 종로328(창신동330-1) 동대문 빌딩8,9층") ?></span>                                       
                </p>
                <p>
                    <span><?= uText("고객센터 : +82-1577-4782") ?></span>
                    <span><?= uText("E-mail : help@dcgworld.com") ?></span>
                    <span><?= uText("통신판매업신고번호 : 2016-서울종로-0690") ?></span>
                    <span><?= uText("Copyright©2017 DCG All rights reserved.") ?></span>
                </p>
            </div>

        </div>


        <script type="text/javascript" src="/js/jquery-latest.js"></script>
        <script src="/js/TimelineLite.min.js" type="text/javascript"></script>
        <script src="/js/TweenMax.min.js" type="text/javascript"></script>
        <script src="/js/plugins/CSSPlugin.js" type="text/javascript"></script>
        <script src="/js/plugins/EasePack.js" type="text/javascript"></script>
        <script src="/js/jquery.gsap.min.js" type="text/javascript"></script>
        <script src="/js/slick.min.js" type="text/javascript"></script>
        <script src="/js/clipboard.min.js" type="text/javascript"></script>
        <script src="/js/sharesns.js" type="text/javascript"></script>
        <script src="http://developers.kakao.com/sdk/js/kakao.min.js"></script>
        <script type="text/javascript" src="/js/main.js"></script>
        <script type="text/javascript">
            
    
        
                                            $(window).on('load', function () {                                                
                                                $('body,html,#wrap').removeClass('modal');                                              
                                                $(this).trigger('scroll');
                                                $(this).trigger('resize');
                                                $('body').addClass('mainBg');
                                                $.uiExe.main.init();
                                                $.uiExe.subPopup.init();


                                                var layer = <?= isset($layer) ? $layer : "0" ?>;
                                                var frame = <?= isset($frame) ? $frame : "0" ?>;

                                                switch (layer) {
                                                    case 1 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlStylePop(frame - 1);
                                                        }
                                                        break;
                                                    case 2 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlNewsPop(frame - 1);
                                                        }
                                                        break;
                                                    case 3 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlcollectionPop(frame - 1);
                                                        }
                                                        break;
                                                    case 4 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlBrandPop(frame - 1);
                                                        }
                                                        break;
                                                    case 5 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urldetailPop(frame - 1, frame);
                                                        }
                                                        break;
                                                    case 6 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlvideoPop(frame);
                                                        }
                                                        break;
                                                    case 7 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlvideoPop(frame);
                                                        }
                                                        break;
                                                    case 8 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlvideoPop(frame);
                                                        }
                                                        break;
                                                    case 9 :
                                                        if (frame) {
                                                            $.uiExe.subPopup.urlvideoPop(frame);
                                                        }
                                                        break;
                                                    default :
                                                        break;
                                                }

                                                $(".family_site_btn").click(function () {
                                                    var href = $(".family select option:selected").val();
                                                    if (href != "familysite") {
                                                        window.location.href = href;
                                                    }
                                                });

                                            });

                                            $(window).on('scroll', function () {
                                                $('#container').viewPort();
                                            });

                                            $(window).on('resize', function () {
                                                var thisW = $(this).width();
                                                thisW > 1280 ?
                                                        $('.lines').css('left', (-(1903 - $(window).width()) / 2) + 'px')
                                                        : $('.lines').css('left', '-306px')
                                            });

                                            WebFontConfig = {
                                                custom: {
                                                    families: ['NanumBarunGothic'],
                                                    urls: ['https://cdn.rawgit.com/openhiun/hangul/14c0f6faa2941116bb53001d6a7dcd5e82300c3f/nanumbarungothic.css']
                                                }
                                            };
                                            (function () {
                                                var wf = document.createElement('script');
                                                wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                                                        '://ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js';
                                                wf.type = 'text/javascript';
                                                wf.async = 'true';
                                                var s = document.getElementsByTagName('script')[0];
                                                s.parentNode.insertBefore(wf, s);
                                            })();



        </script>
        <!--<![endif]-->
    </body>
</html>