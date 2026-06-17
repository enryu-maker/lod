"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import FlameIcon from "@/components/account/FlameIcon";
import StreakQrCode from "@/components/account/StreakQrCode";
import {
  BagCheckIcon,
  BagRewardIcon,
  CardStampIcon,
  CoinRewardIcon,
  GiftIcon,
} from "@/components/account/StreakIcons";
import { useStreakPageData } from "@/hooks/useStreakPageData";
import { milestones } from "@/lib/streak-content";
import type { StreakRewardChoice } from "@/lib/streak-content";

const pageX = "max-w-[1280px] mx-auto px-4 md:px-20";
const cardX = "mx-4 md:mx-20";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans font-medium text-[11px] uppercase tracking-[0.15em] text-[#00C2A8] mb-3">
      {children}
    </p>
  );
}

function ProgressRing({
  current,
  goal,
}: {
  current: number;
  goal: number;
}) {
  const size = 160;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = Math.min(current / goal, 1);
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setOffset(circumference * (1 - percent));
    });
    return () => window.cancelAnimationFrame(id);
  }, [circumference, percent]);

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E8EAED" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#00C2A8"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="font-heading text-2xl font-bold text-[#0A1628]">
          {current} of {goal}
        </p>
        <p className="font-sans text-xs text-[#6B7280]">bags</p>
      </div>
    </div>
  );
}

