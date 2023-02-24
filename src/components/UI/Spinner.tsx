import React from "react";
import styles from '../../../styles/UI.module.scss'

type Props = {
    size?: number;
    color?: string;
    className?: string;
};

export default function Spinner({
    size = 1,
}: Props) {
    const sides = 16 * size;

    return (
        <div
            className={styles.loadingio_spinner}
            style={{
                width: `${sides}px`,
                height: `${sides}px`
            }}
        >
            <div className={styles.spinner_container}>
                <div
                    style={{
                        top: `${sides / 2}px`,
                        left: `${sides / 2}px`,
                        width: `${sides - 8}px`,
                        height: `${sides - 8}px`,
                        borderWidth: `${2 * size}px`,
                        borderColor: "#D2D2D2"
                    }}
                />
            </div>
        </div>
    );
}
