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
import dataFromTableN from "../data/js/tableN.js";
import dataFromTableQ from "../data/js/tableQ.js";
import dataFromTableQ1 from "../data/js/tableQ1.js";
import dataFromTableM from "../data/js/tableM.js";
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
  for (let index = 0; index < 4; index++) {
    document.getElementById('tableH2').innerHTML += `<tr>
        <td class="left-item">${table.Ff15['']}</td>     
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