"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complete = exports.calcBMI = exports.processJSONData = void 0;
var input_data_mock_1 = require("../_mocks/input_data.mock");
var overWeightCounter = 0;
function processJSONData(inputData, processData, callback) {
    var maxTime = 100;
    var delayTime = 20;
    var data = inputData.concat();
    setTimeout(function () {
        var endTime = +new Date() + maxTime; //set a time interval for execution
        // do-while is added to execute the processData once
        do {
            processData(data.shift());
        } while (data.length > 0 && endTime > +new Date());
        // this is to execute processData until the data length is not zero
        if (data.length > 0) {
            setTimeout(processData, delayTime);
        }
        else {
            if (callback)
                callback();
        }
    }, delayTime);
}
exports.processJSONData = processJSONData;
// function to calculate individual BMI
function calcBMI(dataItem) {
    var bmi;
    bmi = dataItem.WeightKg / (((dataItem.HeightCm) * (dataItem.HeightCm)) / 10000);
    dataItem.bmi = bmi;
    if (bmi <= 18.4) {
        dataItem.bmiCategory = 'Underweight';
        dataItem.healthRisk = 'Malnutrition risk';
    }
    else if ((bmi === 18.5) || ((bmi > 18.5) && (bmi < 24.9)) || (bmi === 24.9)) {
        dataItem.bmiCategory = 'Normal weight';
        dataItem.healthRisk = 'Low risk';
    }
    else if ((bmi === 25) || ((bmi > 25) && (bmi < 29.9)) || (bmi === 29.9)) {
        dataItem.bmiCategory = 'Over weight';
        dataItem.healthRisk = 'Enhanced risk';
        overWeightCounter = overWeightCounter + 1;
    }
    else if ((bmi === 30) || ((bmi > 30) && (bmi < 34.9)) || (bmi === 34.9)) {
        dataItem.bmiCategory = 'Moderately obese';
        dataItem.healthRisk = 'Medium risk';
    }
    else if ((bmi === 35) || ((bmi > 35) && (bmi < 39.9)) || (bmi === 39.9)) {
        dataItem.bmiCategory = 'Severely obese';
        dataItem.healthRisk = 'High risk';
    }
    else if (bmi <= 18.4) {
        dataItem.bmiCategory = 'Very Severely obese';
        dataItem.healthRisk = 'Very High risk';
    }
    console.log('Updated data item', dataItem);
}
exports.calcBMI = calcBMI;
// function to be called once the bmi calculation is done
function complete() {
    console.log("Number of overweight people:", overWeightCounter);
}
exports.complete = complete;
// call to calculate BMI
processJSONData(input_data_mock_1.MOCK_INPUT_DATA, calcBMI, complete);
