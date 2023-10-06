const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

console.log("hello");
const start = async () => {
  try {
    console.log("new line");
    const first = await getText("./test/text.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();

console.log("check");
