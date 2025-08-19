import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "./Layout";

export function PrivacyPolicy() {
  return (
    <Layout>
        <Card className="max-w-5xl mx-auto mt-10">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
            </CardHeader>
            
            <CardContent>
                <p className="text-sm text-muted-foreground">
                Update Date: October 1, 2023
                </p>
                <p className="mt-4">
                    At Supreme Guitar Chords, we respect your privacy and are committed to protecting your personal information. Our app is designed primarily to help you view guitar chords and lyrics. We do not collect unnecessary personal data, but here’s how we handle information to ensure transparency and compliance with regulations such as GDPR and CCPA.
                </p>
                <h2 className="mt-6 text-lg font-semibold">1. Information We Collect</h2>
            <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                <strong>Basic Usage Data:</strong> We may collect anonymous
                information about how users interact with the app (e.g., most
                visited pages, device type) to improve performance and user
                experience.
                </li>
                <li>
                <strong>Account Information (if applicable):</strong> If you
                create an account in the future, we may store your name, email, or
                preferences securely.
                </li>
                <li>
                <strong>Cookies & Analytics:</strong> We may use cookies and
                third-party analytics tools to understand app usage trends.
                Cookies are small text files stored on your device, and you can
                disable them through your browser settings.
                </li>
            </ul>

            <h2 className="mt-6 text-lg font-semibold">2. How We Use Your Data</h2>
            <ul className="list-disc list-inside mt-2 space-y-2">
                <li>To provide and improve our service.</li>
                <li>To monitor performance and fix technical issues.</li>
                <li>To personalize user experience (if account features are enabled).</li>
            </ul>

            <h2 className="mt-6 text-lg font-semibold">3. Sharing of Data</h2>
            <p className="mt-2">
                We do not sell, rent, or trade your personal data. We may only share
                anonymous usage data with trusted analytics providers.
            </p>

            <h2 className="mt-6 text-lg font-semibold">4. Your Rights</h2>
            <p className="mt-2">
                Depending on where you live, you may have rights to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Access or delete your data.</li>
                <li>Opt out of cookies and analytics tracking.</li>
                <li>Contact us regarding any concerns.</li>
            </ul>

            <h2 className="mt-6 text-lg font-semibold">5. Data Security</h2>
            <p className="mt-2">
                We implement standard industry practices to safeguard your
                information. However, no system is 100% secure, so we cannot
                guarantee absolute protection.
            </p>

            <h2 className="mt-6 text-lg font-semibold">6. Changes to This Policy</h2>
            <p className="mt-2">
                We may update this Privacy Policy from time to time. Updates will be
                posted here with the revised effective date.
            </p>

            <h2 className="mt-6 text-lg font-semibold">7. Contact</h2>
            <p className="mt-2">
                If you have any questions, please reach us at:{" "}
                <a
                href="mailto:support@supremeguitarchords.com"
                className="text-blue-600 dark:text-blue-400 underline"
                >
                contact@akshavi.com.np
                </a>
            </p>
                
            </CardContent>
        </Card>
    </Layout>
  );
}   