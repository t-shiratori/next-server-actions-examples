import Link from 'next/link';

export const Nav = () => {
  return (
    <ul className="m-4">
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <span className="m-4 font-bold">server-actions</span>
        <ul className="ml-12">
          <li className="list-disc mt-2">
            <Link href={'/server-actions/server-form-submit'}>
              server-form-submit
            </Link>
          </li>
          <li className="list-disc mt-2">
            <Link href={'/server-actions/client-form-submit'}>
              client-form-submit
            </Link>
          </li>
          <li className="list-disc mt-2">
            <Link href={'/server-actions/client-form-submit-bind'}>
              client-form-submit-bind
            </Link>
          </li>
          <li className="list-disc mt-2">
            <Link href={'/server-actions/client-form-useFormState'}>
              client-form-useFormState
            </Link>
          </li>
          <li className="list-disc mt-2">
            <Link href={'/server-actions/client-button'}>client-button</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
