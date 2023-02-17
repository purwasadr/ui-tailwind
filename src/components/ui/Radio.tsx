import {twMerge} from 'tailwind-merge';

interface Props extends React.ComponentProps<'input'> {}

const Radio = ({className, ...props}: Props) => {
  return (
    <input
      className={twMerge(
        'h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500',
        className
      )}
      type="radio"
      {...props}
    />
  );
};

export default Radio;
