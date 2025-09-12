import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "./Layout";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface ContactUsProps {
  onRequireLogic: () => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onRequireLogic }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      onRequireLogic();
      toast.error("Please login or signup to send a message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setSubmitted(true);
        console.log("Message sent successfully");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Card className="max-w-3xl mx-auto mt-10">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          {submitted && (
            <button onClick={handleBack} className=" hover:underline">
              <strong>← Back</strong>
            </button>
          )}
        </CardHeader>
        <CardContent>
          {submitted ? (
            <p className="text-green-600 font-medium">
              Thank you! Your message has been received. We’ll respond shortly.
            </p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions, feedback, or suggestions? We'd love to hear from
                you! Fill out the form below, and we’ll get back to you as soon
                as possible.
              </p>
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
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300
             bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-700"
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
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300
             bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-700"
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
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300
                        bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-700"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-4 py-4 px-4 rounded-md text-white transition 
                        ${
                          isSubmitting
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gray-600 hover:bg-gray-700"
                        }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            Or reach us directly at:{" "}
            <a
              href="contact@akshavi.com.np"
              className="text-blue-600 underline"
            >
              contact@akshavi.com.np
            </a>
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
};
