import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна К.",
      university: "МГУ, 4 курс",
      text: "Заказывала курсовую по экономике. Работа выполнена на отлично, все требования соблюдены. Защитилась на 5!",
      rating: 5
    },
    {
      name: "Михаил С.",
      university: "СПбГУ, 5 курс",
      text: "Помогли с дипломной работой по программированию. Качество кода и документации на высшем уровне.",
      rating: 5
    },
    {
      name: "Елена Д.",
      university: "МГТУ, 2 курс",
      text: "Быстро решили все задачи по математике. Подробные объяснения помогли разобраться в теме.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Отзывы студентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Узнайте, что говорят о нас наши клиенты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{review.text}"
              </p>
              <div>
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.university}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;