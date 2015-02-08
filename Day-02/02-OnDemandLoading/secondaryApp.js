define(['util'], function(utils){
	console.log("from secondary app", utils.initTime);
	return {
		init : function(){
			console.log("secondary application is initialized");
		}
	}
});