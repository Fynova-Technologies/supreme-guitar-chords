import { UsersCollection } from "../db/collections.js";
import { UserDoc } from "../models/user";

export async function createUser(user: UserDoc) {
  const existing = await UsersCollection.findOne({ auth0Id: user.auth0Id });
  if (existing) return existing;

  const result = await UsersCollection.insertOne({
    ...user,
    createdAt: new Date(),
  });
  return result;
}

export async function getAllUsers() {
  return UsersCollection.find({}).toArray();
}

export async function findUserByAuth0Id(auth0Id: string) {
  return UsersCollection.findOne({ auth0Id });
}
