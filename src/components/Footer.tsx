const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">С</span>
              </div>
              <span className="text-xl font-bold">СтудПомощь</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональная помощь студентам в выполнении учебных работ
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Курсовые работы</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Дипломные работы</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Рефераты</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Решение задач</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Гарантии</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>+7 (999) 123-45-67</li>
              <li>info@studhelp.ru</li>
              <li>@studhelp_bot</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 СтудПомощь. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;