function StreakCardVisual({
  completed,
  cardId,
}: {
  completed: number;
  cardId: string;
}) {
  const total = 10;

  return (
    <div className="mx-auto max-w-[480px]">
      <div className="aspect-[3.5/2.5] rounded-xl bg-[#0A1628] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <div className="flex items-start justify-between">
          <span className="font-heading text-lg font-bold tracking-wide text-white">LOD</span>
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
            Streak Card
          </span>
        </div>
        <div className="mt-6 flex justify-between gap-1">
          {Array.from({ length: total }, (_, i) => {
            const n = i + 1;
            const done = n <= completed;
            return (
              <div
                key={n}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  done ? "bg-[#00C2A8] text-white" : "border-2 border-white/20 text-white/30"
                }`}
              >
                {done ? (
                  <span className="text-xs font-bold">✓</span>
                ) : (
                  <span className="font-sans text-xs font-bold">{n}</span>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex items-end justify-between">
          <p className="font-sans text-[11px] text-white/45">10 bags = 1 free wash</p>
          <StreakQrCode cardId={cardId} size={48} />
        </div>
      </div>
    </div>
  );
}

function isMilestoneReached(
  id: string,
  currentStreak: number,
  weeksActive: number
): boolean {
  switch (id) {
    case "4-weeks":
      return weeksActive >= 4;
    case "8-weeks":
      return weeksActive >= 8;
    case "10-bags":
      return currentStreak >= 10;
    case "12-weeks":
      return weeksActive >= 12;
    case "26-weeks":
      return weeksActive >= 26;
    default:
      return false;
  }
}

function milestoneProgress(currentStreak: number, weeksActive: number): number {
  const flags = [
    weeksActive >= 4,
    weeksActive >= 8,
    currentStreak >= 10,
    weeksActive >= 12,
    weeksActive >= 26,
  ];
  const reached = flags.filter(Boolean).length;
  return Math.min(100, (reached / flags.length) * 100);
}

export default function StreakProgramContent() {
  const {
    loading,
    currentStreak,
    goal,
    weeksActive,
    rewardChoice,
    cardLinked,
    cardId,
    recentStampRows,
    saveRewardChoice,
  } = useStreakPageData();

  const [selectedReward, setSelectedReward] = useState<StreakRewardChoice>(rewardChoice);
  const [savingReward, setSavingReward] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedReward(rewardChoice);
    }, 0);
    return () => clearTimeout(timer);
  }, [rewardChoice]);

  const bagsToGo = Math.max(goal - currentStreak, 0);
  const rewardLabel =
    selectedReward === "bag" ? "Free Essential Wash" : "$14.99 LOD Credit";
  const lineFill = milestoneProgress(currentStreak, weeksActive);

  const handleRewardSelect = async (choice: StreakRewardChoice) => {
    setSelectedReward(choice);
    setSavingReward(true);
    try {
      await saveRewardChoice(choice);
    } finally {
      setSavingReward(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-[#F4F6F8]">
        <p className="font-sans text-sm text-[#6B7280]">Loading your streak...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F6F8] pb-16">
      <section className="bg-[#0A1628] py-8 md:py-12">
        <div className={`${pageX} flex items-start justify-between`}>
          <Reveal>
            <Eyebrow>My Streak</Eyebrow>
            <h1 className="font-heading text-[28px] font-bold text-white md:text-[40px]">
              Your LOD Streak
            </h1>
            <p className="mt-2 font-heading text-base text-white/65">
              Every bag brings you closer to a free wash.
            </p>
          </Reveal>
          <FlameIcon className="hidden h-20 w-20 shrink-0 md:block" />
        </div>
      </section>

      <div className={`${cardX} relative z-10 -mt-6 space-y-6`}>
        <Reveal>
          <div className="rounded-[20px] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:p-10">
            <div className="grid gap-10 md:grid-cols-3 md:items-center">
              <div className="text-center md:text-left">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-[#6B7280]">
                  Current Streak
                </p>
                <p className="font-heading text-[56px] font-bold leading-none text-[#00C2A8] md:text-[80px]">
                  {currentStreak}
                </p>
                <p className="font-sans text-sm text-[#6B7280]">bags completed</p>
              </div>
              <ProgressRing current={currentStreak} goal={goal} />
              <div className="text-center md:text-left">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-[#6B7280]">
                  Next Reward
                </p>
                <p className="mt-2 font-heading text-xl font-bold text-[#0A1628]">{rewardLabel}</p>
                <p className="mt-1 font-heading text-sm text-[#00C2A8]">
                  {bagsToGo} more bags to go
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Your Streak Card
            </h2>
            <div className="mt-8">
              <StreakCardVisual completed={currentStreak} cardId={cardId} />
            </div>
            {cardLinked ? (
              <div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/6 p-5">
                <p className="font-heading text-[15px] font-semibold text-[#10B981]">
                  Card linked ✓  your physical stamps sync automatically.
                </p>
              </div>
            ) : (
              <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/6 p-5">
                <p className="font-heading text-[15px] font-semibold text-[#0A1628]">
                  Scan the QR code on your physical LOD streak card to link it. Your driver
                  delivers your card with your first order.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Choose your reward at 10 bags
            </h2>
            <p className="mt-1 font-heading text-sm text-[#6B7280]">
              Your preference is saved. Change anytime before you hit 10.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {(
                [
                  {
                    id: "bag" as const,
                    icon: <BagRewardIcon />,
                    title: "1 Free Essential Bag",
                    value: "$41.99 value",
                    desc: "Next day pickup and delivery included.",
                  },
                  {
                    id: "credit" as const,
                    icon: <CoinRewardIcon />,
                    title: "$14.99 LOD Credit",
                    value: "Applied to any order",
                    desc: "Use toward any future LOD order.",
                  },
                ] as const
              ).map((opt) => {
                const selected = selectedReward === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    disabled={savingReward}
                    onClick={() => handleRewardSelect(opt.id)}
                    className={`rounded-xl p-6 text-left transition-colors disabled:opacity-70 ${
                      selected
                        ? "border-2 border-[#00C2A8]"
                        : "border border-[#E8EAED] hover:border-[#00C2A8]/40"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      {opt.icon}
                      <span
                        className={`mt-1 h-5 w-5 rounded-full border-2 ${
                          selected
                            ? "border-[#00C2A8] bg-[#00C2A8]"
                            : "border-[#E8EAED]"
                        }`}
                      >
                        {selected && (
                          <span className="block h-full w-full scale-[0.4] rounded-full bg-white" />
                        )}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#0A1628]">
                      {opt.title}
                    </h3>
                    <p className="font-sans text-[13px] text-[#00C2A8]">{opt.value}</p>
                    <p className="mt-1 font-heading text-[13px] text-[#6B7280]">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 font-sans text-[13px] text-[#00C2A8]">
              Your current preference:{" "}
              {selectedReward === "bag" ? "Free Essential Bag" : "$14.99 Credit"}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Your Milestones
            </h2>
            <p className="mt-1 font-heading text-sm text-[#6B7280]">
              Every streak unlocks something.
            </p>
            <div className="relative mt-8 pl-8">
              <div className="absolute bottom-2 left-[11px] top-2 w-0.5 bg-[#E8EAED]" />
              <div
                className="absolute left-[11px] top-2 w-0.5 bg-[#00C2A8] transition-all duration-1000"
                style={{ height: `${lineFill}%` }}
              />
              <div className="space-y-8">
                {milestones.map((m) => {
                  const reached = isMilestoneReached(m.id, currentStreak, weeksActive);
                  const isCurrent =
                    m.isGoal && currentStreak < 10 && currentStreak >= 4;

                  return (
                    <div
                      key={m.id}
                      className={`relative flex gap-6 ${
                        m.isGoal
                          ? "-ml-4 rounded-r-lg border-l-[3px] border-[#00C2A8] bg-[#00C2A8]/6 py-4 pl-4 pr-4"
                          : ""
                      }`}
                    >
                      <div
                        className={`absolute -left-8 flex shrink-0 items-center justify-center rounded-full ${
                          m.isGoal ? "h-8 w-8" : "h-6 w-6"
                        } ${
                          reached
                            ? m.isLegend
                              ? "bg-[#D4A843] text-white"
                              : "bg-[#00C2A8] text-white"
                            : isCurrent
                              ? "border-2 border-[#00C2A8] bg-white ring-4 ring-[#00C2A8]/20"
                              : "border-2 border-[#E8EAED] bg-white"
                        }`}
                      >
                        {reached && (
                          <span className="text-xs font-bold">{m.isGoal ? "★" : "✓"}</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className={`font-heading font-bold ${
                              m.isGoal ? "text-lg" : "text-base"
                            } ${reached ? "text-[#0A1628]" : "text-[#6B7280]"}`}
                          >
                            {m.label}
                          </h3>
                          {m.isGoal && (
                            <span className="rounded-full bg-[#00C2A8]/15 px-2 py-0.5 font-sans text-[11px] font-medium text-[#00C2A8]">
                              YOUR GOAL
                            </span>
                          )}
                          {reached && (
                            <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-sans text-[11px] font-medium text-[#10B981]">
                              Earned ✓
                            </span>
                          )}
                        </div>
                        <p
                          className={`mt-1 font-heading text-sm ${
                            reached ? "text-[#10B981]" : "text-[#6B7280]"
                          }`}
                        >
                          {m.reward}
                        </p>
                        {m.note && (
                          <p className="mt-1 font-heading text-sm text-[#6B7280]">{m.note}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Recent Stamps
            </h2>
            {recentStampRows.length === 0 ? (
              <div className="py-12 text-center">
                <p className="font-heading text-base text-[#6B7280]">No stamps yet.</p>
                <p className="mt-1 font-heading text-sm text-[#6B7280]">
                  Complete your first order to earn your first stamp.
                </p>
                <Link
                  href="/order"
                  className="mt-6 inline-block rounded-lg bg-[#00C2A8] px-6 py-2.5 font-sans text-sm font-bold text-[#0A1628]"
                >
                  Schedule Pickup
                </Link>
              </div>
            ) : (
              <div className="mt-4">
                {recentStampRows.map((stamp) => (
                  <div
                    key={stamp.orderId}
                    className="flex items-center gap-4 border-b border-[#F4F6F8] py-4 last:border-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00C2A8] text-sm text-white">
                      ✓
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-sans text-sm font-bold text-[#0A1628]">
                        {stamp.orderId}
                      </p>
                      <p className="font-sans text-[13px] text-[#6B7280]">{stamp.date}</p>
                    </div>
                    <p className="font-sans text-[13px] font-medium text-[#00C2A8]">
                      Stamp #{stamp.stamp}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-[#0A1628] p-8 md:p-10">
            <h2 className="font-heading text-[22px] font-bold text-white">How it works</h2>
            <Stagger className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <BagCheckIcon />,
                  title: "Complete an order",
                  body: "Every delivered LOD order earns one stamp.",
                },
                {
                  icon: <CardStampIcon />,
                  title: "Driver stamps your card",
                  body: "Your driver physically stamps your card on every delivery.",
                },
                {
                  icon: <GiftIcon />,
                  title: "Claim at 10 bags",
                  body: "Choose a free Essential wash or $14.99 LOD credit.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="text-center md:text-left">
                    {item.icon}
                    <h3 className="font-heading text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-heading text-sm text-white/65">{item.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-8 border-t border-white/8 pt-6 text-center font-sans text-[13px] text-white/40">
              Your streak resets after you claim your reward. Start again immediately.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
