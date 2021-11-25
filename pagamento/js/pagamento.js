
function dadosLogin(){
  var usuario = document.getElementById("usuario").value;  
  var senha = document.getElementById("senhalog").value;
  var dados = JSON.parse(window.localStorage.getItem("dados"));

  if(dados == null){    
    document.getElementById("info").innerHTML = "<h3> Não existe cadastro </h3>"
  }
  else{
    if(dados[0][1]== usuario && dados[0][2]== senha){
    
     document.getElementById("info").innerHTML = "<h3> Login realizado! </h3>";
    setTimeout(() => {window.location.href="../index.html"}, 500); 

    }else{
       document.getElementById("info").innerHTML = "<p> Usuário ou senha inválidos <p>";
    }
  }

  console.log(dados[0][1],dados[0][2], usuario,senha);
  
    
    
}