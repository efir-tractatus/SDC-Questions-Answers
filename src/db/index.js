const mongoose = require('mongoose');
const URI = process.env.URI;
const MONGODB_USER = process.env.DB_USER;
const MONGODB_PASS = process.env.DB_PASSWORD;
const ObjectId = mongoose.Schema.Types.ObjectId;

var connectWithRetry = function () {
  return mongoose
    .connect(URI, {
      poolSize: 20,
      user: MONGODB_USER,
      pass: MONGODB_PASS,
    })
    .catch((error) => {
      console.log(error);
      setTimeout(connectWithRetry(), 5000);
    });
};

connectWithRetry();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connection.on('error', (error) => {
  console.log('Something went wrong', error);
});
mongoose.connection.on('open', () => {
  console.log('Connected to Q&A Database');
});

let questionsSchema = mongoose.Schema({
  _id: ObjectId,
  product_id: Number,
  body: String,
  date: String,
  name: String,
  email: String,
  reported: Boolean,
  helpful: Number,
});

let answersSchema = mongoose.Schema({
  _id: ObjectId,
  question_id: ObjectId,
  body: String,
  date: String,
  name: String,
  email: String,
  reported: Boolean,
  helpful: Number,
  photos: Array,
});

let Question = mongoose.model('Question', questionsSchema);
let Answer = mongoose.model('Answer', answersSchema);

module.exports.mongoose = mongoose;
module.exports.Question = Question;
module.exports.Answer = Answer;
