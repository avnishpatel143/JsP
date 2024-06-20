// named assignment function 

 let a = function addTwoNumers (num1, num2) {
    return num1 + num2 ;

};
 console.log(a(2,4));



 // creating arguments in functions  adding of Tow number and morethan two dynamically  on objcet it also return object
 

 function sum(a,b) {
  let total = 0;
  for (let value of arguments)
    total = total + value;
return total;

}

 let ans = sum(1,2,3,5,4);
 console.log(ans);


 // Rest Oprater >> ...  it is aslo called sprade oprator  it is return also string 


 function sum(...args){
    console.log(args);
 }

 sum(2,3,4,5);



 // Default parameter 


 function interst (p, r,y){

    return p*r*y/100;

 }
 

 console.log(interst( 20,20,2));



 // Getter And Setter => Geter = Get the value , Setter => Set The value
 // issue of this function it is only read function 


 let person = {
 name : 'Avnish',
 fName : 'Patel',
 age : 32,
 Id : 420,
//  Fruits: ['apple','graps','suje','Mango' ],

 get fullName(){

    return `${this.person.name} ${this.person.fName}`;
 },

set fullName(value) {
    
    let parts = value.split('');
    this.name = parts[0];
    this.Id = parts[1];
}
 };
 console.log(person.fullName);
