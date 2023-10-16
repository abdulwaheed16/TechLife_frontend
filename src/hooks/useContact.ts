import { useState } from "react";

export default async function useContact({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  try {
    setIsLoading(true);
    const requestData = JSON.stringify(data);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestData,
    });

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const message = await response.json();
    message && setSuccess(true);
  } catch (err) {
    setIsError(true);
    setError(err);
  }

  return { isLoading, isError, error, success };
}
