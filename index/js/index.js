var listaObjetos =[
    {   "id" :0,
        "titulo": "Cortador de grama",
        "imagem" : "cortar_grama.jpg",
        "status":false},
    {   "id" :1,
        "titulo": "Furadeira de bancada",
        "imagem" : "furadeira_bancada.jpeg",
        "status":false},
        {   "id" :2,
        "titulo": "Furadeira à bateria",
        "imagem" : "furadeira.jpg",
        "status":false},
        {   "id" :3,
        "titulo": "Materlete rompedor",
        "imagem" : "martelete.jpg",
        "status":false},
        {   "id" :4,
        "titulo": "Serra meia-esquadria",
        "imagem" : "meia_esquadria.jpg",
        "status":false},
        {   "id" :5,
        "titulo": "Mini Serra Circular",
        "imagem" : "mini_serra_circular.jpg",
        "status":false},
        {   "id" :6,
        "titulo": "Parafusadeira à bateria",
        "imagem" : "parafusadeira.jpg",
        "status":false},
        {   "id" :7,
        "titulo": "Kit serra tico-tico ",
        "imagem" : "serra_para_tico_tico.jpg",
        "status":false},
        {   "id" :8,
        "titulo": "Luminária Profissional",
        "imagem" : "work_light.jpg",
        "status":false},
        {"id" :9,
        "titulo": "Nível Laser",
        "imagem" : "nivel_laser.jpg",
        "status":false},
        {"id" :10,
        "titulo": "Lavadora  Alta Pressão",
        "imagem" : "pressure_water.jpg",
        "status":false},
        {"id" :11,
        "titulo": "Conjunto de brocas",
        "imagem" : "conjunto_brocas.webp",
        "status":false}
]

function montarCard(){

    listaObjetos.forEach((item) => {

        var conteudo ="";
        conteudo +=`<div class="card-produtos" id=${item.id}>`;
        conteudo +='<div class="card-img">';
        conteudo += `<img src="index/img/produtos/${item.imagem}"></div>`;
        conteudo +=`<div class="card-desc">${item.titulo}</div>`;
        conteudo +=`<div class="card-comprar" onclick=comprar(${item.id})>Comprar</div></div>`;

        document.getElementById('produtos').innerHTML += conteudo;
    });  

}

montarCard(); 

var carrinho =[];


function comprar(id){
    
    carrinho.push(id);
    window.localStorage.setItem("carrinh-id",JSON.stringify(carrinho));
    console.log(carrinho);    
} 






dados.push(aux);
      window.localStorage.setItem("dados",JSON.stringify(dados));
      document.getElementById("dadosCadastro").innerHTML = "<h2>Cadastrado com sucesso! </h2>";
      setTimeout(() => {window.location.href="../index.html"}, 500); 