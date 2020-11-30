function ageInDays(){
    let userInput = prompt("Which year were you born?...My Good Friend!")
    let userDaysInAge =  (new Date().getFullYear() - userInput) * 360;
    const userAns = document.createElement('h2');
    const textNote = document.createTextNode(`You're ${userDaysInAge} days old`);
    userAns.setAttribute("id", "ageInDays");
    userAns.appendChild(textNote);
    document.getElementById('result').appendChild(userAns)    
}


function reset(){
    document.getElementById('ageInDays').remove();
}
