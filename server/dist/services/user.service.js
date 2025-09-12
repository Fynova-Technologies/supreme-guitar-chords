import { UsersCollection } from "../db/collections.js";
export async function getAllUsers() {
    return UsersCollection.find({}).toArray();
}
export async function findUserByAuth0Id(auth0Id) {
    return UsersCollection.findOne({ auth0Id });
}
