const distance = require('../service/distance');

const controllers = {
  get_distance: function(req, res) {
          distance.find(req, res, function(err, dist) {
              if (err)
                  res.send(err);
              res.json(dist);
          });
      },
};

module.exports = controllers;
