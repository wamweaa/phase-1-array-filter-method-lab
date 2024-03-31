// Code your solution here
function findMatching(names, query) {
    return names.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === query.toLowerCase()
    );
  }
  function findMatching(names, query) {
    return names.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === query.toLowerCase()
    );
  }
  
  function fuzzyMatch(names, testString) {
    return names.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }