const { phones, supplierNames } = require("./phones.js");
const { writeFileSync } = require("fs");
const { nanoid } = require("nanoid");

console.log(phones);
const data = [];

for (const phoneBrands in phones) {
    const brandPhones = [];
    phones[phoneBrands]?.map((phone) => {
        const temp = {};
        temp.id = nanoid();
        temp.name = phone.name;
        temp.images = phone.images;
        temp.quantity = Math.round(Math.random() * 100);
        temp.price = Math.round(Math.random() * 10000);
        temp.supplierName =
            supplierNames[Math.round(Math.random() * supplierNames.length)];
        temp.description = phone.description.split(",");
        brandPhones.push(temp);
    });
    data.push({ [phoneBrands]: brandPhones });
}

console.log(data);

try {
    writeFileSync("./data.json", JSON.stringify(data, null, 2), "utf8");
    console.log("Data successfully saved to disk");
} catch (error) {
    console.log("An error has occurred ", error);
}

console.log(data);
