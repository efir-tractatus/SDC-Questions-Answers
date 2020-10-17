const mongoose = require('mongoose');
var PORT = 27017;

mongoose
  .connect(`mongodb://mongo_qa:${PORT}/qa`, { useNewUrlParser: true })
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
  id: Number,
  product_id: Number,
  body: String,
  date: String,
  name: String,
  email: String,
  reported: Boolean,
  helpful: Number,
  answers: [],
});

let answersSchema = mongoose.Schema({
  id: Number,
  question_id: Number,
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


