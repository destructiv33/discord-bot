const { trucks } = require('../../data/data')
const truckByComand = (value) => trucks.find ((trucks) => trucks.comandValue === value);


module.exports = {
    truckByComand,
}