import { School, Users, GraduationCap, MapPin } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: School,
      value: "8,500+",
      label: "Satisfied Schools",
    },
    {
      icon: Users,
      value: "3.6 Million+",
      label: "Engaged Students",
    },
    {
      icon: GraduationCap,
      value: "60,000+",
      label: "Happy Teachers",
    },
    {
      icon: MapPin,
      value: "400+",
      label: "Cities",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-10 bg-gradient-subtle">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-6">
            EduTransform's Reach
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 sm:p-6 rounded-xl bg-card shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-6 sm:mb-4">
                <stat.icon className="h-10 w-10 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-4xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg lg:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
