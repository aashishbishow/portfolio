import express from "express";
// import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
// }));

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send( "Hello, TypeScript with Express!" );
});

// Jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programming Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },

        {
            id: 2,
            title: "Dad Joke",
            content: "What do you call a fake noodle? An impasta."
        },

        {
            id: 3,
            title: "Pun Joke",
            content: "I'm reading a book on anti-gravity. It's impossible to put down!"
        },

        {
            id: 4,
            title: "Animal Joke",
            content: "What do you call a fish wearing a crown? A kingfish."
        },

        {
            id: 5,
            title: "Math Joke",
            content: "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else."
        }
    ];
    console.log("sending jokes:", jokes);
    res.send(JSON.stringify({jokes}));
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
