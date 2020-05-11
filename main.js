const currencyRatio = {
    USD: 1,
    VND: 23400.50,
    KRW: 1223.85,
    IDR: 14925.05,
    EUR: 0.93
}

let strAmount;
while (!parseInt(strAmount)) {
    strAmount = prompt("How much amount you want to convert?");
}

const amount = parseInt(strAmount);
const from = prompt("Which currency do you have?");
const to = prompt("Which currency do you have?");

if (!currencyRatio[from] || !currencyRatio[to]) {
    console.log("Unsupported currency!!!");

} else if (currencyRatio[from] && currencyRatio[to]) {
    // VND= 50000 / VNDratio(23000)
    // USD= 2 * EURratio(0.93)
    // ===>  result = amount / fromratio * toratio

    const result = amount / currencyRatio[from] * currencyRatio[to];
    console.log(from, "to", to, "is", formatCurrency(to, result));
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value)
}