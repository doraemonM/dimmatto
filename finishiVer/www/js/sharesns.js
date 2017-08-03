window.onload = function() {
  // 최초 한 번만 수행
  
  Kakao.init('690a3bf70cc0651dcf3ab84ca24d83ea');
  
  var clipboard = $('.copy-button');
  var clipText = document.getElementById('urlText')
  if(!clipboard) return;
  if(!clipText) return;
  
  
clipboard.on('click', function(e) {    
    var saveClipUrls = clipText.getAttribute('data-saveurl')
    var clipUrls = clipText.getAttribute('data-url');   
    var urlText = saveClipUrls ? saveClipUrls : clipUrls;
    var url = window.location.hostname + urlText;        
     var clipboard = new Clipboard('.copy-button', {
      text: function() {
        return url;
      }           
    });

    clipboard.on('success', function(e) {
      alert("URL이 복사되었습니다. 원하는 곳에 붙여넣기(Ctrl+V)해주세요.");
      
    });

    clipboard.on('error', function(e) {
      prompt("Ctrl+C 또는 길게 눌러 복사하세요.", url);
      //console.log(e);
    });
  });
  
    


  popup = function(type, org_url, description,target) {
    var saveClipUrls = clipText.getAttribute('data-saveurl');  
    var clipUrls = clipText.getAttribute('data-url');
    var urlText = saveClipUrls ? saveClipUrls : clipUrls;
    var host = window.location.hostname;
    var search = window.location.search;
    if(target){
         var thisis = target.attr('data-url');
         var videoHost = "http://"+host+"/"+thisis;  
    }
   
    
    
    
    search != urlText ? search = urlText : search;   
    var fullHost = "http://"+host+"/"+search;  
    
    if (type == 'facebook') {      
      org_url = "https://www.facebook.com/sharer/sharer.php?u=" + fullHost;      
     
      window.open(org_url, "", "width=400, height=300");
    }else if (type == 'videoFacebook') {      
      org_url = "https://www.facebook.com/sharer/sharer.php?u=" + videoHost;      
     
      window.open(org_url, "", "width=400, height=300");
    }else if (type == 'twitter') {
      org_url = "https://twitter.com/intent/tweet?url=" + fullHost;
      org_url += "&text=" + encodeURI(description);
      window.open(org_url, "", "width=500, height=300");
    }else if (type == 'videoTwitter') {
      org_url = "https://twitter.com/intent/tweet?url=" + videoHost;
      org_url += "&text=" + encodeURI(description);
      window.open(org_url, "", "width=500, height=300");
    } else if (type == 'kakaostory') {
      Kakao.Story.share({
        url: fullHost,
        text: description
      });
    }else if (type == 'videoKakaostory') {
      Kakao.Story.share({
        url: videoHost,
        text: description
      });
    }
  };
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1850012518562288',
    xfbml      : true,
    version    : 'v2.8'
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }

  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
