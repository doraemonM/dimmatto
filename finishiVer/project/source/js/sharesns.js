window.onload = function() {
  // 최초 한 번만 수행
  
  //Kakao.init('690a3bf70cc0651dcf3ab84ca24d83ea');
  
  var clipboard = $('.copy-button');
  var clipText = document.getElementById('urlText')
  if(!clipboard) return;
  if(!clipText) return;
  
  
  clipboard.on('click', function(e) {    
    var clipUrls = clipText.getAttribute('data-url');   
    var url = window.location.hostname + clipUrls;        
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

  popup = function(type, org_url, description) {
    var clipUrls = clipText.getAttribute('data-url')
    var host = window.location.hostname;
    var search = window.location.search;
    search != clipUrls ? search = clipUrls : search;
    var fullHost = "http://"+host+"/"+search;  
    if (type == 'facebook') {      
      console.log(fullHost)
      org_url = "https://www.facebook.com/sharer/sharer.php?u=" + fullHost;      
     
      window.open(org_url, "", "width=400, height=300");
    } else if (type == 'twitter') {
      org_url = "https://twitter.com/intent/tweet?url=" + fullHost;
      org_url += "&text=" + encodeURI(description);
      window.open(org_url, "", "width=500, height=300");
    } else if (type == 'kakaostory') {
      Kakao.Story.share({
        url: org_url,
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
