"use client";

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const privateRoutes = ["/profile", "/notes"];
function isPrivateRoute(path: string) {
  return privateRoutes.some((route) => path.startsWith(route));
}

const AuthProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useAuthStore((state) => state.setUser);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const verifySession = async () => {
      try {
        setIsLoading(true);
        console.log("🔍 Verifying session, pathname:", pathname);
        
        const sessionValid = await checkSession();
        console.log("✅ Session valid:", sessionValid);

        if (sessionValid) {
          const user = await getMe();
          console.log("👤 User:", user);
          
          if (user) {
            setUser(user);
          } else {
            clearIsAuthenticated();
          }
        } else {
          clearIsAuthenticated();
        }
      } catch (error) {
        console.error("❌ Session verification failed:", error);
        clearIsAuthenticated();
      } finally {
        setIsLoading(false);
      }
    };

    verifySession();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (isPrivateRoute(pathname) && !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;