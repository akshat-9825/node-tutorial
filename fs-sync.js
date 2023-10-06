const { readFileSync, writeFileSync } = require("fs");

const text = readFileSync("test/text.txt", "utf8");

console.log(text);

writeFileSync("./test/result.txt", `Here is the result ${text}`, {
  flag: "a",
});
