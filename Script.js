function greatuser(){
  let name=document.getElementById("nameinput").value;
  console.log("user entered:",name);
  
  if(name){
    document.getElementById("message").innerText="Hello,"+name+"!";
  }
  else{
    document.getElementById("message").innerText="Enter your name";
  }
  

}