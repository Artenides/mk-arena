

var jatekosJelen = [];
var jatekosMult = [];
var jatekosKez = [];
var jatekosJovo = [];

var jatekosPakli = [
	{"id":"1", "cardimage":"cardimages/a_legio_buszkesege.png", "hidden":true},
	{"id":"4", "cardimage":"cardimages/a_rendbira_aldasa.png", "hidden":true},
	{"id":"5", "cardimage":"cardimages/a_transceps.png", "hidden":true},
	{"id":"8", "cardimage":"cardimages/beke_honol.png", "hidden":true},
	{"id":"9", "cardimage":"cardimages/csatabard_ele.png", "hidden":true},
	{"id":"12", "cardimage":"cardimages/fullank.png", "hidden":true},
	{"id":"13", "cardimage":"cardimages/fullank.png", "hidden":true},
	{"id":"17", "cardimage":"cardimages/gyogyito_hivasa.png", "hidden":true},
	{"id":"36", "cardimage":"cardimages/smaragdmagusok_kozbelepese.png", "hidden":true},
	{"id":"18", "cardimage":"cardimages/haditanacs.png", "hidden":true},
	{"id":"38", "cardimage":"cardimages/vadasz.png", "hidden":true},
	{"id":"39", "cardimage":"cardimages/vadasz.png", "hidden":true},	
	{"id":"19", "cardimage":"cardimages/haditanacs.png", "hidden":true},
	{"id":"20", "cardimage":"cardimages/haditanacs.png", "hidden":true},
	{"id":"21", "cardimage":"cardimages/kaosz_raddaq_kegyeltje.png", "hidden":true},	
	{"id":"22", "cardimage":"cardimages/kaosz_raddaq_kegyeltje.png", "hidden":true},
	{"id":"23", "cardimage":"cardimages/kaosz_raddaq_kegyeltje.png", "hidden":true},		
	{"id":"24", "cardimage":"cardimages/kenyszeru_szovetseg.png", "hidden":true},	
	{"id":"25", "cardimage":"cardimages/kenyszeru_szovetseg.png", "hidden":true},	
	{"id":"26", "cardimage":"cardimages/kenyszeru_szovetseg.png", "hidden":true},
	{"id":"27", "cardimage":"cardimages/ovo_szellemek_joindulata.png", "hidden":true},
	{"id":"28", "cardimage":"cardimages/ovo_szellemek_joindulata.png", "hidden":true},
	{"id":"29", "cardimage":"cardimages/ovo_szellemek_joindulata.png", "hidden":true},
	{"id":"30", "cardimage":"cardimages/piszkos_csel.png", "hidden":true},
	{"id":"31", "cardimage":"cardimages/piszkos_csel.png", "hidden":true},
	{"id":"32", "cardimage":"cardimages/piszkos_csel.png", "hidden":true},
	{"id":"33", "cardimage":"cardimages/pusztito_orjonges.png", "hidden":true},
	{"id":"34", "cardimage":"cardimages/pusztito_orjonges.png", "hidden":true},
	{"id":"35", "cardimage":"cardimages/pusztito_orjonges.png", "hidden":true},

	{"id":"37", "cardimage":"cardimages/smaragdmagusok_kozbelepese.png", "hidden":true},

	{"id":"40", "cardimage":"cardimages/vadasz.png", "hidden":true},
	{"id":"6", "cardimage":"cardimages/a_transceps.png", "hidden":true},
	{"id":"7", "cardimage":"cardimages/a_transceps.png", "hidden":true},
	{"id":"2", "cardimage":"cardimages/a_legio_buszkesege.png", "hidden":true},
	{"id":"3", "cardimage":"cardimages/a_legio_buszkesege.png", "hidden":true},
	{"id":"10", "cardimage":"cardimages/csatabard_ele.png", "hidden":true},
	{"id":"11", "cardimage":"cardimages/csatabard_ele.png", "hidden":true},
	{"id":"14", "cardimage":"cardimages/fullank.png", "hidden":true},
	{"id":"15", "cardimage":"cardimages/gyogyito_hivasa.png", "hidden":true},
	{"id":"16", "cardimage":"cardimages/gyogyito_hivasa.png", "hidden":true},
		
];

