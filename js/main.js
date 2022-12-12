import dataFromTableB from '../data/js/tableB.js';
import dataFromTableC from '../data/js/tableC.js';
import dataFromTableD from '../data/js/tableD.js';
import dataFromTableH2 from '../data/js/tableH2.js';
import dataFromTableJ from '../data/js/tableJ.js';
import dataFromTableK from '../data/js/tableK.js';
import dataFromTableL from '../data/js/tableL.js';
import dataFromTableN from '../data/js/tableN.js';
import dataFromTableQ from '../data/js/tableQ.js';
import dataFromTableQ1 from '../data/js/tableQ1.js';
import dataFromTableM from '../data/js/tableM.js';
import dataFromTableU from '../data/js/tableU.js';
import dataFromTableV from '../data/js/tableV.js';
import dataFromThreadTable from '../data/js/threadTable.js';
import ScrewConveyor from './conveyorClass.js';

//Load data from table B
const dataTableB = () => {
    const materialName = document.getElementById('material');
    materialCode.value = '45A35';
    materialDensity.value =  '45';
    for (const e of dataFromTableB.TableB) {
        materialName.innerHTML += `<option value="${e.MATERIAL}">${e.MATERIAL}</option>`; 
    }
}

//Change data from table B
const materialName = document.getElementById('material');
materialName.addEventListener('change', function(e) {
    
    const materialNameValue =  materialName.value;
    const materialCode = document.getElementById('materialCode');
    const materialDensity = document.getElementById('materialDensity');
    const materialDataArray = dataFromTableB.TableB.find(({ MATERIAL }) => MATERIAL===materialNameValue);
    materialCode.value = materialDataArray['MATERIAL CLASS CODE'];
    materialDensity.value =  materialDataArray.AVG;

});

//Load data from table C
const dataTableC = () => {
    const flightPitch = document.getElementById('flightPitch');
    const flightType = document.getElementById('flightType');    
    for (const e of dataFromTableC.Cf1) {
        flightPitch.innerHTML += `<option value="${e['PITCH']}">${e['TYPE']}</option>`; 
    }
    for (const e of dataFromTableC.Cf2_15) {
        flightType.innerHTML += `<option value="${e['TYPE OF FLIGHT']}">${e['TYPE OF FLIGHT']}</option>`; 
    }
}

//Load data from table N
const dataTableN = () => {
    const screwDiam = document.getElementById('screwDiam');
    for (const e of dataFromTableN.LightDuty) {
        screwDiam.innerHTML += `<option value="${e['SCREW DIA']}">${e['SCREW DIA']+'"'}</option>`; 
    }
}

//Load data from table M
const dataTableM = () => {
    const screwBearing = document.getElementById('screwBearing');
    for (const e of dataFromTableM.TableM) {
        screwBearing.innerHTML += `<option value="${e['BEARING TYPE']}">${e['BEARING TYPE']}</option>`; 
    }
}

//Load data from table Q
const dataTableQ = () => {
    const screwPipeSize = document.getElementById('screwPipeSize');
    for (const e of dataFromTableQ.TableQ) {
        screwPipeSize.innerHTML += `<option value="${e['PIPE']}">${e['PIPE']}</option>`; 
    }
}


//Load data from table V
const dataTableV = () => {
    const screwIncl = document.getElementById('screwIncl');
    for (const e of dataFromTableV.TableV) {
        screwIncl.innerHTML += `<option value="${e['Inclination in °']}">${e['Inclination in °']+'°'}</option>`; 
    }
}

//Load data from thread table
const dataTableThread = () => {
    const screwBolt = document.getElementById('screwBolt');
    for (const e of dataFromThreadTable.ThreadTable) {
        screwBolt.innerHTML += `<option value="${e['Major Diameter']}">${e['Major Diameter']+'°'}</option>`; 
    }
}

//Check empty fields
const emptyFields = () => {
    const massFlow = document.getElementById('massFlow').value;
    const lengthConveyor = document.getElementById('lengthConveyor').value;
    if (massFlow === "" || lengthConveyor === "") {
        return true;
    }
}

