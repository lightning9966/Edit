function changePositionEarpods () {
  let mainWrap = document.querySelector('.main-wrap');
  
  if (window.pageYOffset > window.innerHeight - 30) {
    mainWrap.style.paddingBottom = '50px'

  } else {
    mainWrap.style.paddingBottom = `${window.innerHeight + 50 - window.pageYOffset}px`
  }
}

function changePositionLeftEarpods () {
  let headphonesLeft = document.querySelector('.earpods__headphones-left');
  
  if (window.pageYOffset > 78 && window.pageYOffset < 1550) {
    headphonesLeft.style.transform = `translateY(${(-window.pageYOffset / 5) -65}px)`
  } else {
    headphonesLeft.style.top = `translateY(-115px)`
  }
}

function changePositionRightEarpods () {
  let headphonesRight = document.querySelector('.earpods__headphones-right');
  
  if (window.pageYOffset > 91 && window.pageYOffset < 1550) {
    headphonesRight.style.transform = `translateY(${(-window.pageYOffset / 3) -70}px)`
  } else {
    headphonesRight.style.top = `translateY(-65px)`
  }
}
window.onscroll = function() {

  changePositionEarpods();
  changePositionLeftEarpods();
  changePositionRightEarpods();
}