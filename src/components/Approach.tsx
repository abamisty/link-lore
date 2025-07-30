export const Approach = () => {
  return (
    <section id="approach" className="section-padding bg-gradient-subtle">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Approach</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            i2e stands out for its comprehensive, coherent, practical, inclusive, and sustainable approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary">Business vs. Entrepreneur</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Just as every business has its life cycle, entrepreneurs are also subject to a cycle. 
              We therefore intervene at each stage of the business life cycle, from ideation to takeover, 
              including growth or decline.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is why our approach encompasses each stage of the company's development, as well as 
              that of its managers, to respond comprehensively and coherently to each of their needs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-background border border-border hover:shadow-card transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3">Formation</h4>
              <p className="text-muted-foreground">
                Theory to understand the foundations of sustainable entrepreneurship with practical applications.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border hover:shadow-card transition-all duration-300">
              <h4 className="text-xl font-semibold text-secondary mb-3">Coaching</h4>
              <p className="text-muted-foreground">
                Individual or group coaching sessions to strengthen entrepreneurial skills and posture.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border hover:shadow-card transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3">Networking</h4>
              <p className="text-muted-foreground">
                In-person networking events to experiment, adjust, progress and build valuable connections.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8">A Clever Mix of AI and HI</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Technology can be a powerful force for democratization, but only in conjunction with human values. 
            This is why we are giving a lot of space to artificial intelligence (AI), but also to human intelligence (HI)!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-foreground">E</span>
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Environment</h4>
            <p className="text-muted-foreground">Respect for the environment in all our entrepreneurial initiatives</p>
          </div>

          <div className="text-center p-8 rounded-xl bg-secondary/5 border border-secondary/20">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary-foreground">S</span>
            </div>
            <h4 className="text-xl font-bold text-secondary mb-3">Social</h4>
            <p className="text-muted-foreground">Social inclusion and diversity at the core of our programs</p>
          </div>

          <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-foreground">G</span>
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Governance</h4>
            <p className="text-muted-foreground">Transparency and ethical governance in all business practices</p>
          </div>
        </div>

        <div className="text-center p-8 rounded-xl bg-gradient-hero text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            For us, a business project is not only measured by its financial results, 
            but also by its impact on society, on people and on the planet.
          </h3>
          <p className="text-lg opacity-90">
            Each program, each support, each collaboration is designed to create a positive and measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
};