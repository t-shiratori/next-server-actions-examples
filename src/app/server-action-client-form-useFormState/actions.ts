'use server';

import { fakeFetch } from '@/utils/fakeFetch';
import { redirect } from 'next/navigation';

export type ReturnState = {
  message: string;
};

export async function somethingUpdate(
  prevState: any,
  formData: FormData
): Promise<ReturnState> {
  console.log('somethingUpdate: ', { prevState, formData });

  try {
    const res = await fakeFetch<FormData, undefined>({
      reqBody: formData,
    }).catch((error) => {
      throw new Error(error);
    });
    console.log({ res });
    return {
      message: 'somthingAction successfully',
    };
  } catch (e) {
    throw new Error('fetch error');
  }
}
