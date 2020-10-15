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
        id: { bsonType: 'int' },
        question_id: { bsonType: 'int' },
        body: { bsonType: 'string' },
        date: { bsonType: 'string' },
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
  db.answers.insertOne({
    id: NumberInt(doc.id),
    question_id: NumberInt(doc.question_id),
    body: doc.body,
    date: doc.date_written,
    name: doc.answerer_name,
    email: doc.answerer_email,
    reported: bool,
    helpful: NumberInt(doc.helpful),
    photos: photoArray,
  });
});
