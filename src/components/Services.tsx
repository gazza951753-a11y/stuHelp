import { BookOpen, FileText, Presentation, Calculator, Globe, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Курсовые работы",
      description: "Качественные курсовые работы по любым дисциплинам с соблюдением всех требований",
      price: "от 2000₽"
    },
    {
      icon: FileText,
      title: "Дипломные работы",
      description: "Профессиональная подготовка дипломных проектов с защитой и презентацией",
      price: "от 8000₽"
    },
    {
      icon: Presentation,
      title: "Презентации",
      description: "Создание эффектных презентаций для защиты работ и выступлений",
      price: "от 750₽"
    },
    {
      icon: Calculator,
      title: "Решение задач",
      description: "Помощь в решении задач по математике, физике, химии и другим точным наукам",
      price: "от 100₽"
    },
    {
      icon: Globe,
      title: "Рефераты",
      description: "Написание рефератов и эссе по гуманитарным и техническим дисциплинам",
      price: "от 800₽"
    },
    {
      icon: Users,
      title: "Консультации",
      description: "Индивидуальные консультации и помощь в подготовке к экзаменам",
      price: "от 300₽/час"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Предоставляем полный спектр образовательных услуг для студентов всех специальностей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;