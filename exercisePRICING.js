//javascript starts from here

alert("WELCOME HERE");
alert("password to view website is VOHRA");

const array=[
    ['raghav','vohra',12]
    ,
    ['mayank',"vohra",25],

    ['tripti',"verma",40],
    [7372],
    [453]

]
console.log("HERE EVERY ELEMENT OF THE 2-D AARAY IS PRINTING IN THE NEW LINE AS SHOWN BELOW");

for(let i=0;i<array.length;i++){
    const row= array[i];
    
    console.log(`ROW #${i*2}`);

    for(let k=0;k<row.length;k++){
        console.log(`hi raghav ${row[k]}`);
    }
}

//NEW SYNTAX FOR THE NESTED LOOP:

/*

console.log("same array with different syntax of the for loop".toUpperCase());

for(let row of array){
    for(let student of row){
        console.log(student);
    }
}

const password ="VOHRA";
let show = prompt('hello raghav,enter the password');

while(password!==show){
    show = prompt("enter correct password");
}

console.log("password is correct");

console.log("hello raghav");

let i= parseInt(prompt("enter string or a number"));
if(i===100){
    console.log("WELCOME !!!");
}
else{
    console.log("OOPS! ENTER A VALID NUMBER");
}


//another for loop synthax:
let array2=[1,2,3,4,5,6,7,8,9,10];

for(let int of array2){
    console.log(int*int);
}

// TO DO LIST BY USING PROMPT METHOD

let ask= prompt("what would you like to have");

let Quit = "quit";
let character = 'A';

//method for getting same text for prompt what we type

while(true){
    if(ask===Quit || ask===character){
        console.log("ok, i quit now");
        break;
    }
    if(ask==='mayank'){
        console.log(toUpperCase("wow, you win this game!!!"));
        break;
    }
    
    // THIS PROMPTS AND DISPLAY THE SAME TEXT THAT WE ENTERED
    else {
    ask=prompt(`${ask}`);
    }

}


*/
