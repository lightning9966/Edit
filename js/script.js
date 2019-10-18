  window.onscroll = function() {
  let headphonesLeft = document.querySelector('.earpods__headphones-left');
  let headphonesRight = document.querySelector('.earpods__headphones-right');

  if (window.pageYOffset > 55 && window.pageYOffset < 1550) {
    headphonesLeft.style.transform = `translateY(${(-window.pageYOffset / 3) -65}px)`
    console.log(window.pageYOffset)
  } else {
    headphonesLeft.style.top = `translateY(-35px)`
  }

  if (window.pageYOffset > 55 && window.pageYOffset < 1550) {
    headphonesRight.style.transform = `translateY(${(-window.pageYOffset / 1.25) -70}px)`
    console.log(window.pageYOffset)
} else {
    headphonesLeft.style.top = `translateY(-60px)`
  }
}