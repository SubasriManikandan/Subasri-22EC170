const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://subasrim2022ece:Suba@2109@cluster0.kdjmfhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  
  console.log('Connected to MongoDB successfully.');
  
  // Your MongoDB operations here
  
  client.close();
});
