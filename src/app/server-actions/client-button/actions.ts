'use server';

import { fakeFetch } from '@/utils/fakeFetch';
import { showCookie } from '@/utils/showCookie';

export type LikeState = {
  likes: number;
};

export async function incrementLike(prevState: number): Promise<LikeState> {
  console.log('incrementLike: ', { prevState });

  showCookie();

  try {
    const res = await fakeFetch<LikeState, LikeState>({
      reqBody: { likes: prevState },
      resBody: { likes: prevState + 1 },
      delayTime: 500,
    }).catch((error) => {
      throw new Error(error);
    });
    console.log({ res });
    return (
      res?.response ?? {
        likes: 0,
      }
    );
  } catch (e) {
    throw new Error('fetch error');
  }
}
