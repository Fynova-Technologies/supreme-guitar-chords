import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "./Layout";

export function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:8000/api/contact", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
            const data = await res.json();
            console.log("Message sent successfully");
        } else {
            console.error("Failed to send message");
        }
    }catch (error) {
        console.error("Error sending message:", error);
    }
    setSubmitted(true);
  };

  return (
    <Layout>
      <Card className="max-w-3xl mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Have questions, feedback, or suggestions? We'd love to hear from you!
            Fill out the form below, and we’ll get back to you as soon as possible.
          </p>

          {submitted ? (
            <p className="text-green-600 font-medium">
              Thank you! Your message has been received. We’ll respond shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            Or reach us directly at:{" "}
            <a
              href="mailto:support@supremeguitarchords.com"
              className="text-blue-600 underline"
            >
              contact@akshavi.com.np
            </a>
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
}
