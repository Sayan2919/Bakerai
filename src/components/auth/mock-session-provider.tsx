"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface MockUser {
  name: string;
  email: string;
}

interface SessionState {
  user: MockUser | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  login: (email: string, name?: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
}

const SessionContext = createContext<SessionState | null>(null);

const STORAGE_KEY = "bakerai-session";

export function MockSessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore corrupt/unavailable storage
    }
    setIsHydrated(true);
  }, []);

  const persist = useCallback((next: MockUser | null) => {
    setUser(next);
    try {
      if (next) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore unavailable storage
    }
  }, []);

  const login = useCallback(
    (email: string, name?: string) => {
      persist({ name: name ?? email.split("@")[0], email });
    },
    [persist]
  );

  const signup = useCallback(
    (name: string, email: string) => {
      persist({ name, email });
    },
    [persist]
  );

  const logout = useCallback(() => persist(null), [persist]);

  return (
    <SessionContext.Provider
      value={{ user, isAuthenticated: !!user, isHydrated, login, signup, logout }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within MockSessionProvider");
  return ctx;
}
