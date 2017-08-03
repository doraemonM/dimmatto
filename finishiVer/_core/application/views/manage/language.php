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
        <meta property="og:title" content="dimatto">
        <meta property="og:url" content="http://www.dimatto.com/en/pc/html/details7.html">
        <meta property="og:description" content="Unique street styles! Here are some of the must-buy items! Dimatto!">
        <meta property="og:image" content="http://www.dimatto.com/thumbnail/thumbnail.png">
        <link rel="stylesheet" href="/css/common.css">
        <link rel="stylesheet" href="/css/slick.css">
        <link rel="stylesheet" href="/css/main.css">     
        <link rel="stylesheet" href="/css/admin.css">     
        <link rel="stylesheet" href="/css/bootstrap.css">
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/jquery-ui.css">
    </head>
    <body>  
        <div id="wrap">    
            <div id="container">
                <div class="searchForm">
                    <form name="search_form" method="get" action="<?= base_url() ?>manage/language">
                        <!-- 검색조건 -->

                        <table class="table table-bordered" style="cellspacing:0; cellpadding:0">
                            <tr>
                                <th>
                                    <select name="language" class="form-control">
                                        <option value="">선택하세요</option>
                                        <option value="kr" <?= ($this->input->get("language") === "kr") ? "selected" : "" ?>>한국어</option>
                                        <option value="cn" <?= ($this->input->get("language") === "cn") ? "selected" : "" ?>>중국어</option>
                                        <option value="en" <?= ($this->input->get("language") === "en") ? "selected" : "" ?>>영어</option>
                                    </select>
                                </th>
                                <td><input type="text" name="search_word" class="form-control" value="<?= $this->input->get("search_word") ?>"></td>                            
                            </tr>
                            <?php /*
                              <tr>
                              <th>작성된 날짜</th>
                              <td>
                              <span>
                              <input type="text" class="form-control" id="date_s" name="date_s" value="<?=$this->input->get("date_s");?>" style="width:110px;">
                              </span>
                              <span> ~ </span>
                              <span>
                              <input type="text" class="form-control" id="date_e" name="date_e" value="<?=(empty($this->input->get("date_e")))?date("Y-m-d"): $this->input->get("date_e")?>" style="width:110px;">
                              </span>
                              </td>
                              </tr>
                             */ ?>
                        </table>
                        <div class="btn_group">
                            <input type="submit" class="btn btn-primary " value="검색" />
                        </div>
                    </form>
                </div>

                <div class="search_list">
                    <h4 class="title"><span style="color:#1d1da0;"> > </span> 다국어 관리 페이지</h4>
                    <table class="table table-bordered" style="cellpadding:0; cellspacing:0;">
                        <colgroup>
                            <col width="30px">
                            <col width="*">
                            <col width="*">
                            <col width="*">
                            <col width="80px">
                        </colgroup>
                        <thead>
                            <tr>
                                <th><input type="checkbox" id="all_chk"/></th>
                                <th>한국어</th>
                                <th>중국어</th>
                                <th>영어</th>
                                <th>수정</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (!empty($list) && count($list) > 0) : ?>
                                <?php foreach ($list as $val): ?>
                                    <tr>
                                        <td><input type="checkbox" class="language_chk" name="idx" value="<?= $val['idx'] ?>"></td>
                                        <td>
                                            <textarea class='form-control' name="kr" rows='1'><?= $val['kr'] ?></textarea>
                                        </td>
                                        <td>
                                            <textarea class='form-control' name="cn" rows='1'><?= $val['cn'] ?></textarea>
                                        </td>
                                        <td><textarea name='en' class='form-control' name="en" rows='1'><?= $val['en'] ?></textarea></td>
                                        <td><input type="button" class="btn btn-primary modify" value="수정"></td>
                                    </tr>
                                <?php endforeach; ?>
                            <?php else : ?>
                                <tr>
                                    <td colspan="5" style="text-align:center;"> 검색결과가없습니다.</td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>

                    <?php if (count($list) > 0) : ?>
                        <div style="margin-top:10px; text-align:center;">
                            <input type="button" class="btn btn-primary all_modify" value="전체 수정"/>
                        </div>
                    <?php endif; ?>
                </div>

                <?php if (sizeof($paging_list['page_list']) > 0) : ?>
                    <div class="paging">
                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="<?= base_url() ?>manage/language?<?= $paging_list['qry_str'] ?>&cur_page=<?= $paging_list['prev_jump'] ?>" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <?php foreach ($paging_list['page_list'] as $val) : ?>
                                    <li class="page-item-<?=$val?>"><a class="page-link" href="<?= base_url() ?>manage/language?<?= $paging_list['qry_str'] ?>&cur_page=<?= $val ?>"><?= $val ?></a></li>
                                <?php endforeach; ?>
                                <li class="page-item">
                                    <a class="page-link" href="<?= base_url() ?>manage/language?<?= $paging_list['qry_str'] ?>&cur_page=<?= $paging_list['next_jump'] ?>" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <script type="text/javascript" src="/js/jquery-latest.js"></script>
        <script src="/js/TimelineLite.js" type="text/javascript"></script>
        <script src="/js/TweenMax.js" type="text/javascript"></script>
        <script src="/js/plugins/CSSPlugin.js" type="text/javascript"></script>
        <script src="/js/plugins/EasePack.js" type="text/javascript"></script>
        <script src="/js/jquery.gsap.js" type="text/javascript"></script>
        <script type="text/javascript" src="/js/main.js"></script>
        <script type="text/javascript" src="/js/jquery-latest.js"></script>
        <script type="text/javascript" src="/js/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="/js/jquery-ui.min.js"></script>
        <script type="text/javascript">
            $(document).ready(function () {
                
                var cur_page = <?=(!empty($paging_list['cur_page']))?$paging_list['cur_page']:1?>;
                $(".paging nav ul li.page-item-" + cur_page).addClass("active");
                $("#all_chk").click(function () {
                    //전체 선택 / 해제
                    var res = $("#all_chk").is(":checked");

                    if ($("#all_chk").is(":checked")) {
                        $("input[type=checkbox]").attr("checked", true);
                    } else {
                        $("input[type=checkbox]").attr("checked", false);
                    }

                });
                $(".table-bordered tbody").on('keyup', 'textarea', function () {
                    $(this).css("height", "auto");
                    $(this).height(this.scrollHeight);
                });
                $(".table-bordered tbody").find("textarea").keyup();
                $("#date_s").datepicker({
                    dateFormat: "yy-mm-dd",
                    showOn: "both",
                    buttonImage: "/images/calendar_Ico.png",
                    buttonImageOnly: true
                });
                $("#date_e").datepicker({
                    dateFormat: "yy-mm-dd",
                    showOn: "both",
                    buttonImage: "/images/calendar_Ico.png",
                    buttonImageOnly: true
                });

                $(".btn.modify").click(function () {
                    $.ajax({
                        url: "<?= base_url() ?>manage/ajax_modify/",
                        type: 'POST',
                        data: {
                            "idx": $(this).parent().parent().find($("input[type=checkbox]")).val(),
                            "cn": $(this).parent().parent().find($("textarea[name=cn]")).val(),
                            "kr": $(this).parent().parent().find($("textarea[name=kr]")).val(),
                            "en": $(this).parent().parent().find($("textarea[name=en]")).val()
                        },
                        success: function (e) {
                            if (e.trim() == "true") {
                                alert("수정완료하였습니다.");
                                window.location.reload();
                                return false;
                            } else {
                                alert("수정에 실패하였습니다.");
                                window.location.reload();
                                return false;
                            }
                        }
                    });
                });


                $(".all_modify").click(function () {

                    if ($("input[type=checkbox]:checked").length < 1) {
                        alert("수정할 다국어를 선택해주세요.");
                        return false;
                    }

                    json_data = new Array;
//                    $("input[type=checkbox]:checked").each(function () {
                    $("input[name=idx]:checked").each(function () {
                        var foo = {
                            "idx": $(this).parent().parent().find($("input[type=checkbox]")).val(),
                            "cn": $(this).parent().parent().find($("textarea[name=cn]")).val(),
                            "kr": $(this).parent().parent().find($("textarea[name=kr]")).val(),
                            "en": $(this).parent().parent().find($("textarea[name=en]")).val()
                        }
                        json_data.push(foo);
                    });

                    $.ajax({
                        url: "<?= base_url() ?>manage/all_ajax_modify",
                        type: 'POST',
                        dataType: 'json',
                        async: false,
                        data: {myData: JSON.stringify(json_data)},
                        success: function (e) {
                            if (e == true) {
                                alert("수정완료하였습니다.");
                                window.location.reload();
                                return false;
                            } else {
                                alert("수정실패하였습니다!");
                                window.location.reload();
                                return false;
                            }
                        }
                    });
                });
            });
        </script>
    </body>
</html>