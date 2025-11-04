// Obtener elementos del DOM
const inputText = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");
const resultDiv = document.getElementById("result");

// Función para invertir texto
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Evento al hacer clic en "Reverse"
reverseBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text === "") {
    resultDiv.textContent = "Por favor ingresa un texto.";
    return;
  }
  resultDiv.textContent = reverseString(text);
});

// Evento al hacer clic en "Copy"
copyBtn.addEventListener("click", () => {
  const textToCopy = resultDiv.textContent;
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
    copyBtn.textContent = "Copied ✅";
    setTimeout(() => (copyBtn.textContent = "Copy 📋"), 1500);
  }
});
