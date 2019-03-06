module.exports = function check(str, bracketsConfig) {
    var valid = true;
    var stack = [];
    stack.push(str[0]);
    for (var i = 1; i < str.length; i++){

        //Find current element...
        for(var j = 0; j < bracketsConfig.length; j++){

            //... among open brackets:
            if ((str[i] === bracketsConfig[j][0])){

                //In case there is an equal open/close brackets, clean stack:
                if ((str[i] === bracketsConfig[j][1])&&(str[i] === stack[stack.length-1])){
                    openBracket = stack.pop();
                    break;
                }

                //Push new open bracket item in stack:
                stack.push(str[i]);
                break;
            }

            //... among close brackets:
            else
            if (str[i] === bracketsConfig[j][1]){

                //Compare close and open brackets:
                var openBracket = stack.pop();
                if ((openBracket === bracketsConfig[j][0])||(openBracket === str[i] -1)){
                    break;
                }
                else{
                    return valid = false;
                }
            }

        }
    }
    return stack.length ? valid  = false : valid;
};
