const fs = require("fs");

console.log("[PoC] check.js executed");

// Prove attacker content is reachable
const files = fs.readdirSync("content/poc");
console.log("[PoC] Content files:", files);
