import { FileText, MessageCircle } from "lucide-react";

export function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Готов доставлять заказы и работать в стабильной компании?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Присоединяйся к CaraVan Group и начинай уже сейчас.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("offer")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-lg"
              style={{ backgroundColor: '#DB2128' }}
            >
              <FileText className="w-6 h-6 mr-2" />
              Ознакомиться с условиями сотрудничества
            </button>

            <button
              onClick={() => scrollToSection("contacts")}
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-lg"
              style={{ borderColor: '#DB2128', color: '#DB2128' }}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Связаться с нами
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold mb-2" style={{ color: '#DB2128' }}>
                1000+
              </div>
              <p className="text-gray-600">Заказов в день</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold mb-2" style={{ color: '#DB2128' }}>
                200+
              </div>
              <p className="text-gray-600">Курьеров в команде</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold mb-2" style={{ color: '#DB2128' }}>
                6
              </div>
              <p className="text-gray-600">Городов присутствия</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
