let fs = require('fs');

exports.registration = function(username, password, name, age) {
    let userFile = "./"+username+".txt";
    let userData = `Username: ${username}, Password: ${password}, Name: ${name}, Age: ${age}`;
    fs.writeFile(userFile, userData, (err, file)=> {
        if(err) return "Can't Create User Data";
            // return "Can't Create User Data";

        // return "User Created!";
    });

    // let data = await fs.writeFileSync(userFile, userData);
    // return data;
}