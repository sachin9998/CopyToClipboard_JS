const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const text = input.value;
  console.log(text);
  navigator.clipboard.writeText(text);
  alert("Text Copied");
  // Copying text to clipboard
});
