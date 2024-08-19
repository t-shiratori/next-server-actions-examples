'use client';

import { SubmitButton } from '@/components/form/SubmitButton';
import { InputText } from '@/components/form/InputText';
import { useState } from 'react';
import { updateAction } from './actions';

type Props = {
  userId: string;
};

export const Form = ({ userId }: Props) => {
  const updateUserWithId = updateAction.bind(null, userId);

  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  return (
    <form action={updateUserWithId}>
      <InputText
        name="customerId"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <InputText
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <InputText
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <SubmitButton label="送信" />
    </form>
  );
};
