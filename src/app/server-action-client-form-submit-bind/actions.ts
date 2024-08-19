'use server';

export async function updateAction(userId: string, formData: FormData) {
  console.log('updateAction: ', { userId, formData });
}
