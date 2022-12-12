// ./length.ts
var unitsLength = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convertLength(value, fromUnit, toUnit) {
    var fromIndex = unitsLength.indexOf(fromUnit);
    var toIndex = unitsLength.indexOf(toUnit);
    var exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
