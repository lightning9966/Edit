function changeEarpods () {
  let earpods = document.querySelector('.earpods') 

  console.log(window.pageYOffset)
  if (window.pageYOffset > 1200) {
    earpods.classList.remove("earpods-f")
  }
}

function changePositionLeftEarpods () {
  let headphonesLeft = document.querySelector('.earpods__headphones-left');

  console.log(window.pageYOffset)
  
  if (window.pageYOffset > 68 && window.pageYOffset < 1550) {
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

  changeEarpods();
  changePositionLeftEarpods();
  changePositionRightEarpods();
}