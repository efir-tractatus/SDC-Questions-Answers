const db = require('../db/index.js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports.resolvers = {
  Query: {
    getAllQuestions: () => db.Question.find(),
    getQuestions: (parent, args, context) => db.Question.find(args),
    getQuestion: (parent, args, context) => db.Question.find(args),
    getAllAnswers: () => db.Answer.find(),
    getAnswers: (parent, args, context) => db.Answer.find(args),
    getAnswer: (parent, args, context) => db.Answer.find(args),
  },
  Question: {
    answers: (root) => {
      return db.Answer.find({ question_id: root._id });
    },
  },
  Mutation: {
    createQuestion: (
      parent,
      { product_id, body, date, name, email },
      context
    ) => {
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
          return result;
        })
        .catch((error) =>
          console.log(
            '<-------------------Error---------------------->:',
            error
          )
        );
    },
    createAnswer: (
      parent,
      { question_id, body, date, name, email },
      context
    ) => {
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
        photos: [],
      };
      return db.Answer.create(docObject)
        .then((result) => {
          console.log('Result', result);
          return result;
        })
        .catch((error) =>
          console.log(
            '<-------------------Error---------------------->:',
            error
          )
        );
    },

    updateQuestion: (
      _parent,
      { _id, body, name, email, date, helpful, reported },
      context
    ) => {
      if (!_id) {
        return console.log('Error: No ID');
      }
      let docObject = {
        body: body,
        date: date,
        name: name,
        email: email,
        helpful: helpful,
        reported: reported,
      };
      db.Question.findByIdAndUpdate(_id, docObject, { new: true })
        .then((result) => {
          console.log('Result', result);
          return result;
        })
        .catch((error) =>
          console.log(
            '<-------------------Error---------------------->:',
            error
          )
        );
    },

    updateAnswer: (
      parent,
      { _id, body, name, email, date, helpful, reported, photos },
      context
    ) => {
      if (!_id) {
        return console.log('Error: No ID');
      }
      let docObject = {
        body: body,
        date: date,
        name: name,
        email: email,
        helpful: helpful,
        reported: reported,
        photos: photos,
      };
      db.Answer.findByIdAndUpdate(_id, docObject, { new: true })
        .then((result) => {
          console.log('Result', result);
          return result;
        })
        .catch((error) =>
          console.log(
            '<-------------------Error---------------------->:',
            error
          )
        );
    },

    deleteAnswer: (parent, _id, context) => {
      console.log('Passing', _id);
      db.Answer.findByIdAndDelete(_id)
        .then((result) => {
          console.log('Returning', result);
          return result;
        })
        .catch((error) =>
          console.log(
            '<-------------------Error---------------------->:',
            error
          )
        );
    },
    deleteQuestion: (parent, _id, context) => {
      console.log('Passing to Delete Question', _id);
      db.Question.findByIdAndDelete(_id)
        .then((result) => {
          console.log('Returning', result);
          return result;
        })
        .catch((error) =>
          console.log(
            '<-------------------Error---------------------->:',
            error
          )
        );

      db.Answer.deleteMany({ question_id: _id })
        .then((result) => {
          console.log('Returning', result);
          return result;
        })
        .catch((error) =>
          console.log(
            '<-------------------Error---------------------->:',
            error
          )
        );
    },
  },
};
