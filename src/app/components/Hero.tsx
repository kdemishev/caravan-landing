import { Package, Truck, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #DB2128 0%, #A01820 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            CaraVan Group
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-95">
            Курьерская доставка последней мили
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Мы занимаемся доставкой заказов онлайн-магазина <strong>Kaspi</strong> прямо до двери получателя.
            <br />
            Работаем в Караганде и близлежащих городах, а также в Усть-Каменогорске.
          </p>
          <p className="text-lg md:text-xl font-semibold mb-12 opacity-95">
            Ищем курьеров для стабильной работы и подработки.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Партнёр Kaspi</h3>
              <p className="text-white/90 text-sm">
                Официальная доставка заказов крупнейшего онлайн-магазина Казахстана
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Последняя миля</h3>
              <p className="text-white/90 text-sm">
                Доставляем заказы на финальном этапе — от склада до двери клиента
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">6 городов</h3>
              <p className="text-white/90 text-sm">
                Работаем в Караганде, Темиртау, Усть-Каменогорске и других городах
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
    </section>
  );
}