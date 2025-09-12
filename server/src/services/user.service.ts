import { UsersCollection } from "../db/collections.js";
import { UserDoc } from "../models/user";

export async function getAllUsers() {
  return UsersCollection.find({}).toArray();
}

export async function findUserByAuth0Id(auth0Id: string) {
  return UsersCollection.findOne({ auth0Id });
}
