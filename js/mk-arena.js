

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
	
	jQuery.contextMenu({
        selector: '.menu-hand', 
        trigger: 'left',
        callback: function(key, options) {
			let card = options.$trigger.closest('div');
			actionHandler(key, card);
        },
        items:{
            "megnez": {name: "Megnéz", icon: ""},
            "jelenbe-tesz": {name: "Jelenbe tesz", icon: ""},
            "multba-tesz": {name: "Múltba tesz", icon: ""},
            "ellenfelnek-megmutat": {name: "Ellenfélnek megmutat", icon: ""},
            "sep1": "---------",
            "quit": {name: "Kilép", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
        }
    });

	jQuery.contextMenu({
        selector: '.menu-present', 
        trigger: 'left',
        callback: function(key, options) {
			let card = options.$trigger.closest('div');
			actionHandler(key, card);
        },
        items:{
            "megnez": {name: "Megnéz", icon: ""},
			"fold1": {
                "name": "Múltba/mélységbe tesz", 
                "items": {
                    "multba-tesz": {"name": "Múltba tesz"},
                    "melysegbe-tesz": {"name": "Mélységbe tesz"}
                }
            },
			"fold2": {
                "name": "Elforgat", 
                "items": {
                    "eberbe-forgat": {"name": "Éberbe"},
                    "pihenobe-forgat": {"name": "Pihenőbe"},
					"serultbe-forgat": {"name": "Sérültbe"}
                }
            },
            "manoverbe-kezd": {name: "Manőverbe kezd", icon: ""},
            "sep1": "---------",
            "quit": {name: "Kilép", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
        }
    });


	jQuery.contextMenu({
        selector: '.menu-maneuver', 
        trigger: 'left',
        callback: function(key, options) {
			let card = options.$trigger.closest('div');
			actionHandler(key, card);
        },
        items:{
            "megnez": {name: "Megnéz", icon: ""},
			"fold1": {
                "name": "Múltba/mélységbe tesz", 
                "items": {
                    "multba-tesz": {"name": "Múltba tesz"},
                    "melysegbe-tesz": {"name": "Mélységbe tesz"}
                }
            },
			"fold2": {
                "name": "Elforgat", 
                "items": {
                    "eberbe-forgat": {"name": "Éberbe"},
                    "pihenobe-forgat": {"name": "Pihenőbe"},
					"serultbe-forgat": {"name": "Sérültbe"}
                }
            },
            "poziciot-valt": {name: "Pozíciót vált", icon: ""},
			"jelenbe-tesz": {name: "Jelenbe tesz", icon: ""},
            "sep1": "---------",
            "quit": {name: "Kilép", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
        }
    });
	
	
		jQuery.contextMenu({
        selector: '.menu-future', 
        trigger: 'left',
        callback: function(key, options) {
			let card = options.$trigger.closest('div');
			actionHandler(key, card);
        },
        items:{
			"fold1": {
                "name": "Lapot húz", 
                "items": {
                    "jovobol-lapot-huz-1": {"name": "1 lapot"},
                    "jovobol-lapot-huz-2": {"name": "2 lapot"}
                }
            },
            "sep1": "---------",
			"paklit-betolt": {name: "Paklit betölt", icon: ""},
			"sep2": "---------",
            "quit": {name: "Kilép", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
        }
    });
	

    jQuery('body').on('click', '.popup-close-btn', function () {
		popupCloseWithButton();
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



function actionHandler(action, $card){
	
	if(action == "megnez"){
		zoomOnCard($card);
	}
	else if(action == "jelenbe-tesz"){
		moveCardToPresent($card);
	}
	else if(action == "eberbe-forgat"){
		rotateCardToReady($card);
	}
	else if(action == "pihenobe-forgat"){
		rotateCardToRest($card);
	}	
	else if(action == "serultbe-forgat"){
		rotateCardToInjured($card);
	}
	else if(action == "multba-tesz"){
		moveCardToPast($card);
	}
	else if(action == "ellenfelnek-megmutat"){
		let cardId = $card.attr("id");
		toggleCardVisibility(cardId);
	}
	else if(action == "manoverbe-kezd"){
		moveCardToManeuverFront($card);
	}
	else if(action == "poziciot-valt"){
		let $parent = $card.parent();
		if($parent.attr('id')=="jatekosManoverFront"){
			moveCardToManeuverBack($card);
		}
		else{
			moveCardToManeuverFront($card);
		}
	}
	else if(action == "jovobol-lapot-huz-1"){
		drawCardFromFuture();
	}
	else if(action == "jovobol-lapot-huz-2"){
		drawCardFromFuture();
		drawCardFromFuture();
	}
	else if(action == "paklit-betolt"){
		loadDeck();
	}
	
}

//CARD ACTION DEFINITIONS

function rotateCardToReady($card){
	if($card.hasClass('serult')) $card.removeClass('serult');
	if($card.hasClass('piheno')) $card.removeClass('piheno');
}

function rotateCardToRest($card){
	if($card.hasClass('serult')) $card.removeClass('serult');
	if(!$card.hasClass('piheno')) $card.addClass('piheno');
	
}

function rotateCardToInjured($card){
	if($card.hasClass('piheno')) $card.removeClass('piheno');
	if(!$card.hasClass('serult')) $card.addClass('serult');
	
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

function zoomOnCard($card){
	
	let bgImg = $card.css("background-image");
	let $popup = jQuery('#popup');
	$card = jQuery('<div class="kartya"></div>');
	$card.css("background-image", bgImg);
	$popup.append($card);
	$popup.addClass("popup-open");
}

function loadDeck(){
	let $popup = jQuery('#popup');
	let $textArea = jQuery('<textarea/ id="deckTextArea">');
	let $closeButton =  jQuery('<button class="btn popup-close-btn" title="Bezár"><i class="fas fa-window-close"></i></button>');
	$popup.append($closeButton);
	$popup.append($textArea);
	$popup.addClass("popup-open");
}

function popupClose(){
	let $popup = jQuery('#popup');
	if($popup.find(".kartya").length > 0){ 
		$popup.empty();
		$popup.removeClass("popup-open");
	}	
}

function popupCloseWithButton(){
	let $popup = jQuery('#popup');
	$popup.empty();
	$popup.removeClass("popup-open");
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
	let menuButton = jQuery('<button class="btn menu-present" title="Menu"><i class="fas fa-scroll"></i></button>');
	$card.append(menuButton);
}

function addButtonsForCardInHand($card){
	removeCardButtons($card);
	let menuButton = jQuery('<button class="btn menu-hand" title="Menu"><i class="fas fa-scroll"></i></button>');
	$card.append(menuButton);
}

function addButtonsForCardInManeuver($card){
	removeCardButtons($card);
	let menuButton = jQuery('<button class="btn menu-maneuver" title="Menu"><i class="fas fa-scroll"></i></button>');
	$card.append(menuButton);
}



