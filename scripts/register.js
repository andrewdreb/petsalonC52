let pets = [];

function pet(name, age, gender, service){
    // properties = parameters (values)
this.name=name;
this.age=age;
this.gender=gender;
this.service=service;
}

function register (){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputService=document.getElementById("txtService").value;
}
console.log(inputName,inputAge,inputGender,inputService);
console.log(newPet);
pets.push(newPet);


function init(){
console.log ("init");
let pet1 = new pet("scooby", 99, "Male", "Grooming");


console.log(pet1)
pets.push(pet1)

window.onload=init; 
}