import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 py-2 text-sm font-medium leading-5 border-b-2 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-white text-white'
                    : 'border-transparent text-green-200 hover:text-white') +
                ' ' + className
            }
        >
            {children}
        </Link>
    );
}
