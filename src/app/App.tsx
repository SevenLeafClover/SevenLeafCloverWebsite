import companyLogo from "../imports/Company_Logo.png";
import arenaComboVideo from "../imports/Arena Combo.webm";
import RETrailer from "../imports/RE Website Trailer.webm";
import rebelEngineLogo from "../imports/Rebel_Engine_Logo.png";
import rebelEngineBackground from "../imports/Payloaders_Strike_-_Portada_ALT.png";
import banqueteersLogo from "../imports/Banqueteers_Logo.png";
import banqueteersScreenshot from "../imports/Banqueteers_Game_Screenshot.png";
import teamPhoto from "../imports/Team_Photo.png";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "rebel-engine", label: "Rebel Engine" },
  { id: "banqueteers", label: "Banqueteers" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white">
      <nav className="group/nav fixed left-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 py-8 pl-4 pr-48">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="relative flex items-center"
          >
            <span className="w-5 h-5 rounded-full bg-white/50 border border-white/70 group-hover/nav:bg-white transition-colors duration-300" />
            <span className="absolute left-6 text-base text-white whitespace-nowrap bg-black/60 backdrop-blur-sm px-2 py-1 rounded opacity-0 -translate-x-1 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 transition-all duration-200">
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center h-screen snap-start text-white px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0021 0%, #1a0038 100%)' }}>
        <video
          src={arenaComboVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 blur brightness-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        <img src={companyLogo} alt="Seven Leaf Clover" className="relative z-10 w-64 h-64 mb-8 drop-shadow-[0_16px_48px_rgba(0,0,0,0.8)]" />
        <p className="relative z-10 text-xl md:text-3xl text-center max-w-2xl text-purple-200 drop-shadow-[0_16px_48px_rgba(0,0,0,0.8)]">
          Creating Playable Memories
        </p>
      </section>

      {/* Rebel Engine Section */}
      <section id="rebel-engine" className="relative h-screen snap-start py-20 px-6 flex flex-col justify-center overflow-y-auto" style={{ background: 'linear-gradient(135deg, #3b0f4d 0%, #4d1a60 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={rebelEngineBackground} alt="" className="w-full h-full object-cover scale-110 blur-sm" />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="md:w-1/2">
            <img src={rebelEngineLogo} alt="Rebel Engine" className="w-full max-w-md mb-6" />
            <p className="text-lg text-purple-100 leading-relaxed">
              Combo your way through hordes of robot enemies and take revenge
              on humanity. Free yourself and all of robot-kind with speed and style!
            </p>
            <a
              href="https://store.steampowered.com/app/1977200/Rebel_Engine/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center mt-6 -translate-x-6 text-purple-100 hover:text-white transition-colors duration-300"
              aria-label="Rebel Engine on Steam"
            >
              <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
              </svg>
            </a>
          </div>
        </div>
        <video
          src={RETrailer}
          autoPlay
          loop
          muted
          playsInline
          className="relative z-10 w-full mt-8 md:mt-0 md:absolute md:top-1/2 md:right-30 md:-translate-y-1/2 md:w-[45%] rounded-lg drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        />
      </section>

      {/* Banqueteers Section */}
      <section id="banqueteers" className="h-screen snap-start py-20 px-6 flex items-center overflow-y-auto" style={{ background: 'linear-gradient(135deg, #a7755f 0%, #b8886f 100%)' }}>
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
      <section id="team" className="h-screen snap-start py-12 px-6 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #683432 0%, #7a4543 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-white">Our Team</h2>
          <div className="mb-4">
            <img
              src={teamPhoto}
              alt="Seven Leaf Clover Team"
              className="w-full max-h-64 md:max-h-80 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <p className="text-base md:text-lg text-purple-200 leading-relaxed">
            We're a passionate team of developers, artists, and designers dedicated to creating
            exceptional gaming experiences. Our diverse backgrounds and shared love for games
            drive us to push creative boundaries.
          </p>
        </div>
      </section>

      {/* Services & Contact Section */}
      <section id="contact" className="h-screen snap-start py-12 px-6 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #411d33 0%, #522944 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-6 text-center text-white">Services</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="text-2xl mb-2">🎮</div>
              <h3 className="text-lg mb-2 text-white">Game Development</h3>
              <p className="text-sm text-purple-200">
                Full-cycle game development from concept to launch, using cutting-edge tools and techniques.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="text-lg mb-2 text-white">Game Assets</h3>
              <p className="text-sm text-purple-200">
                High-quality 2D and 3D art assets, character design, animations, and visual effects for your projects.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="text-lg mb-2 text-white">Engine Support</h3>
              <p className="text-sm text-purple-200">
                Technical support and custom solutions for Rebel Engine and other game development platforms.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <h2 className="text-3xl mb-3 text-white">Get In Touch</h2>
            <p className="text-base text-purple-200 mb-3 leading-relaxed">
              Have a project in mind or want to learn more about our work?
              We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@sevenleafclover.com"
              className="inline-block text-xl md:text-2xl text-white hover:text-purple-300 transition-colors duration-300"
            >
              contact@sevenleafclover.com
            </a>
          </div>

          <div className="mt-6 text-left">
            <img src={companyLogo} alt="Seven Leaf Clover" className="w-14 h-14 mb-2 opacity-80" />
            <p className="text-gray-400 text-sm">© 2026 Seven Leaf Clover. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}