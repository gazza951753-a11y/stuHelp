import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Upload, X } from "lucide-react";
import { useState } from "react";
import emailIcon from "@/assets/email.svg";
import telegramIcon from "@/assets/telegram.svg";
import whatsappIcon from "@/assets/whatsapp.svg";

const Contact = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [workType, setWorkType] = useState("");

  const workTypes = [
    "Автореферат", "Аннотация", "Бизнес‑план", "ВКР", "Доклад", "Диплом",
    "Задача", "Контрольная", "Курсовая", "Лабораторная работа", "НИР",
    "Отчёт по практике", "Перевод", "Презентация", "Реферат", "Сочинение",
    "Статья", "Творческая работа", "Эссе", "Другое..."
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const totalSize = [...files, ...selectedFiles].reduce((sum, file) => sum + file.size, 0);
    const maxSize = 25 * 1024 * 1024; // 25MB

    if ([...files, ...selectedFiles].length > 5) {
      alert("Максимум 5 файлов");
      return;
    }

    if (totalSize > maxSize) {
      alert("Общий размер файлов не должен превышать 25МБ");
      return;
    }

    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement Telegram bot integration with Supabase Edge Functions
    alert("Для отправки заявок в Telegram нужно подключить Supabase и создать Edge Function");
  };

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
                    <div className="font-semibold">Телефон / WhatsApp</div>
                    <div className="text-muted-foreground">+7-953-924-68-17</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <img src={emailIcon} alt="Email" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">support@studyassist.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <img src={telegramIcon} alt="Telegram" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-muted-foreground">@prihodkods</div>
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" required />
                <Input type="email" placeholder="Email" required />
              </div>
              
              <Input placeholder="Телефон" required />
              
              <Select value={workType} onValueChange={setWorkType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Тип работы" />
                </SelectTrigger>
                <SelectContent>
                  {workTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Input placeholder="Тема работы" required />
              
              <Textarea 
                placeholder="Опишите ваше задание подробнее..." 
                className="min-h-32"
                required
              />
              
              <div className="space-y-4">
                <label className="block text-sm font-medium">
                  Прикрепить файлы (до 5 файлов, не более 25МБ)
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.png,.zip,.rar"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Нажмите для выбора файлов или перетащите сюда
                    </p>
                  </label>
                </div>
                
                {files.length > 0 && (
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
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