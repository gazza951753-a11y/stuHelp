import { Shield, Clock, Award, Headphones } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Все работы проходят проверку на качество и уникальность. Гарантируем соответствие требованиям."
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description: "Выполняем заказы точно в срок. Возможна срочная подготовка работ за 24 часа."
    },
    {
      icon: Award,
      title: "Опытные авторы",
      description: "Команда профессиональных авторов с высшим образованием и опытом работы от 5 лет."
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "Круглосуточная поддержка клиентов. Всегда готовы ответить на ваши вопросы."
    }
  ];

  return (
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем надежное сотрудничество и высокое качество услуг
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;