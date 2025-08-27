"use client";
import Image from "next/image";
import App from "../page";


export default function Page() {
  return (
    <App>
      <div className="flex gap-10 items-center w-3/5">
        <div className="">
          <Image
            src="/Profile Picture.jpg"
            alt="Yash Panchal"
            className="rounded-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="">
          <h2 className="font-bold text-3xl mb-2">About Me</h2>
          <h5 className="text-gray-500 mb-2 text-lg">
            CS Student @ University of Minnesota - Twin Cities
          </h5>
          <p>
            I am a passionate computer science student with a strong interest in
            software engineering and web development. I enjoy building impactful
            projects, learning new technologies, and collaborating with others
            to solve real-world problems. I am always eager to take on new
            challenges and grow as a developer.
          </p>
        </div>
      </div>
    </App>
  );
}
