'use client';

import { ReactNode, useMemo } from 'react';
import { ConvexProviderWithAuth, ConvexReactClient } from 'convex/react';
import { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';

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
          const session = await update();
          return session?.convexToken ?? null;
        }
      },
    }),
    [JSON.stringify(session?.user)]
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
      <ConvexProviderWithAuth client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithAuth>
    </SessionProvider>
  );
}
