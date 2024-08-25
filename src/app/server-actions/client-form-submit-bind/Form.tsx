'use client';

import { SubmitButton } from '@/components/form/SubmitButton';
import { InputText } from '@/components/form/InputText';
import { updateAction } from './actions';

type Props = {
  userId: string;
};

export const Form = ({ userId }: Props) => {
  const updateUserWithId = updateAction.bind(null, userId);

  return (
    <form action={updateUserWithId}>
      <InputText name="customerId" />
      <InputText name="amount" />
      <InputText name="status" />
      <SubmitButton label="送信" />
    </form>
  );
};
