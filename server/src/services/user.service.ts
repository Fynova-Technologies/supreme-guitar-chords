import { UsersCollection } from "../db/collections.js";
import { UserDoc } from "../models/user";

export async function createUser(user: UserDoc) {
  if (!user.auth0Id) throw new Error("auth0Id is required");

  const existing = await UsersCollection.findOne({ auth0Id: user.auth0Id });
  if (existing) return existing;

  const createdAt = new Date();
  const result = await UsersCollection.insertOne({ ...user, createdAt });

  if (!result.acknowledged) throw new Error("Insert failed");

  return { _id: result.insertedId, ...user, createdAt };
}


export async function getAllUsers() {
  return UsersCollection.find({}).toArray();
}

export async function findUserByAuth0Id(auth0Id: string) {
  return UsersCollection.findOne({ auth0Id });
}
