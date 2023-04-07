// Code your solutions in this file

// returns an array of thank you messages for each name provided to the function
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;
        
    }
    return messages;
}
writeCards(names, "surprise");

function countDown(num) {
    for( let i = num; i >= 0; i--) {
        console.log(i);
    }
    
}
countDown(10);
countDown(4);

