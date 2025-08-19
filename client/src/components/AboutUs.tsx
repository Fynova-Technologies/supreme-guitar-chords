import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "./Layout";

export function AboutUs() {
  return (
    <Layout>
      <Card className="max-w-5xl mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            🎸 Welcome to <strong>Supreme Guitar Chords!</strong> 🎶
          </p>

          <p className="mt-2">
            We built <strong>Supreme Guitar Chords</strong> with one mission: to
            make learning and playing guitar easier and more fun. Whether you’re
            a beginner strumming your first chord or a seasoned player looking
            for your favorite songs, our app is designed to bring lyrics and
            chords together in one simple, user-friendly space.
          </p>

          <h2 className="mt-6 text-lg font-semibold">Our Mission</h2>
          <p className="mt-2">
            To empower guitar enthusiasts by making music learning accessible,
            enjoyable, and inspiring.
          </p>

          <h2 className="mt-6 text-lg font-semibold">Our Vision</h2>
          <p className="mt-2">
            A thriving community of music lovers who share, learn, and grow
            together through the joy of guitar and song.
          </p>

          <h2 className="mt-6 text-lg font-semibold">Why Supreme Guitar Chords?</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Clean and easy-to-use interface.</li>
            <li>Thousands of songs with chords and lyrics.</li>
            <li>Perfect for jam sessions, practice, or live performance.</li>
            <li>Built with love for music and technology.</li>
          </ul>

          <p className="mt-6">
            We believe music is best when shared. So grab your guitar, explore
            your favorite songs, and be part of a community that celebrates the
            joy of making music.
          </p>

          <p className="mt-6 font-medium text-center">
            👉 Start playing today with <strong>Supreme Guitar Chords</strong> –
            where every chord tells a story!
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
