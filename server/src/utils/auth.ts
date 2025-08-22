import dotenv from "dotenv";

dotenv.config();

export async function getManagementToken(): Promise<string> {
  
  if (!process.env.AUTH0_M2M_CLIENT_ID || !process.env.AUTH0_M2M_CLIENT_SECRET) {
    throw new Error(
      "Missing AUTH0_M2M_CLIENT_ID or AUTH0_M2M_CLIENT_SECRET in environment variables"
    );
  }

  const response = await fetch(`https://dev-l0cnkmnrn4reomjc.us.auth0.com/oauth/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.AUTH0_M2M_CLIENT_ID,
        client_secret: process.env.AUTH0_M2M_CLIENT_SECRET,
        audience: process.env.AUTH0_AUDIENCE,
        grant_type: "client_credentials",
      }),
    }
  );
   
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Failed to get management token: ${JSON.stringify(errorData)}`
    );
  }

  const data = await response.json();
  return data.access_token;
}
