<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     * 	- or -
     * 		http://example.com/index.php/welcome/index
     * 	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function __construct() {
        parent::__construct();
        $this->output->set_header('Pragma: no-cache');
        $this->load->driver('cache', array('adapter' => 'file'));
    }

    public function index() {
        $data = array();

        if (!$this->session->lang) {
            $this->session->lang = "kr";
        }
        
        if ($this->input->get("layer")) {
            $url = $this->uri->config->config['base_url'] . $this->session->lang . '/?layer=' . $this->input->get("layer");
        } else {
            $url = $this->uri->config->config['base_url'] . $this->session->lang . '/';
        }

        $md5_url = md5($url);
        
        //파일 캐시 유무               
        if ($result = $this->cache->file->get($md5_url)) {
            //캐쉬가 있을때,  
            // 리턴해주면서 view 페이지 보여준다.
            $this->output->set_output($result);
        } else {
            if ($this->input->get("layer")) {
                $res = explode(":", $this->input->get("layer"));

                if (isset($res[1]) && $res[1] !== "") {
                    $data['layer'] = $res[0];
                    $data['frame'] = $res[1];
                } else {
                    $data['layer'] = $res[0];
                    $data['frame'] = 0;
                }
            }
            
            $result = $this->load->view(CI172_VIEW_MODE . "/dimatto", $data, TRUE);
            $this->cache->file->save("{$md5_url}", $result, 300);
            
            $this->load->view(CI172_VIEW_MODE . '/dimatto', $data);
        }
    }
}
