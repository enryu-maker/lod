"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  milestones,
  recentStamps,
  streakDemo,
  type StreakRewardChoice,
} from "@/lib/streak-content";

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
  reduceMotion,
}: {
  current: number;
  goal: number;
  reduceMotion: boolean | null;
}) {
  const size = 160;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = Math.min(current / goal, 1);
  const [offset, setOffset] = useState(reduceMotion ? circumference * (1 - percent) : circumference);

  useEffect(() => {
    if (reduceMotion) {
      setOffset(circumference * (1 - percent));
      return;
    }
    const id = window.requestAnimationFrame(() => {
      setOffset(circumference * (1 - percent));
    });
    return () => window.cancelAnimationFrame(id);
  }, [circumference, percent, reduceMotion]);

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E8EAED"
          strokeWidth={stroke}
        />
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
          style={{ transition: reduceMotion ? "none" : "stroke-dashoffset 1.2s ease-out" }}
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

function StreakCardVisual({ completed }: { completed: number }) {
  const total = 10;
  return (
    <div className="mx-auto max-w-[480px]">
      <div
        className="aspect-[3.5/2.5] rounded-xl bg-[#0A1628] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        style={{ maxWidth: 480 }}
      >
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
                  done
                    ? "bg-[#00C2A8] text-white"
                    : "border-2 border-white/20 text-white/30"
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
          <div className="flex h-12 w-12 items-center justify-center rounded bg-white">
            <div className="grid grid-cols-3 gap-0.5 p-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 bg-[#0A1628]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StreakProgramContent() {
  const reduceMotion = useReducedMotion();
  const { currentStreak, goal, cardLinked } = streakDemo;
  const [rewardChoice, setRewardChoice] = useState<StreakRewardChoice>(streakDemo.rewardChoice);
  const bagsToGo = goal - currentStreak;
  const rewardLabel =
    rewardChoice === "bag" ? "Free Essential Wash" : "$14.99 LOD Credit";

  return (
    <div className="bg-[#F4F6F8] pb-16">
      {/* Header */}
      <section className="bg-[#0A1628] py-8 md:py-12">
        <div className={`${pageX} flex items-start justify-between`}>
          <Reveal>
            <Eyebrow>My Streak</Eyebrow>
            <h1 className="font-heading text-[28px] font-bold text-white md:text-[40px]">
              🔥 Your LOD Streak
            </h1>
            <p className="mt-2 font-heading text-base text-white/65">
              Every bag brings you closer to a free wash.
            </p>
          </Reveal>
          <motion.span
            className="hidden text-[80px] md:block"
            aria-hidden
            animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            🔥
          </motion.span>
        </div>
      </section>

      <div className={`${cardX} relative z-10 -mt-6 space-y-6 md:-mt-6`}>
        {/* Counter hero */}
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
              <ProgressRing
                current={currentStreak}
                goal={goal}
                reduceMotion={reduceMotion}
              />
              <div className="text-center md:text-left">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-[#6B7280]">
                  Next Reward
                </p>
                <p className="mt-2 text-3xl" aria-hidden>
                  🎁
                </p>
                <p className="font-heading text-xl font-bold text-[#0A1628]">{rewardLabel}</p>
                <p className="mt-1 font-heading text-sm text-[#00C2A8]">
                  {bagsToGo} more bags to go
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Physical card */}
        <Reveal>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Your Streak Card
            </h2>
            <div className="mt-8">
              <StreakCardVisual completed={currentStreak} />
            </div>
            {cardLinked ? (
              <div className="mt-6 flex gap-4 rounded-lg border border-emerald-500/20 bg-emerald-500/6 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white text-sm">
                  ✓
                </span>
                <div>
                  <p className="font-heading text-[15px] font-semibold text-[#10B981]">
                    Card linked and syncing
                  </p>
                  <p className="font-heading text-[13px] text-[#6B7280]">
                    Your physical stamps are automatically reflected here.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-4 rounded-lg border border-amber-500/20 bg-amber-500/6 p-5 sm:flex-row sm:items-center">
                <span className="text-2xl" aria-hidden>
                  📱
                </span>
                <div className="flex-1">
                  <p className="font-heading text-[15px] font-semibold text-[#0A1628]">
                    Link your physical streak card
                  </p>
                  <p className="font-heading text-[13px] text-[#6B7280]">
                    Scan the QR code on your physical card to sync your stamps.
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-lg border-2 border-[#00C2A8] px-4 py-2 font-sans text-sm font-medium text-[#00C2A8]"
                >
                  How to Link
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* Reward choice */}
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
                    icon: "👜",
                    title: "1 Free Essential Bag",
                    value: "$41.99 value",
                    desc: "Next day pickup and delivery included.",
                  },
                  {
                    id: "credit" as const,
                    icon: "💳",
                    title: "$14.99 LOD Credit",
                    value: "Applied to any order",
                    desc: "Use toward any future LOD order.",
                  },
                ] as const
              ).map((opt) => {
                const selected = rewardChoice === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setRewardChoice(opt.id)}
                    className={`rounded-xl p-6 text-left transition-colors ${
                      selected
                        ? "border-2 border-[#00C2A8]"
                        : "border border-[#E8EAED] hover:border-[#00C2A8]/40"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-4xl" aria-hidden>
                        {opt.icon}
                      </span>
                      <span
                        className={`mt-1 h-5 w-5 rounded-full border-2 ${
                          selected
                            ? "border-[#00C2A8] bg-[#00C2A8]"
                            : "border-[#E8EAED]"
                        }`}
                      >
                        {selected && (
                          <span className="block h-full w-full rounded-full bg-white scale-[0.4]" />
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
              {rewardChoice === "bag" ? "Free Essential Bag" : "$14.99 Credit"}
            </p>
          </div>
        </Reveal>

        {/* Milestones */}
        <Reveal>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Your Milestones
            </h2>
            <p className="mt-1 font-heading text-sm text-[#6B7280]">
              Every streak unlocks something.
            </p>
            <div className="relative mt-8 pl-8">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#E8EAED]" />
              <div
                className="absolute left-[11px] top-2 w-0.5 bg-[#00C2A8] transition-all duration-1000"
                style={{ height: `${Math.min(100, (currentStreak / goal) * 80)}%` }}
              />
              <div className="space-y-8">
                {milestones.map((m) => {
                  const reached =
                    m.isGoal
                      ? currentStreak >= 10
                      : m.id === "4-weeks"
                        ? streakDemo.weeksActive >= 4
                        : false;
                  const isCurrent =
                    m.isGoal && currentStreak < 10 && currentStreak >= 4;

                  return (
                    <div
                      key={m.id}
                      className={`relative flex gap-6 ${
                        m.isGoal
                          ? "rounded-r-lg border-l-[3px] border-[#00C2A8] bg-[#00C2A8]/6 py-4 pr-4 -ml-4 pl-4"
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

        {/* Recent stamps */}
        <Reveal>
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-heading text-[22px] font-bold text-[#0A1628]">
              Recent Stamps
            </h2>
            {recentStamps.length === 0 ? (
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
                {recentStamps.map((stamp) => (
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

        {/* How it works */}
        <Reveal>
          <div className="rounded-2xl bg-[#0A1628] p-8 md:p-10">
            <h2 className="font-heading text-[22px] font-bold text-white">How it works</h2>
            <Stagger className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: "✓",
                  title: "Complete an order",
                  body: "Every delivered LOD order earns one stamp.",
                },
                {
                  icon: "▣",
                  title: "Driver stamps your card",
                  body: "Your driver physically stamps your card on every delivery.",
                },
                {
                  icon: "🎁",
                  title: "Claim at 10 bags",
                  body: "Choose a free Essential wash or $14.99 LOD credit.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="text-center md:text-left">
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-white">
                      {item.icon}
                    </span>
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
