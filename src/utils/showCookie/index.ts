import { cookies } from 'next/headers';

export const showCookie = () => {
  const cookieStore = cookies();
  console.log({ cookieStore });
  console.log('cookieStore.size:', cookieStore.size);
  cookieStore.getAll().map((cookie) => console.log({ cookie }));
};
