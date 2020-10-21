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
    getQuestion(_id: Float): [Question]
    getAllAnswers: [Answer]
    getAnswers(question_id: Float): [Answer]
    getAnswer(_id: Float): [Answer]
  }

  type Mutation {
    createUpdateQuestion(
      product_id: Float!
      body: String
      date: String
      name: String
      email: String
      reported: Boolean
      helpful: Float
    ): Question

    createUpdateAnswer(
      question_id: ID!
      body: String
      date: String
      name: String
      email: String
      reported: Boolean
      helpful: Float
      photos: [String]
    ): Answer

    deleteQuestion(_id: ID!): Question
    deleteAnswer(_id: ID!): Answer
  }
`;
