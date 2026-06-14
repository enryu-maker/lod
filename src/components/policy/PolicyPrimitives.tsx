import Link from "next/link";
import type { ReactNode } from "react";

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="mt-12 mb-4 border-b border-[#F4F6F8] pb-3 font-heading text-[22px] font-bold text-[#0A1628] first:mt-0">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function PolicySubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-7">
      <h3 className="mb-2.5 font-heading text-[17px] font-semibold text-[#0A1628]">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function PolicyP({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <p
      className={`mb-4 font-sans text-base leading-[1.75] ${
        variant === "dark" ? "text-white/75" : "text-[#0A1628]/75"
      }`}
    >
      {children}
    </p>
  );
}

export function PolicyStrong({ children }: { children: ReactNode }) {
  return <strong className="font-sans font-bold text-[#0A1628]">{children}</strong>;
}

export function PolicyList({
  items,
  variant = "light",
}: {
  items: ReactNode[];
  variant?: "light" | "dark";
}) {
  const textClass = variant === "dark" ? "text-white" : "text-[#0A1628]/75";

  return (
    <ul className="mb-4 space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className={`relative pl-6 font-sans text-base leading-[1.75] ${textClass} before:absolute before:left-0 before:text-[#00C2A8] before:content-['•']`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PolicyNumberedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mb-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 font-sans text-base leading-[1.75] text-[#0A1628]/75">
          <span className="shrink-0 font-sans text-sm font-bold text-[#00C2A8]">
            {i + 1}.
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function PolicyLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "font-sans font-medium text-[#00C2A8] underline hover:text-[#0A1628]";
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PolicyTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mb-4 overflow-x-auto -webkit-overflow-scrolling-touch">
      <table className="w-full min-w-[480px] border-collapse">
        <thead>
          <tr className="bg-[#0A1628]">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-sans text-[13px] font-bold text-white"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-[#E8EAED] ${i % 2 === 1 ? "bg-[#F4F6F8]" : "bg-white"}`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 align-top font-sans text-sm text-[#0A1628]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NoticeBlock({
  variant = "warning",
  title,
  children,
}: {
  variant?: "warning" | "info" | "teal" | "gold" | "neutral" | "danger";
  title?: string;
  children: ReactNode;
}) {
  const styles = {
    warning: "border-red-500/20 bg-red-500/6",
    danger: "border-red-500/30 bg-red-500/6",
    info: "border-[#00C2A8]/15 bg-[#00C2A8]/6",
    teal: "border-[#00C2A8]/20 bg-[#00C2A8]/6",
    gold: "border-[#D4A843]/20 bg-[#D4A843]/6",
    neutral: "border-[#0A1628]/8 bg-[#0A1628]/3",
  }[variant];

  return (
    <div className={`mb-10 rounded-lg border p-5 md:p-6 ${styles}`}>
      {title && (
        <p className="mb-2 font-sans text-[13px] font-bold uppercase tracking-wide text-[#EF4444]">
          {title}
        </p>
      )}
      <div className="font-sans text-sm leading-[1.75] text-[#0A1628]">{children}</div>
    </div>
  );
}

export function CalloutBox({
  variant = "neutral",
  label,
  children,
}: {
  variant?: "neutral" | "teal" | "gold" | "warning" | "stripe" | "caps";
  label?: string;
  children: ReactNode;
}) {
  const styles = {
    neutral: "border-[#0A1628]/8 bg-[#0A1628]/3",
    teal: "border-[#00C2A8]/20 bg-[#00C2A8]/6",
    gold: "border-[#D4A843]/20 bg-[#D4A843]/6",
    warning: "border-red-500/20 bg-red-500/6",
    stripe: "border-[#635BFF]/15 bg-[#635BFF]/4",
    caps: "border-[#0A1628]/8 bg-[#0A1628]/3 uppercase",
  }[variant];

  return (
    <div className={`my-4 rounded-lg border p-4 md:p-5 ${styles}`}>
      {label && (
        <p
          className={`mb-2 font-sans text-xs font-bold uppercase tracking-wide ${
            variant === "teal" ? "text-[#00C2A8]" : variant === "gold" ? "text-[#D4A843]" : "text-[#0A1628]"
          }`}
        >
          {label}
        </p>
      )}
      <div className="font-sans text-sm leading-[1.75] text-[#0A1628]/75">{children}</div>
    </div>
  );
}

export function ContactBlock({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-lg bg-[#F4F6F8] p-5 md:p-6 font-sans text-sm text-[#0A1628]/75">
      {children}
    </div>
  );
}

export function TocBox({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="mb-10 rounded-xl bg-[#F4F6F8] p-6 md:p-7">
      <p className="mb-4 font-sans text-[13px] font-bold uppercase tracking-[0.05em] text-[#0A1628]">
        In this document:
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="font-sans text-sm text-[#00C2A8] hover:underline"
          >
            {i + 1}. {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function StepCards({ steps }: { steps: { title: string; body: ReactNode }[] }) {
  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="flex gap-5 rounded-xl border border-[#E8EAED] bg-white p-5 md:p-6"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00C2A8] font-heading text-base font-bold text-white">
            {i + 1}
          </span>
          <div>
            <p className="font-heading text-[15px] font-bold text-[#0A1628]">{step.title}</p>
            <div className="mt-1 font-sans text-sm text-[#6B7280]">{step.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function NavyContactCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-[#0A1628] p-7">
      <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
      <div className="mt-3 text-white/65">{children}</div>
    </div>
  );
}
