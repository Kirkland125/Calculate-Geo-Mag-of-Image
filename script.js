function calculateGeomag() {
    const pixelLength = parseFloat(document.getElementById('pixelLength').value);
    const pixelPitch = parseFloat(document.getElementById('pixelPitch').value);
    const objectLength = parseFloat(document.getElementById('objectLength').value);

    const errorMsg = document.getElementById('errorMsg');
    const resultBox = document.getElementById('resultBox');
    const resultValue = document.getElementById('resultValue');

    if (isNaN(pixelLength) || isNaN(pixelPitch) || isNaN(objectLength)) {
        errorMsg.textContent = 'Please fill in all fields with valid numbers.';
        errorMsg.style.display = 'block';
        resultBox.classList.remove('show');
        return;
    }

    if (objectLength === 0) {
        errorMsg.textContent = 'Object Length cannot be zero.';
        errorMsg.style.display = 'block';
        resultBox.classList.remove('show');
        return;
    }

    errorMsg.style.display = 'none';

    const geomag = (pixelLength * pixelPitch) / objectLength;

    resultValue.textContent = geomag.toFixed(4);
    resultBox.classList.add('show');
}
