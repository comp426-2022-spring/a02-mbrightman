import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url)
const args = require('minimist')(process.argv.slice(2))
const number = args['number']

var coinsArray = coinFlips(number)
var coinsSummary = countFlips(coinsArray)

console.log(coinsArray)
console.log(coinsSummary)