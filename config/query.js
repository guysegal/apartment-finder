const moment = require('moment');

const parseIsraelDate = x => moment(x, 'DD/MM/YYYY');

module.exports = {
    areas: [
        {
            labels: ["ליד קלייר"],
            points: [
                {latitude: 32.070829, longitude: 34.799817},
                {latitude: 32.069902, longitude: 34.802392},
                {latitude: 32.065974, longitude: 34.802778},
                {latitude: 32.065938, longitude: 34.799216}
            ],
        },
        {
            labels: ["שדרות ההשכלה"],
            points: [
                {latitude: 32.071411, longitude: 34.797778},
                {latitude: 32.064810, longitude: 34.796448},
                {latitude: 32.064974, longitude: 34.798915},
                {latitude: 32.070884, longitude: 34.799817}
            ],
        },  
        {
            labels: ["גבעתיים מערב"],
            points: [
                {latitude: 32.071375, longitude: 34.801877},
                {latitude: 32.071920, longitude: 34.807820},
                {latitude: 32.066538, longitude: 34.807842},
                {latitude: 32.066210, longitude: 34.802907}
            ],
        },
        {
            labels: ["יד אליהו דרום"],
            points: [
                {latitude: 32.064101, longitude: 34.792457},
                {latitude: 32.063374, longitude: 34.803486},
                {latitude: 32.059482, longitude: 34.803915},
                {latitude: 32.059446, longitude: 34.792242}
            ],
        },                     
    ],
    minimumEntranceDate: parseIsraelDate('01/01/2018'),
    apartment: {
        cat: 2,
        subcat: 2,
        fromPrice: 0,
        toPrice: 10000,
        //city: 1800,
        fromRooms: 3,
        toRooms: 5,
        fromSquareMeter: 0,
        toSquareMeter: 500,

        // Only add the filters you actually need. 0 = false, 1 = true, commented out = whatever
        // parking: 1,
        // elevator: 1,
        airConditioner: 1,
        // bars: 1,
        // shelter: 1,
        // renovated: 1,
        // balcony: 1,
        // sunProch: 1,
        // warhouse: 1,
        // accessibility: 1,
        // Immediate: 1,
        // furniture: 1,
        // pandorDoors: 1,
        // pets: 1,
        // forPartners: 1,
        // longTerm: 1,
        // priceOnly: 1,
        imgOnly: 1,
    },
};
