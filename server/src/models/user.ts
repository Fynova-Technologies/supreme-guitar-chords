import { ObjectId } from "mongodb";

export type UserDoc = {
  _id?: ObjectId | string;
  auth0Id?: string; // sub
  email?: string;
  name?: string;
  roles?: string[];
  createdAt?: Date;
  // other fields
};
