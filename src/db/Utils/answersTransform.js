conn = new Mongo();
db = conn.getDB('qa');

printjson(db.stats());

db.answers.drop();
db.createCollection('answers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'question_id'],
      properties: {
        question_id: { bsonType: 'objectId' },
        body: { bsonType: 'string' },
        date: { bsonType: 'Date' },
        name: { bsonType: 'string' },
        email: { bsonType: 'string' },
        reported: { bsonType: 'bool' },
        helpful: { bsonType: 'int' },
        photos: { bsonType: 'array' },
      },
    },
  },
});

db.answers_raw.find().forEach(function (doc) {
  printjson(doc);
  var bool = false;
  if (doc.reported === 1) {
    bool = true;
  }
  var photoArray = [];
  db.answers_photos_raw.find({ answer_id: doc.id }).forEach(function (photo) {
    photoArray.push(photo.url);
  });

  var q_id = '';

  db.questions.find({ id: doc.question_id }).forEach(function (question) {
    q_id = question._id;
  });

  db.answers.insertOne({
    question_id: q_id,
    body: doc.body,
    date: doc.date_written,
    name: doc.answerer_name,
    email: doc.answerer_email,
    reported: bool,
    helpful: NumberInt(doc.helpful),
    photos: photoArray,
  });
});
