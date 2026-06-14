"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type StreakQrCodeProps = {
  cardId: string;
  size?: number;
};

export default function StreakQrCode({ cardId, size = 48 }: StreakQrCodeProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const url = `https://lodvalet.com/streak/activate?card=${encodeURIComponent(cardId)}`;

  useEffect(() => {
    let active = true;
    QRCode.toDataURL(url, {
      width: size * 2,
      margin: 0,
      color: { dark: "#0A1628", light: "#FFFFFF" },
    })
      .then((value) => {
        if (active) setDataUrl(value);
      })
      .catch(() => {
        if (active) setDataUrl(null);
      });

    return () => {
      active = false;
    };
  }, [url, size]);

  if (!dataUrl) {
    return (
      <div
        className="rounded bg-white"
        style={{ width: size, height: size }}
        aria-hidden
      />
    );
  }

  return (
    <img
      src={dataUrl}
      alt={`QR code to link streak card ${cardId}`}
      width={size}
      height={size}
      className="rounded bg-white"
    />
  );
}
