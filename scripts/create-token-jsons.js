const fs = require('fs');
const csv = require('csv');

const csvFile = fs.readFileSync('../../generative-watches/gw-test-aug-18/gw-first-100.csv')

csv.parse(csvFile, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  for (let i = 48; i < 55; i += 1) {
    const tokenNum = i - 47;


    const token = {
      name: `Test Watch #${tokenNum}`,
      description: "Some description here",
      image: `ipfs://QmazhdbpRo3Zq6nthmTUtYS7Us1MTVZwSZCf6bLs1nAGjh/${tokenNum}.gif`,
      attributes: [
        {
          trait_type: 'Rank',
          value: data[i][0]
        },
        {
          trait_type: 'Race',
          value: data[i][1]
        },
        {
          trait_type: 'Material',
          value: data[i][3]
        },
        {
          trait_type: 'Center Color',
          value: data[i][8]
        },
      ],
    };

    fs.writeFileSync(`../../generative-watches/gw-test-aug-18/tokens/${tokenNum}.json`, JSON.stringify(token, null, 2))
  }
})