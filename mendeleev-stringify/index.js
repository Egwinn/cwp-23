const mendeleev = require('mendeleev');

module.exports = (element) => {
    let elem = mendeleev(element);
    if (elem) {
        return elem.number + '. ' +  elem.name + ' / ' + elem.weight;
    }
    else throw new Error('Element does not exits');
};