export default function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M20 4C16 12 10 14 10 22C10 28.075 14.925 33 21 33C27.075 33 32 28.075 32 22C32 16 28 13 26 8C24 11 22 12 20 16C18 12 16 10 14 8C15 10 17 12 20 4Z"
        stroke="#00C2A8"
        strokeWidth="1.5"
        fill="rgba(0,194,168,0.12)"
        strokeLinejoin="round"
      />
      <path
        d="M20 20C18.5 22.5 17 24 17 26.5C17 29.537 19.463 32 22.5 32C25.537 32 28 29.537 28 26.5C28 24 26.5 22.5 25 20C23.5 22 22 23 20 20Z"
        stroke="#00C2A8"
        strokeWidth="1.25"
        fill="rgba(0,194,168,0.08)"
        strokeLinejoin="round"
      />
    </svg>
  );
}
