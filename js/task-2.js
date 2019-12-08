const calculateEngravingPrice = function(message, pricePerWord) {
    let totalPrice;
    message = message.split(" ");
    for (let totalPrice of message) {
        totalPrice = message.length * pricePerWord;
        return totalPrice;
    }
};

console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        10
    )
); // 80

console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        20
    )
); // 160

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100