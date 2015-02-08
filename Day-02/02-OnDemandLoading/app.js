define(['util'], function(util){
	console.log("App init time = ", util.initTime);
	return {
		start : function(){
			$("#btnLoadScript").click(function(){
				require(['secondaryApp'], function(secondaryApp){
					secondaryApp.init();
				});
			});
		}
	}
});