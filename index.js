// let message = "This is a test message";
// console.log(message);

// let colorCodeFile = "./color_palette.json";
// let colorCodes = fs.readFileSync(colorCodeFile, 'UTF-8');
// console.log(colorCodes.length);

let http = require('http');
let url = require('url');
let fs = require('fs');
let os = require('os');
// let custom = require('./custom-module');
let loginModule = require('./module-login');
let regModule = require('./module-reg');

http.createServer((req, res, err) => {
    if(err) throw err;

    if(req.url != "/favicon.ico") {

        // res.write(os.platform() + "\n");
        // res.write(os.arch());
        // res.write(custom.modules());
        let qry = url.parse(req.url, true).query;
        let fromWhere = qry.hfSub;
        let username = qry.username;
        let password = qry.password;
        let name = qry.name;
        let age = qry.age;

        // console.log(qry);

        let output = "";
        // if(fromWhere=="login") {
        //     output = loginModule.login(username, password);

        //     res.write(output+"");

        // } else if(fromWhere == "registration") {
        //     regModule.registration(username, password, name, age);

        //     if(output=="undefined" || output=="") output = "User Created!";

        //     res.write(output+"");

        //     // let userFile = username+".txt";
        //     // let userData = `Username: ${username}, Password: ${password}, Name: ${name}, Age: ${age}`;
        //     // fs.writeFile(userFile, userData, (err, file)=> {
        //     //     if(err)
        //     //         output = "Can't Create User Data";

        //     //     output = "User Created!";
        //     // });
            
        // }

        // fs.open("username.txt", 'r', function (err, file) {
        //     if (err) 
        //         console.log("No User!"); 
        //     else
        //         console.log("Success!");
        // });


        // console.log("This is a test")
        // res.write("Named entered: "+ qry.name + ", My Age is: " + qry.age);

        
        let colorCodeFile = "./color_palette.json";
        let colorCodes = fs.readFileSync(colorCodeFile, 'UTF-8');
        console.log(colorCodes.length);
        res.write(JSON.stringify(colorCodes));
    
        res.end();
    }
    
}).listen(4000);