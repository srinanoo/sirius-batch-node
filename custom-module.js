exports.validate = function(name, age) {
    if(name === "")
        return "Enter the name.";
    else if(age === "")
        return "Enter the age.";
    else 
        return "All good!";
}