import clsx from 'clsx';

import { LayoutProps } from '@homework-task/types/layout';

export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
