const ps = require("ps-node");
const path = require("path");
// A simple pid lookup
ps.lookup(
  {
    command: "",
  },
   function (err, resultList) {
    if (err) {
      throw new Error(err);
    }
    let listProcess = [];
    resultList.forEach(function (process) {
      if (process) {
        let baseName = path.basename(process.command);
        if (baseName.endsWith("exe")) {
          listProcess.push(process);
        } 
      }
    });
    //createElement(listProcess);
    generateTr(listProcess);
  }
);
const myTable = document.querySelector('#taskManager');
//create tr
function generateTr(listProcess) {
  for(const item of listProcess){
    const tr = document.createElement('tr');
    const tdID = document.createElement('td');
    const tdName = document.createElement('td');
    const tdEndTask = document.createElement('td');
    const btnEndTask = document.createElement('button');
    btnEndTask.type = 'button';
    btnEndTask.innerText = 'End Task';
    tdEndTask.appendChild(btnEndTask);
    tdName.innerText = path.basename(item.command);
    tdID.innerText = item.pid;
    tr.appendChild(tdID);
    tr.appendChild(tdName);
    tr.appendChild(tdEndTask);
    myTable.appendChild(tr);
  }
}
//create Element
// function createElement(listProcess) {
//   // document.querySelector("#list");
//   listProcess.forEach((item) => {
//     let btn = document.createElement("button");
//     btn.innerText = item;
//     document.body.appendChild(btn);
//   });
// }


// console.log(
//   "PID: %s, COMMAND: %s, ARGUMENTS: %s",
//   process.pid,
//   path.basename(process.command),
//   process.arguments
// );
//console.log("BaseName :   " + baseName);
//console.log("Pid :    " + process.pid);
