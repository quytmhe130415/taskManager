// const child_process = require('child_process');

var ps = require('ps-node');
 
// A simple pid lookup
ps.lookup({
    command: '',
    }, function(err, resultList ) {
    if (err) {
        throw new Error( err );
    }
    resultList.forEach(function( process ){
        if( process ){
            // console.log((Object.keys(process)));
            // console.log(process.ppid);
            console.log(typeof (process.arguments));
        }
    });
});