function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center text-white">
      {children}
    </span>
  );
}

export function BagCheckIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
        <path
          d="M12 14V12C12 8.686 14.686 6 18 6H22C25.314 6 28 8.686 28 12V14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="8" y="14" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 22L19 25L24 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </IconWrap>
  );
}

export function CardStampIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
        <rect x="7" y="10" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="20" r="2" fill="currentColor" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
        <circle cx="26" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </IconWrap>
  );
}

export function GiftIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
        <rect x="8" y="18" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 18V34" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 22H32" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 18C20 14 16 12 14 14C12 16 14 18 20 18C26 18 28 16 26 14C24 12 20 14 20 18Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

export function BagRewardIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 text-[#00C2A8]" aria-hidden>
      <path
        d="M12 14V12C12 8.686 14.686 6 18 6H22C25.314 6 28 8.686 28 12V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="8" y="14" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CoinRewardIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10 text-[#00C2A8]" aria-hidden>
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 14V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 18H22C23.657 18 25 19.343 25 21C25 22.657 23.657 24 22 24H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
