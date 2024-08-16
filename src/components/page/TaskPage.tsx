import clsx from 'clsx';

import { CustomForm } from '@homework-task/components/form/CustomForm';
import PageGenerator from '@homework-task/components/page/PageGenerator';
import UsersList from '@homework-task/components/UsersList';

const trustImages = [];
for (let i = 1; i <= 10; i++) {
    trustImages.push(`/media/cats/cat_${i}.png`);
}
const sectionsData = [
    {
        type: 'layoutSection',
        props: { backgroundColor: 'bg-red' },
        components: [
            {
                type: 'componentTrustBar',
                props: {
                    images: trustImages,
                },
            },
            {
                type: 'componentHero',
                props: {
                    title: 'Hello, World!',
                    image: 'media/hero.png',
                },
            },
        ],
    },
];

const TaskPage: React.FC = () => {
    return (
        <div className={clsx('flex', 'flex-col', 'h-screen', 'pb-3')}>
            <PageGenerator sections={sectionsData} />
            <div
                className={clsx(
                    'w-full',
                    'flex',
                    'flex-row',
                    'justify-evenly',
                    'py-3'
                )}
            >
                <div className={clsx('flex', 'flex-col', 'gap-5')}>
                    <a
                        className={clsx(
                            'flex',
                            'items-center',
                            'gap-2',
                            'rounded-xl',
                            'px-2',
                            'bg-black',
                            'text-white',
                            'w-[180px]',
                            'h-[100px]'
                        )}
                        href="/"
                    >
                        <span className={clsx('text-l')}>
                            Back to Landing Page
                        </span>
                    </a>
                    <CustomForm />
                </div>
                <UsersList />
            </div>
        </div>
    );
};

export default TaskPage;
