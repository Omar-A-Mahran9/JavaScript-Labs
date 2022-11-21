let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let NewString = myString
  .split("")
  .filter((elem, ind, arr) => {
    return isNaN(parseInt(elem)) && elem != ",";
  })
  .map((elem) => {
    return elem.replace("_", " ");
  })
  .slice(true, length - true)
  .reduce((acum, cala) => {
    return `${acum}${cala}`;
  });
console.log(NewString);

let Solution = "";
console.log(Solution);

/*
    let myString="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"
    let zz=myString[myString.length-1]
    console.log(zz)
    let NewString=myString.split(",").filter((elem)=>{
        return isNaN(parseInt(elem))
    }).map((elem)=>{
        return elem.replace("_", " ")
    })
    console.log(NewString)

    let Solution="";
    console.log(Solution);
    */
