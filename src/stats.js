const os = require('os');
const moment = require('moment');

const SEPARATOR = '<br/>====================================<br/><br/>';

class Stats {
    constructor() {
        this.stats = new Map();
    }

    increment(stat, count = 1) {
        let currentStat = this.stats.get(stat)

        if (typeof currentStat === 'undefined') {
            currentStat = 0;
        }

        this.stats.set(stat, currentStat + count);
    }

    toHtml() {
        const date = moment().format('HH:mm:ss DD/MM/YY');
        const metrics = Array.from(this.stats.entries())
            .map(([key, value]) => `${key}: ${value}`)
            .join('<br />');
        
        return `<u>${date}</u><br/>${metrics}${SEPARATOR}`
    }

    toString() {
        return Array.from(this.stats.entries()).map(([key, value]) => `${key}: ${value}`).join(os.EOL);
    }
}

module.exports = Stats;