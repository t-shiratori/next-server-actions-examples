import { ReactNode } from 'react';

type Props = {
  step?: 1 | 2 | 3;
  children: ReactNode;
};

export const Heading = ({ step = 1, children }: Props) => {
  if (step === 1) return <h1 className="text-2xl font-bold">{children}</h1>;
  if (step === 2) return <h2 className="text-2xl font-bold">{children}</h2>;
  if (step === 3) return <h3 className="text-2xl font-bold">{children}</h3>;
  return null;
};
