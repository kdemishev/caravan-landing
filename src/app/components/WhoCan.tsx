import { Briefcase, UserCheck, Clock, CalendarCheck } from "lucide-react";

export function WhoCan() {
  const audience = [
    {
      icon: Briefcase,
      title: "Ищете стабильную работу",
      description: "Хотите работать полный день с постоянным потоком заказов",
    },
    {
      icon: UserCheck,
      title: "Самозанятые курьеры",
      description: "Уже имеете статус самозанятого и хотите сотрудничать с надёжной компанией",
    },
    {
      icon: Clock,
      title: "Нужна подработка",
      description: "Ищете дополнительный заработок в свободное время",
    },
    {
      icon: CalendarCheck,
      title: "Нужна гибкость",
      description: "Важна возможность совмещать работу с другой занятостью или учёбой",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Кому подойдёт эта работа
          </h2>
          <p className="text-xl text-gray-600">
            Работа в CaraVan Group подойдёт:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#FEF2F2' }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#DB2128' }} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Независимо от вашей ситуации, мы предлагаем{" "}
            <span className="font-semibold" style={{ color: '#DB2128' }}>
              комфортные условия и гибкий подход
            </span>{" "}
            к каждому курьеру
          </p>
        </div>
      </div>
    </section>
  );
}
