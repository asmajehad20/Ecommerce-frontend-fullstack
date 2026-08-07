import { createContext } from "react";


export const UserContext = createContext();

const UserContextProvider = ({children})=>{
    console.log(`hello, im user context`);
    return <UserContext.Provider>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;
