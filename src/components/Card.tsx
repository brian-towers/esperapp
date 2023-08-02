import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-1/2 overflow-hidden border rounded-md">
        <div className="px-6 py-4">{children}</div>
      </div>
    </>
  );
};

export default Card;
