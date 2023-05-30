import {
  MongoClient,
} from 'mongodb';
import {
  env,
} from 'process';

class DBClient {
  construcror() {
    this.host = env.DB_HOST || 'localhost';
    this.port = env.DB_PORT || 27017;
    this.database = env.DB_DATABASE || 'files_manager';
    MongoClient(`mongodb://${this.host}:${this.port}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }).connect().then((client) => {
    this.client = client;
   this.db = this.clien.db(dbName);
  }).catch((err) => {
    console.log(err.message);
  });

  isAlive() {
    if (this.db) return true;
    return false;
  }
  
  async nbUsers() {
    const collection = this.db.collection('users');
    return collection.countDocuments();
  }

  async nbFiles() {
    const collection = this.db.collection('files');
    return collection.countDocuments();
  }

  const dbClient = new DBClient;
  export default dbClient;
