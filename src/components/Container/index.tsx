import { ReactNode } from 'react';
import { Nav } from '../Nav';

type Props = {
  children: ReactNode;
};
export const Container = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      <div className="m-2">{children}</div>
    </div>
  );
};
