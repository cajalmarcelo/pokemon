import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link href="/">
            <img src="logo.png" alt="Logo" className="navbar-brand" style={{ width: '150px' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="container mt-4">
        {isLoading ? (
          <div className="text-center">Cargando...</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Layout;
