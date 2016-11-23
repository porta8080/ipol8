const ipol8 = function(){
  if(arguments.length > 0){
    var arguments = Array.from(arguments);
    var input = arguments.shift();
    if(arguments.length == 1 && typeof arguments[0] === 'object') arguments = arguments[0];
    for(argument of arguments) input = input.replace('$',argument);
    return input;
  }
};

module.exports = ipol8;
