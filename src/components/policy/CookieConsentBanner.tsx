"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "lod-cookie-consent";

type ConsentState = {
  essential: true;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
};

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  preferences: false,
  marketing: false,
};

function readConsent(): ConsentState | "dismissed" | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;
  if (raw === "dismissed") return "dismissed";
  try {
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setVisible(true);
  }, []);

  const dismiss = (consent: ConsentState) => {
    saveConsent(consent);
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-[9999] border-t-2 border-[#E8EAED] bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
        role="dialog"
        aria-label="Cookie consent"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-sans text-sm text-[#0A1628]">
            LOD uses cookies to improve your experience.{" "}
            <Link
              href="/cookie-policy"
              target="_blank"
              className="font-medium text-[#00C2A8] underline hover:text-[#0A1628]"
            >
              Learn More
            </Link>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => dismiss({ essential: true, analytics: true, preferences: true, marketing: true })}
              className="rounded-lg bg-[#00C2A8] px-5 py-2.5 font-heading text-sm font-bold text-[#0A1628]"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={() => {
                setDraft(defaultConsent);
                setSettingsOpen(true);
              }}
              className="rounded-lg border border-[#E8EAED] px-5 py-2.5 font-sans text-sm text-[#0A1628]"
            >
              Cookie Settings
            </button>
            <button
              type="button"
              onClick={() => dismiss(defaultConsent)}
              className="px-2 py-2.5 font-sans text-[13px] text-[#6B7280] underline"
            >
              Reject Non-Essential
            </button>
          </div>
        </div>
      </div>

      {settingsOpen && (
        <div className="fixed inset-0 z-[10000] flex items-end justify-center bg-black/40 p-4 md:items-center">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h2 className="font-heading text-lg font-bold text-[#0A1628]">Cookie Settings</h2>
            <div className="mt-4 space-y-4">
              {[
                { key: "essential" as const, label: "Essential", locked: true },
                { key: "analytics" as const, label: "Analytics", locked: false },
                { key: "preferences" as const, label: "Preferences", locked: false },
                { key: "marketing" as const, label: "Marketing", locked: false },
              ].map((item) => (
                <label key={item.key} className="flex items-center justify-between gap-4">
                  <span className="font-sans text-sm text-[#0A1628]">{item.label}</span>
                  <input
                    type="checkbox"
                    checked={item.locked ? true : draft[item.key]}
                    disabled={item.locked}
                    onChange={(e) =>
                      !item.locked &&
                      setDraft((prev) => ({ ...prev, [item.key]: e.target.checked }))
                    }
                    className="h-4 w-4 accent-[#00C2A8]"
                  />
                </label>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="rounded-lg border border-[#E8EAED] px-4 py-2 font-sans text-sm text-[#0A1628]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => dismiss(draft)}
                className="rounded-lg bg-[#00C2A8] px-4 py-2 font-heading text-sm font-bold text-[#0A1628]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
