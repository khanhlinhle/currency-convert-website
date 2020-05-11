let amount = prompt("How much amount you want to convert?")

let from = prompt("Which currency do you have?")

let to = prompt("Which currency do you have?")

let currencyRatio = 23161.39

let result = 0

if (from === "USD" && to === "VND") {
    result = USDToVND()
} else if (from === "VND" && to === "USD") {
    result = VNDToUSD
} else {
    console.log("You choose the wrong currency")
}

function USDToVND() {
    return amount * currencyRatio

}

function VNDToUSD() {
    return amount / currencyRatio
}

console.log(from, "to", to, "is", result)

// function formatCurrency(type, value) {
//     const formatter = new Intl.NumberFormat(type, {
//         currency: type,
//         style: "currency"
//     });
//     return formatter.format(value)

// }