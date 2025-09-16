import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement review submission
    alert("Спасибо за отзыв! Он будет опубликован после модерации.");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Оставить отзыв
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Поделитесь своим опытом сотрудничества с нами
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" required />
                <Input placeholder="Университет, курс" required />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Оценка</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="text-2xl focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoveredRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <Textarea 
                placeholder="Расскажите о своем опыте сотрудничества с нами..." 
                className="min-h-32"
                required
              />
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Отправить отзыв
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;