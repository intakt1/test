import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Kakovostna tla"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Ustvarite dom s kakovostnimi tlemi
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Široka izbira talnih oblog za vsak prostor in okus
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Raziskujte izdelke
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;