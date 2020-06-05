const os = require('os');
const osu = require('os-utils');
const byteToGb = (valueByte) => {
   return (valueByte/(Math.pow(1024,3)));
}
 setInterval( async() => {
    const totalRam = os.totalmem();
    const currentRamFree = os.freemem();
    const ramUsed = totalRam - currentRamFree;
    document.querySelector('#ramUse').innerText = await byteToGb(totalRam-currentRamFree).toFixed(3)+ 'GB';
    document.querySelector('#ramFree').innerText = await byteToGb(currentRamFree).toFixed(3) + 'GB';
    document.querySelector('#proRam').value = ((ramUsed/totalRam)*100).toFixed(10);
    document.querySelector('#proRamFree').value = ((currentRamFree/totalRam)*100).toFixed(10);
    osu.cpuUsage(function(cpuUsage){
        document.querySelector('#proCpu').value = ((cpuUsage)*100).toFixed(2);
        document.querySelector('#infoCpu').innerText = ((cpuUsage)*100).toFixed(2) + '%';
    });
}, 500);