function addButtonEventHandlers(){
	
	jQuery('body').on('click', '.elforgat', function () {
    		var kartyaDiv = jQuery(this).closest('div');
			if(!kartyaDiv.hasClass('piheno') && !kartyaDiv.hasClass('serult')){
    			kartyaDiv.addClass('piheno');
    		}
    		else if(kartyaDiv.hasClass('piheno')){
    			kartyaDiv.removeClass('piheno');
    			kartyaDiv.addClass('serult');
    		}
        });

    	jQuery('body').on('click', '.visszaforgat', function () {
    		let kartyaDiv = jQuery(this).closest('div');
			if(kartyaDiv.hasClass('serult')){
				kartyaDiv.removeClass('serult');
    			kartyaDiv.addClass('piheno');
    		}
    		else if(kartyaDiv.hasClass('piheno')){
    			kartyaDiv.removeClass('piheno');
    		}
        });

    	jQuery('body').on('click', '.jelenbetesz', function () {
    		let $cardDiv = jQuery(this).closest('div');
			moveCardToPresent($cardDiv);
        });

    	jQuery('body').on('click', '.kezbevesz', function () {
    		let $cardDiv = jQuery(this).closest('div');
			moveCardToHand($cardDiv);
        });

    	jQuery('body').on('click', '.multbatesz', function () {
    		let $cardDiv = jQuery(this).closest('div');
			moveCardToPast($cardDiv);
        });

    	jQuery('body').on('click', '.manoverbekezd', function () {
    		let $cardDiv = jQuery(this).closest('div');
			moveCardToManeuverFront($cardDiv);
        });

    	jQuery('body').on('click', '.poziciotvalt', function () {
    		let $card = jQuery(this).closest('div');
			let $parent = $card.parent();
			if($parent.attr('id')=="jatekosManoverFront"){
				moveCardToManeuverBack($card);
			}
			else{
				moveCardToManeuverFront($card);
			}
			
			
        });

    	jQuery('body').on('click', '.ellenfelnekmegmutat', function () {
    		let $card = jQuery(this).closest('div');
			let cardId = $card.attr("id");
			toggleCardVisibility(cardId);
			printCardContainers();
			
        });

    	jQuery('body').on('click', '#jovoPakli', function () {
			drawCardFromFuture();
        });


		const interval = setInterval(function() {
   		// method to be executed;
			updateEnemyBoard();
 		}, 5000);

}


function initFuture(){
	for (let i = 0; i < jatekosPakli.length; i++) { 
		jatekosJovo.push(jatekosPakli[i].id);
	}
}

function getCardDataById(cardId){
	for (let i = 0; i < jatekosPakli.length; i++) { 
		if(jatekosPakli[i].id == cardId) return jatekosPakli[i];
	}
	return null;
}

function toggleCardVisibility(cardId){
	let card = getCardDataById(cardId);
	if(card.hidden){
		card.hidden = false;
	}
	else{
		card.hidden = true;
	}
}


function removeCardIdFromAll(cardId){
	
	let index = jatekosJelen.indexOf(cardId);
	if (index > -1) {
  		jatekosJelen.splice(index, 1);
	}

	index = jatekosJovo.indexOf(cardId);
	if (index > -1) {
  		jatekosJovo.splice(index, 1);
	}
	
	index = jatekosKez.indexOf(cardId);
	if (index > -1) {
  		jatekosKez.splice(index, 1);
	}
	
	index = jatekosMult.indexOf(cardId);
	if (index > -1) {
  		jatekosMult.splice(index, 1);
	}
}


function printCardContainers(){
	//console.log("Jövő: "+jatekosJovo);
	console.log("Kéz: "+jatekosKez);
	console.log("Jelen: "+jatekosJelen);
	//console.log("Múlt: "+jatekosMult);
	//console.log("Pakli: "+JSON.stringify(jatekosPakli[0]));
}

function createCard(cardJson){
	let cardDiv = jQuery("<div/>");
	cardDiv.addClass("kartya");
	cardDiv.attr("id",cardJson.id);
	cardDiv.css("background-image", "url(https://lapkereso.spacebar.hu/" + cardJson.cardimage + ")");
	return cardDiv;
}

function createEnemyCard(cardJson){
	let cardDiv = jQuery("<div/>");
	cardDiv.addClass("kartya");
	cardDiv.attr("id",cardJson.id);
	if(cardJson.hidden){
		cardDiv.css("background-image", "url(cardimages/back.png)");
	}
	else{
		cardDiv.css("background-image", "url(https://lapkereso.spacebar.hu/" + cardJson.cardimage + ")");
	}
	return cardDiv;
}

/**
	Draws a card from the future deck and places it into the player's hand 
 */
function drawCardFromFuture(){
	if(jatekosJovo.length == 0) return;
	let cardId = jatekosJovo.shift();
	removeCardIdFromAll(cardId);
	jatekosKez.push(cardId);
	let cardJson = getCardDataById(cardId);
	let $cardDiv = createCard(cardJson);
	addButtonsForCardInHand($cardDiv);
	jQuery('#jatekosKez').append($cardDiv);
}


