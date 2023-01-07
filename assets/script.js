$('#form').submit(function (e) {
  e.preventDefault();

  $('#first-page').fadeOut('slow', function () {
    $('#second-page').fadeIn('slow');
    setTimeout(function () {
      $('.second-page-checking').fadeIn('slow');
      $('#checking-1').fadeIn('slow');
    }, 2000);
    setTimeout(function () {
      $('#checking-2').fadeIn('slow');
    }, 4000);
    setTimeout(function () {
      $('#checking-3').fadeIn('slow');
    }, 6000);
    setTimeout(function () {
      $('#second-page').fadeOut('slow', function () {
        $('#third-page').fadeIn('slow');
        const typed0 = new Typed('#typed0', {
          strings: ['Informazioni violate'],
          typeSpeed: 20,
          backSpeed: 0,
          loop: false,
          showCursor: false,
          onComplete: function (self) {
            const typed1 = new Typed('#typed1', {
              strings: [
                '<li>{var2},</li><li>{var5}/{var6}/{var7},</li><li>{var4},</li><li>{var3},</li>',
              ],
              typeSpeed: 20,
              backSpeed: 0,
              loop: false,
              showCursor: false,
              onComplete: function (self) {
                const typed2 = new Typed('#typed2', {
                  strings: ['File del dispositivo rubati'],
                  typeSpeed: 20,
                  backSpeed: 0,
                  loop: false,
                  showCursor: false,
                  onComplete: function (self) {
                    const typed3 = new Typed('#typed3', {
                      strings: ['32 foto, 8 video, 4 password di file e profili'],
                      typeSpeed: 20,
                      backSpeed: 0,
                      loop: false,
                      showCursor: false,
                      onComplete: function (self) {
                        const typed4 = new Typed('#typed4', {
                          strings: ['Virus trovati'],
                          typeSpeed: 20,
                          backSpeed: 0,
                          loop: false,
                          showCursor: false,
                          onComplete: function (self) {
                            const typed5 = new Typed('#typed5', {
                              strings: ['72'],
                              typeSpeed: 20,
                              backSpeed: 0,
                              loop: false,
                              showCursor: false,
                              onComplete: function (self) {
                                const typed6 = new Typed('#typed6', {
                                  strings: ['Nelle seguenti banche dati trovate:'],
                                  typeSpeed: 20,
                                  backSpeed: 0,
                                  loop: false,
                                  showCursor: false,
                                  onComplete: function (self) {
                                    const typed7 = new Typed('#typed7', {
                                      strings: [
                                        '<li>BAe Systems Applied Intelligence</li><li>Callcredit Information Group</li><li>Cabinet Office Public Sector Staff Fraud Database</li><li>Cifas: Internal Fraud Database</li>',
                                      ],
                                      typeSpeed: 20,
                                      backSpeed: 0,
                                      loop: false,
                                      showCursor: false,
                                    });
                                  },
                                });
                              },
                            });
                          },
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      });
    }, 6250);
  });
});
// document.querySelector('.modal__button').addEventListener('click', function () {
//   document.body.classList.remove('modal__open');
//   $('.modal').fadeOut('slow');
// });
const animItems = document.querySelectorAll('.anim-items');

if (animItems) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    animItems.forEach((el) => {
      const animItemHeight = el.offsetHeight;
      const animItemOffset = offset(el).top;
      const animStart = 4;

      let aminItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        aminItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - aminItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        el.classList.add('anim-active');
      } else {
        if (!el.classList.contains('not-hide')) el.classList.remove('anim-active');
      }
    });
  }
  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
  setTimeout(animOnScroll, 400);
}
