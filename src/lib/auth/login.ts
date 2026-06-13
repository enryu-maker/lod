import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

export type AccountStatus = "active" | "suspended" | "pending";

export class AuthError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

async function resolveAccountStatus(email: string): Promise<AccountStatus> {
  const normalized = email.trim().toLowerCase();

  // Demo statuses for UI testing until account API is wired
  if (normalized === "suspended@lodvalet.com") return "suspended";
  if (normalized === "pending@lodvalet.com") return "pending";

  return "active";
}

export async function loginWithEmail(
  email: string,
  password: string
): Promise<AccountStatus> {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new AuthError(
      "auth/not-configured",
      "Authentication is not configured yet."
    );
  }

  const credential = await signInWithEmailAndPassword(auth, email, password);
  const status = await resolveAccountStatus(credential.user.email ?? email);

  if (status !== "active") {
    await signOut(auth);
    throw new AuthError(`auth/account-${status}`, status);
  }

  return status;
}

export async function loginWithGoogle(): Promise<AccountStatus> {
  const auth = getFirebaseAuth();
  if (!auth) {
    throw new AuthError(
      "auth/not-configured",
      "Authentication is not configured yet."
    );
  }

  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(auth, provider);
  const status = await resolveAccountStatus(credential.user.email ?? "");

  if (status !== "active") {
    await signOut(auth);
    throw new AuthError(`auth/account-${status}`, status);
  }

  return status;
}

export async function sendPasswordReset(email: string): Promise<void> {
  const auth = getFirebaseAuth();
  if (!auth) {
    if (!isFirebaseConfigured()) {
      throw new AuthError(
        "auth/not-configured",
        "Password reset is not configured yet."
      );
    }
    throw new AuthError("auth/unavailable", "Unable to send reset email.");
  }

  await sendPasswordResetEmail(auth, email);
}
