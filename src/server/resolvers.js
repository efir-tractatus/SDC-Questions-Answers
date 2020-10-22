const { response } = require('express');
const db = require('../db/index.js');

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
    answers: (root) => {
      return db.Answer.find({ question_id: root._id });
    },
  },
  // Mutation:{
  //     createUpdateQuestion: (context, {id, product_id, body, date, name, email, reported, helpful}) => {
  //         db.Question.findOneAndUpdate({id: id}, {})
  //     }
  // }
};

//       id: Float!
//       product_id: Float!
//       body: String
//       date: String
//       name: String
//       email: String
//       reported: Boolean
//       helpful: Float
