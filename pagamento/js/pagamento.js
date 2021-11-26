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


function totalCarrinho(){
    //debugger;
    var soma = 0;
    var dados_carrinho = JSON.parse(window.localStorage.getItem("carrinho-id"));
    dados_carrinho.forEach(item => {        
        var item_info = listaObjetos.find(Element => Element.id === item)        
        soma = soma + item_info.preço;        
    });
    $('#totalCompra').attr('placeholder',` R$ ${soma.toFixed(2)}`);
    
        
  }

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function computandoPagamento(){
  var cardNumber = document.getElementById('card-number').value;
  var cardName = document.getElementById('the-card-name-id').value;
  var cardMonth = document.getElementById('expiry-month').value;
  var cardCvc = document.getElementById('cvc').value;

  console.log(cardNumber,cardName,cardMonth,cardCvc);

  if(cardNumber != "" && cardName != "" && cardMonth != "" && cardCvc != "")
  {
    var display = document.getElementById('telaPagamento');
    display.innerHTML = '<h2 id="telaPagamento"> Pagamento realizado com sucesso!</h2>'
    localStorage.clear(); 
    setTimeout(() => {window.location.href="../index.html"}, 500); 
  }
  
  else{ document.getElementById("info").innerHTML = "<h3> Preencha todos os dados! </h3>"}
  
}

totalCarrinho();       