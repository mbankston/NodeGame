var scrum = function(){
    return Math.floor(Math.random() * (1 + 9 - 1) + 1);
};
console.log(scrum())
module.exports = scrum;