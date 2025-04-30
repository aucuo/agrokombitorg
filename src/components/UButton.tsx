import React from "react";
import "./UButton.scss";

type UButtonProps = {
    children?: React.ReactNode;
    variant?:
        | "primary"
        | "dark"
        | "white"
        | "transparent"
        | "transparent-white"
    size?: "small" | "circle";
    className?: string;
    onClick?: ()=>void;
};

function UButton({ children, variant = "primary", size, className, onClick }: UButtonProps) {
    return (
        <button
            className={`btn btn--${variant}${size ? ` btn--${size}` : ""} ${className || ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default UButton;