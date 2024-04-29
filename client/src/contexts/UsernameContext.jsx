import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from 'prop-types';

const UsernameContext = createContext();

export function UsernameProvider({ children }) {
    const [username, setUsername] = useState("");
    const [userAvatar, setUserAvatar] = useState("");

    const contextValue = useMemo(() => ({
        username,
        setUsername,
        userAvatar,
        setUserAvatar
    }), [username, setUsername, userAvatar, setUserAvatar]);

    return (
        <UsernameContext.Provider value={contextValue}>
            {children}
        </UsernameContext.Provider>
    );
}

export const useUsername = () => useContext(UsernameContext);

UsernameProvider.propTypes = {
    children: PropTypes.node.isRequired
};