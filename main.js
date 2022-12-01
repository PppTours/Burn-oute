// objet heros joueur
let heros = {
	nom: "Sacha",
	homme: true,
	age: 15
}


// elements HTML
let corps = document.getElementById('corps');
let intro = document.getElementById('intro');
let map = document.getElementById('map');
let popup = document.getElementById('pop-up');
let stats = document.getElementById('stats');


// elements a lire
let b_attaque = document.getElementById('But_Attaque');
let b_objets = document.getElementById('But_Objet');
let b_ist = document.getElementById('But_IST');
let b_parler = document.getElementById('But_Parler');
let b_retour = document.getElementById('But_Retour');

let cookies = document.getElementById('cookies');
let modal = document.getElementById('cookies-modal');
let span = document.getElementById('close');
let accepter = document.getElementById('accepter');
let refuser = document.getElementById('refuser');
let plus = document.getElementById('plus');
let texte = document.getElementById('texte-cookies');


function cacher(){
	b_attaque.style.display = "none";
	b_objets.style.display = "none";
	b_ist.style.display = "none";
	b_parler.style.display = "none";
}


b_attaque.onclick = function(){
	cacher();
	document.getElementById('But_Attaque_1').style.display = "inline-block";
	document.getElementById('But_Attaque_2').style.display = "inline-block";
	document.getElementById('But_Attaque_3').style.display = "inline-block";
	document.getElementById('But_Attaque_4').style.display = "inline-block";
	b_retour.style.display = "inline-block";
}

b_objets.onclick = function(){
	cacher();
	document.getElementById('But_Objet_1').style.display = "inline-block";
	document.getElementById('But_Objet_2').style.display = "inline-block";
	document.getElementById('But_Objet_3').style.display = "inline-block";
	document.getElementById('But_Objet_4').style.display = "inline-block";
	b_retour.style.display = "inline-block";
}

b_ist.onclick = function(){
	cacher();
	document.getElementById('But_IST_1').style.display = "inline-block";
	document.getElementById('But_IST_2').style.display = "inline-block";
	document.getElementById('But_IST_3').style.display = "inline-block";
	document.getElementById('But_IST_4').style.display = "inline-block";
	b_retour.style.display = "inline-block";
}

b_parler.onclick = function(){
	cacher();
	document.getElementById('But_En_Apprendre_Plus').style.display = "inline-block";
	document.getElementById('But_Rassurer').style.display = "inline-block";
	document.getElementById('But_Infos').style.display = "inline-block";
	document.getElementById('But_Autres').style.display = "inline-block";
	b_retour.style.display = "inline-block";
}

b_retour.onclick = function(){
	document.getElementById('But_Attaque_1').style.display = "none";
	document.getElementById('But_Attaque_2').style.display = "none";
	document.getElementById('But_Attaque_3').style.display = "none";
	document.getElementById('But_Attaque_4').style.display = "none";
	document.getElementById('But_Objet_1').style.display = "none";
	document.getElementById('But_Objet_2').style.display = "none";
	document.getElementById('But_Objet_3').style.display = "none";
	document.getElementById('But_Objet_4').style.display = "none";
	document.getElementById('But_IST_1').style.display = "none";
	document.getElementById('But_IST_2').style.display = "none";
	document.getElementById('But_IST_3').style.display = "none";
	document.getElementById('But_IST_4').style.display = "none";
	document.getElementById('But_En_Apprendre_Plus').style.display = "none";
	document.getElementById('But_Rassurer').style.display = "none";
	document.getElementById('But_Infos').style.display = "none";
	document.getElementById('But_Autres').style.display = "none";
	b_attaque.style.display = "inline-block";
	b_objets.style.display = "inline-block";
	b_ist.style.display = "inline-block";
	b_parler.style.display = "inline-block";
}


// ecouteurs
accepter.onclick = function(){
  modal.style.display = "none";
}

refuser.onclick = function(){
  texte.innerHTML = "<p>Ouai je sais c'est dur, mais il faut aller de l'avant !</p>";
}

cookies.onclick = function(){
  modal.style.display = "block";
  texte.innerHTML = "<p>Vous aimez les cookies ? Moi aussi.</p>\
                    <p>Mais je préfère ceux qu'on mange.</p>\
                    <p>Donc pas de cookie ici hélas.</p>";
}

plus.onclick = function(){
  texte.innerHTML = "<p>Recette de cookies pour 6 personnes :</p>\
                    <p>Laissez ramollir 85g de beurre doux à température ambiante.\
                    Dans un saladier, malaxez-le avec 85g de sucre.</p>\
                    <p>Ajoutez un oeuf et éventuellement un sachet de sucre vanillé.</p>\
                    <p>Versez progressivement 150g de farine, une cuillère à café de levure chimique,\
                    une demi cuillère à café de sel et 100g de pépites de chocolat. Mélangez bien.</p>\
                    <p>Beurrez une plaque allant au four et recouvrez-la d'une plaque de silicone.\
                    A l'aide de deux cuillères à soupe, ou simplement avec les mains, formez des noix de pâte\
                    en les espaçant car elles s'étaleront à la cuisson.</p>\
                    <p>Pour finir, faites cuire 8 à 10 minutes à 180°C.\
                    Il faut les sortir dès que les contours commencent à brunir.</p>\
                    <p>Christiane Schmitt dans le <a href='https://cuisine.journaldesfemmes.fr/recette/\
                    310548-american-cookies'>Journal des Femmes</a></p>";
}

span.onlick = function(){
  modal.style.display = "none";
}


console.log(heros)
