const db = require('../../db/connection');
const fs = require('fs').promises;

exports.contentsModel = () => {
  return fs.readFile(`${__dirname}/../endpointsList.json`, 'utf8');
};
