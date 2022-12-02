// import tableECMA from '../data/json/table-b.json' assert {type: 'json'};
import dataFromTableB from '../data/js/tableB.js';

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

// Data from table B
const dataTableB = () => {
    const materialName = document.getElementById('material');
    for (const e of dataFromTableB.TableB) {
        materialName.innerHTML += `<option value="${e.MATERIAL}">${e.MATERIAL}</option>`; 
    }
}


//Data from table B
const materialName = document.getElementById('material');
materialName.addEventListener('change', function(e) {
    
    const materialNameValue =  materialName.value;
    const materialCode = document.getElementById('materialCode');
    const materialDensity = document.getElementById('materialDensity');
    const materialDataArray = dataFromTableB.TableB.find(({ MATERIAL }) => MATERIAL===materialNameValue);
    materialCode.value = materialDataArray['MATERIAL CLASS CODE'];
    materialDensity.value =  materialDataArray.AVG;

});

dataTableB();



