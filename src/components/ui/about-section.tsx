import { Heart, Users, Coffee, Leaf } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Quality First",
      description: "We source our beans directly from farmers and roast them weekly for peak freshness."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Love",
      description: "More than a coffee shop, we're a gathering place where neighbors become friends."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Committed to environmental responsibility through ethical sourcing and eco-friendly practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Support",
      description: "Partnering with local bakers, artists, and musicians to strengthen our community."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2019 by Sarah and Michael, two coffee enthusiasts who dreamed of creating 
                a space where exceptional coffee meets genuine community connection.
              </p>
              <p>
                What started as a simple vision has grown into the neighborhood's favorite gathering spot, 
                where every cup tells a story and every visit feels like coming home.
              </p>
              <p>
                We believe that great coffee is just the beginning. It's the conversations shared, 
                the connections made, and the community built that truly makes us special.
              </p>
            </div>
            <div className="mt-8">
              <button className="btn-hero">
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
              What We Stand For
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;