"use client";

import App from "next/app";
import { useEffect, useState } from "react";
import axios from "axios";

// Defining the type for Joke
type Joke = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
  // Initializing state with the correct type for jokes
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() =>
  {
    axios
    .get("/api/jokes")
    .then((res) => {
      // If you are using res.send() and manually stringifying the response:
      const parsedData = res.data && typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
      setJokes(parsedData.jokes || []);
    })
    .catch((err) => console.error("Error Fetching data:", err));
  },[]);

  return (
    <div>
      <h1>Coffee and Jokes</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
    </div>
  );
}