import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы обсудить ваш заказ? Выберите удобный способ связи
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@studhelp.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-muted-foreground">@studhelp_bot</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 gradient-card rounded-xl border border-border/50">
              <h4 className="font-semibold mb-2">Режим работы</h4>
              <p className="text-muted-foreground">
                Принимаем заказы круглосуточно.<br />
                Консультации: Пн-Вс 9:00-21:00
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg border border-border/50">
            <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
              </div>
              
              <Input placeholder="Телефон" />
              
              <Input placeholder="Тема работы" />
              
              <Textarea 
                placeholder="Опишите ваше задание подробнее..." 
                className="min-h-32"
              />
              
              <Button variant="hero" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;