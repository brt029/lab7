var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects['viewAlt'] = false;
  	response.render('index', projects);
};

exports.viewAlt = function(request, response){
	projects['viewAlt'] = true;
	response.render('index', projects);
};

function initializePage() {
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn() {
	e.preventDefault();
	ga('create', 'UA-158839153-1', 'auto');
	ga("send", "event", 'like', 'click');
}
