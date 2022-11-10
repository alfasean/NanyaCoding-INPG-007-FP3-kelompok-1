function darkmode() {
  const ubah = document.body;
  ubah.classList.toggle("darkmode")
}

var backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 450) {
    backToTop.classList.add("show");

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  } else {
    backToTop.classList.remove("show");
  }
});

const productContainers = [...document.querySelectorAll('.container-services')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const viewBtn = document.querySelector(".popup_button"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close")

viewBtn.onclick = ()=>{
  popup.classList.toggle("show");
}
close.onclick = ()=>{
  viewBtn.click();
}
