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



function exchange(amount) {
    // reset all money count to 0
    for (let i = 0; i < result.length; i++) {
        result[i] = 0;
    }
    // change coin
    const amount = document.getElementById("inphutCoinChange");
    while (amount > 0) {
        for (let i = 0; i < moneyTypeArray.length; i++) {
            const moneyType = moneyTypeArray[i];
            if (amount >= moneyType) {
                result["m" + moneyType] = result["m" + moneyType] + 1;
                amount = amount - moneyType;
                break;
            }
        }
    }

    return result;
}
// document.getElementById("result").innerHTML 

// example
let rs = exchange(599);
console.log("rs");
console.log("Số tờ 500 là " + rs.m500);
console.log("Số tờ 200 là " + rs.m200);
console.log("Số tờ 100 là " + rs.m100);
console.log("Số tờ 100 là " + rs.m50);
console.log("Số tờ 100 là " + rs.m20);
console.log("Số tờ 100 là " + rs.m10);
console.log("Số tờ 100 là " + rs.m5);
console.log("Số tờ 100 là " + rs.m2);
console.log("Số tờ 100 là " + rs.m1);
// same with line 26
// ...
// end of example