import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Sign In | LOD",
  description: "Sign in to your LOD account to schedule pickups and track orders.",
};

export default function LoginPage() {
  return <LoginForm />;
}
