var empName = function(){
    var name = ["Matt", "Cat", "Huck", "Cena"];
    var num = Math.floor(Math.random() * name.length);
    return empName;
}
console.log(empName());
module.exports = empName;