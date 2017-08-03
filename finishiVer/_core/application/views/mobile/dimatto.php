<!DOCTYPE html>
<html lang="ko-KR"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0">
        <meta name="theme-color" content="#000">
        <title>DIMATTO</title>
        <link rel="stylesheet" href="/m/css/base.css">
        <link rel="stylesheet" href="/m/css/swiper.min.css">
        <link rel="stylesheet" href="/m/css/main.css">
        <script src="/m/js/jquery-latest.js" type="text/javascript"></script> 
        <script src="http://developers.kakao.com/sdk/js/kakao.min.js"></script>
        <script src="/m/js/clipboard.min.js" type="text/javascript"></script>
        <script src="/m/js/sharesns.js" type="text/javascript"></script>
        <script src="/m/js/swiper.min.js"></script>
        <script src="/m/js/anime.min.js"></script>        
        <script src="/m/js/main.js"></script>
    </head>
    <body>
        <div id="wrap">   
            <p id="urlText"></p>
            <div class="detailPop popDefault">
                <a href="#" class="closeBtn">x</a>
                <div class="wrapping">
                    <h2>PRODUCT</h2>
                    <div class="productTop">

                    </div>   
                    <button class="top_btn"><img src="/m/images/top_btn.png" alt="TOP" /></button>
                </div>
            </div>
            <div class="videoPop popDefault">
                <a href="#" class="closeBtn">x</a>
                <div class="wrapping">
                    <div class="videoList">

                    </div>
                    <button class="top_btn"><img src="/m/images/top_btn.png" alt="TOP" /></button>
                </div>
            </div>
            <!-- GNB -->
            <div id="gnb">
                <nav class="swipe_go">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">STYLE PICK</a></li>
                        <li><a href="#">COLLECTION</a></li>
                        <li><a href="#">WEB ZINE</a></li>       
                        <li><a href="#">BRAND STORY</a></li>
                        <li><a href="#">VIDEO</a></li>
                    </ul>
                </nav>
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
                    <ul>
                        <li><a href="https://www.facebook.com/dimatto.story/"><img src="/m/images/main/facebook.png" alt="facebook" /></a></li>
                        <li><a href="https://www.instagram.com/dimatto_kr"><img src="/m/images/main/insta.png" alt="instagram" /></a></li>
                    </ul>
                </div>          
                <div class="linked">
                    <select>
                        <option value="familysite" style="color:white">FAMILY SITE</option>
                        <option value="http://www.stiledimatto.com/" style="color:white">Stile Dimatto</option>
                    </select>
                    <button class="family_site_btn">GO</button>
                </div>
            </div>            
            <a href="#" class="menu-button opened">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </a>
            <header id="header" class="after">
                <section class="headerText">                   
                    <h1><a href="#"><img src="/m/images/logo.png" alt="dimatto"></a></h1>           
                </section>
                <nav id="mainNav" class="swiper-container nav-swiper">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide home"><a href="#" class="active"><span>HOME</span></a></li>
                        <li class="swiper-slide news"><a href="#"><span>NEWS</span></a></li>
                        <li class="swiper-slide style"><a href="#"><span>STYLE PICK</span></a></li>
                        <li class="swiper-slide"><a href="#"><span>COLLECTION</span></a></li>
                        <li class="swiper-slide"><a href="#"><span>WEB ZINE</span></a></li>
                        <li class="swiper-slide"><a href="#"><span>BRAND STORY</span></a></li>
                        <li class="swiper-slide"><a href="#"><span>VIDEO</span></a></li>
                    </ul> 
                </nav>
            </header>
            <!-- container -->
            <div id="container">
                <div id="contents">
                    <div class="swipe-body swiper-container main-swipe-wrap" id="con-swipers">
                        <div class="swiper-wrapper" id="con-wrap">   
                            <div class="swiper-slide swiper-main-slide black-slide">                                 
                                <div class="swiper-container main-gall">
                                    <ul class="swiper-wrapper">
                                        <li class="swiper-slide"><img src="/m/images/main/main01.jpg" alt="" /></li>
                                        <li class="swiper-slide"><img src="/m/images/main/main02.jpg" alt="" /></li>
                                        <li class="swiper-slide"><img src="/m/images/main/main03.jpg" alt="" /></li>                                    
                                    </ul>
                                    <div class="swiper-pagination"></div>
                                </div>                                
                                <div class="opened-banner">
                                    <img src="/m/images/main/open.png" alt="" />
                                </div> 
                            </div> 
                            <div class="swiper-slide swiper-main-slide">
                                <div class="swiper-slide ">
                                    <!-- 뉴스 nav 
                                    <div class="news-nav">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="/m/images/news/banner01.jpg" alt="" />
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="/m/images/news/banner02.jpg" alt="" />
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="/m/images/news/banner03.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                     nav 끝 -->
                                    <div class="banner-wrapper news-swipe">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                    
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/news/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>#꿈꾸고_노래하고_사랑하라 &lt;라라랜드&gt; 패션 | 엠마 스톤처럼 반짝이게 입기</h2>
                                                            <p>풍성한 음악 만큼이나 풍부한 색채의 향연을 보여주는 &lt;라라랜드&gt;에서 원색 의상은 주인공 엠마 스톤을 더욱 찬란하게 만든다. 경쾌한 탭댄스를 출 땐 노란 원피스, 파티를 즐길 땐 파란 홀터넥 드레스,왈츠의 우아한 리듬에 따라 찰랑거리는 초록 원피스까지.관객의 시선을 사로잡는 &lt;라라랜드&gt;의 엠마 스톤처럼 현실에서도 빛나려면 어떻게 할까? 2016년 크리스마스와 연말 모임에서 엠마 스톤처럼 주위 시선을 ‘일시 정지’ 시킬 현실 패션을 제안한다.</p>
                                                            <p class="edi">-채소라 에디터-</p>
                                                        </div>                                                                                                 
                                                        <div class="banner_contents">
                                                            <article>
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con01.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 블루를 변형한 우아한 연말 파티룩</h3>
                                                                    <p>&lt;라라랜드&gt;에서 엠마 스톤의 친구들은 파티룩으로 파란 홀터넥 드레스를 
                                                                        강력 추천했다. 훌륭한 컬러 포인트다. 
                                                                        보통 크리스마스 파티 분위기를 살리려고 ‘레드 톤’ 의상을 선택하는
                                                                        경우가 많지만, 이건 레드 카펫 위에 레드 드레스를 입고 가는 형국.
                                                                        일반적으로 ‘레드’ 장식이 많은 크리스마스 파티에선 우아한 블루 컬러가
                                                                        확실히 시선을 고정시킨다. 다만 ‘LA. LA. 랜드’ 즉 캘리포니아 LA의 
                                                                        따뜻한 날씨 달리, 최근엔 시베리아보다 춥다는 한국의 겨울이라는 걸
                                                                        잊지 말자. 따뜻한 소재를 선택하면 우아하면서도 부드러운 분위기를 
                                                                        연출할 수 있다. 이럴 땐 네이비 컬러 니트 투피스를 추천한다.
                                                                        부담스럽지 않은 니트 터틀넥 상의, 하단 슬릿으로 은근한 섹시함을 
                                                                        살린 니트 치마를 한 벌로 입으면 파티 룩에 어울리는 니트 원피스로 
                                                                        스타일링할 수 있다. 상하의를 각기 다른 아이템과 매칭하면 캐주얼한
                                                                        데일리 룩으로 스타일링할 수 있어 활용도가 높다. 
                                                                        실루엣을 은근히 드러내는 네이비 컬러 니트 투피스에 블랙 가죽 앵클
                                                                        부츠로 연말 파티룩 완성. 주머니가 불룩해지면 맵시가 사라지는
                                                                        니트 의상을 입을 땐 소지품 보관이 난감하다. 
                                                                        혼잡한 파티에선 손이 불편한 클러치보다 간단한 소지품을 보관할
                                                                        미니 백이 현명한 선택이다. 네이비 컬러의 니트와 대비되는 와인 컬러의
                                                                        미니백으로 컬러 포인트와 실용성까지 챙기자.
                                                                        앵클 부츠의 레드 굽과 함께 센스 넘치는 컬러 포인트가 되어줄 것이다.</p>
                                                                </div>   
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con02.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 그린을 활용한 귀여운 크리스마스 파티룩</h3>
                                                                    <p>&lt;라라랜드&gt;의 엠마 스톤은 라이언 고슬링과 설레는 첫 키스 후 왈츠를
                                                                        출 때, 심플한 디자인의 초록색 원피스를 입었다.
                                                                        그린 컬러는 소화하기 어려운 컬러 중 하나. &lt;라라랜드&gt; 엠마 스톤의
                                                                        그린 컬러 베어 백 원피스에 꽂혔더라도 무턱대고 따라 입기는 쉽지 않다.
                                                                        예년보다 춥다는 올겨울 날씨도 생각해야 한다.
                                                                        그린 컬러는 익숙한 ‘크리스마스 컬러’ 중 하나.
                                                                        크리스마스 약속이 있다면 밝은 그린과 네이비 컬러를 패턴으로 매칭한
                                                                        울 체크 코트와 레드립 포인트의 니트, 블랙 주름 스커트로 그린의
                                                                        발랄함을 살린 귀여운 크리스마스 데이트 룩을 추천한다.
                                                                        그린 단색 코트와 달리 그린, 네이비 혼합 체크 패턴 코트라면 다른
                                                                        아이템과 컬러 매칭도 쉬운 편이다.
                                                                        울과 니트의 부드러운 소재에 전혀 다른 질감의 하의를 매칭하면
                                                                        단조로움을 피할 수 있다. 주름이 풍성하게 잡힌 레지 주름 스커트는
                                                                        은은한 광택이 포인트. 데이 룩과 나이트 룩 모두 어울린다.
                                                                        여기에 진주로 장식한 베레모, 브라운 컬러의 스웨이드 앵클 부츠를
                                                                        착용하면 따뜻하게 스타일을 살릴 수 있다.</p>
                                                                </div>   
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con03.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 원색이 부담스러워도 유니크한 데이트룩</h3>
                                                                    <p>&lt;라라랜드&gt;엠마 스톤의 패션은 단순한 디자인과 화려한 원색으로
                                                                        시선을 사로잡는다. 하지만 현실에서 원색 패션을 그대로 소화하기
                                                                        부담스럽다면, 컬러가 화려한 잔 무늬 패턴 의상을 추천한다.
                                                                        청록색 광택이 은은하게 드러나는 벨벳 플라워 원피스에 어두운 컬러의
                                                                        니트, 부드러운 퍼 소재의 넥 워머를 함께 매칭하면, 부담스럽지 않게
                                                                        연말 파티나 데이트에 어울리는 유니크한 스타일을 소화할 수 있다.
                                                                        특히 &lt;라라랜드&gt;에서 엠마 스톤의 블루 홀터넥 원피스가 마음에
                                                                        들었다면, 슬립 드레스 스타일의 청록색 벨벳 플라워 원피스로 은근하게
                                                                        섹시한 분위기를 연출해보자. 블루 컬러의 삼각형 핸드백을 곁들이면
                                                                        현실에서도 빛나는 유니크한 연말 스타일 완성.</p>
                                                                </div>   
                                                            </article>                                                            

                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                    
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/news/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>                                                            
                                                            <h2>2#꿈꾸고_노래하고_사랑하라 &lt;라라랜드&gt; 패션 | 엠마 스톤처럼 반짝이게 입기</h2>
                                                            <p>풍성한 음악 만큼이나 풍부한 색채의 향연을 보여주는 &lt;라라랜드&gt;에서 원색 의상은 주인공 엠마 스톤을 더욱 찬란하게 만든다. 경쾌한 탭댄스를 출 땐 노란 원피스, 파티를 즐길 땐 파란 홀터넥 드레스,왈츠의 우아한 리듬에 따라 찰랑거리는 초록 원피스까지.관객의 시선을 사로잡는 &lt;라라랜드&gt;의 엠마 스톤처럼 현실에서도 빛나려면 어떻게 할까? 2016년 크리스마스와 연말 모임에서 엠마 스톤처럼 주위 시선을 ‘일시 정지’ 시킬 현실 패션을 제안한다.</p>
                                                            <p class="edi">-채소라 에디터-</p>
                                                        </div>
                                                        <div class="banner_contents">
                                                            <article>
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con01.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 블루를 변형한 우아한 연말 파티룩</h3>
                                                                    <p>&lt;라라랜드&gt;에서 엠마 스톤의 친구들은 파티룩으로 파란 홀터넥 드레스를 
                                                                        강력 추천했다. 훌륭한 컬러 포인트다. 
                                                                        보통 크리스마스 파티 분위기를 살리려고 ‘레드 톤’ 의상을 선택하는
                                                                        경우가 많지만, 이건 레드 카펫 위에 레드 드레스를 입고 가는 형국.
                                                                        일반적으로 ‘레드’ 장식이 많은 크리스마스 파티에선 우아한 블루 컬러가
                                                                        확실히 시선을 고정시킨다. 다만 ‘LA. LA. 랜드’ 즉 캘리포니아 LA의 
                                                                        따뜻한 날씨 달리, 최근엔 시베리아보다 춥다는 한국의 겨울이라는 걸
                                                                        잊지 말자. 따뜻한 소재를 선택하면 우아하면서도 부드러운 분위기를 
                                                                        연출할 수 있다. 이럴 땐 네이비 컬러 니트 투피스를 추천한다.
                                                                        부담스럽지 않은 니트 터틀넥 상의, 하단 슬릿으로 은근한 섹시함을 
                                                                        살린 니트 치마를 한 벌로 입으면 파티 룩에 어울리는 니트 원피스로 
                                                                        스타일링할 수 있다. 상하의를 각기 다른 아이템과 매칭하면 캐주얼한
                                                                        데일리 룩으로 스타일링할 수 있어 활용도가 높다. 
                                                                        실루엣을 은근히 드러내는 네이비 컬러 니트 투피스에 블랙 가죽 앵클
                                                                        부츠로 연말 파티룩 완성. 주머니가 불룩해지면 맵시가 사라지는
                                                                        니트 의상을 입을 땐 소지품 보관이 난감하다. 
                                                                        혼잡한 파티에선 손이 불편한 클러치보다 간단한 소지품을 보관할
                                                                        미니 백이 현명한 선택이다. 네이비 컬러의 니트와 대비되는 와인 컬러의
                                                                        미니백으로 컬러 포인트와 실용성까지 챙기자.
                                                                        앵클 부츠의 레드 굽과 함께 센스 넘치는 컬러 포인트가 되어줄 것이다.</p>
                                                                </div>   
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con02.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 그린을 활용한 귀여운 크리스마스 파티룩</h3>
                                                                    <p>&lt;라라랜드&gt;의 엠마 스톤은 라이언 고슬링과 설레는 첫 키스 후 왈츠를
                                                                        출 때, 심플한 디자인의 초록색 원피스를 입었다.
                                                                        그린 컬러는 소화하기 어려운 컬러 중 하나. &lt;라라랜드&gt; 엠마 스톤의
                                                                        그린 컬러 베어 백 원피스에 꽂혔더라도 무턱대고 따라 입기는 쉽지 않다.
                                                                        예년보다 춥다는 올겨울 날씨도 생각해야 한다.
                                                                        그린 컬러는 익숙한 ‘크리스마스 컬러’ 중 하나.
                                                                        크리스마스 약속이 있다면 밝은 그린과 네이비 컬러를 패턴으로 매칭한
                                                                        울 체크 코트와 레드립 포인트의 니트, 블랙 주름 스커트로 그린의
                                                                        발랄함을 살린 귀여운 크리스마스 데이트 룩을 추천한다.
                                                                        그린 단색 코트와 달리 그린, 네이비 혼합 체크 패턴 코트라면 다른
                                                                        아이템과 컬러 매칭도 쉬운 편이다.
                                                                        울과 니트의 부드러운 소재에 전혀 다른 질감의 하의를 매칭하면
                                                                        단조로움을 피할 수 있다. 주름이 풍성하게 잡힌 레지 주름 스커트는
                                                                        은은한 광택이 포인트. 데이 룩과 나이트 룩 모두 어울린다.
                                                                        여기에 진주로 장식한 베레모, 브라운 컬러의 스웨이드 앵클 부츠를
                                                                        착용하면 따뜻하게 스타일을 살릴 수 있다.</p>
                                                                </div>   

                                                            </article>                                                            

                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                    
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/news/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>                                                            
                                                            <h2>3#꿈꾸고_노래하고_사랑하라 &lt;라라랜드&gt; 패션 | 엠마 스톤처럼 반짝이게 입기</h2>
                                                            <p>풍성한 음악 만큼이나 풍부한 색채의 향연을 보여주는 &lt;라라랜드&gt;에서 원색 의상은 주인공 엠마 스톤을 더욱 찬란하게 만든다. 경쾌한 탭댄스를 출 땐 노란 원피스, 파티를 즐길 땐 파란 홀터넥 드레스,왈츠의 우아한 리듬에 따라 찰랑거리는 초록 원피스까지.관객의 시선을 사로잡는 &lt;라라랜드&gt;의 엠마 스톤처럼 현실에서도 빛나려면 어떻게 할까? 2016년 크리스마스와 연말 모임에서 엠마 스톤처럼 주위 시선을 ‘일시 정지’ 시킬 현실 패션을 제안한다.</p>
                                                            <p class="edi">-채소라 에디터-</p>
                                                        </div>
                                                        <div class="banner_contents">
                                                            <article>
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con01.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 블루를 변형한 우아한 연말 파티룩</h3>
                                                                    <p>&lt;라라랜드&gt;에서 엠마 스톤의 친구들은 파티룩으로 파란 홀터넥 드레스를 
                                                                        강력 추천했다. 훌륭한 컬러 포인트다. 
                                                                        보통 크리스마스 파티 분위기를 살리려고 ‘레드 톤’ 의상을 선택하는
                                                                        경우가 많지만, 이건 레드 카펫 위에 레드 드레스를 입고 가는 형국.
                                                                        일반적으로 ‘레드’ 장식이 많은 크리스마스 파티에선 우아한 블루 컬러가
                                                                        확실히 시선을 고정시킨다. 다만 ‘LA. LA. 랜드’ 즉 캘리포니아 LA의 
                                                                        따뜻한 날씨 달리, 최근엔 시베리아보다 춥다는 한국의 겨울이라는 걸
                                                                        잊지 말자. 따뜻한 소재를 선택하면 우아하면서도 부드러운 분위기를 
                                                                        연출할 수 있다. 이럴 땐 네이비 컬러 니트 투피스를 추천한다.
                                                                        부담스럽지 않은 니트 터틀넥 상의, 하단 슬릿으로 은근한 섹시함을 
                                                                        살린 니트 치마를 한 벌로 입으면 파티 룩에 어울리는 니트 원피스로 
                                                                        스타일링할 수 있다. 상하의를 각기 다른 아이템과 매칭하면 캐주얼한
                                                                        데일리 룩으로 스타일링할 수 있어 활용도가 높다. 
                                                                        실루엣을 은근히 드러내는 네이비 컬러 니트 투피스에 블랙 가죽 앵클
                                                                        부츠로 연말 파티룩 완성. 주머니가 불룩해지면 맵시가 사라지는
                                                                        니트 의상을 입을 땐 소지품 보관이 난감하다. 
                                                                        혼잡한 파티에선 손이 불편한 클러치보다 간단한 소지품을 보관할
                                                                        미니 백이 현명한 선택이다. 네이비 컬러의 니트와 대비되는 와인 컬러의
                                                                        미니백으로 컬러 포인트와 실용성까지 챙기자.
                                                                        앵클 부츠의 레드 굽과 함께 센스 넘치는 컬러 포인트가 되어줄 것이다.</p>
                                                                </div>   
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con02.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 그린을 활용한 귀여운 크리스마스 파티룩</h3>
                                                                    <p>&lt;라라랜드&gt;의 엠마 스톤은 라이언 고슬링과 설레는 첫 키스 후 왈츠를
                                                                        출 때, 심플한 디자인의 초록색 원피스를 입었다.
                                                                        그린 컬러는 소화하기 어려운 컬러 중 하나. &lt;라라랜드&gt; 엠마 스톤의
                                                                        그린 컬러 베어 백 원피스에 꽂혔더라도 무턱대고 따라 입기는 쉽지 않다.
                                                                        예년보다 춥다는 올겨울 날씨도 생각해야 한다.
                                                                        그린 컬러는 익숙한 ‘크리스마스 컬러’ 중 하나.
                                                                        크리스마스 약속이 있다면 밝은 그린과 네이비 컬러를 패턴으로 매칭한
                                                                        울 체크 코트와 레드립 포인트의 니트, 블랙 주름 스커트로 그린의
                                                                        발랄함을 살린 귀여운 크리스마스 데이트 룩을 추천한다.
                                                                        그린 단색 코트와 달리 그린, 네이비 혼합 체크 패턴 코트라면 다른
                                                                        아이템과 컬러 매칭도 쉬운 편이다.
                                                                        울과 니트의 부드러운 소재에 전혀 다른 질감의 하의를 매칭하면
                                                                        단조로움을 피할 수 있다. 주름이 풍성하게 잡힌 레지 주름 스커트는
                                                                        은은한 광택이 포인트. 데이 룩과 나이트 룩 모두 어울린다.
                                                                        여기에 진주로 장식한 베레모, 브라운 컬러의 스웨이드 앵클 부츠를
                                                                        착용하면 따뜻하게 스타일을 살릴 수 있다.</p>
                                                                </div>   
                                                                <div class="imgZone">
                                                                    <img src="/m/images/news/news_con03.jpg" alt="" />
                                                                </div>
                                                                <div class="txtZone">
                                                                    <h3># 원색이 부담스러워도 유니크한 데이트룩</h3>
                                                                    <p>&lt;라라랜드&gt;엠마 스톤의 패션은 단순한 디자인과 화려한 원색으로
                                                                        시선을 사로잡는다. 하지만 현실에서 원색 패션을 그대로 소화하기
                                                                        부담스럽다면, 컬러가 화려한 잔 무늬 패턴 의상을 추천한다.
                                                                        청록색 광택이 은은하게 드러나는 벨벳 플라워 원피스에 어두운 컬러의
                                                                        니트, 부드러운 퍼 소재의 넥 워머를 함께 매칭하면, 부담스럽지 않게
                                                                        연말 파티나 데이트에 어울리는 유니크한 스타일을 소화할 수 있다.
                                                                        특히 &lt;라라랜드&gt;에서 엠마 스톤의 블루 홀터넥 원피스가 마음에
                                                                        들었다면, 슬립 드레스 스타일의 청록색 벨벳 플라워 원피스로 은근하게
                                                                        섹시한 분위기를 연출해보자. 블루 컬러의 삼각형 핸드백을 곁들이면
                                                                        현실에서도 빛나는 유니크한 연말 스타일 완성.</p>
                                                                </div>   
                                                            </article>                                                            

                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="new-pagination pages"></div>
                                    </div>
                                </div>
                            </div>                        
                            <div class="swiper-slide swiper-main-slide">
                                <div class="swiper-slide">
                                    <div class="banner-wrapper style-swipe">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                  
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/style/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>WINTER OUTER CONTEST</h2>
                                                            <p>포근한 겨울을 나게 해줄 다채로운 트렌드 아우터 열전 
                                                                겨울에는 뭐니 뭐니 해도 따뜻한 아우터가 필수!
                                                                잘 고른 아우터 하나만으로도 따뜻한 겨울을 보낼 수 있으니까요.
                                                                패딩, 코트, 무톤 재킷 등 선택의 폭이 넓어진 아우터를 만나보세요.</p>
                                                        </div>
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li data-detail="1"><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li data-detail="4"><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li data-detail="2"><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>    
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                  
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/style/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>2test:WINTER OUTER CONTEST</h2>
                                                            <p>포근한 겨울을 나게 해줄 다채로운 트렌드 아우터 열전 
                                                                겨울에는 뭐니 뭐니 해도 따뜻한 아우터가 필수!
                                                                잘 고른 아우터 하나만으로도 따뜻한 겨울을 보낼 수 있으니까요.
                                                                패딩, 코트, 무톤 재킷 등 선택의 폭이 넓어진 아우터를 만나보세요.</p>
                                                        </div>
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>    
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                  
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/style/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>3test:WINTER OUTER CONTEST</h2>
                                                            <p>포근한 겨울을 나게 해줄 다채로운 트렌드 아우터 열전 
                                                                겨울에는 뭐니 뭐니 해도 따뜻한 아우터가 필수!
                                                                잘 고른 아우터 하나만으로도 따뜻한 겨울을 보낼 수 있으니까요.
                                                                패딩, 코트, 무톤 재킷 등 선택의 폭이 넓어진 아우터를 만나보세요.</p>
                                                        </div>
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>    
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                  
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/style/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>4test:WINTER OUTER CONTEST</h2>
                                                            <p>포근한 겨울을 나게 해줄 다채로운 트렌드 아우터 열전 
                                                                겨울에는 뭐니 뭐니 해도 따뜻한 아우터가 필수!
                                                                잘 고른 아우터 하나만으로도 따뜻한 겨울을 보낼 수 있으니까요.
                                                                패딩, 코트, 무톤 재킷 등 선택의 폭이 넓어진 아우터를 만나보세요.</p>
                                                        </div>
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                  

                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>    
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>       
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                  
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/style/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>5test:WINTER OUTER CONTEST</h2>
                                                            <p>포근한 겨울을 나게 해줄 다채로운 트렌드 아우터 열전 
                                                                겨울에는 뭐니 뭐니 해도 따뜻한 아우터가 필수!
                                                                잘 고른 아우터 하나만으로도 따뜻한 겨울을 보낼 수 있으니까요.
                                                                패딩, 코트, 무톤 재킷 등 선택의 폭이 넓어진 아우터를 만나보세요.</p>
                                                        </div>
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                            </div>
                                                        </div>    
                                                        <div class="banner_contents">
                                                            <div class="style_con">                                                               
                                                                <div class="left">     
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con01.jpg" alt="" />
                                                                    </div>
                                                                    <p>이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                </div>
                                                                <div class="right"> 
                                                                    <div class="img_wrapper">
                                                                        <img src="/m/images/style/banner_con02.jpg" alt="" />
                                                                    </div>                                                                   
                                                                    <p class="descrip">이번 시즌 트렌드 최전방에 있는 무톤 코트!
                                                                        따뜻하고 럭셔리한 무드가 어우러진 디자인 덕분에 그 자체만
                                                                        으로도 멋스러운 룩을 완성합니다.
                                                                        올 화이트 룩과 매치해 금방이라도 눈이 내릴 듯 퓨어한 느낌이
                                                                        가득하네요. </p>
                                                                    <div class="detail_modal">
                                                                        <ul>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail01.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail02.jpg" alt="" /></a></li>
                                                                            <li><a href="#"><img src="/m/images/style/banner_detail03.jpg" alt="" /></a></li>                                                                        
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>
                                        </div>       
                                        <div class="style-pagination pages"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-main-slide">
                                <div class="swiper-slide">
                                    <div class="banner-wrapper collection-swipe">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                  
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/collection/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>2016 WINTER COLLECTION</h2>                                                            
                                                        </div> 
                                                        <div class="banner_contents collection_contents">
                                                            <div class="collection_left collection_ban_wrap">
                                                                <img src="/m/images/collection/banner01.jpg" alt="" />
                                                                <div class="collection_season">
                                                                    <img src="/m/images/collection/collection_season.png" alt="dimatto 2017 COLLECTION" />
                                                                </div>
                                                            </div>    
                                                        </div>
                                                        <div class="banner_contents collection_contents">
                                                            <div class="collection_right collection_ban_wrap">
                                                                <img src="/m/images/collection/banner02.jpg" alt="" />
                                                                <div class="collection_season">
                                                                    <img src="/m/images/collection/collection_season.png" alt="dimatto 2017 COLLECTION" />
                                                                </div>
                                                            </div>    
                                                        </div>
                                                        <div class="banner_contents collection_contents">
                                                            <div class="collection_left collection_ban_wrap">
                                                                <img src="/m/images/collection/banner03.jpg" alt="" />
                                                                <div class="collection_season">
                                                                    <img src="/m/images/collection/collection_season.png" alt="dimatto 2017 COLLECTION" />
                                                                </div>
                                                            </div>    
                                                        </div>
                                                        <div class="banner_contents collection_contents">
                                                            <div class="collection_right collection_ban_wrap">
                                                                <img src="/m/images/collection/banner04.jpg" alt="" />
                                                                <div class="collection_season">
                                                                    <img src="/m/images/collection/collection_season.png" alt="dimatto 2017 COLLECTION" />
                                                                </div>
                                                            </div>    
                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div>          
                                            <div class="swiper-slide">
                                                <div class="commons_slider">                                                  
                                                    <div class="common_contents">
                                                        <div class="banner_title">
                                                            <div class="banner_title_zone">
                                                                <img src="/m/images/collection/banner_title.jpg" alt="" />
                                                                <div class='shareSns'>
                                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                                    <div class='dmt-snsList'>
                                                                        <ul>
                                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <h2>2016 WINTER COLLECTION</h2>                                                            
                                                        </div> 
                                                        <div class="banner_contents">
                                                            <img src="/m/images/collection/banner01.jpg" alt="" />
                                                        </div>
                                                    </div>     
                                                </div>    
                                            </div> 
                                        </div>       
                                        <div class="collection-pagination pages"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-main-slide black-slide">
                                <div class="webzine_wrap">
                                    <img src="/m/images/webzine/spick_banner.jpg" alt="vol.2 S.pick" />
                                    <div class="webzine_linked">
                                        <a href="#">GO</a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-main-slide">
                                <div class="brand_wrap commons_slider">                                                  
                                    <div class="common_contents">
                                        <div class="banner_title">
                                            <div class="banner_title_zone">
                                                <img src="/m/images/brand/banner_title.jpg" alt="" />
                                                <div class='shareSns'>
                                                    <button class='dmt-snsToggle'><em class='dmt-sp'>sns open</em></button>
                                                    <div class='dmt-snsList'>
                                                        <ul>
                                                            <li class='pro-dmt-fb' onclick="javascript:popup('facebook', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                            <li class='pro-dmt-tw' onclick="javascript:popup('twitter', window.location.href, 'dimatto :: Unique street styles!'); return false;"><a href='#' class='dmt-sp'></a></li>
                                                            <li class='pro-dmt-story' onclick="javascript:popup('kakaostory', window.location.href, 'dimatto :: Unique street styles'); return false;"><a href='#' class='dmt-sp' ></a></li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                            <h2>INDEPENDENT GRILS<br>FROM DIMATTO</h2> 
                                            <p>전세계에서 펼쳐지는 가장 트렌디한 룩을 생중계하는 dimatto.
                                                현재의 런웨이는 패션쇼장이 아닌 도시의 스트리트,
                                                분위기 있는 카페 테라스,공항에서 마주하는 리얼 웨이이죠.
                                                가장 동 시대적인 현재의 트렌드를 담아내는 dimatto!
                                                베이직하고 일상적인 아이템을 dimatto의 감성으로 풀어냅니다.
                                            </p>
                                        </div> 
                                        <div class="banner_contents">
                                            <div class="left">
                                                <img src="/m/images/brand/banner_con01.png" alt="" />
                                            </div> 
                                            <div class="abPosition leftAb">
                                                <img src="/m/images/brand/banner_con02.jpg" alt="" />
                                            </div>
                                            <p>새로운 것에 관심을 집중하고<br>
                                                음악과 아트 그리고 모험을 즐기는 그녀!<br>
                                                SNS와 일상이 연결된 18-23세 여성들이<br>
                                                지금 현재 주목하고 있는 아이템을 소개합니다!<br>
                                                물론 입는 법, 즐기는 법까지요.
                                            </p>
                                        </div>
                                        <div class="banner_contents">
                                            <div class="right">
                                                <img src="/m/images/brand/banner_con03.png" alt="" />
                                            </div> 
                                            <div class="abPosition rightAb">
                                                <img src="/m/images/brand/banner_con04.jpg" alt="" />
                                            </div>
                                            <p>자유롭고 웨어러블 한<br>
                                                젊은 도시 여성의 스타일리시 캐주얼 룩.<br>
                                                현재의 트렌드를 반영한 데일리 룩.<br>
                                                스트릿 트렌드를 가미한 위트 있는 스타일링.
                                            </p>
                                        </div>
                                        <div class="banner_contents">
                                            <div class="center">
                                                <img src="/m/images/brand/banner_con05.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                            <div class="swiper-slide swiper-main-slide videoSlide">                               
                                <div class="video_tab">
                                    <ul>
                                        <li><a href="#first">10-SECOND</a></li>
                                        <li><a href="#second">SEASONAL</a></li>
                                    </ul>
                                </div>

                                <div class="videoList">

                                </div>
                                <p class="moreBtn">
                                    <button class="mores onoffHover"><img src="/m/images/readmore.png" alt="read more" /></button>
                                </p>
                            </div>    

                        </div>    
                    </div>
                    <button class="top_btn"><img src="/m/images/top_btn.png" alt="TOP" /></button>
                </div>
                <footer id="footer">        
                    <p>DCG Inc.     대표 : 오승범     사업자등록번호 : No. 431-88-00293<br>서울 종로구 종로328(창신동330-1) 동대문 빌딩8,9층<br>고객센터 : +82-708-7474     E-mail : help@dcgworld.com<br>통신판매업신고번호 : 2016-서울종로-0C690<br>Copyright©2016 DCG All rights reserved.</p>
                </footer>
            </div>
        </div>     
        <script type="text/javascript">
            var newsContents = [];
            var styleContents = [];
            var collectionContents = [];
            var mainSwiper;

            $(function () {



            })

            var layer = <?= isset($layer) ? $layer : "0" ?>;
            var frame = <?= isset($frame) ? $frame : "0" ?>;

            $(window).on('load', function () {
                $.uiExe.main.init();

                switch (layer) {
                    case 1 :
                        if (frame) {
                            setTimeout(function () {
                                //$.uiExe.main.urlOpen(layer, frame);
                                mainSwiper.slideTo(layer)
                                $.uiExe.main.newsSwipe(frame - 1)
                            }, 600);

                        }
                        break;
                    case 2 :
                        if (frame) {
                            setTimeout(function () {
                                mainSwiper.slideTo(layer)
                                $.uiExe.main.styleSwipe(frame - 1)
                            }, 600);
                        }
                        break;
                    case 3 :
                        if (frame) {
                            setTimeout(function () {
                                mainSwiper.slideTo(layer)
                                $.uiExe.main.collectionSwipe(frame - 1)
                            }, 600);
                        }
                        break;
                    case 4 :
                        if (frame) {
                            setTimeout(function () {
                                mainSwiper.slideTo(layer);
                            }, 300);
                        }
                        break;
                    case 5 :
                        if (frame) {
                            setTimeout(function () {
                                mainSwiper.slideTo(layer);
                            }, 300);
                        }
                        break;
                    case 6 :
                        if (frame) {
                            setTimeout(function () {
                                mainSwiper.slideTo(layer);
                            }, 300);
                        }
                        break;
                    case 7 :
                        if (frame) {
                            setTimeout(function () {
                                $('#urlText').attr('data-url', '?layer=7:' + frame + '');
                                $.uiExe.main.videos(frame);
                            }, 300);
                        }
                        break;
                    case 8 :
                        if (frame) {
                            setTimeout(function () {
                                mainSwiper.slideTo(layer - 2);
                            }, 300);
                        }
                        break;
                    case 9 :
                        if (frame) {
                            setTimeout(function () {
                                $('#urlText').attr('data-url', '?layer=9:' + frame + '');
                                $.uiExe.main.videos(frame);
                            }, 300);
                        }
                        break;
                    case 10 :
                        if (frame) {
                            $.uiExe.main.detailPop(frame);
                        }
                    default :
                        break;
                }
                $(".family_site_btn").click(function () {
                    var href = $(".linked select option:selected").val();
                    if (href != "familysite") {
                        window.location.href = href;
                    }
                });

            })

        </script>


    </body>
</html>