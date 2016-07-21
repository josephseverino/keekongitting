angular.module('CrimeApp')
	.factory('crimeWaveFactory', [
		'$http',
		crimeStats
	])

function crimeStats ($http) {

			
	return {
		

	
			
			
			
	
		
		
		
		getCrime : function(){
			return $http.get('https://data.kcmo.org/resource/nsn9-g8a4.json')
		
		}
	
	}
}
