# Le panier du goûter

**Mise en situation individuelle · 20 minutes · JavaScript Vanilla**

Votre groupe organise une pause collective à YouCode. L’interface du panier est prête. Vous devez la rendre interactive pour ajouter les achats et retirer les produits devenus inutiles.

## Travail demandé

Travaillez uniquement dans `script.js`. Le HTML, le CSS, un modèle de ligne et le tableau initial sont fournis. Ouvrez `index.html` dans le navigateur.

1. **Afficher les produits** : au chargement, afficher les deux produits du tableau avec leur nom, leur prix en MAD et un bouton « Retirer ».
2. **Ajouter un produit** : intercepter la soumission sans recharger la page, récupérer le nom et le prix, puis vérifier que le nom ne contient pas uniquement des espaces et que le prix est un nombre strictement positif. Afficher une erreur dans `#message` si la saisie est invalide. Sinon, ajouter un objet avec un identifiant unique dans `produits`, actualiser la liste et vider le formulaire.
3. **Retirer un produit** : le bouton doit supprimer uniquement le produit correspondant du tableau et actualiser la liste, y compris pour un produit qui vient d’être ajouté. Aucune confirmation n’est demandée.

**Bonus, si les trois étapes fonctionnent :** actualiser le nombre de produits dans `#compteur`, afficher `#etat-vide` uniquement lorsque le tableau est vide et calculer la somme des prix dans `#total`.

## Repères HTML

| Élément | Sélecteur |
| --- | --- |
| Formulaire | `#form-produit` |
| Nom / prix | `#nom` / `#prix` |
| Message | `#message` |
| Liste | `#liste-produits` |
| Modèle de ligne | `#modele-produit` |
| Nom / prix dans le modèle | `.nom-produit` / `.prix-produit` |
| Bouton de retrait | `.supprimer` |

Vous pouvez cloner le modèle fourni ou utiliser `document.createElement()`. Les méthodes de tableaux restent libres. Organisez le code en fonctions simples et utilisez `addEventListener()`.

Le tableau est la source des données : retirer uniquement un élément du DOM ne suffit pas. Les données sont réinitialisées au rechargement. Il n’est pas demandé de persistance ni de gestion de quantités : un ajout correspond à une ligne, même si un nom existe déjà.
