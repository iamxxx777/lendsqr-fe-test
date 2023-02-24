import {
    DetailedHTMLProps,
    InputHTMLAttributes,
    useState,
    LegacyRef,
} from "react";
import styles from '../../../styles/UI.module.scss';

type Props = {
    label?: string;
    helptext?: string;
    inputClassName?: string;
    activeInput?: boolean;
    LeadingIcon?: () => JSX.Element;
    TrailingIcon?: () => JSX.Element;
    innerRef?: LegacyRef<HTMLInputElement>;
};

export default function Input(
    props: DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > &
        Props
) {
    const {
        id,
        label,
        disabled,
        readOnly,
        helptext,
        innerRef,
        className,
        LeadingIcon,
        TrailingIcon,
        defaultValue = "",
        inputClassName = "",
        activeInput = false,
        ...rest
    } = props;

    const [active, setActive] = useState(!!defaultValue || activeInput);

    const handleTextChange = (text: string) => {
        if (text !== "") {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    return (
        <div className={[styles.input_div, styles.input_container].join(" ")}>
            {label && (
                <label
                    className={[styles.label, (activeInput || active) && styles.activeLabel].join(" ")}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <div
                className={[styles.input_wrapper, (activeInput || active) && styles.input_active, (disabled || readOnly) && styles.input_disabled].join(" ")}>
                {LeadingIcon && (
                    <span className={styles.lead_icon}>
                        <LeadingIcon />
                    </span>
                )}
                <div className={styles.input_inner_wrapper}>
                    <input
                        {...rest}
                        ref={innerRef}
                        defaultValue={defaultValue}
                        className={[styles.input, disabled && styles.input_pointer_disabled, label && styles.label_active].join(" ")}
                        onChange={(e) => {
                            handleTextChange(e.target.value);
                            rest.onChange && rest.onChange(e);
                        }}
                    />
                    {TrailingIcon && (
                        <span className={styles.end_icon}>
                            <TrailingIcon />
                        </span>
                    )}
                </div>
            </div>
            {helptext && (
                <small className={styles.help_text}>
                    {helptext}
                </small>
            )}
        </div>
    );
}