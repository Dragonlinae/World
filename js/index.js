$(window).on('load', function () {
  gsap.to('#loader', 1, { y: "-100%" });
  gsap.to('#loader', 1, { opacity: 0 });
  gsap.to('#loader', 0, { display: "none", delay: 1 });
  gsap.to('#header', 0, { display: "block", delay: 1 })
  gsap.to('#navigation-content', 0, { display: "none" });
  gsap.to('#navigation-content', 0, { display: "flex", delay: 1 });
})
$(function () {
  $('.color-panel').on("click", function (e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
  });
  $('.colors a').on("click", function (e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    isSin = document.getElementById("world-virtue").style.display == "none";
    $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
    if (isSin) {
      $.get('css/' + attr + '.css', function (resp) {
        // resp now should contain your CSS file content.
        targetcolor = resp.split(".color {\r\n    color: ")[1].substring(0, 7);
        document.getElementById("breaker").style.backgroundColor = targetcolor;
        $('.change-image a button').css('background', targetcolor);
        $('.world-text h2').css('color', targetcolor);
        $('.world-text button').css('color', targetcolor);
        $('.world-text button').css('border', targetcolor);
      });
    } else {
      $.get('css/' + attr + '.css', function (resp) {
        // resp now should contain your CSS file content.
        targetcolor = resp.split(".color2 {\r\n    color: ")[1].substring(0, 7);
        document.getElementById("breaker").style.backgroundColor = targetcolor;
        $('.change-image a button').css('background', targetcolor);
        $('.world-text h2').css('color', targetcolor);
        $('.world-text button').css('color', targetcolor);
        $('.world-text button').css('border', targetcolor);
      });
    }
  });
});
$(function () {
  $('.menubar').on('click', function () {
    gsap.to('#navigation-content', .6, { y: 0 });
  })
  $('.navigation-close').on('click', function () {
    gsap.to('#navigation-content', .6, { y: "-100%" });
  });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (fullTxt.substring(0, 3) == "<r>") {
      this.el.className = this.el.className.replace(/color2$/g, 'color')
      fullTxt = fullTxt.substring(3);
    } else if (fullTxt.substring(0, 3) == "<b>") {
      this.el.className = this.el.className.replace(/color$/g, 'color2')
      fullTxt = fullTxt.substring(3);
    }

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
    document.body.appendChild(css);
  };
})
$(function () {

  $('#characters-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#update', 0, { display: "none" });
    gsap.to('#world', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#about', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#contact-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#update', 0, { display: "none" });
    gsap.to('#world', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#contact', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#world-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#update', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#world', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#update-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#world', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#update', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#home-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#world', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#update', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#header', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#sins-characters-button').on('click', function () {
    if (document.getElementById("breaker").style.display == "none") {
      gsap.to('#sins-characters', 0, { display: "flex", delay: .7 });
      gsap.to('#virtues-characters', 0, { display: "none", delay: .7 });
      $('.change-image a button').css('background', $('.color').css('color'));
      document.getElementById("breaker").style.backgroundColor = $('.color').css('color');
      gsap.to('#breaker', 0, { display: "block" });
      gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
      gsap.to('#breaker', 0, { display: "none", delay: 2 });
      gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#world-sin', 0, { display: "block", delay: .7 });
      gsap.to('#world-virtue', 0, { display: "none", delay: .7 });
      $('.world-text h2').css('color', $('.color').css('color'));
      $('.world-text button').css('color', $('.color').css('color'));
      $('.world-text button').css('border', $('.color').css('color'));
    }
  })
  $('#virtues-characters-button').on('click', function () {
    if (document.getElementById("breaker").style.display == "none") {
      gsap.to('#virtues-characters', 0, { display: "flex", delay: .7 });
      gsap.to('#sins-characters', 0, { display: "none", delay: .7 });
      $('.change-image a button').css('background', $('.color2').css('color'));
      document.getElementById("breaker").style.backgroundColor = $('.color2').css('color');
      gsap.to('#breaker', 0, { display: "block" });
      gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
      gsap.to('#breaker', 0, { display: "none", delay: 2 });
      gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#world-virtue', 0, { display: "block", delay: .7 });
      gsap.to('#world-sin', 0, { display: "none", delay: .7 });
      $('.world-text h2').css('color', $('.color2').css('color'));
      $('.world-text button').css('color', $('.color2').css('color'));
      $('.world-text button').css('border', $('.color2').css('color'));
    }
  })
  $('#sins-world-button').on('click', function () {
    if (document.getElementById("breaker").style.display == "none") {
      gsap.to('#world-sin', 0, { display: "block", delay: .7 });
      gsap.to('#world-virtue', 0, { display: "none", delay: .7 });
      $('.world-text h2').css('color', $('.color').css('color'));
      $('.world-text button').css('color', $('.color').css('color'));
      $('.world-text button').css('border', $('.color').css('color'));
      document.getElementById("breaker").style.backgroundColor = $('.color').css('color');
      gsap.to('#breaker', 0, { display: "block" });
      gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
      gsap.to('#breaker', 0, { display: "none", delay: 2 });
      gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#sins-characters', 0, { display: "flex", delay: .7 });
      gsap.to('#virtues-characters', 0, { display: "none", delay: .7 });
      $('.change-image a button').css('background', $('.color').css('color'));
    }
  })
  $('#virtues-world-button').on('click', function () {
    if (document.getElementById("breaker").style.display == "none") {
      gsap.to('#world-virtue', 0, { display: "block", delay: .7 });
      gsap.to('#world-sin', 0, { display: "none", delay: .7 });
      $('.world-text h2').css('color', $('.color2').css('color'));
      $('.world-text button').css('color', $('.color2').css('color'));
      $('.world-text button').css('border', $('.color2').css('color'));
      document.getElementById("breaker").style.backgroundColor = $('.color2').css('color');
      gsap.to('#breaker', 0, { display: "block" });
      gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
      gsap.to('#breaker', 0, { display: "none", delay: 2 });
      gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
      gsap.to('#virtues-characters', 0, { display: "flex", delay: .7 });
      gsap.to('#sins-characters', 0, { display: "none", delay: .7 });
      $('.change-image a button').css('background', $('.color2').css('color'));
    }
  })

})
$(function () {
  var body = document.querySelector('body');
  var $cursor = $('.cursor')
  function cursormover(e) {

    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: .002
    })
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1
    })

  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: .6
    })
  }
  $(window).on('mousemove', cursormover);
  $('.menubar').hover(cursorhover, cursor);
  $('a').hover(cursorhover, cursor);
  $('.navigation-close').hover(cursorhover, cursor);

})

function randomizeImage(target, character, count) {
  potentials = $(target);
  potentials.each(function () {
    if ($(this).attr('src').includes(character)) {
      asrc = $(this).attr('src');
      number = asrc.split("art")[1].split(".")[0];
      randnum = Math.floor(Math.random() * count) + 1;
      while (number == randnum) {
        randnum = Math.floor(Math.random() * count) + 1;
      }
      $(this).attr('src', asrc.replace(/art\d+/g, "art" + randnum));
    }
  })
}