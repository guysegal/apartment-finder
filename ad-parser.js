var moment = require('moment');

module.exports = rawJson => {
  return {
    id: rawJson.RecordID,
    source: rawJson.source,
    city: rawJson.Line1.split('-')[0].trim(),
    address: (rawJson.Line1.split('-')[1] || '').trim().replace('\"', ''),
    roomCount: rawJson.Line2.split(' ')[2],
    price: rawJson.Line3.match(/\d+/g).join(''),
    publishDate: moment(rawJson.Line4, 'DD-MM-YYYY'),
    publishDateString: moment(rawJson.Line4, 'DD-MM-YYYY').format('DD/MM'),
    picture: rawJson.img,
    location: {
      latitude: rawJson.latitude,
      longitude: rawJson.longitude,
    },
    originalAdUrl: rawJson.URL
}};