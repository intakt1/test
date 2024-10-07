import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sestavi Tla</h3>
            <p className="text-gray-600">
              Ustvarjamo kakovostna tla za vaš dom in poslovne prostore.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hitri Linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-800">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-800">
                  Izdelki
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-600">
              Email: info@sestavitla.si<br />
              Telefon: +386 1 234 5678<br />
              Naslov: Ljubljanska cesta 1, 1000 Ljubljana
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          © {new Date().getFullYear()} Sestavi Tla. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  );
};

export default Footer;