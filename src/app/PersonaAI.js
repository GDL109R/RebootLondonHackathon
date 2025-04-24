// PersonaAI.js
import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authconfig.js";
import axios from "axios";

function PersonaAI() {
  const { instance, accounts } = useMsal();
  const [result, setResult] = useState(null);

  const login = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (e) {
      console.error("Login failed:", e);
    }
  };

  const callAI = async () => {
    try {
      const tokenResponse = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });

      const accessToken = tokenResponse.accessToken;

      const payload = {
        model: "lloyds-advocate-gen-v1", // example model
        input: {
          persona: "loyal_colleague",
          scenario: "comparing Lloyds to a competitor",
          context: "user is selecting a financial product",
        },
      };

      const response = await axios.post(
        "https://aifoundry.azure.com/v1/generate", // replace with actual AI Foundry endpoint
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResult(response.data);
    } catch (err) {
      console.error("Error calling AI Foundry:", err);
    }
  };

  return (
    <div>
      <h2>Colleague Advocate AI</h2>
      <button onClick={login}>Sign in with Azure</button>
      <button onClick={callAI}>Run Persona Scenario</button>
      {result && (
        <pre style={{ whiteSpace: "pre-wrap", background: "#eee", padding: "1rem" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default PersonaAI;
