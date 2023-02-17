import {twMerge} from 'tailwind-merge';

interface Props extends React.ComponentProps<'input'> {}

const Input = ({className, type = 'text', ...props}: Props) => {
    return (
        <input
            className={twMerge(
                'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
                className
            )}
            type={type}
            {...props}
        />
    );
};

export default Input;
