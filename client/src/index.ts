import { connectToDatabase } from './config/connect';
import { getSongs } from './services/dbServices';

const run = async () => {
  const client = await connectToDatabase();

  const songs = await getSongs(client);
  console.log("🎵 Songs in DB:", songs);

  await client.close();
  console.log("🔒 Connection closed");
};

run();
