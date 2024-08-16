import clsx from 'clsx';

import useApi from '@homework-task/hooks/useApi';
import { User } from '@homework-task/types/user';

const pClass = clsx('text-black opacity-60');

const UsersList: React.FC = () => {
    const { data, isLoading, error } = useApi<Array<User>>({
        endpoint: 'users',
        method: 'GET',
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (data?.length === 0 || !data) {
        return <p>Users not found.</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <ul className={clsx('overflow-auto', 'max-h-[600px]', 'px-3')}>
            {data.map((user: User) => (
                <li
                    key={user.id}
                    className={clsx('border', 'rounded-xl', 'p-3', 'my-4')}
                >
                    <h2 className={clsx('mb-3', 'text-2xl', 'font-semibold')}>
                        {user.name}
                    </h2>
                    <p className={pClass}>Username: {user.username}</p>
                    <p className={pClass}>Email: {user.email}</p>
                    <p className={pClass}>Phone: {user.phone}</p>
                </li>
            ))}
        </ul>
    );
};

export default UsersList;
