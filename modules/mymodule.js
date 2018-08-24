
var fn1 = function(){
    console.log("my first module");
};
var fn2 = function () {
    console.log("my second module");
};
//valid
module.exports.fn1 = fn1;
module.exports  = fn1;
module.exports = {
    fn1: fn1,
    fn2: fn2
};
exports.fn1 = fn1;
//invalid
//exports = fn1 
//since it's start pointing to copletely new object/fn,
// not the one which is pointed by module.exports 
//and node module returns module.exports not exports
//exports is just an alias of module.exports