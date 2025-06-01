import React from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

type Props<T extends FieldValues> = {
  className?: string;
  labelName?: string;
  labelClass?: string;
  wrapperClass?: string;
  placeHolderClass?: string;
  name: string;
  register?: UseFormRegister<T>;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = <T extends FieldValues>(props: Props<T>) => {
  const {
    className = '',
    labelName = '',
    labelClass = '',
    wrapperClass = '',
    placeHolderClass = 'placeHolder',
    name,
    register,
    error,
    ...rest
  } = props;

  return (
    <>
      <div className={`flex flex-col mb-[10px] ${wrapperClass}`}>
        {labelName.length && (
          <span className={`${labelClass}`}>{labelName}</span>
        )}
        <input
          className={`outline-none ${className} ${placeHolderClass}`}
          {...(register ? register(name as any) : {})}
          {...rest}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    </>
  );
};

export default Input;
