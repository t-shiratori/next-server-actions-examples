'use server';

import { showCookie } from '@/utils/showCookie';

export async function updateAction(userId: string, formData: FormData) {
  showCookie();
  console.log('updateAction: ', { userId, formData });
}
