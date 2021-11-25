var listaObjetos =[
    {   "id" :0,
        "titulo": "Cortador de grama",
        "imagem" : "cortar_grama.jpg",
        "preço":549.00},
    {   "id" :1,
        "titulo": "Furadeira de bancada",
        "imagem" : "furadeira_bancada.jpeg",
        "preço":1136.30},
        {   "id" :2,
        "titulo": "Furadeira à bateria",
        "imagem" : "furadeira.jpg",
        "preço":1389.90},
        {   "id" :3,
        "titulo": "Materlete rompedor",
        "imagem" : "martelete.jpg",
        "preço":630.45},
        {   "id" :4,
        "titulo": "Serra meia-esquadria",
        "imagem" : "meia_esquadria.jpg",
        "preço":1499.52},
        {   "id" :5,
        "titulo": "Mini Serra Circular",
        "imagem" : "mini_serra_circular.jpg",
        "preço":380.17},
        {   "id" :6,
        "titulo": "Parafusadeira à bateria",
        "imagem" : "parafusadeira.jpg",
        "preço":499.90},
        {   "id" :7,
        "titulo": "Kit serra tico-tico ",
        "imagem" : "serra_para_tico_tico.jpg",
        "preço":68.99},
        {   "id" :8,
        "titulo": "Luminária Profissional",
        "imagem" : "work_light.jpg",
        "preço":249.50},
        {"id" :9,
        "titulo": "Nível Laser",
        "imagem" : "nivel_laser.jpg",
        "preço":760.93},
        {"id" :10,
        "titulo": "Lavadora  Alta Pressão",
        "imagem" : "pressure_water.jpg",
        "preço":3309.80},
        {"id" :11,
        "titulo": "Conjunto de brocas",
        "imagem" : "conjunto_brocas.webp",
        "preço":75.90}
]



function montarCard(){

    listaObjetos.forEach((item) => {
        
        var conteudo ="";
        conteudo +=`<div class="card-produtos" >`;
        conteudo +='<div class="card-img">';
        conteudo += `<img src="index/img/produtos/${item.imagem}"></div>`;
        conteudo +=`<div class="card-desc" onmouseover=${innerText=item.preço}>${item.titulo}</div>`;
        conteudo +=`<div class="card-comprar" id=${item.id} onmouseover=changeText(${item.id},"R$"+${item.preço}) onmouseout=changeText(${item.id},"Comprar") onclick=comprar(${item.id})>Comprar</div></div>`;  
        document.getElementById('produtos').innerHTML += conteudo;
        });}       



montarCard();
persistDados(); 

var carrinho =[];


function comprar(id){

     dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));
    if (dados_carrinho != null){
        carrinho = dados_carrinho;
    }
    
    carrinho.push(id);
    window.localStorage.setItem("carrinho-id",JSON.stringify(carrinho));       
   
    count = dados_carrinho.filter(x => x==id);
    item_info = listaObjetos.find(Element => Element.id === id);     
    document.getElementById(id).innerText =  `Comprado: ${count.length} und`
    document.getElementById(id).style.backgroundColor = "#008000"; 
    
} 
//onmouseout=changeText(${item.id},Comprado: ${count.length} und)
function persistDados(){

    
    dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));
    if (dados_carrinho != null){
        dados_carrinho.forEach(id => {
            count = dados_carrinho.filter(x => x==id);
            document.getElementById(id).innerText =  `Comprado: ${count.length} und`;
            document.getElementById(id).style.backgroundColor = "#008000"; 
            
        });
    }
}

function changeText(id,text)
{
    var display = document.getElementById(id);
    display.innerText = text;   
}
    
    


