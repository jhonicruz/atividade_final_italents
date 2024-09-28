import React from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

const InputForm = ({ label, id, type = 'text', setValue, value, ...rest }) => {
  return (
    <div className={twJoin('flex flex-col gap-1', rest.className)}>
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input
        {...rest}
        required
        id={id}
        value={value}
        type={type}
        onChange={({ target }) => setValue(target.value)}
        className="w-full rounded p-1 outline-emerald-500 text-zinc-800"
      />
    </div>
  );
};

export default InputForm;
