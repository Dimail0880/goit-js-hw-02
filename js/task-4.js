const formatString = function(string) {
    let moderatedString;
    if (string.length < 40) {
        moderatedString = string;
    } else {
        let cutedString = string.split("", 40);
        cutedString.push("...");

        moderatedString = cutedString.join("");
    }
    return moderatedString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
    formatString(
        "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
);
// вернется форматированная строка