/*let Names=function(...Arr){
  return Arr.reduce((acc,curr)=>{
      return `${acc} [${curr}],`
  },"String")+ " => Done "
}
 */

var Names = (...Arr) => {
  return (
    Arr.reduce((acc, curr) => {
      return `${acc} ,[${curr}]`;
    }, "String") + " => Done " 
  );
};

console.log(Names("Osama", "Mohamed", "Ali", "Ïbrahim", "Ebrahim"));


let names=(...input ) =>{ return `String [${input.join("], [")}] => Done !`};
  

  console.log(names("A","B","C","d","e"));