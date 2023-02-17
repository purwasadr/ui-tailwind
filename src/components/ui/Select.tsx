import {twMerge} from 'tailwind-merge';

interface Props extends React.ComponentProps<'select'> {}

const Select = ({className, children}: Props) => {
  return (
    <select
      className={twMerge(
        ' block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
        className
      )}
    >
      {children}
    </select>
  );
};

export default Select;
