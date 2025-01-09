import React from 'react';
import PopOver from '../../popover';
import { MdAddCircleOutline } from 'react-icons/md';

type Props = {
  children: React.ReactNode;
  label: string;
};

const TriggerButton = ({ children, label }: Props) => {
  return (
    <PopOver
      className="w-[400px]"
      trigger={
        <div className="border-2 border-dashed w-full border-gray-300 hover:bg-gray-100 hover:opacity-90 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-4">
          <MdAddCircleOutline className="text-blue-500 h-6 w-6" />
          <p className="text-gray-600 font-bold">{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  );
};

export default TriggerButton;
