import React from 'react'
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Spinner from './Spinner';
import btnStyles from "../../../styles/UI.module.scss";

type Props = {
    icon?: string;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'cyan' | 'cyan_plain' | 'plain' | 'red_plain';
};

const variants = {
    cyan: btnStyles.cyan,
    cyan_plain: btnStyles.cyan_plain,
    plain: btnStyles.plain,
    red_plain: btnStyles.plain
};

const sizes = {
    sm: btnStyles.sm,
    md: btnStyles.md,
    lg: btnStyles.lg
};

export default function Button(
    props: DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > &
        Props) {
    const {
        loading,
        disabled,
        children,
        className,
        size = 'lg',
        type = 'button',
        variant = 'cyan',
        ...rest
    } = props;

    return (
        <button
            {...rest}
            type={type}
            disabled={loading || disabled}
            className={[btnStyles.button, variants[variant], sizes[size], className].join(" ")}
            // className={`button ${variants[variant]} my-2 ${sizes[size]} w-full ${className}`}
        >
            {loading ? <Spinner color="gray" size={1.7} /> : <>{children}</>}
        </button>
    );
}