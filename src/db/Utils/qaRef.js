conn = new Mongo();
db = conn.getDB('qa');

printjson(db.stats());

db.questions.find().forEach(function(doc){
    printjson(doc)
    var answerRef = []
    db.answers.find({question_id: doc.id}).forEach(function(answer){
        answerRef.push(answer._id)
    })
    db.questions.updateOne({_id: doc._id},{ $set: {answers: answerRef}},{upsert: true})
});