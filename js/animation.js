$(document).ready(function () {
  var wrapperIcon = $('.icon-wrapper');
  var monitor = $('.iconsp-monitorStack');
  var load = $('.iconsp-loadStack');
  var post = $('.iconsp-postStack');
  var test = $('.iconsp-testStack');
  var tools = $('.iconsp-toolsStack');
  var contentIcon = $('.content-icon ul');
  var initIndexPosition = 0;

  contentIcon.find('li:eq(' + initIndexPosition + ')').addClass('currentContent');
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
  var runCycle = null;
  var runContentAnimation = function (index) {
    contentIcon.find('li').removeClass('currentContent').css({
      transition: '0.5s all ease-in-out',
      opacity: 0,
      position: 'absolute'
    }).addClass('preContent');
    contentIcon.find('li:eq(' + index + ')').addClass('currentContent').css({
      transition: '1s all ease-in-out',
      opacity: '1',
      position: 'relative',
      top: 0,
      left: 0
    }).removeClass('preContent');
    setTimeout(function () {
      contentIcon.find('li.preContent').css({left: '100%'}).removeClass('preContent');
    }, 1000);
  };
  var runCycleIcon = function () {
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

      runContentAnimation(currentPosition);

    });
  };
  var cssBotomPosition = {transition: '0.5s all ease-in-out', top: '80px', left: '0'};
  var cssTopPosition = {transition: '0.5s all ease-in-out', top: '-80px', left: '0'};
  var cssRightPosition = {transition: '0.5s all ease-in-out', top: '0', left: '80px'};
  var cssLeftPosition = {transition: '0.5s all ease-in-out', top: '0', left: '-80px'};
  var calcPosition = function (check) {
    check++;
    if (check > 3) {
      return 0
    } else
      return check

  };
  var setCurrentIconPosition = function (index) {
    var right = index;
    var top = calcPosition(right);
    var left = calcPosition(top);
    var bottom = calcPosition(left);

    wrapperIcon.find('.arround-icon i:eq(' + right + ')').css(cssRightPosition).addClass('currentPosition');
    wrapperIcon.find('.arround-icon i:eq(' + top + ')').css(cssTopPosition);
    wrapperIcon.find('.arround-icon i:eq(' + left + ')').css(cssLeftPosition);
    wrapperIcon.find('.arround-icon i:eq(' + bottom + ')').css(cssBotomPosition);

  };
  setTimeout(function () {

    setCurrentIconPosition(initIndexPosition);
    setTimeout(function () {
      contentIcon.find('li.currentContent').css({opacity: '1'});
    }, 1000);

    runCycle = setInterval(function () {
      runCycleIcon();
    }, 5000);

  }, 2500);

  wrapperIcon.find('.arround-icon i').click(function () {
    var currenIndex = $(this).index();
    wrapperIcon.find('.arround-icon i').css({top: 0, left: 0});
    clearTimeout(runCycle);
    setCurrentIconPosition(currenIndex);
    runContentAnimation(currenIndex);
    runCycle = setInterval(function () {
      runCycleIcon();
    }, 5000);
  });

});