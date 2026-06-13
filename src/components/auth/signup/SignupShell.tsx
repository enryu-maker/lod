import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import type { SignupStep } from "@/components/auth/auth-shell-content";

type SignupShellProps = {
  children: React.ReactNode;
  showLoginLink?: boolean;
  signupStep?: SignupStep;
};

export default function SignupShell({
  children,
  showLoginLink = true,
  signupStep = 1,
}: SignupShellProps) {
  return (
    <AuthShell
      variant="signup"
      signupStep={signupStep}
      footer={
        showLoginLink ? (
          <p className="text-center font-heading font-normal text-sm text-[#6B7280]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-sans font-medium text-[#00C2A8] hover:text-[#00C2A8]/80 transition-colors"
            >
              Sign in
            </Link>
          </p>
        ) : undefined
      }
    >
      {children}
    </AuthShell>
  );
}
