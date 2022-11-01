// ./length.ts
var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value, fromUnit, toUnit) {
  var fromIndex = units.indexOf(fromUnit);
  var toIndex = units.indexOf(toUnit);
  var exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
}
console.log(convert(30, 'km', 'dam'));
