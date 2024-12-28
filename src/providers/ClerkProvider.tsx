import { ClerkProvider as BaseClerkProvider } from '@clerk/clerk-react';
import { env } from '../config/env';
import { clerkAppearance } from '../config/clerk';

interface ClerkProviderProps {
  children: React.ReactNode;
}

export function ClerkProvider({ children }: ClerkProviderProps) {
  return (
    <BaseClerkProvider
      publishableKey={env.CLERK_PUBLISHABLE_KEY}
      appearance={clerkAppearance}
      afterSignOutUrl="/sign-in"
      afterSignInUrl="/"
      afterSignUpUrl="/"
    >
      {children}
    </BaseClerkProvider>
  );
}