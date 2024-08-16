import clsx from 'clsx';

import { ButtonProps } from '@homework-task/types/button';

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    type,
    disabled,
}) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