//Gather constants data from tables
const conveyorCapacity = (conveyor) => {

    const conveyorCapacityTable = (screwLoad) => {
        switch (screwLoad) {
            case 'Load15':
                return dataFromTableD.Load15;
            case 'Load30A':
                return dataFromTableD.Load30A;
            case 'Load30B':
                return dataFromTableD.Load30B;
            case 'Load45':
                return dataFromTableD.Load45;
            case 'Load90':
                return dataFromTableD.Load90;
            default:
                return dataFromTableD.Load15;
        }
    }

    const data = conveyorCapacityTable(conveyor.screwLoad);
    for (const dataElement of data) {
        if (dataElement['SCREW DIAMETER'] === conveyor.screwDiameter) {            
            return dataElement['CAPACITY (FT3/HR) PER RPM'];
        }
    }
}

const loadCf1 = (conveyor) => {
    switch (conveyor.flightPitch) {
        case 1:
            return dataFromTableC.Cf1[0].CF1;
        case 0.67:
            return dataFromTableC.Cf1[1].CF1;
        case 0.5:
            return dataFromTableC.Cf1[2].CF1;
        case 0.75:
            return dataFromTableC.Cf1[3].CF1;
        case 0.33:
            return dataFromTableC.Cf1[4].CF1;
        case 1.5:
            return dataFromTableC.Cf1[5].CF1;
        default:
            return dataFromTableC.Cf1[0].CF1;
    }
}


const loadCf2 = (conveyor) => {   
    
    const loadData = (conveyor) => {
        switch (conveyor.screwLoad) {
            case 'Load15':
                return dataFromTableC.Cf2_15;
            case 'Load30A':
                return dataFromTableC.Cf2_30;
            case 'Load30B':
                return dataFromTableC.Cf2_30;
            case 'Load45':
                return dataFromTableC.Cf2_45;
            case 'Load90':
                return dataFromTableC.Cf2_45;
            default:
                return dataFromTableC.Cf2_15;
        } 
    }
    const data = loadData(conveyor);      
    
    switch (conveyor.flightType) {
        case "Standard":
            return data[0].Cf2;
        case "Cut":
            return data[1].Cf2;
        case "Cut & Folded":
            return data[2].Cf2;
        case "Ribbon":
            return data[3].Cf2;      
        default:
            return data[0].Cf2;
    }
}

const loadCf3 = (conveyor) => {
    const data = dataFromTableC.Cf3;
    for (const dataElement of data) {
        if (dataElement['PADDLES'] === conveyor.paddleQty) {
            return dataElement.Cf3;
        }
    }
}

const loadCin = (conveyor) => {
    const data = dataFromTableV.TableV;
    const inputData = conveyor.screwIncl;
    return (data.find( e => e['Inclination in °'] === inputData))['Cin'];
}

const loadFd = (conveyor) => {
    const data = dataFromTableL.TableL;
    const inputData = conveyor.screwDiameter;
    return (data.find( e => e['SCREW DIA.'] === inputData))['Fd']; 
}

const loadFm = (conveyor) => {
    const data = dataFromTableB.TableB;
    const inputData = conveyor.materialCode;
    return (data.find( e => e['MATERIAL CLASS CODE'] === inputData))['MATERIAL FACTOR'];
}

const loadFb = (conveyor) => {
    const data = dataFromTableM.TableM;
    const inputData = conveyor.screwBearing;
    return (data.find( e => e['BEARING TYPE'] === inputData))['Fb'];
}

const loadFf = (conveyor) => {

    const loadData = (conveyor) => {
        switch (conveyor.screwLoad) {
            case 'Load15':
                return dataFromTableJ.Ff15;
            case 'Load30A':
                return dataFromTableJ.Ff30;
            case 'Load30B':
                return dataFromTableJ.Ff30;
            case 'Load45':
                return dataFromTableJ.Ff30;
            case 'Load90':
                return dataFromTableJ.Ff30;
            default:
                return dataFromTableJ.Ff15;
        } 
    }

    const data = loadData(conveyor);    
    const inputData = conveyor.flightType;
    return (data.find( e => e['TYPE OF FLIGHTING'] === inputData))['Ff'];
}

const loadFp = (conveyor) => {
    const data = dataFromTableK.TableK;
    const inputData = conveyor.paddleQty;
    return (data.find( e => e['PADDLES'] === inputData))['Fp'];
}

