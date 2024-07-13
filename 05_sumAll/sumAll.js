const sumAll = function(num1, num2) {

    let total = 0;

  
    if (num1 < 0 || num2 <0 || !Number.isFinite(num1) || !Number.isFinite(num2) ){
        return "ERROR"
    } else {
    if (num1 > num2){
        let holdNum1 = num1
        num1=num2
        num2=holdNum1
    }

    for (i=num1; i<num2+1; i++){
        total+=i
    }

    return total
    }

};

// Do not edit below this line
module.exports = sumAll;
