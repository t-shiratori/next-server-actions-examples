import { Heading } from '@/components/Heading';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="mt-8">
      <Heading>client-form-submit</Heading>
      <div className="mt-8">{children}</div>
    </div>
  );
}
