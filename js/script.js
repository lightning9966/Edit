function changeClassEarpods () {
  let earpods = document.querySelector('.earpods')

  if (window.pageYOffset > 1100) {
    earpods.classList.remove("earpods-f")
  } else {  
    earpods.classList.add("earpods-f")
  }
}

function changePositionLeftEarpods () {
  let headphonesLeft = document.querySelector('.earpods__headphones-left');
  
  if (window.pageYOffset > 68 && window.pageYOffset < 1550) {
    headphonesLeft.style.transform = `translateY(${(-window.pageYOffset / 5) -65}px)`
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

  console.log(window.pageYOffset)

  changeClassEarpods();
  changePositionLeftEarpods();
  changePositionRightEarpods();
}