// code your solution here

function saturdayFun (e="roller-skate"){
    
return (`This Saturday, I want to ${e}!`);
}

function mondayWork (t= "go to the office") {
    return (`This Monday, I will ${t}.`);
}

function wrapAdjective(star= "*"){
    const inner = function (defu = "special") {
        return `You are ${star}${defu}${star}!`;
    };
    return inner;
}




