const { gql } = require('apollo-server-express');

module.exports.typeDefs = gql`
  type Question {
    id: Float
    product_id: Float
    body: String
    date: String
    name: String
    email: String
    reported: Boolean
    helpful: Float
    answers_ref: [String]
    answers: [Answer]
  }

  type Answer {
    id: Float
    question_id: Float
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
    getQuestion(id: Float): [Question]
    getAllAnswers: [Answer]
    getAnswers(question_id: Float): [Answer]
    getAnswer(id: Float): [Answer]
  }

  type Mutation {
    createUpdateQuestion(
      id: Float!
      product_id: Float!
      body: String
      date: String
      name: String
      email: String
      reported: Boolean
      helpful: Float
    ): Question

    createUpdateAnswer(
      id: Float!
      question_id: Float!
      body: String
      date: String
      name: String
      email: String
      reported: Boolean
      helpful: Float
      photos: [String]
    ): Answer

    deleteQuestion(id: Float!): Question
    deleteAnswer(id: Float!): Answer
  }
`;
