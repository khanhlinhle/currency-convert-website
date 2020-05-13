// define an array
const moneyTypeArray = [500, 200, 100, 50, 20, 10, 5, 2, 1]

// define an Object
let result = {
    m500: 0, //this is property name = m500, value = 0
    m200: 0,
    m100: 0,
    m50: 0,
    m20: 0,
    m10: 0,
    m5: 0,
    m2: 0,
    m1: 0
};

function exchange() {

    let exchangeAmount = document.getElementById("inputCoinChange").value;

    for (let i = 0; i < result.length; i++) {
        result[i] = 0;
    }

    while (exchangeAmount > 0) {
        for (let i = 0; i < moneyTypeArray.length; i++) {
            const moneyType = moneyTypeArray[i];
            if (exchangeAmount >= moneyType) {
                result["m" + moneyType] = result["m" + moneyType] + 1;
                exchangeAmount = exchangeAmount - moneyType;
                break;
            }
        }
    }

    document.getElementById("resultCoinChange").innerHTML =
        `You have: ${result.m500} 500k and 
                ${result.m200} 200k and 
                ${result.m100} 100k and
                ${result.m50} 50k and
                ${result.m20} 20k and
                ${result.m10} 10k and
                ${result.m5} 5k and
                ${result.m2} 2k and
                ${result.m1} 1k and`;
}