//From table H, calculations for F0
const loadFZero = (conveyor) => {
    const frictionHP = conveyor.screwFrictionHP;
    const materialHP = conveyor.screwMaterialHP;
    if (frictionHP + materialHP >= 5.2) {
        const fZero = 1 
        return fZero;       
    } else {
        const fZero = (Math.log(frictionHP + materialHP) * -0.6115) + 2.024;      
        return fZero;  
    }  
}

const getPipeData = (conveyor) => {
    const data = dataFromTableQ1.TableQ1;
    const inputData = conveyor.screwPipeSize;
    return (data.find( e => e['PIPE'] === inputData));
}

const getFlightWeight = (conveyor) => {
    const data = dataFromTableU.TableU;
    const inputData = conveyor.screwDiameter;
    const inputData2 = conveyor.flightThickness;
    const result = (data.find( e => e['SCREW DIAMETER'] === inputData));
    return result[inputData2];
}

//Run calculations

const upperSizeMotor = (conveyor) => {
    const data = dataFromTableH2.TableH2;
    const inputData = conveyor.screwPower;
    return (data.find( e => e['HP'] >= inputData))['HP'];
}

const calculateTorque = (conveyor) => {
    const upperMotor = upperSizeMotor(conveyor);
    return (63025 * upperMotor / conveyor.conveyorSpeed);
   
}

const getScrewWeight = (conveyor) => {
    const flightsPerLength = (conveyor.lengthConveyor / 1000) / (conveyor.flightPitch * (conveyor.screwDiameter * 25.4 / 1000));
    const flightWeight = getFlightWeight(conveyor);
    const pipeWeight = (getPipeData(conveyor)).W;
    console.log((pipeWeight) * (conveyor.lengthConveyor / 1000));
    return (flightsPerLength * flightWeight) + parseFloat((pipeWeight) * (conveyor.lengthConveyor / 1000));
}

const calculateDeflection = (conveyor) => {
    const kgToLb = 0.45747;
    const inToMm = 25.4;
    const modulusOfElasticity = 29000000; //psi
    const pipeInertia = getPipeData(conveyor).I; //in4
    const screwWeight = getScrewWeight(conveyor) / kgToLb; //lb
    const deflection = (screwWeight * Math.pow((conveyor.lengthConveyor / inToMm), 3)) / (76.7 * modulusOfElasticity * pipeInertia) * inToMm;
    return deflection; //mm
}

const calculateEquivalentStress = (conveyor) => {
    const kgToLb = 0.45747;
    const inToMm = 25.4;
    const torque = calculateTorque(conveyor);
    const screwWeight = getScrewWeight(conveyor) / kgToLb; //lb
    const bendingMoment = ((conveyor.lengthConveyor / inToMm) * screwWeight) / 8; //lb*in
    const neutralAxis = ((getPipeData(conveyor)).OD) / (2 * inToMm); //in
    const pipeInertia = getPipeData(conveyor).I; //in4
    const bendingStress = (bendingMoment * neutralAxis) / (pipeInertia * 1000); //ksi
    const shearStress = (torque * neutralAxis) / (pipeInertia * 2000); //ksi
    const reducedStress = Math.pow((Math.pow(bendingStress, 2)) + 3 * (Math.pow(shearStress, 2)), 0.5);
    return reducedStress;
}

