import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/AuthServices";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AuthData = {
    token: string;
    email: string;
    name: string;
}

type AuthContextData = {
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//@ts-ignore
export const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            //Try get the data from Async Storage
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                //If there are data, it's converted to an Object and the state is updated.
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
        } finally {
            setisLoading(false);
        }
    }

    async function signIn(email: string, password: string) {
        try {
            const authData = await authService.signIn(email, password);

            setAuthData(authData);
            AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
        } catch (error) {
            Alert.alert(error.message, 'Tente novamente');
        }
    }
    async function signOut() {
        setAuthData(undefined);
        AsyncStorage.removeItem('@AuthData');
    }

    return (
        <AuthContext.Provider value={{ authData, signIn, signOut, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}