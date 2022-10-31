import React from 'react';
// Auth Context
import {AuthContext} from "context/auth";

export default () => {
    const ctx = React.useContext(AuthContext);
    return ctx;
}
