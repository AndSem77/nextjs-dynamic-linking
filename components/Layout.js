import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav className='bg-green-100 w-full'>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
