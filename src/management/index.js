const express = require('express');

const app = express();

let stats = '';

app.get('/', (req, res) => {
    res.send(stats);
});

app.listen(5000, () => console.log('Started listening on port 5000'));

module.exports = {
    updateStats(newStats) {
        stats = newStats;
    },
}