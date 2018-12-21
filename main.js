var shortenString = (defString) => {
  var firstFive = 5;
  var lastFive = 7;
  var orgStringLength = defString.length;
  var newstringStart = defString.substring(0, firstFive); // do your magic here
  var newstringLast = defString.substring(
    orgStringLength - lastFive,
    orgStringLength
  ); // do your magic here

  var result = newstringStart + "..." + newstringLast;

  return result;
};

console.log(shortenString ("antifoulweaghjkghjkghjkghjkther.auewsonline.com"));
