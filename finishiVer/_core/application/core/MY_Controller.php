<?php

class MY_Controller extends CI_Controller {
    
}

class Admin_controller extends MY_Controller {

    public function __construct() {
        parent::__construct();
        //production 이면서 server_ip가 회사가아니면 redirect('/'); 해주자
        if (ENVIRONMENT === "production" /* serverip가 회사아닐때 */) {
            redirect('/');
        }
    }
}
