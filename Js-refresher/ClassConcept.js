// class Person{
//     constructor(){}

// }

// // const fun = (a, b) =>{
// //     console.log("Hello jiii...");
// // }

// // this.fun();

// function a(){
//     console.log("tdydytd");
// }
// this.a();
let objectOne = {
    firstName : "Mansun",
    lasName : "Kasyap",
    fun : function abc(){
        console.log(this);
        console.log(`${this.firstName} ${this.lasName}`);
    },
    arrow : () =>{
        console.log(this);
    }
}
// objectOne.arrow();
// objectOne.fun();

Object.prototype.myProperty = "Inherited";
objectOne.mynewProperty = "ownProp"

console.log(objectOne.mynewProperty);
console.log(objectOne.myProperty);

Object.freeze()
Object.seal()
