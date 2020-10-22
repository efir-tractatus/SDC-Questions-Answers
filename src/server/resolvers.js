const db = require('../db/index.js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports.resolvers = {
  Query: {
    getAllQuestions: () => db.Question.find(),
    getQuestions: (context, args) => db.Question.find(args),
    getQuestion: (context, args) => db.Question.find(args),
    getAllAnswers: () => db.Answer.find(),
    getAnswers: (context, args) => db.Answer.find(args),
    getAnswer: (context, args) => db.Answer.find(args),
  },
  Question: {
    answers: (context) => {
      return db.Answer.find({ question_id: context._id });
    },
  },
  Mutation: {
    createQuestion: (context, { product_id, body, date, name, email }) => {
      let _id = new ObjectId();
      console.log('New ID', _id);
      let docObject = {
        _id: _id,
        product_id: product_id,
        body: body,
        date: date,
        name: name,
        email: email,
        reported: false,
        helpful: 0,
      };
      return db.Question.create(docObject)
        .then((result) => {
          console.log('Result', result);
        })
        .catch((error) => console.log('<-------------------Error---------------------->:', error));
    },
    createAnswer: (context, { question_id, body, date, name, email }) => {
      let _id = new ObjectId();
      console.log('New ID', _id);
      let docObject = {
        _id: _id,
        question_id: question_id,
        body: body,
        date: date,
        name: name,
        email: email,
        reported: false,
        helpful: 0,
        photos: []
      };
      return db.Answer.create(docObject)
        .then((result) => {
          console.log('Result', result);
        })
        .catch((error) => console.log('<-------------------Error---------------------->:', error));
    }, 
    deleteAnswer: (context, [..._id]) => {
      console.log('Passing', _id);
      db.Answer.findByIdAndDelete(_id)
        .then((result) => {
          console.log('Returning', result);
        })
        .catch((error) => console.log('<-------------------Error---------------------->:', error));
    },
    deleteQuestion: (context, _id) => {
      console.log('Passing to Delete Question', _id);
      db.Question.findByIdAndDelete(_id)
        .then((result) => {
          console.log('Returning', result);
        })
        .catch((error) => console.log('<-------------------Error---------------------->:', error));

      db.Answer.deleteMany({ question_id: _id })
        .then((result) => {
          console.log('Returning', result);
        })
        .catch((error) => console.log('<-------------------Error---------------------->:', error));
    },
  },
};
