import React from "react";
import {
  Building2,
  Calendar,
  CircleCheck,
  ClipboardList,
  Fingerprint,
  Home,
  Info,
  MapPin,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const smIcon = "w-5 h-5 text-primary";

type StepItem = {
  id: string;
  stepNum: string;
  title: string;
  description: string;
  highlighted?: boolean;
  alertText?: string;
  icon: React.ReactNode;
};

const steps: StepItem[] = [
  {
    id: "step-1",
    stepNum: "01",
    title: "You Schedule (60 Seconds)",
    description:
      "Book your pickup online at lodvalet.com or via our app. Select your exact preferred time window. No confusing forms, just a few clicks to a laundry-free week.",
    alertText:
      "Wednesday pickups fill fastest. Schedule early to secure your preferred slot.",
    icon: <Calendar className={smIcon} strokeWidth={2.5} aria-hidden="true" />,
  },
  {
    id: "step-2",
    stepNum: "02",
    title: "Driver Picks Up",
    description:
      "Receive a text 30 minutes before arrival. Your driver weighs your bag at the door, photographs the seal, and secures it in their vehicle for transport to our partner facility.",
    icon: <Truck className={smIcon} strokeWidth={2.5} aria-hidden="true" />,
  },
  {
    id: "step-3",
    stepNum: "03",
    title: "Partner Facility Processes",
    description:"Your garments go to our vetted partner facilities. Colors are sorted, pockets checked, and items washed with premium LOD-approved detergents. Then folded to LOD standard retail-store quality, every time.",
    icon: <Building2 className={smIcon} strokeWidth={2.5} aria-hidden="true" />,
  },
  {
    id: "step-4",
    stepNum: "04",
    title: "Quality Check",
        description:
      "Before your order leaves the facility, it goes through a full quality checklist. Every fold checked. Every item counted. Nothing ships unless it meets the standard.",
    icon: <CircleCheck className={smIcon} strokeWidth={2.5} aria-hidden="true" />,
  },
  {
    id: "step-5",
    stepNum: "05",
    title: "Delivered Back",
    description:
      "Your laundry is delivered back within your chosen window. You get a text the moment it is placed at your door. Put it straight in your closet. Done.",
    icon: <Home className={smIcon} strokeWidth={2.5} aria-hidden="true" />,
  },
  {
    id: "step-6",
    stepNum: "06",
    title: "Streak + Review",
    description:
      "Rate your service and help us stay sharp. Keep the routine going to build your streak. Every 10 bags earns you a free Essential wash or $14.99 LOD credit.",
    highlighted: true,
    icon: <Star className={smIcon} strokeWidth={2.5} aria-hidden="true" />,
  },
];

export default function DetailedMatrix() {
  return (
    <Reveal as="section" className="py-24 md:py-32 bg-[#F4F6F8]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[120px]">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-[#0e1513] mb-6">
            Every step, in detail.
          </h2>
          <p className="font-heading font-normal text-base md:text-lg text-surface-bright/70 leading-relaxed">
            From schedule to delivery. Here&apos;s exactly what happens with your
            order.
          </p>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <StaggerItem
              key={step.id}
              className={`relative flex flex-col items-start p-8 md:p-10 rounded-[20px] transition-transform duration-300 hover:-translate-y-1 ${
                step.highlighted
                  ? "bg-white border-2 border-primary shadow-xl shadow-primary/5"
                  : "bg-[#f7f9f8] border border-outline/10"
              }`}
            >
              {step.highlighted && (
                <div className="absolute top-8 right-8 inline-flex items-center px-3 py-1 rounded-full border border-[#00C2A8] font-sans text-[10px] font-medium tracking-widest text-[#00C2A8] uppercase">
                  HANDLED.
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-sans font-medium text-base mb-6 ${
                  step.highlighted
                    ? "bg-primary/10 text-primary-container"
                    : "bg-outline-variant/10 text-surface-bright"
                }`}
              >
                {step.stepNum}
              </div>

              <div className="flex items-center gap-2 mb-3">
                {step.icon}
                <span className="font-sans font-medium text-xs uppercase tracking-wider text-primary">
                  Step {step.stepNum}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-xl md:text-2xl text-[#0e1513] mb-4">
                {step.title}
              </h3>

              <p className="font-heading font-normal text-sm md:text-base text-surface-bright/70 leading-relaxed">
                {step.description}
              </p>

              {step.alertText && (
                <div className="mt-5 w-full p-4 rounded-lg bg-white border border-outline/10 flex items-start gap-3">
                  <Info
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="font-heading font-normal text-xs md:text-sm text-surface-bright/70">
                    {step.alertText}
                  </span>
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
}
