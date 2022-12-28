import dataFromTableB from "../data/js/tableB.js";
import dataFromTableC from "../data/js/tableC.js";
import dataFromTableD from "../data/js/tableD.js";
import dataFromTableE from "../data/js/tableE.js";
import dataFromTableG1 from "../data/js/tableG1.js";
import dataFromTableG2 from "../data/js/tableG2.js";
import dataFromTableH2 from "../data/js/tableH2.js";
import dataFromTableJ from "../data/js/tableJ.js";
import dataFromTableK from "../data/js/tableK.js";
import dataFromTableL from "../data/js/tableL.js";
import dataFromTableM from "../data/js/tableM.js";
import dataFromTableN from "../data/js/tableN.js";
import dataFromTableQ from "../data/js/tableQ.js";
import dataFromTableT from "../data/js/tableT.js";
import dataFromTableU from "../data/js/tableU.js";
import dataFromTableV from "../data/js/tableV.js";
import dataFromThreadTable from "../data/js/threadTable.js";

const fillTableB = () => {
    const table = dataFromTableB.TableB;
    for (const dataRow of table) {
        document.getElementById('tableB').innerHTML += `<tr>
        <td class="left-item">${dataRow.MATERIAL}</td>
        <td>${dataRow["MATERIAL CLASS CODE"]}</td>        
        <td>${dataRow["CONVEY LOADING"]}</td>
        <td>${dataRow["COMPONENT GROUP"]}</td>
        <td>${dataRow.AVG}</td>
        <td>${dataRow["MATERIAL FACTOR"]}</td>
      </tr>`;
    }
}

const fillTableC = () => {
    const tableC1 = dataFromTableC.Cf1;

    const firstTable = dataFromTableC.Cf2_15;
    const secondTable = dataFromTableC.Cf2_30;
    const thirdTable = dataFromTableC.Cf2_45;

    const tableC3 = dataFromTableC.Cf3;

    for (const dataRow of tableC1) {
        document.getElementById('tableC1').innerHTML += `<tr>
        <td class="left-item">${dataRow.TYPE}</td>
        <td>${dataRow["PITCH"]} * D</td>        
        <td>${dataRow["CF1"]}</td>
      </tr>`;
    }

    for (const dataRow of firstTable) {
        const typeOfFlight = dataRow["TYPE OF FLIGHT"]
        const secondDataElement = secondTable.find((e) => e["TYPE OF FLIGHT"] === typeOfFlight)["Cf2"];
        const thirdDataElement = thirdTable.find((e) => e["TYPE OF FLIGHT"] === typeOfFlight)["Cf2"];

        document.getElementById('tableC2').innerHTML += `<tr>
        <td class="left-item">${dataRow["TYPE OF FLIGHT"]}</td>
        <td>${dataRow["Cf2"]}</td>
        <td>${secondDataElement}</td>   
        <td>${thirdDataElement}</td>           
      </tr>`;
    }

    for (const dataRow of tableC3) {
        document.getElementById('tableC3').innerHTML += `<tr>
        <td>${dataRow.PADDLES}</td>
        <td>${dataRow["Cf3"]}</td>        
      </tr>`;
    }
}

const fillTableD = () => {

    const firstTable = dataFromTableD.Load15;
    const secondTable = dataFromTableD.Load30A;
    const thirdTable = dataFromTableD.Load30B;
    const fourthTable = dataFromTableD.Load45;
    const fifthTable = dataFromTableD.Load90;

    for (const dataRow of firstTable) {
        const screwDiameter = dataRow["SCREW DIAMETER"]
        const secondDataRow = secondTable.find((e) => e["SCREW DIAMETER"] === screwDiameter);
        const thirdDataRow = thirdTable.find((e) => e["SCREW DIAMETER"] === screwDiameter);
        const fourthDataRow = fourthTable.find((e) => e["SCREW DIAMETER"] === screwDiameter);
        const fifthDataRow = fifthTable.find((e) => e["SCREW DIAMETER"] === screwDiameter);

        document.getElementById('tableD').innerHTML += `<tr>
        <td class="left-item">${dataRow["SCREW DIAMETER"]}</td>
        <!-- Maximum RPM -->
        <td>${dataRow["MAXIMUM"]}</td>
        <td>${secondDataRow["MAXIMUM"]}</td> 
        <td>${thirdDataRow["MAXIMUM"]}</td> 
        <td>${fourthDataRow["MAXIMUM"]}</td> 
        <td>${fifthDataRow["MAXIMUM"]}</td> 
        <!-- Capacity per RPM -->
        <td>${dataRow["CAPACITY (FT3/HR) PER RPM"]}</td>
        <td>${secondDataRow["CAPACITY (FT3/HR) PER RPM"]}</td> 
        <td>${thirdDataRow["CAPACITY (FT3/HR) PER RPM"]}</td> 
        <td>${fourthDataRow["CAPACITY (FT3/HR) PER RPM"]}</td> 
        <td>${fifthDataRow["CAPACITY (FT3/HR) PER RPM"]}</td> 
      </tr>`;
    }
}

