import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Rates from '../../components/Rates';

export default function currencyPage() {
  const router = useRouter();
  const { currencyCode } = router.query;
  return (
    <Layout>
      <Rates currencyCode={currencyCode} />
    </Layout>
  );
}
