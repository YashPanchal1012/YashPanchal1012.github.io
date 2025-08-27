"use client";
"use client";
import Section from "../../components/Section";
import App from "../page";

export default function Page() {
  return (
    <App>
      <div className="w-9/12">
        <h2 className="font-bold text-3xl mb-6">Projects</h2>

        <Section
          title="RECIPE HUB"
          subtitle="Django, React, Bootstrap, SQLite"
          meta="Jun - Jul 2025 | Minneapolis, MN"
        >
          <ul className="list-disc ml-4">
            <li>
              Developed a full-stack recipe web app that lets users search and
              filter recipes based on ingredients they have on hand.
            </li>
            <li>
              Integrated{" "}
              <a
                className="text-yellow-600 hover:underline"
                href="https://www.themealdb.com/api.php"
              >
                TheMealDB
              </a>{" "}
              and{" "}
              <a
                className="text-yellow-600 hover:underline"
                href="https://spoonacular.com/food-api"
              >
                Spoonacular
              </a>{" "}
              APIs to fetch diverse recipe data, then cleaned and stored it in a
              local SQLite database using Python scripts.
            </li>
            <li>
              Built a responsive front end with React and Bootstrap, and
              implemented a Django backend to manage data access and filtering
              logic.
            </li>
          </ul>
        </Section>

        <Section
          title="CONCORDANCER"
          subtitle="C"
          meta="Feb 2025 | Minneapolis, MN"
        >
          <ul className="list-disc ml-4">
            <li>
              Built a Concordancer using a hash table and linked list chaining.
            </li>
            <li>
              Added CLI support for adding, searching, and managing words.
            </li>
            <li>Enabled dictionary-based spell check with file I/O support.</li>
          </ul>
        </Section>

        <Section
          title="HUFFMAN ENCODER AND DECODER"
          subtitle="Java"
          meta="Feb – Mar 2024 | Minneapolis, MN"
        >
          <ul className="list-disc ml-4">
            <li>Developed a file compressor using Huffman Coding Trees.</li>
            <li>Designed an OOP solution with 4 classes and 20+ methods.</li>
          </ul>
        </Section>

        <Section title="Othello" subtitle="Python" meta="Jan - Feb 2024">
          <ul className="list-disc ml-4">
            <li>
              Developed an Othello game with an AI opponent, playable in the
              terminal using Unicode characters.
            </li>
            <li>
              Implemented a random move player and an AI player utilizing
              strategic board evaluation for optimized decision-making.
            </li>
          </ul>
        </Section>

        <Section
          title="BELL-LESS DOORBELL SYSTEM"
          subtitle="C++, HTML, CSS, IFTTT"
          meta="Nov – Dec 2023 | Minneapolis, MN"
        >
          <ul className="list-disc ml-4">
            <li>Built an IoT doorbell system using Photon and IFTTT.</li>
            <li>Designed HTML interface and circuit schematics in Fritzing.</li>
            <li>
              Programmed micro controller in C++ and helped with hardware
              assembly.
            </li>
          </ul>
        </Section>
      </div>
    </App>
  );
}
