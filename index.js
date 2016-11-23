const ipol8 = function(){
  if(arguments.length > 0){
    var arguments = Array.from(arguments);
    var input = arguments.shift();
    for(argument of arguments) input = input.replace('$',argument);
    return input;
  }
};

module.exports = ipol8;
