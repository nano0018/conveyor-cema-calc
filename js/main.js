import dataFromTableB from '../data/js/tableB.js';
import dataFromTableC from '../data/js/tableC.js';
import dataFromTableD from '../data/js/tableD.js';
import dataFromTableN from '../data/js/tableN.js';
import dataFromTableQ from '../data/js/tableQ.js';
import dataFromTableM from '../data/js/tableM.js';
import dataFromTableV from '../data/js/tableV.js';
import dataFromThreadTable from '../data/js/threadTable.js';


//Constants for unit conversion or screw calculations
const lbToKg =  0.453592;

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

//Set calculations
const conveyorCapacity = (flowCapacity, screwLoad, screwDiam) => {
    switch (screwLoad) {
        case 'Load15':
            console.log(dataFromTableD.Load15)
            break;
        case 'Load30A':
            console.log(dataFromTableD.Load30A)
            break;
        case 'Load30B':
            console.log(dataFromTableD.Load30B)
            break;
        case 'Load45':
            console.log(dataFromTableD.Load45)
            break;
        case 'Load90':
            console.log(dataFromTableD.Load90)
            break;
        default:
            break;
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

        const materialDensity = document.getElementById('materialDensity').value;
        const massFlow = document.getElementById('massFlow').value;
        const screwDiam = document.getElementById('screwDiam').value;
        const screwLoad = document.getElementById('screwLoad').value;      
        let flowCapacity =  massFlow / (materialDensity * lbToKg);
        conveyorCapacity(55, screwLoad, screwDiam);
        document.getElementById('flowCapacity').value = flowCapacity;

    } else {
        alert("Verifique los campos! Hay campos sin completar");
        return
    }

});

dataTableB();
dataTableN();
dataTableM();
dataTableQ();
dataTableV();
dataTableC();
dataTableThread();