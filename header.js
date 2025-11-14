fetch("master_header.html")
.then(response=>response.text())
.then(data=>{document.getElementById("header").innerHTML=data;});