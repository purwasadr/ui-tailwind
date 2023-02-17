import {twMerge} from 'tailwind-merge';

interface Props extends React.ComponentProps<'textarea'> {}

const Textarea = ({className, defaultValue = '', ...props}: Props) => {
  return (
    <textarea
      className={twMerge(
        'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
        className
      )}
      defaultValue={defaultValue}
      {...props}
    />
  );
};

export default Textarea;
