import React from 'react';

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-cyber-bg-darker relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:60px_60px] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
            Unleash the Power of Custom Math
          </h2>
          <p className="text-cyber-muted text-lg">
            Explore the key features that make our Algebraic Expression Inventor GPT a game-changer.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-cyber-bg-light rounded-xl shadow-lg border border-cyber-border/20 hover:border-cyber-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-cyber-text mb-3">
              Custom Function Creation
            </h3>
            <p className="text-cyber-muted">
              Define your own mathematical functions and operations to tailor the tool to your specific needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-cyber-bg-light rounded-xl shadow-lg border border-cyber-border/20 hover:border-cyber-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-cyber-text mb-3">
              Python Integration
            </h3>
            <p className="text-cyber-muted">
              Seamlessly integrate Python code to handle complex calculations and data processing tasks.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-cyber-bg-light rounded-xl shadow-lg border border-cyber-border/20 hover:border-cyber-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-cyber-text mb-3">
              AI-Powered Assistance
            </h3>
            <p className="text-cyber-muted">
              Leverage AI to assist in expression generation, optimization, and problem-solving.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-cyber-bg-light rounded-xl shadow-lg border border-cyber-border/20 hover:border-cyber-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-cyber-text mb-3">
              Real-Time Visualization
            </h3>
            <p className="text-cyber-muted">
              Visualize your algebraic expressions and their solutions in real-time with interactive graphs and charts.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-cyber-bg-light rounded-xl shadow-lg border border-cyber-border/20 hover:border-cyber-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-cyber-text mb-3">
              Automated Simplification
            </h3>
            <p className="text-cyber-muted">
              Automatically simplify complex expressions to their most basic form for easier understanding.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-cyber-bg-light rounded-xl shadow-lg border border-cyber-border/20 hover:border-cyber-primary/50 transition-colors">
            <h3 className="text-xl font-semibold text-cyber-text mb-3">
              Cloud-Based Access
            </h3>
            <p className="text-cyber-muted">
              Access your expressions and projects from anywhere with our secure cloud-based platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
