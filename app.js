// const express = require('express');
// const app = express();

// app.get('/', (req, res) =>{
//     res.send("Some text");
// });

// app.listen(3000);

    const fs = require('fs')

    const fileName = 'target.txt';
    fs.readFile(fileName, (err, data) => {
        if(err) {
            console.log(err);
        }
            console.log(data.toString());
    })

    console.log("node js")