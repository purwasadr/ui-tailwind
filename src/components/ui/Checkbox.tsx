import {twMerge} from 'tailwind-merge';

interface Props extends React.ComponentProps<'input'> {}

const Checkbox = ({className, ...props}: Props) => {
  return (
    <input
      className={twMerge(
        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500',
        className
      )}
      {...props}
      type="checkbox"
    />
  );
};

export default Checkbox;
