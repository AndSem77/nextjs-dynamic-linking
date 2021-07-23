import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from 'react-modal';

const currencies = ['CAD', 'UAH', 'USD', 'MXN', 'AUD', 'EUR'];

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Dynamic Routing Linking</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=' bg-gray-100 flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <ul>
          {currencies.map((currency) => (
            <li key={currency}>
              <Link
                href={`currency/[currencyCode]?currencyCode=${currency}`}
                as={`/currency/${currency}`}
              >
                <a>{currency}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
