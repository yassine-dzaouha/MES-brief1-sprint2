// Données de départ fournies. Aucun comportement n’est encore implémenté.
let products = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;



const messageVide = document.getElementById("message");
const nameInput = document.getElementById("nom");
const priceInput = document.getElementById("prix");
const submitBtn = document.getElementById("submitBtn");
const productList = document.getElementById("liste-produits");
const message = document.getElementById("etat-vide");
const compteur = document.getElementById("compteur");
const totalPrice = document.getElementById("total")
// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.

showProducts()

function addProduct(){
  if(nameInput.value == ""){
    messageVide.textContent = "entrer le nom";
    return
  }

  if(priceInput.value == ""){
    messageVide.textContent = "entrer le prix";
    return
  }
  const product = {};
  product.id = prochainId++;
  product.nom = nameInput.value
  product.prix = Number(priceInput.value)
  products.push(product);
}

function createProduct(tag, classname, content){
  const li = document.createElement(tag);
  li.classname = classname;
  li.textContent = content; 
  return li;
}

function showProducts(){
  productList.textContent = ""
  products.forEach((product)=>{
    const li = createProduct("li", "produit", "");
    const div = createProduct("div","","") ;
    
    const productName = createProduct("strong", "nom-produit", product.nom);
    const productprice = createProduct("span", "prix-produit", product.prix);
    div.append(productName,productprice);
    const button = document.createElement("button");
    button.classname = "supprimer";
    button.textContent = "Retirer";
    button.addEventListener("click",()=>{
      deleteProduct(product.id)
    })
    li.append(div,button);
    console.log(li)
    productList.append(li)

  })
  
  compteur.textContent = products.length
  totalPrice.textContent = total();

}

if(products.length){
  message.style.display = "none"
}
else {
  message.style.display = "block"
}

function deleteProduct(id){
  products = products.filter((prod)=> prod.id != id);
  showProducts();
}

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  addProduct();
  showProducts();
})




function total(){
  let totalPrice = 0
  products.forEach((prod)=>{
    totalPrice += prod.prix
  })
  return totalPrice;
}





// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
