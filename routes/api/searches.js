const express = require('express');

//Get the work Schema
const Work = require('../../models/Works');

//Get the categories Schema
const Creative = require('../../models/Creatives');

//Create the router handler
const router = express.Router();

//...............................................................................................................................

//@route   GET api/search
//@desc    Get search results
//@access  Public

router.get(
  '/search',

  async (req, res) => {
    //De-structure body
    const { test, categories, city, text, tags } = req.body;

    //If the user has selected to search by creator. Get all creators and all the associated works.
    try {
      const workCollection = await Work.aggregate([
        {
          $lookup: {
            from: 'creatives',
            localField: 'user',
            foreignField: '_id',
            as: 'creator'
          }
        }
      ]);

      res.json(workCollection);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;