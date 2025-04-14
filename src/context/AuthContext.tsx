
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'customer' | 'seller';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (userData: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'customer' | 'seller';
  }) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Load user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // This would normally call an API, but for demo we'll use mock data
    try {
      // Simulate API call to verify credentials
      const usersData = localStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];
      
      const authenticatedUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (authenticatedUser) {
        // Remove password before storing in state/localStorage
        const { password: _, ...userWithoutPassword } = authenticatedUser;
        
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        
        toast.success(`Welcome back, ${authenticatedUser.firstName}!`);
        return true;
      } else {
        toast.error('Invalid email or password');
        return false;
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
    toast.info('You have been logged out');
  };

  const register = (userData: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'customer' | 'seller';
  }): boolean => {
    try {
      // Get existing users or initialize empty array
      const usersData = localStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];
      
      // Check if user with this email already exists
      const userExists = users.some((u: any) => u.email === userData.email);
      if (userExists) {
        toast.error('A user with this email already exists');
        return false;
      }
      
      // Create new user with ID
      const newUser = {
        ...userData,
        id: users.length > 0 ? Math.max(...users.map((u: any) => u.id)) + 1 : 1,
        createdAt: new Date().toISOString()
      };
      
      // Add to users array and save
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Log user in
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      
      toast.success('Registration successful!');
      return true;
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      return false;
    }
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