function moveCardToManeuverFront($card){
	let cardId = $card.attr("id");
	console.log("Moving card to maneuverFront: "+cardId);
	addButtonsForCardInManeuver($card);
	$card.detach().appendTo('#jatekosManoverFront');
}

function moveCardToManeuverBack($card){
	let cardId = $card.attr("id");
	console.log("Moving card to maneuverBack: "+cardId);
	addButtonsForCardInManeuver($card);
	$card.detach().appendTo('#jatekosManoverVedett');
}

function moveCardToPresent($card){
	let cardId = $card.attr("id");
	let cardJson = getCardDataById(cardId);
	cardJson.hidden = false;
	removeCardIdFromAll(cardId);
	jatekosJelen.push(cardId);
	addButtonsForCardInPresent($card);
	$card.detach().appendTo('#jatekosJelen');
}


function moveCardToHand($card){
	let cardId = $card.attr("id");
	removeCardIdFromAll(cardId);
	jatekosKez.push(cardId);
	addButtonsForCardInHand($card);
	$card.detach().appendTo('#jatekosKez');
}

function moveCardToPast($card){
	let cardId = $card.attr("id");
	removeCardIdFromAll(cardId);
	jatekosMult.push(cardId);
	$card.remove();
}





function updateEnemyBoard(){
	
	jQuery('.kez.ellenfel .kartya').each(function(){
    		jQuery(this).remove();
    });
	for(let i=0;i<jatekosKez.length; i++){
		let cardId = jatekosKez[i];
		let cardJson = getCardDataById(cardId);
		let $cardDiv = createEnemyCard(cardJson);
		jQuery('#ellenfelKez').append($cardDiv);
	}

	jQuery('.jelen.ellenfel .kartya').each(function(){
    		jQuery(this).remove();
    });
	for(let i=0;i<jatekosJelen.length; i++){
		let cardId = jatekosJelen[i];
		let cardJson = getCardDataById(cardId);
		let $cardDiv = createEnemyCard(cardJson);
		jQuery('#ellenfelJelen').append($cardDiv);
	}
	printCardContainers();
	
}



function removeCardButtons($card){
	$card.empty();
}

function addButtonsForCardInPresent($card){
	removeCardButtons($card);
	let rotateRight = jQuery('<button class="btn elforgat" title="Elforgat"><i class="fas fa-redo"></i></button>');
	let rotateLeft = jQuery('<button class="btn visszaforgat" title="Visszaforgat"><i class="fas fa-undo"></i></button>'); 
	let takeBackToHand = jQuery('<button class="btn kezbevesz" title="Kézbe visszavesz"><i class="fas fa-hand-paper"></i></button>');
	let discardToPast = jQuery('<button class="btn multbatesz" title="Múltba tesz"><i class="fas fa-skull-crossbones"></i></button>');
	let startManeuver = jQuery('<button class="btn manoverbekezd" title="Manőverbe kezd"><i class="fas fa-compass"></i></button>');
	  	  	
	$card.append(rotateRight);
	$card.append(rotateLeft);
	$card.append(takeBackToHand);
	$card.append(discardToPast);
	$card.append(startManeuver);
}

function addButtonsForCardInHand($card){
	removeCardButtons($card);
	let moveToPresent = jQuery('<button class="btn jelenbetesz" title="Jelenbe tesz"><i class="fas fa-shield-alt"></i></button>');	
	let discardToPast = jQuery('<button class="btn multbatesz" title="Múltba tesz"><i class="fas fa-skull-crossbones"></i></button>');
	let showToEnemy = jQuery('<button class="btn ellenfelnekmegmutat" title="Ellenfélnek megmutat"><i class="fas fa-eye"></i></button>'); 
		  	  	
	$card.append(moveToPresent);
	$card.append(discardToPast);
	$card.append(showToEnemy);
}

function addButtonsForCardInManeuver($card){
	removeCardButtons($card);
	let rotateRight = jQuery('<button class="btn elforgat" title="Elforgat"><i class="fas fa-redo"></i></button>');
	let rotateLeft = jQuery('<button class="btn visszaforgat" title="Visszaforgat"><i class="fas fa-undo"></i></button>'); 
	let discardToPast = jQuery('<button class="btn multbatesz" title="Múltba tesz"><i class="fas fa-skull-crossbones"></i></button>');
	let moveToPresent = jQuery('<button class="btn jelenbetesz" title="Jelenbe tesz"><i class="fas fa-shield-alt"></i></button>');	
	let changePosition = jQuery('<button class="btn poziciotvalt" title="Pozíciót vált"><i class="fas fa-arrows-alt-v"></i></button>'); 
	  	  	
	$card.append(rotateRight);
	$card.append(rotateLeft);
	$card.append(discardToPast);
	$card.append(moveToPresent);
	$card.append(changePosition);

}


