'use server';

import { showCookie } from '@/utils/showCookie';
import { cookies } from 'next/headers';

export async function updateAction(userId: string, formData: FormData) {
  showCookie();
  console.log('updateAction: ', { userId, formData });
}
