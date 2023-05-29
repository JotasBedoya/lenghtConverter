let input = document.getElementById('input');
let result = document.getElementById('result');

let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');

let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // METER

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "meter" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 3.28084;
    } else if (inputTypeValue === "meter" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 39.3700787402;
    } else if( inputTypeValue === "meter" && resultTypeValue === "meter"){
        result.value = input.value;
    }

    // KILOMETER

    if (inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
        result.value = input.value;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 100000;
    } else if ( inputTypeValue === "kilometer" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 3280.84;
    } else if( inputTypeValue === "kilometer" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 39370.1;
    }

    // CENTIMETER

    if (inputTypeValue === "centimeter" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.01;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.00001;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
        result.value = input.value
    } else if ( inputTypeValue === "centimeter" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 0.032808399;
    } else if( inputTypeValue === "centimeter" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 0.3937007874;
    }

    // FOOT

    if (inputTypeValue === "foot" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.3048;
    } else if (inputTypeValue === "foot" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.0003048;
    } else if (inputTypeValue === "foot" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 30.48;
    } else if ( inputTypeValue === "foot" && resultTypeValue === "foot"){
        result.value = input.value;
    } else if( inputTypeValue === "foot" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 12;
    }

    // Inch
    if (inputTypeValue === "inch" && resultTypeValue === "kilometer") {
        // Inch -> Kilometer Formula 
        result.value = Number(input.value) * 0.0000254;
    } else if (inputTypeValue === "inch" && resultTypeValue === "centimeter") {
        // Inch -> Centimeter
        result.value = Number(input.value) * 2.54;
    } else if (inputTypeValue === "inch" && resultTypeValue === "foot") {
        // Inch -> Foot
        result.value = Number(input.value) * 0.0833333333;

    } else if (inputTypeValue === "inch" && resultTypeValue === "inch") {
        // Inch -> Inch
        result.value = input.value;
    } else if (inputTypeValue === "inch" && resultTypeValue === "meter") {
        // Inch -> meter
        result.value = Number(input.value) * 0.0254;
    }


}
