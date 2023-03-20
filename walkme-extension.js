$(document).ready(function() {
    tableau.extensions.initializeAsync().then(function() {
	var dashboard = tableau.extensions.dashboardContent.dashboard;
	console.log('Walkme Extension Initialization Successful');
	/*
	tableau.extensions.dashboardContent.dashboard.objects.forEach(function(object){
        	console.log(object.name + ":" + object.type + ":" + object.id + ":" + object.isVisible);
        });*/
    }, function(err) {
		console.log('Error while Initializing: ' + err.toString());
    });
});
