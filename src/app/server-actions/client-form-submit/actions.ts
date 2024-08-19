'use server';

import { showCookie } from '@/utils/showCookie';
import { cookies } from 'next/headers';

export async function createAction(formData: FormData) {
  showCookie();
  console.log('createAction formData: ', formData);
}
