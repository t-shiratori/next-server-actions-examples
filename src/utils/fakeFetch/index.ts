type Args<TRequest, TResponse> = {
  reqBody?: TRequest;
  resBody?: TResponse;
  delayTime?: number;
  fail?: boolean;
};

type Return<TResponse> = {
  ok: boolean;
  response?: TResponse;
};

export const fakeFetch = async <TRequest, TResponse>({
  reqBody,
  delayTime = 1000,
  fail = false,
  resBody,
}: Args<TRequest, TResponse>): Promise<Return<TResponse>> => {
  console.log('fakeFetch:', { reqBody });

  const result: Return<TResponse> = { ok: true, response: resBody };

  await new Promise((resolve, reject) => {
    if (fail) {
      setTimeout(() => {
        console.log('fetch error');
        result.ok = false;
        reject();
      }, delayTime);
      return;
    }

    setTimeout(() => {
      console.log('fetch success');
      resolve(true);
    }, delayTime);
  });

  if (!result.ok) {
    throw new Error('Fetch failed');
  }

  return result;
};
