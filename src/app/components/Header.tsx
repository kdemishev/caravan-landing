import { Mail, Phone, MapPin } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-18 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#DB2128' }}>
              <img src="/logo.png" alt="CaraVan Group Logo" />
              {/* <svg viewBox="0 0 40 40" className="w-8 h-8" fill="white">
                <path d="M8 12 L20 8 L32 12 L32 20 L20 32 L8 20 Z" />
                <path d="M20 8 L20 32" strokeWidth="2" stroke="white" fill="none" />
              </svg> */}
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">CaraVan Group</h1>
              <p className="text-sm text-gray-600">Доставка последней мили</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#DB2128] transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("cities")}
              className="text-gray-700 hover:text-[#DB2128] transition-colors"
            >
              Наши города
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-[#DB2128] transition-colors"
            >
              Контакты
            </button>
            <button
              onClick={() => scrollToSection("offer")}
              className="text-gray-700 hover:text-[#DB2128] transition-colors"
            >
              Условия сотрудничества
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@caravangroup.kz"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#DB2128] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden xl:inline">info@caravangroup.kz</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}