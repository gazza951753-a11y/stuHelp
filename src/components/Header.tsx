import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">С</span>
            </div>
            <span className="text-xl font-bold text-foreground">СтудПомощь</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
              Преимущества
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              Отзывы
            </a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <Button variant="hero" size="default">
            Заказать работу
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;