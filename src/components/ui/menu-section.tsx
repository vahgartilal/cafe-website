import coffeeImage from "@/assets/coffee-art.jpg";
import pastriesImage from "@/assets/pastries.jpg";

const MenuSection = () => {
  const menuCategories = [
    {
      title: "Signature Coffees",
      image: coffeeImage,
      items: [
        { name: "Heritage Blend", description: "Our signature roast with notes of chocolate and caramel", price: "$4.50" },
        { name: "Single Origin Ethiopia", description: "Bright and fruity with floral undertones", price: "$5.25" },
        { name: "Cold Brew Float", description: "House cold brew with vanilla bean ice cream", price: "$6.00" },
        { name: "Maple Cortado", description: "Espresso with steamed milk and local maple syrup", price: "$4.75" },
      ]
    },
    {
      title: "Fresh Pastries",
      image: pastriesImage,
      items: [
        { name: "Almond Croissant", description: "Buttery pastry filled with almond cream", price: "$3.75" },
        { name: "Cinnamon Roll", description: "House-made with cream cheese glaze", price: "$4.25" },
        { name: "Blueberry Scone", description: "Fresh local blueberries with lemon glaze", price: "$3.50" },
        { name: "Avocado Toast", description: "Sourdough with smashed avocado and everything seasoning", price: "$8.50" },
      ]
    }
  ];

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafted with love using locally sourced ingredients and premium coffee beans
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category, index) => (
            <div key={index} className="card-warm">
              <div className="mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start group">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-semibold text-accent text-lg ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All items available for dine-in, takeout, or delivery
          </p>
          <button className="btn-secondary">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;