import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'submit' | 'button' | undefined;
    disabled?: boolean;
}
