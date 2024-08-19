import { ChangeEventHandler } from 'react';

type Props = {
  label?: string;
  value?: string | number;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const InputText = ({ label, value, name, onChange }: Props) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={name}
        type="text"
        value={value}
      />
    </div>
  );
};
