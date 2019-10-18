  window.onscroll = function() {
    let earpods = this.document.querySelector('.earpods')
    let headphonesLeft = document.querySelector('.earpods__headphones-left');
    let headphonesRight = document.querySelector('.earpods__headphones-right');

    if (window.pageYOffset < 230) {
      earpods.style.transform = `translateY(${window.pageYOffset}px)`
      console.log(window.pageYOffset)
    } else {

      if (window.pageYOffset > 265 && window.pageYOffset < 1550) {
        headphonesLeft.style.transform = `translateY(${(-window.pageYOffset / 3) + 55}px)`
        console.log(window.pageYOffset)
      } else {
        headphonesLeft.style.top = `translateY(-35px)`
      }

      if (window.pageYOffset > 295 && window.pageYOffset < 1550) {
        headphonesRight.style.transform = `translateY(${(-window.pageYOffset / 3) + 45}px)`
        console.log(window.pageYOffset)
      } else {
        headphonesLeft.style.top = `translateY(-60px)`
      }
  }
}