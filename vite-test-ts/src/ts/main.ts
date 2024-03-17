import "../scss/style.scss";

console.log("test");

const textElement: HTMLElement | null = document.getElementById("text");

if (textElement) {
  const testText: HTMLDivElement = document.createElement("div");
  testText.textContent = "Test-ts";
  textElement.append(testText);
  testText.classList.add("text");
} else {
  console.error("Text element not found");
}
