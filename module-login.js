let fs = require('fs');

exports.login = function(username, password) {

    if(username!="") {
        let userFile = username+".txt";
        // return userFile;
        try {
            let data = fs.readFileSync(userFile);
            return data;
        }
        catch(err) {
            return "No User";
        } 
    }
    

    // if(username !== "Dinesh" && password !== "Dinesh")
    //     return "Login Invalid!";
    // else 
    //     return "Logged In!";
}