import companyLogo from "../imports/Company_Logo.png";
import rebelEngineLogo from "../imports/Rebel_Engine_Logo.png";
import rebelEngineCover from "../imports/Rebel_Engine_Cover.png";
import banqueteersLogo from "../imports/Banqueteers_Logo.png";
import banqueteersScreenshot from "../imports/Banqueteers_Game_Screenshot.png";
import teamPhoto from "../imports/Team_Photo.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-white px-6" style={{ background: 'linear-gradient(135deg, #0f0021 0%, #1a0038 100%)' }}>
        <img src={companyLogo} alt="Seven Leaf Clover" className="w-64 h-64 mb-8" />
        <p className="text-xl md:text-2xl text-center max-w-2xl text-purple-200">
          Independent Game Development Studio
        </p>
      </section>

      {/* Rebel Engine Section */}
      <section className="min-h-screen py-20 px-6 flex items-center" style={{ background: 'linear-gradient(135deg, #3b0f4d 0%, #4d1a60 100%)' }}>
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={rebelEngineLogo} alt="Rebel Engine" className="w-full max-w-md mb-6" />
              <p className="text-lg text-purple-100 leading-relaxed">
                A powerful, open-source game engine designed for indie developers.
                Rebel Engine provides the tools and flexibility you need to bring your creative vision to life.
              </p>
            </div>
            <div>
              <img src={rebelEngineCover} alt="Rebel Engine Cover" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Banqueteers Section */}
      <section className="min-h-screen py-20 px-6 flex items-center" style={{ background: 'linear-gradient(135deg, #a7755f 0%, #b8886f 100%)' }}>
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={banqueteersScreenshot} alt="Banqueteers Gameplay" className="w-full rounded-lg shadow-2xl" />
            </div>
            <div className="order-1 md:order-2">
              <img src={banqueteersLogo} alt="Banqueteers" className="w-full max-w-md mb-6" />
              <p className="text-lg text-amber-100 leading-relaxed">
                An action-packed adventure game featuring vibrant characters and immersive gameplay.
                Join the Banqueteers on an epic journey filled with challenges and excitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen py-20 px-6 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #683432 0%, #7a4543 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-12 text-white">Our Team</h2>
          <div className="mb-8">
            <img
              src={teamPhoto}
              alt="Seven Leaf Clover Team"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <p className="text-xl text-purple-200 leading-relaxed">
            We're a passionate team of developers, artists, and designers dedicated to creating
            exceptional gaming experiences. Our diverse backgrounds and shared love for games
            drive us to push creative boundaries.
          </p>
        </div>
      </section>

      {/* Services & Contact Section */}
      <section className="min-h-screen py-20 px-6 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #411d33 0%, #522944 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl mb-16 text-center text-white">Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl mb-4 text-white">Game Development</h3>
              <p className="text-purple-200">
                Full-cycle game development from concept to launch, using cutting-edge tools and techniques.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl mb-4 text-white">Game Assets</h3>
              <p className="text-purple-200">
                High-quality 2D and 3D art assets, character design, animations, and visual effects for your projects.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl mb-4 text-white">Engine Support</h3>
              <p className="text-purple-200">
                Technical support and custom solutions for Rebel Engine and other game development platforms.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-5xl mb-8 text-white">Get In Touch</h2>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              Have a project in mind or want to learn more about our work?
              We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@sevenleafclover.com"
              className="inline-block text-2xl md:text-3xl text-white hover:text-purple-300 transition-colors duration-300"
            >
              contact@sevenleafclover.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
        <img src={companyLogo} alt="Seven Leaf Clover" className="w-20 h-20 mx-auto mb-4 opacity-80" />
        <p className="text-gray-400">© 2026 Seven Leaf Clover. All rights reserved.</p>
      </footer>
    </div>
  );
}