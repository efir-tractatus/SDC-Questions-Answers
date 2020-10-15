conn = new Mongo();
db = conn.getDB('qa');

printjson(db.stats());

db.questions.drop();
db.createCollection('questions', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id', 'product_id'],
      properties: {
        id: { bsonType: 'int' },
        product_id: { bsonType: 'int' },
        body: { bsonType: 'string' },
        date: { bsonType: 'string' },
        name: { bsonType: 'string' },
        email: { bsonType: 'string' },
        reported: { bsonType: 'bool' },
        helpful: { bsonType: 'int' },
        answers: {bsonType: 'array'}
      }
    }
  }
})

db.questions_raw.find().forEach(function (doc) {
  printjson(doc);
  var bool = false;
  if (doc.reported === 1) {
    bool = true;
  }
  db.questions.insertOne({
    'id': NumberInt(doc.id),
    'product_id': NumberInt(doc.product_id),
    'body': doc.body,
    'date': doc.date_written,
    'name': doc.asker_name,
    'email': doc.asker_email,
    'reported': bool,
    'helpful': NumberInt(doc.helpful),
    'answers': []
  });
});

// {
// 	"_id" : ObjectId("5f874cf9c1820d4e5dcf3242"),
// 	"id" : 3521633,
// 	"product_id" : 1000011,
// 	"body" : "Quia ut saepe vel iste nihil.",
// 	"date_written" : "2018-11-12",
// 	"asker_name" : "Declan77",
// 	"asker_email" : "Frederique_Fay34@hotmail.com",
// 	"reported" : 0,
// 	"helpful" : 19
// }
