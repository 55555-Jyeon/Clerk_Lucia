import { Collection, MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);

async () => {
  await client.connect();
};

export const db = client.db("auth");
export const UserCollection = db.collection("users") as Collection<UserDoc>;
export const SessionCollection = db.collection(
  "sessions"
) as Collection<SessionDoc>;

interface UserDoc {
  _id: string;
  username: string;
  hashed_password: string;
}

interface SessionDoc {
  _id: string;
  expires_at: Date;
  user_id: string;
}
