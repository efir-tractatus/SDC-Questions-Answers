const { gql } = require('apollo-server-express');

module.exports.typeDefs = gql`
  type Question {
    _id: ID!
    product_id: Float!
    body: String
    date: String
    name: String
    email: String
    reported: Boolean
    helpful: Float
    answers: [Answer]
  }

  type Answer {
    _id: ID!
    question_id: ID!
    body: String
    date: String
    name: String
    email: String
    reported: Boolean
    helpful: Float
    photos: [String]
  }

  type Query {
    getAllQuestions: [Question]
    getQuestions(product_id: Float): [Question]
    getQuestion(_id: ID): [Question]
    getAllAnswers: [Answer]
    getAnswers(question_id: ID): [Answer]
    getAnswer(_id: ID): [Answer]
  }

  type Mutation {
    createQuestion(
      product_id: Float!
      body: String
      date: String
      name: String
      email: String
      reported: Boolean
      helpful: Float
    ): Question

    createAnswer(
      question_id: ID!
      body: String
      date: String
      name: String
      email: String
      reported: Boolean
      helpful: Float
      photos: [String]
    ): Answer

    updateQuestion(
      _id: ID!
      body: String
      date: String
      name: String
      email: String
      reported: Boolean
      helpful: Float
    ): Question

    updateAnswer(
      _id: ID!
      body: String
      date: String
      name: String
      email: String
      reported: String
      helpful: String
      photos: [String]
    ): Answer

    deleteQuestion(_id: ID!): Question
    deleteAnswer(_id: ID!): Answer
  }
`;
