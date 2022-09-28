document.write('open console to see the output!')

let invitedPeople = ['Haris','Uncle','Fahad','Saad'];

console.log('invited people ', invitedPeople)
invitedPeople.map((e)=>{console.log(`Inviting ${e} to dinner`)})


// Fahad can't make dinner

console.log('') // whitespace in console
console.log("Fahad can't make dinner!")
console.log('') // whitespace in console



invitedPeople[2] = "Imad";
invitedPeople.map((e)=>{console.log(`Now! Inviting ${e} to dinner`)})
