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

  return (
    <div>
      <form action={formAction}>
        <InputText name="customerId" />
        <InputText name="amount" />
        <InputText name="status" />
        <SubmitButton label="送信" />
      </form>

      <div>`state.message: ` {state?.message}</div>
    </div>
  );
};
