const db = require('../../db/index.js');

module.exports = {
  retrieve: function (question_id) {
    return db.Answer.find({ question_id: question_id });
  },
  save: function (answer_id, answerObj) {
    return db.Answer.findOneAndUpdate({ id: answer_id }, answerObj, {
      upsert: true,
    });
  },
  delete: function (question_id) {
    return db.Answer.findOneAndDelete({ id: answer_id });
  },
};
