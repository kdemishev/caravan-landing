import { MapPin } from "lucide-react";

export function Cities() {
  const cities = [
    { name: "Караганда", region: "Карагандинская область" },
    { name: "Шахтинск", region: "Карагандинская область" },
    { name: "Сарань", region: "Карагандинская область" },
    { name: "Шахан", region: "Карагандинская область" },
    { name: "Темиртау", region: "Карагандинская область" },
    { name: "Усть-Каменогорск", region: "Восточно-Казахстанская область" },
  ];

  return (
    <section id="cities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши города</h2>
          <p className="text-xl text-gray-600">
            Мы работаем в следующих городах Казахстана
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DB2128' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{city.name}</h3>
                  <p className="text-sm text-gray-600">{city.region}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white px-8 py-4 rounded-xl shadow-md">
            <p className="text-gray-700">
              <span className="font-semibold" style={{ color: '#DB2128' }}>6 городов</span> уже работают с нами. 
              <br className="md:hidden" />
              <span className="hidden md:inline"> · </span>
              Продолжаем расширять географию!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
