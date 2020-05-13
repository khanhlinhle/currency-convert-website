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
        `You have: 500k: ${result.m500} tờ  & 
                200k: ${result.m200} tờ & 
                100k: ${result.m100} tờ &
                50k: ${result.m50} tờ &
                20k: ${result.m20} tờ &
                10k: ${result.m10} tờ &
                5k: ${result.m5} tờ &
                2k: ${result.m2} tờ &
                1K: ${result.m1} tờ`;
}