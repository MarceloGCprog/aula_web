var dados = [];

function Dadosarquivos(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confsenha = document.getElementById("confsenha").value;
  var aux = [nome,email,senha];

  

  if(nome == "" || email == ""|| senha == "" || confsenha == ""){

    document.getElementById("info").innerHTML = "<h3> Dados em branco! </h3>"
  }else{
    if(senha == confsenha){
      dados.push(aux);
      window.localStorage.setItem("dados",JSON.stringify(dados));
      document.getElementById("dadosCadastro").innerHTML = "<h2>Cadastrado com sucesso! </h2>";
      setTimeout(() => {window.location.href="../index.html"}, 500); 
    }else{
      document.getElementById("info").innerHTML = "<h3> Senhas nao conferem! </h3>"
    }
  }  
}



