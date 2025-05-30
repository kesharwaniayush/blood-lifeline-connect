
import React, { createContext, useContext, useState, useEffect } from "react";

// Define types for our context
type UserRole = "donor" | "needer" | "admin" | "user";

type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  bloodType?: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
  isDonor: () => boolean;
  isNeeder: () => boolean;
};

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  isAdmin: () => false,
  isDonor: () => false,
  isNeeder: () => false,
});

// Mock users for demonstration purposes
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    role: "admin" as UserRole,
  },
  {
    id: "2",
    email: "user@example.com",
    password: "user123",
    name: "Regular User",
    role: "user" as UserRole,
  },
  {
    id: "3",
    email: "donor@example.com",
    password: "donor123",
    name: "Blood Donor",
    role: "donor" as UserRole,
    bloodType: "O+",
  },
  {
    id: "4",
    email: "needer@example.com",
    password: "needer123",
    name: "Blood Needer",
    role: "needer" as UserRole,
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("bloodlife_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid credentials");
    }

    // Create user object without password
    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem("bloodlife_user", JSON.stringify(userWithoutPassword));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("bloodlife_user");
  };

  const isAdmin = () => {
    return user?.role === "admin";
  };

  const isDonor = () => {
    return user?.role === "donor";
  };

  const isNeeder = () => {
    return user?.role === "needer";
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, isAdmin, isDonor, isNeeder }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
