//WHILE LOOP
let colors = ["yellow", "blue", "red", "orange"];

while (colors <= colors.length) {
    colors++;
}

console.log(colors);



//FOR LOOP
let colors2 = ["yellow", "blue", "red", "orange"];

for (i = 0; colors2 <= colors2.length; colors2++) {
}
console.log(colors2);



//NIEUWE STIJL: ARRAY METHOD
let colors3 = ["yellow", "blue", "red", "orange"];
colors3.forEach(element => console.log(element));


//Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
//While loop neemt 5 in beslag en For loop neemt er 4 in beslag.

//Hoeveel regels neemt mijn forEach method in beslag?
//2!

//Welke voordelen heeft het gebruiken van een array method nog
//meer t.o.v. een for of een while loop?
//Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
//De array method leest makkelijker, neem veel minder regels in beslag
//en de kans op fouten maken is ook vele malen kleiner. En de log uitkomst
//is mooi individueel geindexeerd ipv de oude stijl logs.

//Kun je een array method gebruiken op een object? Het antwoord is nee.
//Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google)
//hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
//Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

//Er zijn 4 manieren: For..in loop, Object.keys() Method, Object.values() Method en Object.entries() Method

//For..in
const persoon = {
    name: 'Mohamed Makr',
    email: 'MohamedMakr@example.com',
    age: 31,
    dob: '09/05/1990',
    phonenumber: 0600000000
};
for (const key in persoon) {
    console.log(key, ":", persoon[key]);
}


//Object.keys() Method
const blabla = {
    bla1: 1,
    bla2: 2,
    bla3: 3,
    bla4: 4,
    bla5: 5
};
const keys = Object.keys(blabla);
console.log(keys);

keys.forEach(key => console.log(key));