const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function(e){
    const safetyFactor = document.getElementById('safetyFactor').value;
    if (safetyFactor === '') {
        document.getElementById('safetyFactor').value = 1.5;
    } 
    if (!emptyFields()) {

        // Create object screwConveyor from conveyorClass
        const screwDiam = document.getElementById('screwDiam').value;
        const lengthConveyor = document.getElementById('lengthConveyor').value;

        let screwConveyor = new ScrewConveyor(screwDiam, lengthConveyor)

        // Gather information from HTML

        screwConveyor.materialDensity = document.getElementById('materialDensity').value;
        screwConveyor.materialCode = document.getElementById('materialCode').value;
        screwConveyor.screwIncl = document.getElementById('screwIncl').value;
        screwConveyor.screwBearing = document.getElementById('screwBearing').value;
        screwConveyor.screwLoad = document.getElementById('screwLoad').value;
        screwConveyor.screwSupport = document.getElementById('screwSupport').value;
        screwConveyor.screwPipeSize = document.getElementById('screwPipeSize').value;
        screwConveyor.flightThickness = document.getElementById('flightThickness').value;
        screwConveyor.flightPitch = document.getElementById('flightPitch').value;
        screwConveyor.flightType = document.getElementById('flightType').value;
        screwConveyor.paddleQty = document.getElementById('paddleQty').value;
        screwConveyor.screwBolt = document.getElementById('screwBolt').value;
        screwConveyor.screwBoltGrade = document.getElementById('screwBoltGrade').value;
        screwConveyor.safetyFactor = document.getElementById('safetyFactor').value;
        screwConveyor.transmissionRelation = document.getElementById('transmissionRelation').value;
        screwConveyor.massFlow = document.getElementById('massFlow').value;
        console.log(screwConveyor.screwIncl, typeof(screwConveyor.screwIncl));

        const currentConveyorCapacity = conveyorCapacity(screwConveyor);
        const cf2 = loadCf2(screwConveyor);
        const cf1 = loadCf1(screwConveyor);
        const cf3 = loadCf3(screwConveyor);
        const cin = loadCin(screwConveyor);
        const fd = loadFd(screwConveyor);
        const fb = loadFb(screwConveyor);
        const fm = loadFm(screwConveyor);
        const ff = loadFf(screwConveyor);
        const fp = loadFp(screwConveyor);                     
        
        screwConveyor.calcFlowCapacity();
        screwConveyor.calculateConveyorSpeed(cf1, cf2, cf3,currentConveyorCapacity);
        screwConveyor.calculateRetentionTime();        
        screwConveyor.calculateRequiredScrewPower(fd, fb, fm, ff, fp);
        const fZero = loadFZero(screwConveyor);
        screwConveyor.calculateTotalPower(fZero, cin);

        console.log(upperSizeMotor(screwConveyor));
        console.log(screwConveyor.screwFrictionHP,  screwConveyor.screwMaterialHP, screwConveyor.screwPower);
        screwConveyor.getConveyorInput();

    } else {
        alert("Verifique los campos! Hay campos sin completar");
        return
    }

});

// Load data to HTML
dataTableB();
dataTableN();
dataTableM();
dataTableQ();
dataTableV();
dataTableC();
dataTableThread();

// Test data
const testConvey = new ScrewConveyor("18", "14630.4");
testConvey.materialDensity = "21";
testConvey.materialCode = "21B35PY";
testConvey.screwIncl = "0";
testConvey.screwBearing = "Bronze";
testConvey.screwLoad = "Load30A";
testConvey.screwSupport = true;
testConvey.screwPipeSize = "2 sch 40";
testConvey.flightThickness = "1/4";
testConvey.flightPitch = "1";
testConvey.flightType = "Ribbon";
testConvey.paddleQty = "0";
testConvey.massFlow = "19050.864";

testConvey.calcFlowCapacity();
const currentConveyorCapacity = conveyorCapacity(testConvey);
const cf2 = loadCf2(testConvey);
const cf1 = loadCf1(testConvey);
const cf3 = loadCf3(testConvey);
const cin = loadCin(testConvey);
const fd = loadFd(testConvey);
const fb = loadFb(testConvey);
const fm = loadFm(testConvey);
const ff = loadFf(testConvey);
const fp = loadFp(testConvey);


testConvey.calculateConveyorSpeed(cf1, cf2, cf3,currentConveyorCapacity);
testConvey.calculateRetentionTime();        
testConvey.calculateRequiredScrewPower(fd, fb, fm, ff, fp);
const fZero = loadFZero(testConvey);
testConvey.calculateTotalPower(fZero, cin);
console.log(cf1, cf2, cf3, cin, fd, fb, fm, ff, fp);
console.log(getPipeData(testConvey));
console.log(testConvey.conveyorSpeed);
calculateTorque(testConvey);
testConvey.getConveyorInput();
console.log(calculateDeflection(testConvey));
console.log(calculateEquivalentStress(testConvey));