export const Identity = () => {
  return (
    <section id="identity" className="section-padding bg-background">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Identity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe that entrepreneurship is based first and foremost on the passion of those 
            who want to achieve something or fulfill themselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              A compass to guide entrepreneurs on their path
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              i2e was created to democratize access to the keys to success in a world of opportunity. 
              Dedicated to supporting, training, and developing entrepreneurs and business owners, 
              i2e serves a more responsible and humane economy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that entrepreneurship is a lever for social, economic, and environmental 
              transformation—provided it is supported with rigor, kindness, and vision.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-gradient-subtle border border-border hover:shadow-card transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3">Our Vision</h4>
              <p className="text-muted-foreground">
                To become a global hub for entrepreneurship, where talent, ideas, and resources 
                converge to create a thriving entrepreneurial ecosystem.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-subtle border border-border hover:shadow-card transition-all duration-300">
              <h4 className="text-xl font-semibold text-secondary mb-3">Our Mission</h4>
              <p className="text-muted-foreground">
                To train, inspire, encourage and catalyze responsible entrepreneurship that integrates 
                ESG principles at the heart of its action.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-subtle border border-border hover:shadow-card transition-all duration-300">
              <h4 className="text-xl font-semibold text-primary mb-3">Our Values</h4>
              <p className="text-muted-foreground">
                Humanity, inclusion, empowerment, creativity, collaboration and entrepreneurial 
                leadership for a dynamic, inclusive and respectful economy.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Everyone finds a space here to learn, share and grow
            </h3>
            <p className="text-lg text-muted-foreground">
              Every idea has the power to change the world. Together, we push the boundaries 
              of innovation and build the future, one entrepreneur at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};