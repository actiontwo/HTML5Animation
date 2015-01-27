$(document).ready(function () {
  var wrapperIcon = $('.icon-wrapper');
  var monitor = $('.iconsp-monitorStack');
  var load = $('.iconsp-loadStack');
  var post = $('.iconsp-postStack');
  var test = $('.iconsp-testStack');
  var tools = $('.iconsp-toolsStack');
  var contentIcon = $('.content-icon ul');


  contentIcon.find('li').css({
    transition: '0.5s all ease-in-out',
    left: '100%',
    position: 'absolute',
    top: 0,
    opacity: '0'
  });

  contentIcon.find('li.currentContent').css({
    left: '0',
    top: 0,
    position: 'relative'
  });

  var left = '10%';
  if ($(window).width() < 800) {
    left = '15%';
  }
  if ($(window).width() < 600) {
    left = '40%';
  }

  wrapperIcon.css({
    transition: '0.5s all ease-in-out',
    left: left
  });

  $(window).resize(function () {
    console.log('ad');
    if ($(window).width() > 600) {
      wrapperIcon.css({left: '10%' });
    }
    else {
      wrapperIcon.css({left: '40%' });
    }
  });

  setTimeout(function () {

    monitor.css({
      transition: '0.5s all ease-in-out', top: '80px', left: '0'}).addClass('bottom-position');
    load.css({
      transition: '0.5s all ease-in-out', top: '-80px', left: '0'}).addClass('top-position');
    post.css({
      transition: '0.5s all ease-in-out', top: '0', left: '80px'}).addClass('right-position');
    test.css({
      transition: '0.5s all ease-in-out', top: '0', left: '-80px'}).addClass('left-position');
    setTimeout(function () {
      contentIcon.find('li.currentContent').css({opacity: '1'});
    }, 2000);
    setInterval(function () {

      wrapperIcon.find('.arround-icon i').removeClass('current-position');
      wrapperIcon.find('.arround-icon i').each(function () {
        var top = $(this).position().top;
        var left = $(this).position().left;
        if (top == 0 && left == '80') {
          $(this).css({top: '-80px', left: '0'});
        }
        if (top == 0 && left == '-80') {
          $(this).css({top: '80px', left: '0'});
        }

        if (top == '80' && left == '0') {
          $(this).css({top: '0', left: '80px'}).addClass('current-position');
        }

        if (top == '-80' && left == '0') {
          $(this).css({top: '0', left: '-80px'});
        }

        var currentPosition = wrapperIcon.find('.current-position').index();

        contentIcon.find('li').removeClass('currentContent').css({
          transition: '0.5s all ease-in-out',
          opacity: 0,
          position: 'absolute'
        }).addClass('preContent');
        contentIcon.find('li:eq(' + currentPosition + ')').addClass('currentContent').css({
          transition: '1s all ease-in-out',
          opacity: '1',
          position: 'relative',
          top: 0,
          left: 0
        }).removeClass('preContent');
        setTimeout(function () {
          contentIcon.find('li.preContent').css({left: '100%'}).removeClass('preContent');
        }, 1000);
        console.log(currentPosition)

      });

    }, 5000);

  }, 2500);

  wrapperIcon.find('.arround-icon i').click(function(){
    var currenIndex = $(this).index();
    console.log (currenIndex);
  });

});