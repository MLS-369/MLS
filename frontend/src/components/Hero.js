// import React from 'react';
// import '../styles/Hero.css';

// const Hero = () => {
//   return (
//     <section className={`hero`} id='home'>
//       <div className="hero-content">
//           <h1 className="hero-title">
//             Men Legum Sanctitas
//           </h1>
//           <p className="hero-subtitle">
//             Driven by the Spirit of Justice, Guided by the Sanctity of Law
//           </p>
//         </div>
//     </section>
//   );
// };

// export default Hero;








import React from 'react';
import '../styles/Hero.css';
import { useTheme } from './ThemeContext';

const Hero = () => {
  const { isDarkTheme } = useTheme();
  
  return (
    <section className={`hero ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id='home'>
      <div className="hero-content">
        <h1 className="hero-title">
          MEN LEGATUM SANCTITAS
        </h1>
        <p className="hero-subtitle">
          Driven by the Spirit of Justice, Guided by the Sanctity of Law
        </p>
      </div>
    </section>
  );
};

export default Hero;

