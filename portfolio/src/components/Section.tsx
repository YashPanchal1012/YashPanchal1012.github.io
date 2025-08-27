"use client";
import React from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  children?: React.ReactNode;
};

export default function Section({
  title,
  subtitle,
  meta,
  children,
}: SectionProps) {
  return (
    <section className="mb-6">
      <h5 className="font-bold mb-1">
        {title}{" "}
        {subtitle ? <span className="text-gray-500">| {subtitle}</span> : null}
      </h5>
      {meta ? <div className="text-gray-500 mb-1">{meta}</div> : null}
      <div>{children}</div>
    </section>
  );
}
