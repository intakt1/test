import Products from '@/components/Products';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Naši izdelki</h1>
      <Products />
    </div>
  );
}