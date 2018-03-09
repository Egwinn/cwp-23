const elements = {
    'H': {
        name: 'Hydrogen',
        number: 1,
        weight: 1.008,
    },
    'HE': {
        name: 'Helium',
        number: 2,
        weight: 4.003,
    },
    'LI': {
        name: 'Lithium',
        number: 3,
        weight: 6.941
    },
    'BE': {
        name: 'Berylium',
        number: 4,
        weight: 9.012
    },
    'B': {
        name: 'Boron',
        number: 5,
        weight: 10.811
    }
};

module.exports = (element) => {
    if (element) {
        return elements[element.toUpperCase()] || null;
    }
    else throw new Error('element is undefined');
};