const removeFromArray = function() {

    let mainArray = arguments[0];

    for (let i = 1; i < arguments.length; i++){
        let elementToRemove = arguments[i];
        let index = mainArray.indexOf(elementToRemove);

        while (index>-1){
            mainArray.splice(index,1)
            index = mainArray.indexOf(elementToRemove);
        }
    }

    return mainArray


};

// Do not edit below this line
module.exports = removeFromArray;
