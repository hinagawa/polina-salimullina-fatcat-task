import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Hero } from '@homework-task/components/Hero';
import { PageGeneratorProps } from '@homework-task/types/pageGenerator';

import { TrustBar } from '../TrustBar';

const PageGenerator: React.FC<PageGeneratorProps> = ({ sections }) => {
    const resolveComponents: { [key: string]: React.ElementType } = {
        componentHero: Hero,
        componentTrustBar: TrustBar,
    };

    const resolveLayouts: { [key: string]: React.ElementType } = {
        layoutSection: ({
            children,
            className,
        }: {
            children: ReactNode;
            className?: string;
        }) => {
            return <div className={className}>{children}</div>;
        },
    };

    return (
        <div>
            {sections.map((layout, index) => {
                const LayoutComponent = resolveLayouts[layout.type] || 'div';
                return (
                    <LayoutComponent
                        key={index}
                        className={clsx(
                            layout.props?.backgroundColor || 'bg-white'
                        )}
                    >
                        {layout.components.map((component, componentIndex) => {
                            const Component: React.ElementType =
                                resolveComponents[component.type];
                            return Component ? (
                                <Component
                                    key={componentIndex}
                                    {...component.props}
                                />
                            ) : null;
                        })}
                    </LayoutComponent>
                );
            })}
        </div>
    );
};

export default PageGenerator;
