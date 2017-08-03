<?php

function uText($string) {
    $ci = & get_instance();
    $lcode = $ci->session->lang;

    if ($lcode === null) {
        $ci->session->lang = "kr";
    }

    $ci->load->model("language_model", "language");

    $result = $ci->language->getLang($string);

    return $result;
}
