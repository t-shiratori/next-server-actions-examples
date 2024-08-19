import { Heading } from '@/components/Heading';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="mt-8">
      <Heading>server-action-server-form</Heading>
      <div className="mt-8">{children}</div>
    </div>
  );
}
