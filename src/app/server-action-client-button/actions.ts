'use server';

import { fakeFetch } from '@/utils/fakeFetch';

export type LikeState = {
  likes: number;
};

export async function incrementLike(prevState: number): Promise<LikeState> {
  console.log('incrementLike: ', { prevState });

  try {
    const res = await fakeFetch<LikeState, LikeState>({
      reqBody: { likes: prevState },
      resBody: { likes: prevState + 1 },
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
