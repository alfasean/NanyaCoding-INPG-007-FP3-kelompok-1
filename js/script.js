function darkmode() {
  const ubah = document.body;
  ubah.classList.toggle("darkmode");
}

var backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 450) {
    backToTop.classList.add("show");

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
      });
    });
  } else {
    backToTop.classList.remove("show");
  }
});

const productContainers = [...document.querySelectorAll(".container-services")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const viewBtn = document.querySelector(".popup_button"),
  popup = document.querySelector(".popup"),
  close = popup.querySelector(".close");

viewBtn.onclick = () => {
  popup.classList.toggle("show");
};
close.onclick = () => {
  viewBtn.click();
};

const btn = document.querySelector(".btn_rate");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
btn.onclick = () => {
  widget.style.display = "none";
  post.style.display = "block";
  return false;
};

const scriptURL = "https://script.google.com/macros/s/AKfycbxrfd7uylExqFGEZcn0Z3emsV1LU4dbMicLmWcMUjhpaLOxY4u3DbfDcqkPXnnsOaMi/exec";
const form = document.forms["nanyacoding-contact"];
const pops = document.querySelector(".pops");
const btnLoading = document.querySelector(".btn-loading");
const myAlerts = document.querySelector(".my-alerts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  pops.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      pops.classList.toggle("d-none");
      myAlerts.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
