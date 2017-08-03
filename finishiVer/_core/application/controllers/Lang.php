<?php

class Lang Extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function set($language_code = "KR") {

        $language_code = strtolower($language_code);

        switch ($language_code) {
            case 'cn' :
                $this->session->lang = $language_code;
                break;
            case 'en' :
                $this->session->lang = $language_code;
                break;
            case 'kr' :
                $this->session->lang = $language_code;
                break;
            default :
                $this->session->lang = 'kr';
                break;
        }

        return redirect('/');
    }
}
