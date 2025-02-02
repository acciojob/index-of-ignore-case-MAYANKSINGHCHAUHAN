function indexOfIgnoreCase(str, subStr) {
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}

function findIndexOfIgnoreCase() {
    const mainString = document.getElementById("mainString").value;
    const subString = document.getElementById("subString").value;
    const resultElement = document.getElementById("result");
    
    const result = indexOfIgnoreCase(mainString, subString);
    resultElement.textContent = result;
}
