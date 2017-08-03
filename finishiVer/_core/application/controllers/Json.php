<?php

class Json Extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function detail() {
        // 1. => detail.json 을 파일을 컨트롤러로 가지고온다.
        $json = file_get_contents(FCPATH . "/json/detail.json");
        $data = json_decode($json);

        foreach ($data as $key => $val) {
            $val->detailHead = uText($val->detailHead);
            $val->detailBuy = uText($val->detailBuy);
            $val->detailLinkText = uText($val->detailLinkText);
        }

        $this->output->set_output(json_encode($data));
    }

    public function contents($contents) {
        if (is_file(APPPATH.'views/' . $contents . '.php')) {
            $html = $this->load->view($contents, '', TRUE);
            $this->output->set_output($html);
        } else {
            $this->output->set_output("관련된 컨텐츠가 없습니다.");
        }
    }

}
