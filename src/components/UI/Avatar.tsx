import React from "react";

import styles from "../../../styles/UI.module.scss"

type Props = {
    name?: string;
    isActive?: boolean;
    className?: string;
    image?: string | null;
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
};

const sizes = {
    sm: styles.avatar_sm,
    md: styles.avatar_md,
    lg: styles.avatar_lg,
    xl: styles.avatar_xl,
    xxl: styles.avatar_xxl,
};

export default function Avatar({
    image,
    name = "",
    size = "xl",
    className = "",
    isActive = false,
}: Props) {
    return (
        <div
            className={[styles.avatar, sizes[size], className].join(" ")}
            style={{
                ...(image && {
                    backgroundSize: "cover",
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center center",
                }),
            }}
        >
            {!image && (
                <h3 className={styles.avatar_text}>{name}</h3>
            )}
            {isActive && (
                <span />
            )}
        </div>
    );
}
