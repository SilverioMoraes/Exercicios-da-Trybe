// ./mass.ts
var unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertMass(value, fromUnit, toUnit) {
  var fromIndex = unitsMass.indexOf(fromUnit);
  var toIndex = unitsMass.indexOf(toUnit);
  var exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
}
console.log(convertMass(30, 'g', 'kg'));
