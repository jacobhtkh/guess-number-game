import * as React from 'react';
interface IPrimaryButtonProps {
  text: string;
  onClick: () => void;
}

const classNames = [
  'px-4',
  'py-2',
  'text-sm',
  'shadow bg-sky-100',
  'shadow-sky-600',
  'text-sky-700',
  'hover:bg-sky-600',
  'hover:text-sky-100',
  'rounded-md',
];

export const PrimaryButton: React.FunctionComponent<IPrimaryButtonProps> = ({
  text,
  onClick,
}: IPrimaryButtonProps) => {
  return (
    <button
      data-qa={'primary-button'}
      className={classNames.join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
