import BlurText from "./BlurText";
import marketingStrategyImage from '../assets/Untitled-e1735972392588.png';

const CreativeSolutions = () => {
  const handleAnimationComplete = () => {
    console.log('Heading animation completed!');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            <BlurText
              text="CREATIVE SOLUTIONS THAT PROPEL BRANDS"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-5xl font-medium text-gray-900 !justify-start mb-12"
            />

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Cost-Effective
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We focus on delivering high-value solutions that maximize results while staying within budget, ensuring that our clients achieve their goals efficiently.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Dependability and Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Quality and consistency are at the core of everything we do, making Scabbard Tech a trusted partner for clients seeking reliable and exceptional results.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img 
              src={marketingStrategyImage} 
              alt="Marketing Strategy Doodle" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeSolutions;