const fs = require('fs');
const csv = require('csv');

const csvFile = fs.readFileSync('../../generative-watches/gw-test-aug-18/gw-first-179.csv')

csv.parse(csvFile, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  const sanitize = (str) => {
    const sanitized = str.replace(/[\[\]\",]/ig, '').trim()
    return sanitized && sanitized[0].toUpperCase() + sanitized.substring(1);
  }

  for (let i = 1; i <= 178; i += 1) {
    let tokenNum = i;

    const model = sanitize(data[i][15]);
    const modelNum = sanitize(data[i][16]);
    const attributeValues = [
      ['Model', model],
      ['Rank', sanitize(data[i][17])],
      ['Race', sanitize(data[i][18])],
      ['Arm Rank', sanitize(data[i][19])],
      ['Center Material', sanitize(data[i][20])],
      ['Body Material', sanitize(data[i][21])],
      ['Material Type', sanitize(data[i][22])],
      ['Metal Finish', sanitize(data[i][23])],
      ['Center Color', sanitize(data[i][24])],
      ['Body Color', sanitize(data[i][25])],
      ['Dial Color', sanitize(data[i][26])],
      ['Dial Graphic', sanitize(data[i][27])]
    ];

    if (i >= 101 && i <= 103) {
      tokenNum += (1000000 - 100)
    }

    if (i > 103) {
      tokenNum -= 3;
    }

    let description

    const token = {
      name: `${model} ${modelNum}`,
      description: "Generative watch",
      image: `https://tokens.generativewatches.com/images/${tokenNum}.jpg`,
      animation_url: `https://tokens.generativewatches.com/images/${tokenNum}.mp4`,
      attributes: [],
    };

    attributeValues.forEach(attr => {
      if (attr[1] && attr[1].length) {
        token.attributes.push({
          trait_type: attr[0],
          value: attr[1]
        });
      }
    });

    fs.writeFileSync(`../../generative-watches/gw-test-aug-18/tokens/${tokenNum}.json`, JSON.stringify(token, null, 2))
  }
})