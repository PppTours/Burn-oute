// objet heros joueur
let heros = {
	nom: "Sacha",
	homme: true,
	age: 15
}


// encyclopedie
let help = {
	Ele_VIH: "Responsable du SIDA, il s'atatque à deux sortes de globules blancs. Symptômes : fièvre, fatigue, frissons, mal de gorge, mal de tête, douleurs articulaires et musculaires, enflure de glandes.",
	Ele_Hepat: "Potentiellement mortelle, ses symptômes sont : fièvre, nausée, vomissements, perte d'appétit, douleurs musculaires et articulaires."
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
let b_parler = document.getElementById('But_Parler');
let b_retour = document.getElementById('But_Retour');
let homme = document.getElementById('IMG_XX');
let femme = document.getElementById('IMG_XY');

let cookies = document.getElementById('cookies');
let modal = document.getElementById('cookies-modal');
let span = document.getElementById('close');
let accepter = document.getElementById('accepter');
let refuser = document.getElementById('refuser');
let plus = document.getElementById('plus');
let texte = document.getElementById('texte-cookies');
let replique = document.getElementById('replique');
let reponse = document.getElementById('reponse');
let response = "But_Attaque_1";
let check = 0;


function cacher(){
	b_attaque.style.display = "none";
	b_objets.style.display = "none";
	b_parler.style.display = "none";
}


function niveauSuivant(){
	if (check == 2) map.innerHTML = '<img id="img_carte" src="assets/Route_34.png" width=100%>';
	else if (check == 3) map.innerHTML = '<img id="img_carte" src="assets/map_village2.png" width=100%>';
	else if (check == 4) map.innerHTML = '<img id="img_carte" src="assets/ecran_fin.png" width=100%>';
	map.style.display = "block";
}


function finDeCombat(){
	popup.style.display = "none";
	check += 1;
	niveauSuivant();
}


homme.addEventListener('click', function(event){
	homme.style.display = "none";
	femme.style.display = "none";
	map.style.display = "block";
	document.getElementById('selection').style.display = "none";
});


femme.addEventListener('click', function(event){
	homme.style.display = "none";
	femme.style.display = "none";
	map.style.display = "block";
	document.getElementById('selection').style.display = "none";
	heros.homme = false;
});


map.addEventListener('click', function(event) {
	// affiche les coordonnées de la souris dans différents repères dès qu'on la bouge
	var x = event.offsetX;
	var y = event.offsetY;
    console.log(`<li>Dans cette zone : ${x}, ${y}</li>`);
    if (check < 2){
    	if (215 < y && y < 255){
    		if (200 < x && x < 280) maisonG();
    	else if (520 < x && x < 600) maisonD();
    	}else{
    		if (340 < x && x < 460 && y < 120) depistage();
    	}
    }else if (check == 2){
    	if (280 < y && y < 345 && 135 < x && x < 185) route34();
    }else if (check == 3){
    	if (330 < y && y < 395 && 215 < x && x < 265) chateau();
    }
});


function maisonG(){
	console.log("gauche");
	map.style.display = "none";
	popup.style.display = "block";
	document.getElementById('PNJ1').style.display = "block";
	document.getElementById('pokemon').style.display = "block";
	replique.innerHTML = "Aidez moi, j'ai une hépatite B !";
	response = "But_Attaque_1";
}


function maisonD(){
	console.log("droite");
	map.style.display = "none";
	popup.style.display = "block";
	document.getElementById('PNJ2').style.display = "block";
	document.getElementById('pokemon').style.display = "block";
	replique.innerHTML = "Au secours, j'ai une Syphilis !";
	response = "But_Objet_1";
}

function route34(){
	map.style.display = "none";
	popup.style.display = "block";
	document.getElementById('PNJ1').style.display = "block";
	document.getElementById('pokemon').style.display = "block";
	replique.innerHTML = "J'ai une maladie au nom sans fin : papillomavirus !";
	response = "But_Attaque_2";
}

function chateau(){
	map.style.display = "none";
	popup.style.display = "block";
	document.getElementById('PNJ2').style.display = "block";
	document.getElementById('pokemon').style.display = "block";
	replique.innerHTML = "Sui-je condamné ? J'ai le VIH !";
	response = "But_Objet_4";
}

document.addEventListener('click', function(event){
	if (event.target.id == response){
		reponse.innerHTML = "Mission réussie !";
		setTimeout(finDeCombat(), 2000);
	}
	else reponse.innerHTML = "Il ne se passe rien.";
});

function depistage(){
	console.log("depistage");
	map.style.display = "none";
	popup.style.display = "block";
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
	document.getElementById('But_En_Apprendre_Plus').style.display = "none";
	document.getElementById('But_Rassurer').style.display = "none";
	document.getElementById('But_Infos').style.display = "none";
	document.getElementById('But_Autres').style.display = "none";
	b_retour.style.display = "none";
	b_attaque.style.display = "inline-block";
	b_objets.style.display = "inline-block";
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


console.log(heros);


// INFOBULLES
document.getElementByID('test').onclick = function(event){
	console.log("event detecte");
	modal.style.display = "block";
	texte.innerHTML = "<p>Pikachtouille etait mignon avant de se faire sauter\
						par la mauvaise carapute.</p>";
};
