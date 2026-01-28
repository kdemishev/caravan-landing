import { Mail, Phone, MapPin } from "lucide-react";

export function Contacts() {
  const offices = [
    {
      city: "Караганда",
      address: "ул. Бухар-Жырау, 66, офис 201",
      phone: "+7 (7212) 50-12-34",
      email: "karaganda@caravangroup.kz",
    },
    {
      city: "Усть-Каменогорск",
      address: "ул. Казахстан, 89, офис 305",
      phone: "+7 (7232) 60-45-67",
      email: "ust@caravangroup.kz",
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами в вашем городе
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-7 h-7 mr-3" style={{ color: '#DB2128' }} />
                {office.city}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Адрес офиса</p>
                    <p className="text-gray-900 font-medium">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Телефон</p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="font-medium hover:underline"
                      style={{ color: '#DB2128' }}
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href={`mailto:${office.email}`}
                      className="font-medium hover:underline"
                      style={{ color: '#DB2128' }}
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Общие контакты */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border-2" style={{ borderColor: '#DB2128' }}>
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Общая информация
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Общая почта</p>
              <a
                href="mailto:info@caravangroup.kz"
                className="font-semibold hover:underline"
                style={{ color: '#DB2128' }}
              >
                info@caravangroup.kz
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Поддержка курьеров</p>
              <a
                href="mailto:support@caravangroup.kz"
                className="font-semibold hover:underline"
                style={{ color: '#DB2128' }}
              >
                support@caravangroup.kz
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Режим работы</p>
              <p className="font-semibold text-gray-900">Пн-Сб: 09:00 - 19:00</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Поддержка</p>
              <p className="font-semibold text-gray-900">24/7 для курьеров</p>
            </div>
          </div>
        </div>

        {/* Реквизиты */}
        <div className="mt-12 max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Реквизиты компании</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Полное наименование</p>
              <p className="font-semibold text-gray-900">ТОО "CaraVan Group"</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">БИН</p>
              <p className="font-semibold text-gray-900">123456789012</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">ИИК</p>
              <p className="font-semibold text-gray-900">KZ12345678901234567890</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">БИК банка</p>
              <p className="font-semibold text-gray-900">KCJBKZKX</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-500 mb-1">Юридический адрес</p>
              <p className="font-semibold text-gray-900">
                Республика Казахстан, 100000, г. Караганда, ул. Бухар-Жырау, 66
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}