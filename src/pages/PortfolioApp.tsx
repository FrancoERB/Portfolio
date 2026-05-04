import { CustomButton } from '../components/button/CustomButton';
import { CustomCard } from '../components/card/CustomCard';
import { CustomCarrousel } from '../components/carrousel/CustomCarrousel';
import { CustomFooter } from '../components/footer/CustomFooter';
import ThemeToggle from '../components/ThemeToggle';
import projects from '../data/data';
import { techLogos } from '../data/techLogos';
export const PortfolioApp = () => {
  return (
    // Hero section//
    <div
      className={`dark:bg-background bg-foreground flex flex-col h-full w-full items-center justify-start`}
    >
      <section className="max-w-4xl text-center animate-fade-in gap-2 my-20 mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        <h1 className={`dark:text-primary text-dark text-7xl font-bold my-5`}>
          Hola, soy <span className="text-secondary"> Franco Erben</span>
        </h1>
        <p className="text-xl font-bold text-text-secundary md:text-2xl text-muted-foreground mb-8 text-balance">
          Frontend Developer | React & TypeScript
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
          Desarrollo interfaces modernas, rápidas y escalables enfocadas en
          experiencia de usuario.
        </p>
        <div className="flex gap-3 w-full justify-center items-center">
          <CustomButton children={'Ver Proyectos'} />
          <CustomButton children={'Contactar'} />
        </div>
      </section>
      {/* Tecnologies section */}
      <section className=" w-full mb-11 bg-bg-dark md:py-4">
        <div className=" mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 dark:text-primary text-dark">
            Tecnologías
          </h2>
          <div className="flex dark:bg-dark bg-primary rounded-4xl flex-wrap gap-1 mx-auto justify-center max-w-4xl">
            <CustomCarrousel autoPlay={true}>
              {techLogos.map((tech, index) => (
                <div
                  key={index}
                  className="flex-[0_0_30%] px-2 flex justify-center"
                >
                  <img
                    className="flex w-24 h-24 object-contain mx-6"
                    src={tech.image}
                  />
                </div>
              ))}
            </CustomCarrousel>
          </div>
        </div>
      </section>
      {/* My proyects section */}
      <section className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 mb-12 animate-slide-up">
          <h2
            className={`dark:text-primary text-dark text-4xl md:text-5xl font-bold text-center mb-4 `}
          >
            Proyectos Destacados
          </h2>
          <p className="text-center text-balance font-bold text-muted-foreground text-xl">
            Algunos de mis trabajos más recientes
          </p>
        </div>
        <div className=" dark:bg-background bg-foreground w-full px-2 md:px-8">
          <CustomCarrousel autoPlay={false}>
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_40%] px-2">
                <CustomCard {...project} />
              </div>
            ))}
          </CustomCarrousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col w-full">
        <div className="flex flex-col w-full h-auto justify-center items-center py-16 gap-2">
          <h2 className="text-5xl dark:text-primary text-dark font-bold">
            Trabajamos juntos?
          </h2>
          <p className="text-xl text-muted-foreground font-semibold">
            Estoy disponible para nuevos proyectos y colaboraciones
          </p>
        </div>
        <div className="flex gap-3 w-full justify-center items-center">
          <a
            href="mailto:francoerben@hotmail.com"
            className="glass-card p-4 rounded-2xl hover:scale-110 transition-transform duration-300"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          <a
            href="https://github.com/FrancoERB"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-2xl hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/franco-erben-272042205/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-2xl hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>
      <section className="w-full h-auto items-center justify-center border-y border-gray-300 mt-30">
        <CustomFooter />
      </section>
    </div>
  );
};
