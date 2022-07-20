import fs from 'fs'

export default async (req, res) => {
  await new Promise((resolve, reject) =>
    fs.readFile('data/houses.json', function(err, data) {
      var json = JSON.parse(data);
      res.status(200).json(json);
      resolve(res);
    }));

}
