'use client';

import { SubmitButton } from '@/components/form/SubmitButton';
import { InputText } from '@/components/form/InputText';
import { useState } from 'react';
import { ReturnState, somethingUpdate } from './actions';
import { useFormState } from 'react-dom';

const initialState: ReturnState = {
  message: '',
};

export const Form = () => {
  const [state, formAction] = useFormState(somethingUpdate, initialState);

  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div>
      <form action={formAction}>
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

      <div>`state.message: ` {state?.message}</div>
    </div>
  );
};
