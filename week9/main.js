function toUpper(string) {
    return string.toUpperCase();

}
const cats = ["Leopard", "Serval", "Jaguar", "Caracal", "Lion"];
const upperCAts = cats.map(toUpper);
console.log(upperCAts);