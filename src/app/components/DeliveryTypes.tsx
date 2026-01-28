import { Package, Box, Truck } from "lucide-react";

export function DeliveryTypes() {
  const deliveryTypes = [
    {
      icon: Package,
      title: "Мелкогабаритные посылки",
      description: "Небольшие упаковки, конверты, лёгкие товары",
      examples: "Косметика, телефоны, аксессуары, документы",
    },
    {
      icon: Box,
      title: "Средние отправления",
      description: "Посылки среднего размера и веса",
      examples: "Одежда, обувь, бытовая техника, игрушки",
    },
    {
      icon: Truck,
      title: "Крупногабаритные товары",
      description: "Большие и тяжёлые грузы",
      examples: "Мебель, холодильники, телевизоры, стройматериалы",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что доставляют наши курьеры
          </h2>
          <p className="text-xl text-gray-600">
            Заказы бывают разного формата
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deliveryTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#DB2128' }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-700 mb-4">{type.description}</p>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Примеры:</span> {type.examples}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#FEF2F2', border: '2px solid #DB2128' }}>
            <p className="text-lg text-gray-800">
              <span className="font-bold" style={{ color: '#DB2128' }}>Главная задача курьера</span> — 
              доставить заказ в целости и сохранности до клиента или постомата, 
              соблюдая все условия доставки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
