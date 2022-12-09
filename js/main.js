import dataFromTableB from '../data/js/tableB.js';
import dataFromTableC from '../data/js/tableC.js';
import dataFromTableD from '../data/js/tableD.js';
import dataFromTableN from '../data/js/tableN.js';
import dataFromTableQ from '../data/js/tableQ.js';
import dataFromTableM from '../data/js/tableM.js';
import dataFromTableV from '../data/js/tableV.js';
import dataFromThreadTable from '../data/js/threadTable.js';
import ScrewConveyor from './conveyorClass.js';

//From table H, calculations for F0
const fZero = () => {
    if (HPf + HPm >= 5.2) {
        const f0 = 1 
        return f0;       
    } else {
        const f0 = (Math.log(HPf + HPm) * -0.6115) + 2.024;      
        return f0;  
    }  
}


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

//Run calculations
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

        const currentConveyorCapacity = conveyorCapacity(screwConveyor);
        const cf2 = loadCf2(screwConveyor);
        const cf1 = loadCf1(screwConveyor);
        const cf3 = loadCf3(screwConveyor);
        
        screwConveyor.calcFlowCapacity();
        screwConveyor.calculateConveyorSpeed(cf1, cf2, cf3,currentConveyorCapacity);
        console.log(screwConveyor.conveyorSpeed)
        console.log(screwConveyor.flightPitch, cf1, screwConveyor.flightType, cf2, screwConveyor.paddleQty ,cf3);
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