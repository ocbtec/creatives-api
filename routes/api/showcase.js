const express = require('express');

//Get the work Schema
const Work = require('../../models/Works');

//Get the categories Schema
const Creative = require('../../models/Creatives');

//Create the router handler
const router = express.Router();

//...............................................................................................................................

//@route   GET api/showcase
//@desc    Get showcase results
//@access  Public

router.get(
  '/showcase',

  async (req, res) => {
    try {
      const creativesCollection = await Creative.aggregate([
        { $limit: 3 },
        {
          $lookup: {
            from: 'works',
            as: 'works',
            let: {
              id: '$_id'
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$$id', '$user']
                  }
                }
              }
            ]
          }
        },
        {
          $match: {
            'works.0': { $exists: true },
            'works.4': { $exists: false }
          }
        }
      ]);

      res.json(creativesCollection);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
