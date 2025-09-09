import { MapPin, Clock, Phone, Mail, Car, Bus } from "lucide-react";

const LocationSection = () => {
  const hours = [
    { day: "Monday - Friday", time: "6:30 AM - 8:00 PM" },
    { day: "Saturday", time: "7:00 AM - 8:00 PM" },
    { day: "Sunday", time: "8:00 AM - 6:00 PM" },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: "125 Heritage Street, Downtown" },
    { icon: <Phone className="w-5 h-5" />, text: "(555) 123-BREW" },
    { icon: <Mail className="w-5 h-5" />, text: "hello@brewsandbonds.com" },
  ];

  return (
    <section id="location" className="section-padding bg-gradient-warm">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of the Heritage District, we're easy to find and even easier to love
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map placeholder and info */}
          <div className="card-warm">
            <div className="bg-gradient-coffee rounded-xl h-64 mb-6 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm opacity-80">Click to open in Maps</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground">
                  <div className="text-accent">
                    {info.icon}
                  </div>
                  <span className="font-medium">{info.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" />
                Parking & Transit
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Free street parking available
                </p>
                <p className="flex items-center gap-2">
                  <Bus className="w-4 h-4" />
                  Bus stop right outside (Routes 15, 23, 41)
                </p>
              </div>
            </div>
          </div>

          {/* Hours and additional info */}
          <div className="space-y-6">
            <div className="card-warm">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Hours
              </h3>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-accent font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-accent">Holiday Hours:</strong> Please check our social media for special holiday schedules
                </p>
              </div>
            </div>

            <div className="card-warm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Special Services
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Free WiFi throughout</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Private event space available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Coffee subscription service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Catering for local businesses</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="btn-hero w-full">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;