/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

console.log("Task 1");
console.log("Closure is when a function can get the variable from an outer varaible.");
console.log("An Example of A local Variable(A variable on the inside of a function): ");

function myFunction() {
  let a = 5;
  return a * a;
}
console.log(myFunction());

console.log("An Example of A Global Variable(A variable on the outside of a function): ");

let a = 5;
function theFunction() {
  return a * a;
}
console.log(theFunction());



// TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
console.log("The variable count is a local variable because it is on the inside of the function.");
// Explain why 'count' is initialized with a let and not a var or const. 
console.log("The variable count is initialized with let instead of var or const because when you use const the variable cannot be changed, and var is something that you should never use due to it being able to be changed and redeclared whenever and wherever.");
// Explain how initalizing the variable 'count' with a var would change it's scope
console.log("Initializing the variable with var would change the scope by ");


function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }



// TASK 3 🚀
// * The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
console.log("Is the function called by new");
console.log("Is the function called by call(), apply(), or bind()");
console.log("Is the function called as a method, ie: obj.func()");
console.log("Is the function called in the global scope?");
// * write out a code example of each explanation above

console.log("Go to https://gist.github.com/clairesujin8702/ccdb8aa824fd57597cd38a6778b7a894 to understand function bindings.");

// Principle 1
// code example for Window Binding

// Principle 2
// code example for Implicit Binding

// Principle 3
// code example for New Binding

// Principle 4
// code example for Explicit Binding

console.log("Go to https://javascript.info/bind for more information on bindings in JS.");
/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/






/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */