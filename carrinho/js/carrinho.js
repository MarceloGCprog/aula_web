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

    dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));          
    if (dados_carrinho != null){ 

        listaObjetos.forEach((item) => {
            //debugger;
            if (dados_carrinho.includes(item.id)){      
                count = dados_carrinho.filter(x => x==item.id);
                var conteudo ="";      
                conteudo +=`<div class="card-produtos">`;
                conteudo +='<div class="card-img">';
                conteudo += `<img src="img/produtos/${item.imagem}"></div>`;
                conteudo +=`<div class="card-desc">${item.titulo}</div>`;
                conteudo +=`<div class="card-und" id=${item.id} onmouseover="changeText(${item.id},valorCarrinho(${item.id}))" onmouseout="changeText(${item.id},defaultText(${item.id}))">${count.length} und</div>`;
                conteudo +=`<div class="card-comprar"onclick=remover(${item.id})>Remover</div></div>`;  
                document.getElementById('produtos').innerHTML += conteudo;
            }
        });   
    }
}

function remover(id){

    dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));
    index = dados_carrinho.indexOf(id);
    console.log(index);
    if(index != -1){
        dados_carrinho.splice(index,1)   
        window.localStorage.setItem("carrinho-id",JSON.stringify(dados_carrinho));
        aux_dados = JSON.parse(window.localStorage.getItem("carrinho-id"));
        count = aux_dados.filter(x => x==id);     
        document.getElementById(id).innerText =  `${count.length} und`;  
    }
    
    totalCarrinho();
    
    
}


function valorCarrinho(id){
    var item_info = listaObjetos.find(Element => Element.id === id);
    var dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));
    var count = dados_carrinho.filter(x => x==id);
    total_carrinho = item_info.preço * count.length
    return total_carrinho.toFixed(2);

}       


function defaultText(id)
{
    var dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));
    var count = dados_carrinho.filter(x => x==id);
    return count.length;      
}

function changeText(id,a = Object(id))
{
    var display = document.getElementById(id);
    display.innerText = a;
    
    if(a === valorCarrinho(id)){
        display.innerText =`R$ ${a}`;
    }
    if(a === defaultText(id)){
        display.innerText =`${a} und`;
    }
         
}

function totalCarrinho(){

    var soma = 0;
    var dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));
    dados_carrinho.forEach(item => {        
        var item_info = listaObjetos.find(Element => Element.id === item)        
        soma = soma + item_info.preço;
        
    });
    var display = document.getElementById("totalCarrinho");
    display.innerText = `Total R$${soma.toFixed(2)}`;      
}

/* CHAMADAS */

montarCard();
totalCarrinho(); 

