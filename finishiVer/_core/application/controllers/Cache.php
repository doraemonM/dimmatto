<?php

class Cache extends CI_Controller {
    
    public function __construct(){
        parent::__construct();
        $this->output->set_header('Pragma: no-cache');
        $this->load->driver('cache', array('adapter' => 'file'));
    }
    
    public function delete(){
        if ($this->cache->clean() === TRUE) {
            echo "캐시 삭제되었습니다.";
        }
    }
}