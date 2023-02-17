import {twMerge} from 'tailwind-merge';

interface Props extends React.ComponentProps<'label'> {}

const Label = ({className, children, ...props}: Props) => {
  return (
    <label
      className={twMerge('block text-sm font-medium text-gray-700', className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
