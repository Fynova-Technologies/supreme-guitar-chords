import { Server } from "socket.io";
import { ArtistsCollection, UsersCollection } from "./db/collections.js";

export function setupSockets(io: Server) {
  // Watch artists collection
  try {
    ArtistsCollection.watch([], { fullDocument: "updateLookup" }).on("change", (change) => {
      io.emit("artistsChanged", change);
    }).on("error", (err) => console.error("artists change stream error", err));
  } catch (err) {
    console.warn("Could not open artists change stream", err);
  }

  try {
    UsersCollection.watch([], { fullDocument: "updateLookup" }).on("change", (change) => {
      io.emit("usersChanged", change);
    }).on("error", (err) => console.error("users change stream error", err));
  } catch (err) {
    console.warn("Could not open users change stream", err);
  }
}

