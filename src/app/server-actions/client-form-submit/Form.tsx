'use client';

import { SubmitButton } from '@/components/form/SubmitButton';
import { InputText } from '@/components/form/InputText';
import { useState } from 'react';
import { createAction } from './actions';

export const Form = () => {
  return (
    <form action={createAction}>
      <InputText name="customerId" />
      <InputText name="amount" />
      <InputText name="status" />
      <SubmitButton label="送信" />
    </form>
  );
};
