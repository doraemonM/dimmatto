<?php

class Language_model extends CI_Model {

    private $string;

    public function __construct() {
        parent::__construct();

        $this->language = new TblMapper("language");
        $this->load->driver('cache', array('adapter' => 'file'));
    }

    public function getLang($string = null) {
        //언어 가져오기
        //업데이트 시에, delete하고, 다시 생성해줘야함

        $this->string = $string;
        $idx = md5($string);
        if ($string !== null) {
            if ($result = $this->cache->file->get($idx)) {
                // 캐쉬에 값이 있을때    

                return $result[strtolower($this->session->lang)];
            } else {
                //캐쉬에 값이 없을때
                $result = $this->language->where("idx", $idx)->get();

                if (empty($result)) {
                    return $this->doInsertLang($idx);
                } else {
                    //값이 있고 캐쉬에 값이 안넣어져있을때,
                    $contents = array(
                        'idx' => $result[0]['idx'],
                        'cn' => $result[0]['cn'],
                        'en' => $result[0]['en'],
                        'kr' => $result[0]['kr'],
                    );

                    return $result[0][strtolower($this->session->lang)];
                }
            }
        }
        return $this->string;
    }

    public function doInsertLang($idx) {
        //insert 시켜줘야함

        $insert_data = array(
            'idx' => $idx,
            'cn' => $this->string,
            'en' => $this->string,
            'kr' => $this->string,
            'created_at' => date("Y-m-d H:i:s")
        );

        $this->language->insert($insert_data);
        return $this->string;
    }

    public function getLists($where_str) {
        //언어 가져오기
        //like 검색 있을때 체크
        if (!empty($where_str['like']) && count($where_str['like']) >= 1) {
            foreach ($where_str['like'] as $k => $v) {
                $this->language->like($k, $v);
            }
        }

        if (!empty($where['where']) && count($where['where']) >= 1) {
            foreach ($where['where'] as $k => $v) {
                $this->language->where($k, $v);
            }
        }

        $paging = $this->language->get_pagination();

        if (count($paging['data']) > 0) {
            return $paging;
        }

        return false;
    }

    public function getCountLanguage($idx) {
        //count 하는함수
        if (!isset($idx) || $idx == "") {
            return false;
        }

        $language = new Tblmapper("language");
        $result = $language->where("idx", $idx)->get_count();

        return $result;
    }

    public function doModifyLanguage($data, $idx) {
        //언어 수정
        if (!isset($data) || empty($data)) {
            return false;
        }

        $language = new Tblmapper("language");
        if ($language->where("idx", $idx)->update($data) <= 0) {
            return false;
        }
        return true;
    }

}
