const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/qa', { useNewUrlParser: true })
  .catch((error) => console.log(error));

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
  question_id: Number,
  product_id: Number,
  body: String,
  date: Date,
  name: String,
  email: String,
  helpfulness: Number,
  reported: Boolean,
  answers: [],
});

let answersSchema = mongoose.Schema({
  answer_id: Number,
  body: String,
  date: Date,
  name: String,
  email: String,
  helpfulness: String,
  reported: Boolean,
  photos: [String],
});


let Question = mongoose.model('Question', questionsSchema);
let Answer = mongoose.model('Answer', answersSchema);

module.exports.mongoose = mongoose;
