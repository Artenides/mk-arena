

var jatekosJelen = [];
var jatekosMult = [];
var jatekosKez = [];
var jatekosJovo = [];
var jatekosTorony = [];


var jatekosPakli = [];


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
            "fold1": {
                  "name": "Kezet érintő akciók",
                  "items": {
                           "kez-multba-tesz": {"name": "Összes lapot múltba tesz"},
                           "kez-melysegbe-tesz": {"name": "Összes lapot mélységbe tesz"},
                           "kez-ellenfelnek-megmutat": {"name": "Összes lapot ellenfélnek megmutat"}
                  }
            },
            "sep2": "---------",
            "quit": {name: "Kilép", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
        }
    });

	jQuery.contextMenu({
        selector: '.menu-hand-tower',
        trigger: 'left',
        callback: function(key, options) {
			let card = options.$trigger.closest('div');
			actionHandler(key, card);
        },
        items:{
            "megnez": {name: "Megnéz", icon: ""},
            "tornyot-bovit": {name: "Tornyot bővít", icon: ""},
            "multba-tesz": {name: "Múltba tesz", icon: ""},
            "ellenfelnek-megmutat": {name: "Ellenfélnek megmutat", icon: ""},
            "sep1": "---------",
            "fold1": {
                  "name": "Kezet érintő akciók",
                  "items": {
                           "kez-multba-tesz": {"name": "Összes lapot múltba tesz"},
                           "kez-melysegbe-tesz": {"name": "Összes lapot mélységbe tesz"},
                           "kez-ellenfelnek-megmutat": {"name": "Összes lapot ellenfélnek megmutat"}
                  }
            },
            "sep2": "---------",
            "quit": {name: "Kilép", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
        }
    });

	jQuery.contextMenu({
        selector: '.menu-tower',
        trigger: 'left',
        callback: function(key, options) {
			let card = options.$trigger.closest('div');
			actionHandler(key, card);
        },
        items:{
            "megnez": {name: "Megnéz", icon: ""},
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
            "kezbe-visszavesz": {name: "Kézbe visszavesz", icon: ""},
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
                    "jovobol-lapot-huz-2": {"name": "2 lapot"},
					"jovobol-lapot-huz-7": {"name": "7 lapot"}
                }
            },
			"jovo-paklit-megkever": {name: "Jövő paklit megkever", icon: ""},
            "sep1": "---------",
			"paklit-betolt": {name: "Paklit betölt", icon: ""},
			"tornyokat-kikeres": {name: "Toronyszinteket kikeres", icon: ""},
			"sep2": "---------",
            "quit": {name: "Kilép", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
        }
    });
	

    jQuery('body').on('click', '.popup-close-btn', function () {
		popupCloseWithButton();
    });  

    jQuery('body').on('click', '.popup-load-btn', function () {
		fetchDeck();
    });
/*
	const interval = setInterval(function() {
   		// method to be executed;
		updateEnemyBoard();
 	}, 5000);
*/
}


function initFuture(){
	
	jatekosJelen = [];
	jatekosMult = [];
	jatekosKez = [];
	jatekosJovo = [];
	jatekosTorony = [];
	for (let i = 0; i < jatekosPakli.length; i++) { 
		jatekosJovo.push(parseInt(jatekosPakli[i].id));
	}
	removeAllCardsFromTable();
	updateFutureCardCounter();
	shuffleFuture();
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
    let cardID = parseInt(cardId);
	let index = jatekosJelen.indexOf(cardID);
	if (index > -1) {
  		jatekosJelen.splice(index, 1);
  		return;
	}

	index = jatekosJovo.indexOf(cardID);
	if (index > -1) {
  		jatekosJovo.splice(index, 1);
        return;
	}
	
	index = jatekosKez.indexOf(cardID);
	if (index > -1) {
  		jatekosKez.splice(index, 1);
  		return;
	}

	index = jatekosTorony.indexOf(cardID);
    if (index > -1) {
    	jatekosTorony.splice(index, 1);
    	return;
    }

	index = jatekosMult.indexOf(cardID);
	if (index > -1) {
  		jatekosMult.splice(index, 1);
  		return;
	}
}


function printCardContainers(){
	console.log("Jövő ("+jatekosJovo.length+"): "+jatekosJovo);
	console.log("Kéz: "+jatekosKez);
	console.log("Jelen: "+jatekosJelen);
	console.log("Múlt: "+jatekosMult);
	console.log("Torony: "+jatekosTorony);
	//console.log("Pakli: "+JSON.stringify(jatekosPakli[0]));
}

function createCard(cardJson){
	let cardDiv = jQuery("<div/>");
	cardDiv.addClass("kartya");
	cardDiv.attr("id",cardJson.id);
	cardDiv.css("background-image", "url(https://lapkereso.spacebar.hu" + cardJson.cardimage + ")");
	cardDiv.attr("card-type", cardJson.card_type);
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
		cardDiv.css("background-image", "url(https://lapkereso.spacebar.hu" + cardJson.cardimage + ")");
	}
	return cardDiv;
}

/**
	Draws cards from the future deck and places them into the player's hand 
 */
function drawCardFromFuture(numOfCards){
	if(jatekosJovo.length == 0) return;
	if(jatekosJovo.length < numOfCards) numOfCards = jatekosJovo.length;
	for(let i=0; i<numOfCards; i++){
		let cardId = jatekosJovo.shift();
		let cardJson = getCardDataById(cardId);
        let $card = createCard(cardJson);
		moveCardToHand($card);
	}
	updateFutureCardCounter();
}

