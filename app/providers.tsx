'use client';

import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { SessionProvider, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { ReactNode, useMemo } from 'react';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function useAuth() {
  const { data: session, update } = useSession();
  return useMemo(
    () => ({
      isLoading: session === undefined,
      isAuthenticated: session !== null,
      fetchAccessToken: async ({
        forceRefreshToken,
      }: {
        forceRefreshToken: boolean;
      }) => {
        if (forceRefreshToken) {
          const updatedSession = await update();
          return updatedSession?.convexToken ?? null;
        }
        return session?.convexToken ?? null;
      },
    }),
    [session, update]
  );
}

export default function Providers({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <ConvexProvider client={convex} useAuth={useAuth}>
        {children}
      </ConvexProvider>
    </SessionProvider>
  );
}
