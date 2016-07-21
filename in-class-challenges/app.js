angular.module('Chuckuthon',[])


angular.module('Chuckuthon')
    .controller('ChuckingAwesomeController',ChuckingAwesome)
    .factory('ChuckFactory',ChuckFactory)
    
    
    ChuckingAwesome.$inject = ['ChuckFactory']
    ChuckFactory.$inject=['$http']
    
    function ChuckingAwesome(ChuckFactory){
        var chuck = this;
        chuck.title="Time waits for no man. Unless that man is Chuck Norris."
        chuck.quote=""
        
        
        
       
        
        console.log('Controller is good')
        
        chuck.clickitySplit =function() {
             ChuckFactory.getRandomQuote()
            .then(function(res){
                console.debug('getRandomQuote:',res)
                var data = res.data || {}
                    value = data.value ||{}
                    joke = value.joke || ''
                    
                    
                
                //res.data
            }, function(error){
                console.log('ERROR:could not get api response' )
                chuck.value = joke || ':( sad face no joke found'
            })
        }
    }
    
    function ChuckFactory($http){
        console.log('factory is sweet')
        
        return{
            getRandomQuote: function(){
                return $http.get('http://api.icndb.com/jokes/random')
            }
        }
    }