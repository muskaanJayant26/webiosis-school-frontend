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
    <section className="py-16 bg-gradient-subtle sm:py-10">
      <div className="container mx-auto px-6 sm:px-4 lg:px-8">
        <div className="text-center mb-16 sm:mb-12">
          <h2 className="text-5xl font-bold mb-6 sm:text-3xl lg:text-4xl sm:mb-4">
            EduTransform's Reach
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-card shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-slide-up sm:p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mb-6 sm:w-16 sm:h-16 sm:mb-4">
                <stat.icon className="h-10 w-10 text-primary-foreground sm:h-8 sm:w-8" />
              </div>
              <div className="text-5xl font-bold text-primary mb-3 sm:text-3xl sm:mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground font-medium sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
