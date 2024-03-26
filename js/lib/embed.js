(function() {
  var afterLoad, e, loadCss, loadLight, loadScript, receiveMessage;

  // e = document.getElementById("kolo-frame");
  // loadScript = function(url, callback) {
  //   var head, script;
  //   head = document.getElementsByTagName('head')[0];
  //   script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = url;
  //   script.onreadystatechange = callback;
  //   script.onload = callback;
  //   head.appendChild(script);
  // };

  // loadLight = function() {
  //   console.log("http://mbeta.kolo.it:3330/js/lightview.js");
  //   return loadScript("http://mbeta.kolo.it:3330/js/lightview.js", loadCss);
  // };

  // loadCss = function() {
  //   var head, link, url;
  //   url = "http://mbeta.kolo.it:3330/stylesheets/lightview.css";
  //   head = document.getElementsByTagName('head')[0];
  //   link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.type = 'text/css';
  //   link.media = "all";
  //   link.href = url;
  //   return head.appendChild(link);
  // };

  afterLoad = function() {
    return console.log("loaded!");
  };

  receiveMessage = function(event) {
    console.log("etomeeee", event);
    return Lightview.show({
      url: "https://kolo.it/embeds?embeddings=571c90638a2bc6bcd0000001&user_ids=<%=@embed.user_ids%>&kolos=<%=@embed.kolo_ids%>&ne_lng=<%=@embed.ne_lng%>&ne_lat=<%=@embed.ne_lat%>&sw_lng=<%=@embed.sw_lng%>&sw_lat=<%=@embed.sw_lat%>",
      options: {
        initialDimensions: {
          width: 301,
          height: 300
        },
        effects: false,
        skin: 'black',
        spacing: {
          relative: {
            horizontal: 0,
            vertical: 0
          }
        }
      }
    });
  };

  // if (!("<%=@embed.wordpress %>".length > 1)) {
  //   loadScript("//code.jquery.com/jquery-1.11.0.min.js", loadLight);
  //   window.addEventListener('message', receiveMessage, false);
  // }
  // window.addEventListener('message', receiveMessage, false);
  // e.innerHTML = '<iframe src="http://mbeta.kolo.it:3330/embeds?embeddings=571c90638a2bc6bcd0000001" style="border: 0pt none ;' + 'width: 100%;' + 'height: 100%;" scrolling="no"></iframe>';

  // loadLight();

  // loadCss();

}).call(this);