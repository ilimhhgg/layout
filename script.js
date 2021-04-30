new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
function viewDiv(){
  document.getElementById("div1").style.display = "flex";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div3").style.display = "none";
};
function viewDif(){
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "flex";
  document.getElementById("div3").style.display = "none";
};
function viewDig(){
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div3").style.display = "flex";
};

function scrollDownH() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
}
function scrollDownS() {
    window.scroll({
      left:0,
      top: 500,
      behavior: "smooth"
    })
  }

  function scrollDownP() {
    window.scroll({
      left:0,
      top: 1000,
      behavior: "smooth"
    })
  }

  function scrollDownB() {
    window.scroll({
      left:0,
      top: 1800,
      behavior: "smooth"
    })
  }

  function scrollDownC() {
    window.scroll({
      top: 3000,
      behavior: "smooth"
    })
  }
