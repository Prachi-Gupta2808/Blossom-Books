"use client";

import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={reviews}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const reviews = [
  {
    quote:
      "BlossomBooks has completely changed how I discover books. The genre sections are so beautifully organized, and the UI is just gorgeous!",
    name: "Aarav Mehta",
    title: "Tech Blogger & Book Enthusiast",
  },
  {
    quote:
      "I love the BookBot! It’s like chatting with a librarian who knows exactly what I want to read next.",
    name: "Sneha Kapoor",
    title: "Student, Literature Major",
  },
  {
    quote:
      "As a writer, I find the quotes section incredibly inspiring. BlossomBooks feels like a digital garden for book lovers.",
    name: "Rishi Varma",
    title: "Author of 'Midnight Pages'",
  },
  {
    quote:
      "This is by far the most aesthetically pleasing book site I’ve visited. It's smooth, responsive, and makes reading fun again!",
    name: "Priya Sharma",
    title: "UX Designer & Voracious Reader",
  },
  {
    quote:
      "From the BookTok recommendations to the animated UI—everything screams thoughtful design. Kudos to the BlossomBooks team!",
    name: "Dev Singh",
    title: "Front-End Developer & Reviewer",
  },
];
