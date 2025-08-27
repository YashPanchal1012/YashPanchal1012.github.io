"use client";
import App from "../page";
import Section from "../../components/Section";

export default function Page() {
  return (
    <App>
      <div className="w-9/12">
        <h2 className="font-bold text-3xl mb-6">Work</h2>

        <Section
          title="ECE DEPARTMENT, UMN"
          subtitle="Depot Assistant"
          meta="Jan 2024 - Present | Minneapolis, MN"
        >
          <ul className="list-disc ml-4">
            <li>Maintained lab equipment for multiple ECE courses.</li>
            <li>
              Assembled 300+ lab kits and performed basic soldering and repairs.
            </li>
            <li>Advised students on part selection and inventory options.</li>
          </ul>
        </Section>

        <Section
          title="CS&E DEPARTMENT, UMN"
          subtitle="Undergraduate Teaching Assistant"
          meta="Sep 2024 - Present | Minneapolis, MN"
        >
          <ul className="list-disc ml-4">
            <li>
              Led weekly labs for 20+ students and hosted exam prep sessions.
            </li>
            <li>
              Held office hours and graded assignments with detailed feedback.
            </li>
          </ul>
        </Section>

        <Section
          title="HOUSING & RESIDENTIAL LIFE, UMN"
          subtitle="Hospitality Specialist"
          meta="May - Aug 2024 | Minneapolis, MN"
        >
          <ul className="list-disc ml-4">
            <li>
              Supported residents, enforced policies, and ensured hall safety.
            </li>
            <li>
              Conducted rounds, collaborated with staff, and used IRIS for admin
              tasks.
            </li>
          </ul>
        </Section>
      </div>
    </App>
  );
}
