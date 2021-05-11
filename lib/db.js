import { MongoClient } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wppvi.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
export async function connectToDatabase() {
  const client = MongoClient.connect(connectionString);
  return client;
}
