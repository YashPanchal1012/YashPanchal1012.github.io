"use client";
import Link from "next/link";
import React, { useState } from "react";

function NavBar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navBarText = `cursor-pointer ${
    dark ? "hover:text-white" : "hover:text-black"
  }`;

  return (
    <nav
      className={`w-full ${
        dark ? "bg-primary text-slate-400" : "bg-white text-gray-500"
      }`}
    >
      <ul className="flex flex-row justify-center items-center gap-6 py-3">
        <li>
          <Link className={`font-bold text-lg ${navBarText}`} href={`/home`}>
            Yash Panchal
          </Link>
        </li>
        <li>
          <Link className={`${navBarText}`} href={`/work`}>
            Work
          </Link>
        </li>
        <li>
          <Link className={`${navBarText}`} href={`/projects`}>
            Projects
          </Link>
        </li>
        <li>
          <a
            className={`${navBarText}`}
            href="https://github.com/YashPanchal1012"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className={`${navBarText}`}
            href="https://www.linkedin.com/in/yashwardhan-panchal-2829b8282/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <button
            className={`${navBarText} `}
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
          >
            <i
              className={`
                  ${
                    dark
                      ? "bi bi-brightness-high"
                      : "bi bi-brightness-high-fill"
                  }`}
            ></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}



/**
 * App component that renders the entire app.
 * @returns A JSX element that renders the app.
 */
export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-primary text-white" : "bg-white text-gray-900"
      }`}
    >
      <NavBar dark={dark} setDark={setDark} />
      <div className="flex mt-15 justify-center">{children}</div>
    </div>
  );
}
