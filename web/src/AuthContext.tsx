// web/src/AuthContext.tsx
import { createContext } from 'react';

// Define the shape of your User context
export interface UserContextType {
    user: {
        userId: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
        token: string;
    } | null;
    setUser: React.Dispatch<React.SetStateAction<{
        userId: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
        token: string;
    } | null>>;
}

export const AuthContext = createContext<UserContextType | undefined>(undefined);