const db = require('../../db/index.js');

module.exports = {
  retrieve: function (product_id) {
    if (!product_id) {
      return db.Question.find().limit(25)
    }
    return db.Question.find({ product_id: product_id });
  },
  save: function (question_id, questionObj) {
    return db.Question.findOneAndUpdate({ id: question_id }, questionObj, {
      upsert: true,
    });
  },
  delete: function (question_id) {
    return db.Question.findOneAndDelete({ id: question_id });
  },
};
