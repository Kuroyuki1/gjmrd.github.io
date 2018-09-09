localization = {
	lang : {
		ru : 'Язык',
		en : 'Language',
	},
	socialTitle : {
		ru : 'Для связи',
		en : 'For communication',
	},
	otherSocialTitle : {
		ru : 'Остальные соц. сети',
		en : 'Other social'
	}
}

//setting listeners to language switchers
socialTitle = document.querySelector('.social h1');
otherSocialTitle = document.querySelector('#other-social h1');
langTitle = document.querySelector('.lang h4');
engSwitcher = document.querySelector('.en');
engSwitcher.addEventListener('click', function(){
	lang = 'eng';
	clear();
	ruSwitcher.style.backgroundColor = 'white';
	ruSwitcher.style.color = 'black';
	engSwitcher.style.backgroundColor = 'black';
	engSwitcher.style.color = 'white';
	render();
});

ruSwitcher = document.querySelector('.ru');
ruSwitcher.addEventListener('click', function(){
	lang = 'ru';
	clear();
	engSwitcher.style.backgroundColor = 'white';
	engSwitcher.style.color = 'black';
	ruSwitcher.style.backgroundColor = 'black';
	ruSwitcher.style.color = 'white';
	render();
});

socialContainer = document.querySelector('.social');
otherSocialContainer = document.querySelector('.other-social');


function clear(){
	socialContainer.innerHTML = '';
	otherSocialContainer.innerHTML = '';
}
                                              
/*
*adds card to current container
*/
function addCard(card,  container){
	container.innerHTML +=  '<div class="col-md-'+ Math.trunc(12/cellCount) +'">' + 
								'<div class="card">' + 
									'<div class="card-header">' + 
										card.name + 
									'</div>' +
									'<div class="card-img">' + 
										'<img class="card-img-left" src="'+ card.image +'" alt="Здесь могла быть ваша реклама">' + 
									'</div>' + 
									'<div class="card-body">' + 
										'<div class="card-link">' + 
											'<a href="' + card.link + '">' + card.nickname + '</a>' + 
										'</div>' + 
										'<span class="response-time">' + ((lang == 'ru') ? (card.responseTime.ru) : (card.responseTime.en)) + '</span>' + 
										'<div class="card-comment">' + 
											((lang =='ru') ? (card.comment.ru) : (card.comment.en)) + 
										'</div>' + 
									'</div>'+
								'</div>' + 
							'</div>'; 


}

//render all cards to containers
function render(){
	socialContainer.innerHTML = '<h1>' + ((lang == 'ru') ? (localization.socialTitle.ru) : (localization.socialTitle.en)) + '</h1>' +
								'<div class="row"></div>';
	otherSocialContainer.innerHTML = '<h1>' + ((lang == 'ru') ? (localization.otherSocialTitle.ru) : (localization.otherSocialTitle.en)) + '</h1>' +
									 '<div class="row"></div>';	

	socialNetworks.forEach(function(item){
		addCard(item, socialContainer.querySelector('.row'));
	});

	otherSocial.forEach(function(item){
		addCard(item, otherSocialContainer.querySelector('.row'));
	});
}


document.addEventListener('DOMContentLoaded', function(){
	//default lang
	cellCount = 2;
	engSwitcher.click();
});
