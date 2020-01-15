// Purpose of this tool is to turn company names into domains then print a CSV
const axios = require("axios");
const csv = require("csvtojson");
const stringify = require("csv-stringify");
const fs = require("fs");

// Clearbit Key
const key = "sk_34443bb634121a25de117cbce5f4d1e4";

// CSV File
const companyList = "./companyList.csv";

async function findDomain(company) {
  return await axios
    .get(`https://company.clearbit.com/v1/domains/find?name=${company}`, {
      headers: {
        Authorization: `Bearer ${key}`
      }
    })
    .then(res => {
      console.log(`Domain Found for ${company}`);
      return res.data;
    })
    .catch(e => console.log(`No domain found for ${company}`));
}

async function createColumns(data, keys) {
  let value = {};
  await keys.forEach(item => {
    value[item] = item;
  });

  printCSV(data, value);
}

async function printCSV(data, columns) {
  console.log("Start Printing....");
  stringify(data, { headers: true, columns: columns }, (err, output) => {
    if (err) throw err;
    fs.writeFile("out.csv", output, err => {
      if (err) throw err;
      console.log("CSV Printed");
    });
  });
}

async function createCSV() {
  await csv()
    .fromFile(companyList)
    .then(async d => {
      const arr = [];

      await d.forEach(async (item, index) => {
        await setTimeout(async () => {
          const search = await findDomain(item.Company)
            .then(data => data)
            .catch(e => e);
          // if (search === null) {
          //   item.Website = "";
          //   item.Logo = "";
          //   item.Other = "";

          //   arr.push(item);
          // } else {
          //   console.log(search);
          //   if (search.domain) {
          //     item.Website = search.domain;
          //   } else {
          //     item.Website = "";
          //   }
          //   if (search.name) {
          //     item.Other = search.name;
          //   } else {
          //     item.Other = "";
          //   }

          //   if (search.logo) {
          //     item.Logo = search.logo;
          //   } else {
          //     item.Logo = "";
          //   }

          if (search) {
            item.Website = search.domain;
            item.Other = search.name;
            item.Logo = search.logo;
          } else {
            item.Website = "";
            item.Other = "";
            item.Logo = "";
          }

          arr.push(item);

          if (index === d.length - 1) {
            createColumns(arr, Object.keys(item));
          }

          return Promise.resolve();
        }, index * 500);
      });
    });
}

// Start
createCSV();
