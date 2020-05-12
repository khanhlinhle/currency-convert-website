// list moneyType
//  500k
//  200k
//  100k
//  50k
//  20k
//  10k
//  5k
//  2k
//  1k

let moneyTypeArray = [
    500, 200, 100, 50, 20, 10, 5, 2, 1
]

let result = {
    500: 0,
    200: 0,
}

function exchange(amount) {
    while (amount >= 0) {
        for (let i = 0; i < moneyTypeArray.length; i++) {
            const moneyType = moneyTypeArray[i];
            if (amount >= moneyType) {
                console.log(moneyType);
                amount = amount - moneyType;
                break;
            }
        }
    }
}

console.log(exchange())