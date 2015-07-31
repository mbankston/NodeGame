var skillset = function(){
    var skills = ["Front End", "Clientside Logic", "Serverside Logic"]
    var num = Math.floor(Math.random() * skills.length);
    return skills[num];
};
console.log(skillset())
module.exports = skillset;