import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "./Layout";

export function TermsOfService() {
  return (
    <Layout>
      <Card className="max-w-5xl mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Effective Date: October 1, 2023
          </p>

          <p className="mt-4">
            Welcome to <strong>Supreme Guitar Chords!</strong> By using our
            website or services, you agree to the following terms. Please read
            them carefully.
          </p>

          <h2 className="mt-6 text-lg font-semibold">1. Purpose of the App</h2>
          <p className="mt-2">
            Supreme Guitar Chords is built for music lovers and guitar
            enthusiasts. Our goal is to provide a platform where users can view
            and learn guitar chords alongside song lyrics.
          </p>

          <h2 className="mt-6 text-lg font-semibold">2. Acceptable Use</h2>
          <p className="mt-2">You agree not to:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Misuse the app or attempt to disrupt its functionality.</li>
            <li>Upload or share harmful, offensive, or illegal content.</li>
            <li>
              Use the app for commercial exploitation without explicit
              permission.
            </li>
          </ul>

          <h2 className="mt-6 text-lg font-semibold">3. Intellectual Property</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>Lyrics & Chords:</strong> The chords and lyrics provided
              are for educational and personal use only. Copyright for lyrics
              belongs to their respective owners.
            </li>
            <li>
              <strong>App Content:</strong> All other elements (design, code,
              branding, etc.) are owned by Supreme Guitar Chords.
            </li>
          </ul>

          <h2 className="mt-6 text-lg font-semibold">4. Limitations of Liability</h2>
          <p className="mt-2">
            We strive for accuracy, but we cannot guarantee that all lyrics or
            chords are 100% correct. Supreme Guitar Chords is not responsible
            for any losses, damages, or issues resulting from the use of our
            content.
          </p>

          <h2 className="mt-6 text-lg font-semibold">5. Community Guidelines</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Be respectful of other music lovers.</li>
            <li>Share knowledge in a supportive, positive way.</li>
            <li>No spamming, harassment, or inappropriate content.</li>
          </ul>

          <h2 className="mt-6 text-lg font-semibold">6. Changes to Terms</h2>
          <p className="mt-2">
            We may update these Terms of Service. Continued use of the app means
            you accept the updated terms.
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
