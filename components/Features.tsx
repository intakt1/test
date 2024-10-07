import { CheckCircle, Truck, ThumbsUp, Zap } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Visoka kakovost',
    description: 'Uporabljamo le najboljše materiale za dolgotrajnost in estetiko.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Hitra dostava',
    description: 'Zagotavljamo hitro in zanesljivo dostavo po vsej Sloveniji.',
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Zadovoljstvo strank',
    description: 'Naše stranke so navdušene nad našimi izdelki in storitvami.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Enostavna namestitev',
    description: 'Naša tla so zasnovana za hitro in enostavno namestitev.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Zakaj izbrati nas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;