const request = require('request');
const fs = require('fs');
let URL = process.argv[2];
let localFilePath = process.argv[3];

const content = function() {
  request(URL, (error, response, body) => {
    // console.log('error', error);
    // console.log('statusCode', response && response.statusCode);
    // console.log('body', body);

    fs.writeFile(localFilePath, body, err => {
      if (err) {
        console.error(err);
      }
    });
  });
};

content();