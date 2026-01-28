import { Calendar, TrendingUp, FileCheck } from "lucide-react";

export function WhatWeOffer() {
  const offers = [
    {
      icon: Calendar,
      title: "Удобный и гибкий график",
      description:
        "Вы сами выбираете, когда и сколько работать. Нет жёсткого графика — работайте в удобное для вас время.",
    },
    {
      icon: TrendingUp,
      title: "Стабильная загруженность заказами",
      description:
        "Ежедневно мы получаем большое количество заказов от Kaspi. Вы всегда будете обеспечены работой.",
    },
    {
      icon: FileCheck,
      title: "Комфортные и понятные условия",
      description:
        "Прозрачные тарифы, чёткие правила выплат и ответственности. Всё честно и по договору.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-xl text-gray-600">
            С нашей стороны мы предоставляем
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 overflow-hidden rounded-br-2xl">
                  <Icon className="w-24 h-24" style={{ color: '#DB2128' }} />
                </div>
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: '#DB2128' }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4 relative z-10">
                  {offer.title}
                </h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  {offer.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{ backgroundColor: '#DB2128' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Работайте с уверенностью
            </h3>
            <p className="text-lg text-white/95 mb-6">
              CaraVan Group — это стабильность, прозрачность и надёжность. 
              Мы ценим каждого курьера и создаём условия для успешного сотрудничества.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/90">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span>Своевременные выплаты</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span>Техническая поддержка</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✓</span>
                <span>Официальное сотрудничество</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
