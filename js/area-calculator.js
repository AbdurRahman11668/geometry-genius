function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-height');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const area = width * length;
    console.log(area)

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}


// function calculateParallelogramArea(){
//     const baseField = document.getElementById('parallelogram-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);
//     console.log(base);

//     const heightField = document.getElementById('parallelogram-height');
//     const heightValueText = heightField.value;
//     const height = parseFloat(heightValueText);
//     console.log(height);

//     const area = base * height;
//     console.log(area)

//     const areaSpan = document.getElementById('parallelogram-area');
//     areaSpan.innerText = area;
// }

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);
    
    const area = base * height;

    setElementInnerText('parallelogram-area', area);
}

// Reuseable Function
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
} 