
<?php

defined('DCG_DIMATTO_SYSTEM') OR exit('No direct script access allowed');

// Default timezone 설정
date_default_timezone_set('Asia/Seoul');

// 웹 사이트별 설정
$site_type = array(
    // 개발환경 (어드민)    => PC.Ver
    'dcgworld.dimatto.dev' => array(
        'environment' => 'development',
        'base_url' => 'http://dcgworld.dimatto.dev/',
        'view_mode' => 'pc',
        'index_page' => '',
        'fcpath' => './',
        'db' => array(
            'host' => '14.63.219.195',
            'port' => 13306,
            'user' => 'dcgmatto',
            'passwd' => '!!dcgmatto089',
            'db' => 'matto',
            'driver' => 'mysqli',
        )
    ),
    // 개발환경 (어드민)    => Mobile.Ver
    'm.dcgworld.dimatto.dev' => array(
        'environment' => 'development',
        'base_url' => 'http://m.dcgworld.dimatto.dev/',
        'view_mode' => 'mobile',
        'index_page' => '',
        'fcpath' => './',
        'db' => array(
            'host' => '14.63.219.195',
            'port' => 13306,
            'user' => 'dcgmatto',
            'passwd' => '!!dcgmatto089',
            'db' => 'matto',
            'driver' => 'mysqli',
        )
    ),
    //dev 서버 (dev서버)    => PC.Ver
    'qa.dimatto.com' => array(
        'environment' => 'development',
        'base_url' => "http://qa.dimatto.com/",
        'view_mode' => 'pc',
        'index_page' => '',
        'fcpath' => '/',
        'db' => array(
            'host' => '14.63.219.195',
            'port' => 13306,
            'user' => 'dcgmatto',
            'passwd' => '!!dcgmatto089',
            'db' => 'matto',
            'driver' => 'mysqli',
        ),
    ),
    //dev 서버 (dev서버)    => Mobile.Ver
    'm.dimatto.com' => array(
        'environment' => 'development',
        'base_url' => "http://m.dimatto.com/",
        'view_mode' => 'mobile',
        'index_page' => '',
        'fcpath' => '/',
        'db' => array(
            'host' => '14.63.219.195',
            'port' => 13306,
            'user' => 'dcgmatto',
            'passwd' => '!!dcgmatto089',
            'db' => 'matto',
            'driver' => 'mysqli',
        ),
    ),
    //운영환경 (실서버)     => Pc.Ver
    'dimatto.com' => array(
        'environment' => 'production',
        'base_url' => "http://dimatto.com/",
        'view_mode' => 'pc',
        'index_page' => '',
        'fcpath' => '/',
        'db' => array(
            'host' => '14.63.219.91',
            'port' => 13306,
            'user' => 'dcgmatto',
            'passwd' => '!!dcgmatto089',
            'db' => 'matto',
            'driver' => 'mysqli',
        ),
    )
//    //운영환경 (실서버) => Mobile.Ver
//    'm.dimatto.com' => array(
//        'environment' => 'production',
//        'base_url' => "http://m.dimatto.com/",
//        'view_mode' => 'mobile',
//        'index_page' => '',
//        'fcpath' => '/',
//        'db' => array(
//            'host' => '14.63.219.91',
//            'port' => 13306,
//            'user' => 'dcgmatto',
//            'passwd' => '!!dcgmatto089',
//            'db' => 'matto',
//            'driver' => 'mysqli',
//        ),
//    )
        //운영서버
);


// 사이트별 공용 설정 추가
if (isset($site_type[$_SERVER['SERVER_NAME']]) && !empty($site_type[$_SERVER['SERVER_NAME']])) {
    // 개발 환경 및 QA 환경 설정
    $def_env = & $site_type[$_SERVER['SERVER_NAME']];

    // DB 환경 설정
    define('CI172_DB_HOST', $def_env['db']['host']);
    define('CI172_DB_PORT', $def_env['db']['port']);
    define('CI172_DB_USER', $def_env['db']['user']);
    define('CI172_DB_PASSWD', $def_env['db']['passwd']);
    define('CI172_DB', $def_env['db']['db']);
    define('CI172_DB_DRIVER', $def_env['db']['driver']);
    define('CI172_BASE_URL', $def_env['base_url']);
    define('CI172_INDEX_PAGE', $def_env['index_page']);
    define('ENVIRONMENT', $def_env['environment']);
    define('CI172_VIEW_MODE', $def_env['view_mode']);
} else {
    define('CI172_DB_HOST', 'localhost');
    define('CI172_DB_PORT', 3306);
    define('CI172_DB_USER', '');
    define('CI172_DB_PASSWD', '');
    define('CI172_DB_DRIVER', 'mysqli');
    define('CI172_DB', '');
    define('CI172_BASE_URL', '');
    define('CI172_INDEX_PAGE', 'index.php');
    define('ENVIRONMENT', 'development');
    define('CI172_VIEW_MODE', $def_env['view_mode']);
}
