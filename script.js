const rent = 400;
let tax = "8%"; 
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00; 
const minuteOfDay = 00;
let balance = undefined; 

if (+hourOfDay === 0 && +minuteOfDay === 0 && hourOfDay !== undefined && minuteOfDay !== undefined) {
    const taxAsDecimal = parseFloat(tax) / 100;
    const startingAfterTax = salary * (1- taxAsDecimal);
	balance = startingAfterTax - transport - food - rent;
}
	
console.log("R" + balance.toFixed(2))