
<?php

class Manage Extends Admin_controller {

    public function __construct() {
        parent::__construct();
        $this->output->set_header("Pragma: no-cache");
        $this->load->driver("cache", array("adapter" => "file"));
        $this->load->model("language_model", "language");
    }

    public function language() {

        //언어관리 리스트
        $this->load->model("language_model", "language");

        $data = array();
        $where_str = array();

        //조건 검색
        if (trim($this->input->get("language")) !== "" && trim($this->input->get("search_word"))) {
            //$where_str[$this->input->get("language")] = $this->input->get("search_word");
            $where_str['like'][$this->input->get("language")] = $this->input->get("search_word");
        }

        if (trim($this->input->get("date_s")) !== "") {
            //$where_str['created_at >='] = $this->input->get("date_s") . ' 00:00:00';
            $where_str['where']['created_at >='] = $this->input->get("date_s") . ' 00:00:00';
        }

        if (trim($this->input->get("date_e")) !== "") {
            $where_str['where']['created_at <='] = $this->input->get("date_e") . ' 23:59:59';
        }

        $paging_result = $this->language->getLists($where_str);

        $data['paging_list'] = $paging_result['paging'];
        $data['list'] = $paging_result['data'];

        return $this->load->view("manage/language", $data);
    }

    public function ajax_modify() {
        //ajax 통해서 수정하기

        $idx = $this->input->post("idx");
        $cn = $this->input->post("cn");
        $en = $this->input->post("en");
        $kr = $this->input->post("kr");
        
        if ($this->language->getCountLanguage($idx) <= 0) {
            echo 'false';
            exit;
        }

        $update = array();
        $update = array(
            'cn' => $cn,
            'en' => $en,
            'kr' => $kr
        );

        if ($this->language->doModifyLanguage($update, $idx) === FALSE) {
            echo 'false';
            exit;
        }

        $this->cache->clean();
        echo 'true';
        exit;
    }

    public function all_ajax_modify() {
        //체크된것만 전체 수정들어갈수있도록
        $request_data = json_decode($this->input->post("myData"));
        
        if (empty($request_data)) {
            echo "false";
            return;
        }


        foreach ($request_data as $val) {
            if ($this->language->getCountLanguage($val->idx) <= 0) {
                echo "false";
                exit;
            }
  
            //초기화
            $update_data = array();
            $update_data = array(
                'cn'    => $val->cn,
                'en'    => $val->en,
                'kr'    => $val->kr
            );
            
            if ($this->language->doModifyLanguage($update_data, $val->idx) === FALSE) {
                echo $this->db->last_query();
                echo "false";
                exit;
            }
        }
        $this->cache->clean();
        echo "true";
        exit;
    }

}
