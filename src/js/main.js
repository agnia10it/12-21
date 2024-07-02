let tl = gsap.timeline();

tl.from(".title", {
    opacity: 0,
    y: 500,
    duration: 2
  })
  .from(".main__button", {
    opacity: 0,
    y: 500,
    duration: 1.8
  }, 0)
  .to(".main__descr", {
    opacity: 1,
    duration: 0.5
  })
  .fromTo(".photo_big", {
    opacity: 0,
    scale: 0.8
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.3
  })
  .fromTo(".photos-right .photo:nth-child(1)", {
    opacity: 0,
    scale: 0.8
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.3
  })
  .fromTo(".photos-right .photo:nth-child(2)", {
    opacity: 0,
    scale: 0.8
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.3
  })
  .to(".photo__descr", {
    opacity: 1,
    duration: 0.5
  });


function menuAnimation(open) {
  let tlMenu = gsap.timeline();
  tlMenu.fromTo('.burger', {
      display: 'none'
    }, {
      display: 'block'
    })
    .fromTo('.burger__top', {
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1
    }, 0)
    .fromTo('.burger__main', {
      opacity: 0,
      y: 1000
    }, {
      opacity: 1,
      y: 0,
      duration: 1
    }, 0)
    .fromTo('.menu-list', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1
    }, 0.5)
    .fromTo('.burger__social-list, .right-menu', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1
    }, 0.8)
  if (open) {
    tlMenu.play(0);
  } else {
    tlMenu.reverse(0);
  }
}

let burger = document.getElementsByClassName('burger');
const menuBTN = document.getElementById('burger-btn');
const closeMenuBTN = document.getElementById('burger__close-btn');
let tl2 = gsap.timeline();

menuBTN.addEventListener('click', () => {
  menuAnimation(true);
});


closeMenuBTN.addEventListener('click', () => {
  menuAnimation(false);
});
