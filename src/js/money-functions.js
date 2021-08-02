const formatCurrency = (amount) => {
    var num = amount.toFixed(2);
    if(num >= 0){
        return `$${num}`
    }else{
        num = num.substring(1);
        return `-$${num}`
    }
}

const getCoins = (cents) => {
    quarters = Math.floor(cents / 25);
    cents = cents % 25;
    dimes = Math.floor(cents / 10);
    cents = cents % 10;
    nickles = Math.floor(cents / 5);
    cents = cents % 5;
    pennies = Math.floor(cents / 1);
    cents = cents % 1;
    return {
        quarters: quarters,
        dimes: dimes,
        nickels: nickles,
        pennies: pennies
    }
}

module.exports = {formatCurrency, getCoins};