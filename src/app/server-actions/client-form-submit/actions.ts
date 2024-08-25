'use server';

import { showCookie } from '@/utils/showCookie';

export async function createAction(formData: FormData) {
  showCookie();
  console.log('createAction formData: ', formData);
}
