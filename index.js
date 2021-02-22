function myFunction() {
  navigator.clipboard.writeText("arnavchand@gmail.com")
}

document.querySelector(".get-in-touch-button").addEventListener("click", function() {
  document.querySelector(".get-in-touch-button").innerHTML="Email Copied ✔";
  document.querySelector(".get-in-touch-button").style.color="#000000";
  document.querySelector(".get-in-touch-button").style.fontWeight="700";
  document.querySelector(".get-in-touch-button").style.backgroundColor="#FAFAFA";
  document.querySelector(".get-in-touch-button").style.borderColor= "transparent";
});
