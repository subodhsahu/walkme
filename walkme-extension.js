$(document).ready(function() {
    tableau.extensions.initializeAsync().then(function() {
		var dashboard = tableau.extensions.dashboardContent.dashboard;
		console.log('Initialization Successful');
    }, function(err) {
		console.log('Error while Initializing: ' + err.toString());
    });
});
