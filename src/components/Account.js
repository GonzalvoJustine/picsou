import React from 'react';
import SidebarLeft from "./SidebarLeft";

/**
 * Page Mon compte
 * @returns {JSX.Element}
 * @constructor
 */
function Account() {
    return (
        <div className="container">
            <h1 className="my-5">Mon Compte</h1>
            <SidebarLeft/>
        </div>
    )
}

export default Account;