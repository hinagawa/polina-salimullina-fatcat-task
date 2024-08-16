import { HeroProps } from './hero';
import { TrustBarProps } from './trustBar';

export interface Component {
    type: string;
    props: HeroProps | TrustBarProps;
}

export interface Section {
    type: string;
    props?: {
        [key: string]: string;
    };
    components: Array<Component>;
}

export interface PageGeneratorProps {
    sections: Array<Section>;
}
