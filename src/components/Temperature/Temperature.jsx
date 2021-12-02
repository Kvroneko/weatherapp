import React from "react";

const Temperature = ({
    children,
}) => {
    return (
        <span>
            {children}
            &deg;
        </span>
    )
}

export default Temperature;
