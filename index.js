const { XMLParser } = require("fast-xml-parser");

const parser = new XMLParser();
const obj = parser.parse(`
    <math>
        <variable>x</variable>
        <operation><=</operation>
        <value>10</value>
    </math>
`);

console.log(obj)