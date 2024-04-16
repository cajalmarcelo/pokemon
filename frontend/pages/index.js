import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import Pokemons from '../components/Pokemons';
import Loading from '../components/Carga';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
            {!isLoading && (
        <Layout>
          <Pokemons/>
        </Layout>
      )}
    </div>
  );
};

export default HomePage;
