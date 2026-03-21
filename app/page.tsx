"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[60%] border h-full">
        <div className="w-full h-full">
          HELLO
          <br />
          <a 
            href="https://chrysalis-iiserb.github.io/chrysalis-iiserb/public/wiki_racing.html"
            target="_blank"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            WikiRace
          </a>
        </div>
      </div>
    </main>
  );
}
