const HashMap = require("./hashmap");

function main() {
  const lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
}
