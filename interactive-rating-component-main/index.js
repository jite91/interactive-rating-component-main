const submitElement = document.querySelector(".js-submit");
const rateScreen = document.querySelector("#rate_screen");
const resuitScreen = document.querySelector("#resuit_screen");
let btn = document.getElementsByClassName("js-design");
let valor = undefined;

// const r = (document.querySelector("#rating").innerHTML = "hello world");

function submit() {
  if (valor !== undefined) {
    rateScreen.classList.add("hidden");
    resuitScreen.classList.remove("hidden");
    let num = document.getElementById("rating");
    num.innerHTML = `You selected ${valor} out of 5`;
  } else {
    let error = document.querySelector(".error");
    error.innerHTML = "Pls input rating!";
    return error;
  }
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => (valor = btn[i].innerHTML));
}
submitElement.addEventListener("click", submit);

// document.location = "Thank-you.html";