const fillTableE = () => {
    const table = dataFromTableE.TableE;
    for (const dataRow of table) {
        document.getElementById('tableE').innerHTML += `<tr>
        <td class="left-item">${dataRow["SCREW DIA"]}</td>
        <td>${dataRow["PIPE OD"]}</td>        
        <td>${dataRow["RADIAL  CLEARANCE "]}</td>
        <td>${dataRow["CLASS 1 "]}</td>
        <td>${dataRow["CLASS 2"]}</td>
        <td>${dataRow["CLASS 3"]}</td>
      </tr>`;
    }
}

const fillTableG1 = () => {
    const table = dataFromTableG1.TableG1;
    for (const dataRow of table) {
        document.getElementById('tableG1').innerHTML += `<tr>
        <td class="left-item">${dataRow["Drive"]}</td>
        <td>${dataRow["e"]}</td>        
      </tr>`;
    }
}

const fillTableG2 = () => {
    const table = dataFromTableG2.TableG2;
    for (const dataRow of table) {
        document.getElementById('tableG2').innerHTML += `<tr>
        <td class="left-item">${dataRow["Transmission"]}</td>
        <td>${dataRow["e"]}</td>        
      </tr>`;
    }
}

const fillTableH2 = () => {
    const table = dataFromTableH2.TableH2;
    for (const dataRow of table) {
      document.getElementById('tableH2').innerHTML += `<tr>
        <td class="left-item">${dataRow["HP"]}</td>     
      </tr>`;
    }
}

const fillTableJ = () => {
  const table = dataFromTableJ;
  for (let index = 0; index < Object.keys(table).length; index++) {
    document.getElementById('tableJ').innerHTML += `<tr>
        <td class="left-item">${table.Ff15[index]["TYPE OF FLIGHTING"]}</td>
        <td class="left-item">${table.Ff15[index].Ff}</td>
        <td class="left-item">${table.Ff30[index].Ff}</td>
        <td class="left-item">${table.Ff45[index].Ff}</td>
        <td class="left-item">${table.Ff95[index].Ff}</td>    
      </tr>`;          
  }
}

const fillTableK = () => {
  const table = dataFromTableK.TableK;
  for (const dataRow of table) {
    document.getElementById('tableK').innerHTML += `<tr>
      <td class="left-item">${dataRow["PADDLES"]}</td>
      <td class="left-item">${dataRow["Fp"]}</td>     
    </tr>`;
  }
}

const fillTableL = () => {
  const table = dataFromTableL.TableL;
  for (const dataRow of table) {
    document.getElementById('tableL').innerHTML += `<tr>
      <td class="left-item">${dataRow["SCREW DIA."]}"</td>
      <td class="left-item">${dataRow["Fd"]}</td>     
    </tr>`;
  }
}

const fillTableM = () => {
  const table = dataFromTableM.TableM;
  for (const dataRow of table) {
    document.getElementById('tableM').innerHTML += `<tr>
      <td class="left-item">${dataRow["BEARING TYPE"]}</td>
      <td class="center-item">${dataRow["COMPONENT GROUP"]}</td>
      <td class="left-item">${dataRow["Fb"]}</td>       
    </tr>`;
  }
}