function updateFutureCardCounter(){
	let futureCardCounter = jQuery("#futureCardCounter"); 
	futureCardCounter.empty();
	futureCardCounter.append(jatekosJovo.length);
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
	else if(action == "kezbe-visszavesz"){
	    moveCardToHand($card);
	}
	else if(action == "jovobol-lapot-huz-1"){
		drawCardFromFuture(1);
	}
	else if(action == "jovobol-lapot-huz-2"){
		drawCardFromFuture(2);
	}
	else if(action == "jovobol-lapot-huz-7"){
		drawCardFromFuture(7);
	}
	else if(action == "paklit-betolt"){
		loadDeck();
	}
	else if(action == "tornyot-bovit"){
        buildTower($card);
	}
	else if(action == "tornyokat-kikeres"){
	    drawTowersFromFuture();
	}


	printCardContainers();
}


function shuffleFuture(){
	jatekosJovo = shuffle(jatekosJovo); 
}

function shuffle(arr) {
	
  let shuffled = arr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
	return shuffled;
}

//CARD ACTION DEFINITIONS

function removeAllCardsFromTable(){
	
	jQuery("#jatekosKez").empty();
	jQuery("#jatekosJelen").empty();
	jQuery("#jatekosMult").empty();
	jQuery("#jatekosManoverFront").empty();
	jQuery("#jatekosManoverVedett").empty();
	jQuery("#jatekosTorony").empty();
	
}

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
	addButtonsForCardInManeuver($card);
	$card.detach().appendTo('#jatekosManoverFront');
}

function moveCardToManeuverBack($card){
	let cardId = $card.attr("id");
	addButtonsForCardInManeuver($card);
	$card.detach().appendTo('#jatekosManoverVedett');
}

function moveCardToPresent($card){
	let cardId = $card.attr("id");
	let cardJson = getCardDataById(cardId);
	cardJson.hidden = false;
	removeCardIdFromAll(cardId);
	jatekosJelen.push(parseInt(cardId));
	addButtonsForCardInPresent($card);
	$card.detach().appendTo('#jatekosJelen');
}


function moveCardToHand($card){
	let cardId = $card.attr("id");
	removeCardIdFromAll(cardId);
	jatekosKez.push(parseInt(cardId));
	addButtonsForCardInHand($card);
	$card.detach().appendTo('#jatekosKez');
}

function moveCardToPast($card){
	let cardId = $card.attr("id");
	removeCardIdFromAll(cardId);
	jatekosMult.push(parseInt(cardId));
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

function buildTower($card){
    let cardId = $card.attr("id");
	let cardJson = getCardDataById(cardId);
	cardJson.hidden = false;
	removeCardIdFromAll(cardId);
	jatekosTorony.push(parseInt(cardId));
	addButtonsForCardInTower($card);
	$card.detach().appendTo('#jatekosTorony');

}

function drawTowersFromFuture(){

   	for(let i=0; i<jatekosPakli.length; i++){
   	    let cardJson = jatekosPakli[i];
   	    if(cardJson['card_type'] == "Toronyszint"){
            let $card = createCard(cardJson);
       		moveCardToHand($card);
   	    }
   	}
    updateFutureCardCounter();
}


function loadDeck(){
	let $popup = jQuery('#popup');
	let $textArea = jQuery('<textarea/ id="deckTextArea">');
	let $closeButton =  jQuery('<button class="btn popup-close-btn" title="Bezár"><i class="fas fa-window-close"></i></button>');
	let $loadButton = jQuery('<button class="btn popup-load-btn" title="Bezár"><i class="fas fa-check"></i></button>');
	$popup.append($closeButton);
	$popup.append($textArea);
	$popup.append($loadButton);
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
	let menuButton;
	 if($card.attr("card-type") == "Toronyszint"){
	    menuButton = jQuery('<button class="btn menu-hand-tower" title="Menu"><i class="fas fa-scroll"></i></button>');
	 }
	 else{
	    menuButton = jQuery('<button class="btn menu-hand" title="Menu"><i class="fas fa-scroll"></i></button>');
	 }
	$card.append(menuButton);
}

function addButtonsForCardInManeuver($card){
	removeCardButtons($card);
	let menuButton = jQuery('<button class="btn menu-maneuver" title="Menu"><i class="fas fa-scroll"></i></button>');
	$card.append(menuButton);
}

function addButtonsForCardInTower($card){
	removeCardButtons($card);
	let menuButton = jQuery('<button class="btn menu-tower" title="Menu"><i class="fas fa-scroll"></i></button>');
	$card.append(menuButton);
}


function getCardNamesFromTextArea(){
	return $("#deckTextArea").val().split('\n');
}



function fetchDeck(){
	let data = getCardNamesFromTextArea();
	if(data.length>0){
		getCardsFromApi(data);
	}		
}


function getCardsFromApi(data){
	
	var jqxhr = jQuery.ajax({
		url : "http://rpgthings.com/mk-arena-server/ws/api.php",
		type : "post",
		data : {
			action : "load-deck",
			data : data
		}
	}).done(function(data) {
		if (data.errorCode == 0) {
			console.log(data.data);
			jatekosPakli = data.data;
			initFuture();
			popupCloseWithButton();
		}
		else {
			console.log("Hiba: "+data.message);
		}
	}).fail(function() {
		console.log("Fail Hiba: "+data.message);
	});
	
	
}