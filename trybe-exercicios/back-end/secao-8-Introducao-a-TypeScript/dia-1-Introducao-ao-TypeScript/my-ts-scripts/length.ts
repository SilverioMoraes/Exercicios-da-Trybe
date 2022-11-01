// ./length.ts

const unitsLength = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertLength(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitsLength.indexOf(fromUnit);
    const toIndex = unitsLength.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
