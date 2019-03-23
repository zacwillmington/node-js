    const fs = require('fs')
    const fileName = 'target.txt';

    // is synchronous and blocking code much like Ruby.(Bad practice for Node.js) 
    // const data = fs.readFileSync(fileName);
    // console.log(data.toString());

    const errorHandler = (err) => console.log(err);
    const datahandler = data => console.log(data.toString());
    // is asynchronous 
    fs.readFile(fileName, (err, data) => {
        if(err) errorHandler(err);
        datahandler(data);
    })

    console.log("node js")