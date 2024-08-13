import { MouseEventHandler } from 'react';

interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}

export interface CardsProps {
    cards: Array<Card>;
}
