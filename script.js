let kgRef=document.getElementById("kg");
let lbRef=document.getElementById("lb");
let ozRef=document.getElementById("oz");

let convertFromKg= ()=> {

    let kg=kgRef.value;
    lbRef.value=(kg*2.205).toFixed(2); //toFixed() is to convert string to num rounded to two digit
    ozRef.value=(kg*35.274).toFixed(2);
};
kgRef.addEventListener("input", convertFromKg);