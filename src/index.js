// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
/*
    let result = {};

    if(currency <= 0) {
        return result;
    }

    if(currency > 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }

    coins.H=Math.floor(currency/50);
    currency=currency%50
    coins.Q=Math.floor(currency/25)
    currency=currency%25;
    coins.D=Math.floor(currency/10)
    currency=currency%10;
    coins.N=Math.floor(currency/5)
    currency=currency%5;
    coins.P=Math.floor(currency/1);

    for(var key in coins){
        if(coins[key]==0){
            delete coins[key];
        }
    }

    return coins
*/
    let result = {};

    if(currency <= 0) {
        return result;
    }

    if(currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }

    result = {
        H: Math.floor(currency / 50),

        Q: Math.floor(currency % 50 / 25),

        D: Math.floor(currency % 50 % 25 / 10),

        N: Math.floor(currency % 50 % 25 % 10 / 5),

        P: Math.floor(currency % 50 % 25 % 10 % 5),
    }

    for(let key in result) {
        if(result[key]==0) {
            delete result[key];
        }
    }
    
    return result;

}
