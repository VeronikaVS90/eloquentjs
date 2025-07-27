// Sample SCRIPTS array with only a couple of scripts
const SCRIPTS = [
  {
    name: "Latin",
    ranges: [[65, 91], [97, 123]],
    direction: "ltr",
  },
  {
    name: "Arabic",
    ranges: [[1536, 1541], [1569, 1610]],
    direction: "rtl",
  },
];

// Helper: find which script a code belongs to
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

// Helper: group items and count
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    if (name != null) {
      let known = counts.find(c => c.name === name);
      if (known) {
        known.count++;
      } else {
        counts.push({ name: name, count: 1 });
      }
    }
  }
  return counts;
}

// Main function
function dominantDirection(text) {
  let directions = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : null;
  });

  if (directions.length === 0) return "ltr";

  return directions.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

// Test examples
console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl
