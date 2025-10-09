import MetaBalls from './MetaBalls';


export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 flex items-center justify-center">
      <div className="flex flex-row max-w-5xl w-full px-6 gap-12">
        <div className="flex items-center justify-center flex-1">
        <MetaBalls
         color="#000000ff"
          cursorBallColor="#000000ff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
        </div>
        <div className="flex-1 text-right flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Why Choose Us?
          </h2>
          <div className="w-full flex justify-end">
            <hr className="w-32 border-gray-300 border-t-2 mb-6" />
          </div>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Our digital marketing strategies are backed by years of experience and a proven track record of delivering exceptional results. Whether you’re a startup or an established brand, we customize our services to fit your goals and budget. Our focus is on driving real value through transparency, measurable outcomes, and a client-centric approach.
          </p>
        </div>
      </div>
    </section>
  );
}