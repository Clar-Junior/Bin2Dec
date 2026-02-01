const binaryInput = document.getElementById("binaryInput");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const binary = binaryInput.value;
    if(binary === "" || !/^[01]+$/.test(binary)) {
        result.classList.remove("text-emerald-500");
        result.classList.add("text-red-500");
        result.textContent = "Try again! Please enter a valid binary number.";
        setTimeout(() => {
            result.textContent = "";
            result.classList.remove("text-red-500");
            result.classList.add("text-emerald-500");
            binaryInput.value = "";
            binaryInput.focus();
        }, 3000)

        return;
    }

    const decimal = parseInt(binary, 2); // Converte binário para decimal, params: (string, base)
    result.textContent = `Decimal Value: ${decimal}`;
});