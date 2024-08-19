'use server';

import { fakeFetch } from '@/utils/fakeFetch';
import { showCookie } from '@/utils/showCookie';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export type ReturnState = {
  message: string;
};

export async function somethingUpdate(
  prevState: any,
  formData: FormData
): Promise<ReturnState> {
  console.log('somethingUpdate: ', { prevState, formData });

  showCookie();

  try {
    const res = await fakeFetch<FormData, undefined>({
      reqBody: formData,
      delayTime: 500,
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