const fillTableN = () => {
  const table = dataFromTableN;
  const arrayKeys = Object.keys(table);
  for (let index = 0; index < Object.keys(table).length; index++) {  
    let tableIndex = "";
    if (index === 0) {
      tableIndex = "tableN1";
    } else if(index === 1) {
      tableIndex = "tableN2";
    } else {
      tableIndex = "tableN3";
    }
    for (let subIndex = 0; subIndex < Object.keys(table[arrayKeys[index]]).length; subIndex++) { 
      const currentObject = table[arrayKeys[index]];
      document.getElementById(tableIndex).innerHTML += `<tr>
      <td class="center-item">${currentObject[subIndex]["SCREW DIA"]}</td>
      <td class="center-item">${currentObject[subIndex]["SHAFT  SIZE DIA"]}</td>
      <td class="center-item">${currentObject[subIndex]["BOLTS PER COUPLING"]}</td>
      <td class="center-item">${currentObject[subIndex]["SECTIONAL SCREW FLIGHT THICKNESS*"]}</td>
      <td class="center-item">${currentObject[subIndex]["TROUGH  THICKNESS"]}</td>
      <td class="center-item">${currentObject[subIndex]["COVER THICKNESS"]}</td>
    </tr>`;
    }
  }
  
}

const fillTableQ = () => {
  const table = dataFromTableQ.TableQ;
  for (const dataRow of table) {
    document.getElementById('tableQ1').innerHTML += `<tr>
      <td class="center-item">${dataRow["PIPE"]}</td>
      <td class="center-item">${dataRow["PIPE SS/CS"]}</td>
      <td class="center-item">${dataRow["SHAFT DIA"]}</td>
      <td class="center-item">${dataRow["SHAFT SS/1018"]}</td>
      <td class="center-item">${dataRow["SHAFT 4140"]}</td>
    </tr>`;
    document.getElementById('tableQ2').innerHTML += `<tr>
      <td class="center-item">${dataRow["PIPE"]}</td>
      <td class="center-item">${dataRow["SHAFT DIA"]}</td>
      <td class="center-item">${dataRow["SHEAR 2-BOLT"]}</td>   
      <td class="center-item">${dataRow["SHEAR 3-BOLT"]}</td>
      <td class="center-item">${dataRow["BEARING 2-BOLT"]}</td>          
      <td class="center-item">${dataRow["BEARING 3-BOLT"]}</td> 
      <td class="center-item">${dataRow["BEARING PADS 2-BOLT"]}</td> 
      <td class="center-item">${dataRow["BEARING PADS 3-BOLT"]}</td> 
    </tr>`;
  }
}

const fillTableT = () => {
  const table = dataFromTableT.TableT;
  for (const dataRow of table) {
    document.getElementById('tableT').innerHTML += `<tr>
      <td class="left-item">${dataRow["MATERIAL"]}</td>
      <td class="center-item">${dataRow["NON-LUBRICATED"]}</td>
      <td class="center-item">${dataRow["LUBRICATED"]}</td>       
    </tr>`;
  }
}

const fillTableU = () => {
  const table = dataFromTableU.TableU;
  for (const dataRow of table) {
    document.getElementById('tableU').innerHTML += `<tr>
      <td class="center-item">${dataRow["SCREW DIAMETER"]}</td>
      <td class="center-item">${dataRow["3/16"]}</td>
      <td class="center-item">${dataRow["1/4"]}</td>
      <td class="center-item">${dataRow["3/8"]}</td>
      <td class="center-item">${dataRow["1/2"]}</td> 
      <td class="center-item">${dataRow["5/8"]}</td>
      <td class="center-item">${dataRow["3/4"]}</td>             
      <td class="center-item">${dataRow["1"]}</td>  
    </tr>`;
  }
}

const fillTableV = () => {
  const table = dataFromTableV.TableV;
  for (const dataRow of table) {
    document.getElementById('tableV').innerHTML += `<tr>
      <td class="center-item">${dataRow["Inclination in °"]}</td>
      <td class="center-item">${dataRow["Cin"]}</td>
    </tr>`;
  }
}

const fillThreadTable = () => {
  const table = dataFromThreadTable.ThreadTable;
  for (const dataRow of table) {
    document.getElementById('threadTable').innerHTML += `<tr>
      <td class="center-item">${dataRow["Major Diameter"]}</td>
      <td class="center-item">${dataRow["2"]}</td>
      <td class="center-item">${dataRow["5"]}</td>
      <td class="center-item">${dataRow["8"]}</td>
      <td class="center-item">${dataRow["Lamalloy"]}</td>
    </tr>`;
  }
}

fillTableB();
fillTableC();
fillTableD();
fillTableE();
fillTableG1();
fillTableG2();
fillTableH2();
fillTableJ();
fillTableK();
fillTableL();
fillTableM();
fillTableQ();
fillTableN();
fillTableT();
fillTableU();
fillTableV();
fillThreadTable();