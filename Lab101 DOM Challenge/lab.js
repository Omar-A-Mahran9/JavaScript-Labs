var head = document.createElement("div");
head.className = "header";
head.style =
  "width:100%;  font-family: Arial, Helvetica, sans-serif; height:60px; position :absolute; top:0px; left:0px; display: block ;background-color: white;";
var divHeader = document.createElement("div");
divHeader.className = "container";
divHeader.style =
  " height:40px; right:10px;  left:10px; position :absolute; display: block ;background-color: white; overflow:hidden;";
var divRight = document.createElement("div");
divRight.className = "Right";
divRight.style = "float:right;";
var divleft = document.createElement("div");
divleft.className = "left";
divleft.style =
  " padding: 4px; font-weight: bold; font-size:30px; color:darkgreen;";

divHeader.appendChild(divRight);
divHeader.appendChild(divleft);
head.appendChild(divHeader);
document.body.appendChild(head);
divleft.textContent = "OMAR";

divlist = document.createElement("ul");
divlist.style =
  "margin: auto; padding: 10px;  font-family: Arial, Helvetica, sans-serif;";
for (var i = 0; i < 4; i++) {
  divli = document.createElement("li");
  divli.style = "display:inline; margin:10px";
  divlist.appendChild(divli);
  divli.id = `menu${i}`;
  if (i == 0) {
    divli.textContent = "Home";
  } else if (i == 1) {
    divli.textContent = "About";
  } else if (i == 2) {
    divli.textContent = "Service";
  } else if (i == 3) {
    divli.textContent = "Contact";
  }
}

divRight.appendChild(divlist);

divcontainer = document.createElement("div");
divcontainer.className = "container1";
divcontainer.style =
  " height: 100%; background-color: rgb(233, 233, 233); overflow: hidden; font-family: Arial, Helvetica, sans-serif; padding-top:60px; padding-bottom:30px";


for(let i=1; i<=15 ;i++){
  divbox = document.createElement("div");
  divbox.className = "box";
  divbox.style =
    "margin-top: 15px; margin-left: 46px; text-align: center; width: 30%; background-color:white; position: relative; display: inline-block;";
  h3box = document.createElement("h3");
  h3box.style.color="black";
  h3box.style="font-size:30px;"
  pbox = document.createElement("p");
  pbox.style.color="gray";
  
  divbox.appendChild(h3box)
  divbox.appendChild(pbox)
  h3box.textContent = i;
  pbox.textContent = "Product";
  
  divcontainer.appendChild(divbox);
}

document.body.appendChild(divcontainer);

divfooter=document.createElement("div")
divcopy=document.createElement("copyright")
divfooter.className="footer"
divfooter.appendChild(divcopy);
divfooter.style="width:100%;  font-family: Arial, Helvetica, sans-serif; height:60px; text-align: center; position :relative ; top:0px; left:-9px; display: block ;background-color: darkgreen; padding:10px;"
divcopy.textContent="copyRight";
divcopy.style="font-family: Arial,  Helvetica, sans-serif; font-size:50px; color:white; "
document.body.appendChild(divfooter)
 
