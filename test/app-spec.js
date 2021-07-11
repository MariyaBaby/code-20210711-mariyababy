const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const appSpec = require('../src/app');
const inputData = require('../_mocks/input_data.mock');

describe("when complete()", () => {

    it("should expect function 'complete' to have been called", ()=> {
        let spy = chai.spy.on(appSpec, 'complete');
        appSpec.complete();
        console.log('inside first spec');
        expect(spy).to.have.been.called();
    });
});

describe("when calcBMI()", () => {

    it("should expect 'calcBMI' to have been called with input data", ()=> {
        let spy = chai.spy.on(appSpec, 'calcBMI');
        appSpec.calcBMI(inputData[0]);
        expect(spy).to.have.been.called();
    });
});

describe("when processJSONData()", () => {

    it("should expect 'processJSONData' to have been called with input data", ()=> {
        let spy = chai.spy.on(appSpec, 'processJSONData');
        appSpec.processJSONData(inputData, 'test', 'callback');
        expect(spy).to.have.been.called();
    });
});
