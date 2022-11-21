let chose=3;

let Myfrined=[
  {title:"Osama",age:39,available:true,skills:["Html","CSS"]},
  {title:"Ahmed",age:25,available:false,skills:["Paython","Django"]},
  {title:"Sayed",age:33,available:true,skills:["PHP","laravel"]}
]



if(chose==1){

  [{title:T,age:A,available:V,skills:[,b]}, , ]=Myfrined
  console.log(T)
  console.log(A)
  if(V==true){
    console.log("available")
  }
  else{
    console.log("NOT available")
  }
 
  console.log(b)
}

if(chose==2){

  [, {title:T,age:A,available:V,skills:[,b]}, ]=Myfrined
  console.log(T)
  console.log(A)
  
  if(V==true){
    console.log("available")
  }
  else{
    console.log("NOT available")
  }
 
  console.log(b)
}

if(chose==3){

  [, , {title:T,age:A,available:V,skills:[,b]}]=Myfrined
  console.log(T)
  console.log(A)
  if(V==true){
    console.log("available")
  }
  else{
    console.log("NOT available")
  }
 
  console.log(b)
}