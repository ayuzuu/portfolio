var animDataHello = {
    container: document.getElementById('svg_text_hello'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '//tondemodesign.com/wp-content/uploads/json/text_hello.json'
  };
  var animHello = bodymovin.loadAnimation(animDataHello);
  window.onresize = animHello.resize.bind(animHello);