"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import SignupShell from "./SignupShell";
import SignupStep1Account from "./SignupStep1Account";
import SignupStep2Phone from "./SignupStep2Phone";
import SignupStep3FoundingMember from "./SignupStep3FoundingMember";
import StepTransition from "@/components/motion/StepTransition";
import {
  FOUNDING_MEMBER_ENABLED,
  FOUNDING_MEMBER_REMAINING,
  type SignupAccountData,
} from "./signup-utils";

const emptyAccount: SignupAccountData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function SignupWizardInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref");

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [account, setAccount] = useState<SignupAccountData>(emptyAccount);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const showFoundingStep =
    FOUNDING_MEMBER_ENABLED && FOUNDING_MEMBER_REMAINING > 0;

  const goToOrder = () => {
    router.push("/order");
  };

  const handleStep1Complete = (data: SignupAccountData) => {
    setAccount(data);
    setStep(2);
  };

  const handleStep2Complete = () => {
    if (showFoundingStep) {
      setStep(3);
    } else {
      goToOrder();
    }
  };

  const handleAcceptFounding = async () => {
    setIsProcessingPayment(true);
    // Stripe checkout placeholder
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsProcessingPayment(false);
    goToOrder();
  };

  return (
    <SignupShell showLoginLink={step === 1} signupStep={step}>
      <StepTransition stepKey={step}>
        {step === 1 && (
          <SignupStep1Account
            refCode={refCode}
            initialData={account}
            onContinue={handleStep1Complete}
          />
        )}
        {step === 2 && <SignupStep2Phone onVerified={handleStep2Complete} />}
        {step === 3 && showFoundingStep && (
          <SignupStep3FoundingMember
            remaining={FOUNDING_MEMBER_REMAINING}
            onAccept={handleAcceptFounding}
            onSkip={goToOrder}
            isProcessing={isProcessingPayment}
          />
        )}
      </StepTransition>
    </SignupShell>
  );
}

export default function SignupWizard() {
  return (
    <Suspense
      fallback={
        <SignupShell showLoginLink={false} signupStep={1}>
          <p className="font-heading font-normal text-sm text-[#6B7280] text-center">
            Loading...
          </p>
        </SignupShell>
      }
    >
      <SignupWizardInner />
    </Suspense>
  );
}
