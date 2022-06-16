// code your solution 
function saturdayFun(activity) {
    if (activity) {
      return `This Saturday, I want to ${activity}!`;
    } else {
      return `This Saturday, I want to roller-skate!`;
    }
  }

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string='*') {
    const innerFunction = function(adjective='special') {
        return `You are ${string}${adjective}${string}!`
    }
    return innerFunction
}