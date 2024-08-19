'use client';

import { SubmitButton } from '@/components/form/SubmitButton';
import { InputText } from '@/components/form/InputText';
import { useState } from 'react';
import { createAction } from './actions';

export const Form = () => {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  return (
    <form action={createAction}>
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
