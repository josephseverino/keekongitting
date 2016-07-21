angular.module('CrimeApp')
	.controller('crimeWaveController', [
		'crimeWaveFactory',
		CrimeTroller
	])


function CrimeTroller (crimeWaveFactory) {
	var cwCtrl = this;


	
	
	

	crimeWaveFactory.getCrime().then(function(response){
		
		//console.log('Reponse from server!', response)
		var array = [];
		for(var i = 0; i < response.data.length; i++){
			array.push(response.data[i].address)
			
			
			
			}
	
	console.log( array)

		

		

	})
	console.log('After we get the Crime data')

	cwCtrl.clickHandler = function(){
		
	}
	
	

}
