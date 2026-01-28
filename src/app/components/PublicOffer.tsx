import { FileText, DollarSign, AlertCircle, Users } from "lucide-react";

export function PublicOffer() {
  return (
    <section id="offer" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#FEF2F2' }}>
            <FileText className="w-8 h-8" style={{ color: '#DB2128' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Публичная оферта
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Договор присоединения к платформе курьерской службы CaraVan Group
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Редакция от 28 января 2026 года
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
          {/* 1. Общие положения */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: '#DB2128' }}>
                1
              </span>
              Общие положения
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>
                1.1. Настоящая публичная оферта (далее — «Оферта») является официальным
                предложением ТОО "CaraVan Group" (далее — «Заказчик») заключить договор
                оказания курьерских услуг на условиях, изложенных ниже.
              </p>
              <p>
                1.2. Акцептом (принятием) настоящей Оферты является начало выполнения
                курьером первого заказа через платформу Заказчика. С момента акцепта
                курьер (далее — «Исполнитель») считается присоединившимся к условиям
                настоящей Оферты в полном объёме.
              </p>
              <p>
                1.3. Исполнитель подтверждает, что:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Является индивидуальным предпринимателем или самозанятым лицом;</li>
                <li>Самостоятельно узнал о возможности оказания услуг через данный сайт;</li>
                <li>Не состоит в трудовых отношениях с Заказчиком;</li>
                <li>Самостоятельно определяет график работы, количество и выбор заказов.</li>
              </ul>
            </div>
          </div>

          {/* 2. Предмет договора */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: '#DB2128' }}>
                2
              </span>
              Предмет договора
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>
                2.1. Заказчик размещает на платформе информацию о доступных заказах по доставке
                товаров Kaspi, а Исполнитель по своему усмотрению принимает и выполняет заказы
                на доставку грузов по адресам, указанным Заказчиком.
              </p>
              <p>
                2.2. Исполнитель оказывает услуги независимо, без подчинения правилам
                внутреннего трудового распорядка Заказчика, с использованием собственных
                ресурсов (транспорт, средства связи и т.д.).
              </p>
              <p>
                2.3. Каждый выполненный заказ оформляется отдельным актом оказанных услуг
                и счетом от Исполнителя.
              </p>
            </div>
          </div>

          {/* 3. Тарифы и условия */}
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                <DollarSign className="w-5 h-5" />
              </span>
              Прозрачные тарифы и условия оплаты
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p className="font-semibold text-gray-900">
                3.1. Стоимость услуг определяется в зависимости от типа и категории доставки:
              </p>
              
              <div className="bg-white rounded-lg p-4 my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 px-2">Категория доставки</th>
                      <th className="text-left py-2 px-2">Расстояние/тип</th>
                      <th className="text-right py-2 px-2">Тариф</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-2">Мелкогабаритные посылки</td>
                      <td className="py-2 px-2">До 3 кг, в черте города</td>
                      <td className="text-right py-2 px-2 font-semibold">600 ₸</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-2">Средние отправления</td>
                      <td className="py-2 px-2">3-15 кг, в черте города</td>
                      <td className="text-right py-2 px-2 font-semibold">900 ₸</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-2">Крупногабаритные товары</td>
                      <td className="py-2 px-2">Более 15 кг</td>
                      <td className="text-right py-2 px-2 font-semibold">1 500 ₸</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-2">Доставка в постамат</td>
                      <td className="py-2 px-2">Любой вес</td>
                      <td className="text-right py-2 px-2 font-semibold">500 ₸</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">Междугородняя доставка</td>
                      <td className="py-2 px-2">В другие города</td>
                      <td className="text-right py-2 px-2 font-semibold">По договорённости</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                3.2. Дополнительные услуги оплачиваются отдельно:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ожидание клиента: 200 ₸ за каждые 15 минут сверх 15 минут ожидания</li>
                <li>Подъём на этаж без лифта: 100 ₸ за этаж (выше 2-го)</li>
                <li>Срочная доставка (в течение 2 часов): +300 ₸ к тарифу</li>
                <li>Доставка за пределы города: +150 ₸ за каждые 10 км</li>
              </ul>

              <p className="font-semibold text-gray-900 mt-4">
                3.3. Условия начисления вознаграждения:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Вознаграждение начисляется после успешной доставки заказа получателю;</li>
                <li>Подтверждением выполнения является отметка в системе (подпись получателя, фото, код подтверждения);</li>
                <li>Исполнитель, начиная работу, автоматически соглашается с действующими на момент принятия заказа тарифами.</li>
              </ul>
            </div>
          </div>

          {/* 4. Материальная ответственность */}
          <div className="rounded-xl p-6 border-2" style={{ backgroundColor: '#FEF2F2', borderColor: '#DB2128' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: '#DB2128' }}>
                <AlertCircle className="w-5 h-5" />
              </span>
              Материальная ответственность
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p className="font-semibold" style={{ color: '#A01820' }}>
                4.1. Исполнитель несёт полную материальную ответственность за вверенный ему груз
                с момента получения до момента передачи получателю.
              </p>
              
              <p>
                4.2. В случае порчи, утраты или повреждения груза по вине Исполнителя:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Полная утрата груза:</strong> Исполнитель возмещает стоимость груза
                  в размере, указанном в накладной Kaspi, но не менее 5 000 ₸;
                </li>
                <li>
                  <strong>Частичная порча или повреждение:</strong> Исполнитель возмещает
                  сумму ущерба, подтверждённую документально (чеками, фотографиями и т.д.);
                </li>
                <li>
                  <strong>Нарушение сроков доставки:</strong> Штраф в размере 50% от стоимости заказа.
                </li>
              </ul>

              <p className="font-semibold mt-4" style={{ color: '#A01820' }}>
                4.3. Порядок удержания суммы ущерба:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Стоимость ущерба удерживается из суммы накопленного вознаграждения Исполнителя;
                </li>
                <li>
                  Если накопленного вознаграждения недостаточно, Исполнитель обязуется
                  внести недостающую сумму в течение 5 рабочих дней;
                </li>
                <li>
                  При отказе добровольного возмещения ущерба Заказчик оставляет за собой
                  право взыскания в судебном порядке.
                </li>
              </ul>

              <p>
                4.4. Исполнитель освобождается от ответственности, если докажет, что
                утрата или повреждение груза произошли вследствие непреодолимой силы
                или по вине получателя.
              </p>
            </div>
          </div>

          {/* 5. Порядок выплат */}
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                <DollarSign className="w-5 h-5" />
              </span>
              Порядок выплат вознаграждения
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p className="font-semibold text-blue-900">
                5.1. Оплата производится только за результат — успешно доставленные заказы.
              </p>

              <p>
                5.2. Периодичность выплат:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Вознаграждение выплачивается 2 раза в месяц: 15-го и 30-го (31-го) числа;</li>
                <li>Выплачивается сумма за все заказы, выполненные в предыдущем периоде;</li>
                <li>Минимальная сумма для выплаты — 10 000 ₸. Если накопленная сумма меньше, она переносится на следующий период.</li>
              </ul>

              <p>
                5.3. Способ выплаты:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Перевод на карту (Kaspi, Halyk, другие банки РК);</li>
                <li>На электронный кошелёк;</li>
                <li>Другим согласованным способом.</li>
              </ul>

              <p className="font-semibold text-blue-900 mt-4">
                5.4. Документооборот:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Исполнитель обязан выставить счёт или акт выполненных работ на сумму вознаграждения;</li>
                <li>Документы предоставляются до момента выплаты в электронном виде;</li>
                <li>Без предоставления документов выплата не производится.</li>
              </ul>

              <p>
                5.5. При наличии задолженности Исполнителя перед Заказчиком (материальный ущерб,
                штрафы и т.д.) выплата вознаграждения производится за вычетом суммы задолженности.
              </p>
            </div>
          </div>

          {/* 6. Права и обязанности сторон */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: '#DB2128' }}>
                <Users className="w-5 h-5" />
              </span>
              Права и обязанности сторон
            </h3>
            <div className="ml-11 space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">6.1. Заказчик обязуется:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Предоставлять полную и достоверную информацию о заказах;</li>
                  <li>Своевременно выплачивать вознаграждение согласно условиям оферты;</li>
                  <li>Обеспечивать техническую работоспособность платформы;</li>
                  <li>Рассматривать обращения Исполнителей в течение 3 рабочих дней;</li>
                  <li>Обеспечивать доступ к технической поддержке 24/7.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900">6.2. Исполнитель обязуется:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Выполнять принятые заказы качественно и в установленные сроки;</li>
                  <li>Бережно относиться к вверенному грузу;</li>
                  <li>Предоставлять точную информацию о статусе доставки;</li>
                  <li>Соблюдать правила вежливости при общении с клиентами;</li>
                  <li>Иметь статус ИП или самозанятого на протяжении всего сотрудничества;</li>
                  <li>Своевременно выставлять счета/акты на оказанные услуги;</li>
                  <li>Соблюдать конфиденциальность информации о клиентах и заказах.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900">6.3. Исполнитель имеет право:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Самостоятельно выбирать заказы и определять график работы;</li>
                  <li>Отказаться от выполнения заказа до его принятия;</li>
                  <li>Запрашивать информацию о начисленном вознаграждении;</li>
                  <li>Обращаться в службу поддержки по любым вопросам;</li>
                  <li>Прекратить сотрудничество в любое время, уведомив Заказчика.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7. Срок действия и расторжение */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: '#DB2128' }}>
                7
              </span>
              Срок действия и расторжение договора
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>
                7.1. Договор вступает в силу с момента акцепта Оферты Исполнителем
                и действует до момента его расторжения одной из сторон.
              </p>
              <p>
                7.2. Любая из сторон может расторгнуть договор в одностороннем порядке,
                уведомив другую сторону не менее чем за 3 календарных дня.
              </p>
              <p>
                7.3. При расторжении договора Исполнитель обязан завершить все принятые
                заказы либо передать их другим исполнителям через платформу.
              </p>
              <p>
                7.4. Окончательный расчёт производится в течение 10 рабочих дней после
                расторжения договора за вычетом задолженностей (при их наличии).
              </p>
            </div>
          </div>

          {/* 8. Заключительные положения */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 text-white rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: '#DB2128' }}>
                8
              </span>
              Заключительные положения
            </h3>
            <div className="ml-11 space-y-3 text-gray-700">
              <p>
                8.1. Все споры и разногласия решаются путём переговоров. При невозможности
                достижения соглашения — в судебном порядке по месту нахождения Заказчика
                в соответствии с законодательством Республики Казахстан.
              </p>
              <p>
                8.2. Заказчик вправе вносить изменения в условия Оферты, уведомив
                Исполнителей не менее чем за 7 дней путём публикации новой редакции
                на сайте.
              </p>
              <p>
                8.3. Продолжение работы Исполнителя после вступления в силу новой
                редакции считается согласием с внесёнными изменениями.
              </p>
              <p>
                8.4. Настоящая Оферта является публичным договором в соответствии
                с Гражданским кодексом Республики Казахстан.
              </p>
            </div>
          </div>

          {/* Реквизиты */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: '#DB2128' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Реквизиты Заказчика</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Полное наименование:</p>
                <p className="font-semibold">ТОО "CaraVan Group"</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">БИН:</p>
                <p className="font-semibold">123456789012</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">ИИК:</p>
                <p className="font-semibold">KZ12345678901234567890</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">БИК:</p>
                <p className="font-semibold">KCJBKZKX</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500 mb-1">Юридический адрес:</p>
                <p className="font-semibold">
                  Республика Казахстан, 100000, г. Караганда, ул. Бухар-Жырау, 66
                </p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Электронная почта:</p>
                <p className="font-semibold">info@caravangroup.kz</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Телефон:</p>
                <p className="font-semibold">+7 (7212) 50-12-34</p>
              </div>
            </div>
          </div>

          {/* Подпись */}
          <div className="text-center pt-8 border-t-2 border-gray-300">
            <p className="text-gray-600 mb-2">Директор ТОО "CaraVan Group"</p>
            <p className="font-bold text-gray-900 text-lg">_________________ / Смирнов А.К. /</p>
            <p className="text-gray-500 text-sm mt-2">М.П.</p>
          </div>
        </div>

        {/* Примечание для курьеров */}
        <div className="mt-8 rounded-r-lg p-6 border-l-4" style={{ backgroundColor: '#FEF2F2', borderColor: '#DB2128' }}>
          <h4 className="font-bold text-lg mb-2 flex items-center" style={{ color: '#A01820' }}>
            <AlertCircle className="w-5 h-5 mr-2" />
            Важная информация для исполнителей
          </h4>
          <p className="text-gray-800">
            Принимая первый заказ через нашу платформу, вы автоматически соглашаетесь
            со всеми условиями данной публичной оферты. Пожалуйста, внимательно
            ознакомьтесь с условиями оплаты, тарифами и материальной ответственностью
            перед началом работы. При возникновении вопросов обращайтесь в службу
            поддержки по контактам, указанным выше.
          </p>
        </div>
      </div>
    </section>
  );
}
