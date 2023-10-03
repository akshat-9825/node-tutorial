const { readFile, writeFile } = require("fs");

readFile("./test/result.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    const first = result;
    readFile("./test/text.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const second = result;
        writeFile(
          "./test/new_result.txt",
          `Here is the result: ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          }
        );
      }
    });
  }
});
