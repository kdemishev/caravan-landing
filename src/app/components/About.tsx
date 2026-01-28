import { Building2, Users, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О нас</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CaraVan Group — компания, специализирующаяся на доставке последней мили
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ежедневно мы принимаем заказы от партнёров, распределяем их по районам 
              доставки и передаём курьерам для выполнения.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы сопровождаем заказ на финальном этапе — от передачи курьеру до 
              доставки клиенту или в постамат.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DB2128' }}>
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Надёжная компания</h3>
              <p className="text-gray-600">
                Работаем официально с крупнейшими маркетплейсами
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DB2128' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Большая команда</h3>
              <p className="text-gray-600">
                Сотни курьеров доверяют нам и работают стабильно
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DB2128' }}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Растём вместе</h3>
              <p className="text-gray-600">
                Постоянно расширяем географию и увеличиваем объёмы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}