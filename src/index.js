module.exports = function toReadable (number) {   
    let primes = ['zero', 'one', 'two','three', 'four','five', 'six', 'seven', 'eight','nine'];
    let teen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let ty = ['','', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];    
    let str = number.toString();
    if (number < 10) {        
        return primes[number];
    };

    if (number < 20 && number >= 10) {        
        return teen[number % 10];
    };
 
    if (number < 100 && number >= 20) {    
        if(str[1] === "0") {
            return ty[str[0]];
        } return ty[str[0]] +' '+ primes[str[1]];
        
    };
     
    if (number >= 100) {  
        if(str[1] === "0" && str[2] === "0") {
            return primes[str[0]] +' hundred';
        } else if (str[1] === "0") {
            return primes[str[0]] + ' hundred '+ primes[str[2]];  
        }  else if (str[2] === "0" && str[1] != "1") {
            return primes[str[0]] + ' hundred '+ ty[str[1]];   
        }  else if (str[1] === "1") {
            return primes[str[0]] + ' hundred '+ teen[str[2]];   
        } return primes[str[0]] + ' hundred'+' '+ ty[str[1]] +' '+ primes[str[2]];    
    };
}
