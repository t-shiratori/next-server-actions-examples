import Link from 'next/link';

export const Nav = () => {
  return (
    <ul className="m-4">
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/about'}>About</Link>
      </li>
      <li>
        <Link href={'/about/aboutChild'}>About Child</Link>
      </li>
      <li>
        <Link href={'/server-action-server-form'}>
          server-action-server-form
        </Link>
      </li>
      <li>
        <Link href={'/server-action-client-form-submit'}>
          server-action-client-form-submit
        </Link>
      </li>
      <li>
        <Link href={'/server-action-client-form-submit-bind'}>
          server-action-client-form-submit-bind
        </Link>
      </li>
      <li>
        <Link href={'/server-action-client-form-useFormState'}>
          server-action-client-form-useFormState
        </Link>
      </li>
      <li>
        <Link href={'/server-action-client-button'}>
          server-action-client-button
        </Link>
      </li>
    </ul>
  );
};
