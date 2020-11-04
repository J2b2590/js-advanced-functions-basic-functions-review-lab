// Your code here


function saturdayFun( activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}


function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(star='*'){
        return function(and = "||"){
            return `You are ${star}${and}${star}!`
    }
}

let Calculator = {
    add: function(){
        return 1 + 3
    },
    subtract: function(){
        return 1 - 3
    },
    multiply: function(){
        return 1 * 3
    },
    divide: function(){
        return 10 / 5
    }
}


function actionApplyer(a, b){
    const arr = b
    const anotherOne = ([...arr, a])

    return anotherOne
}