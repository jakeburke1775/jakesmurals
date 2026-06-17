import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import webHeader from './assets/JMWebHeader.svg';
import { useCacheBuster } from './utils/cache-buster';
import './App.css'

const exampleImageModules = import.meta.glob('./assets/examples/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}', {
  eager: true,
  import: 'default'
});

const exampleImages = Object.values(exampleImageModules);
const photoColumns = [[], [], []];

exampleImages.forEach((imageSrc, index) => {
  photoColumns[index % 3].push({ imageSrc, index });
});

function LandingPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="landing">
      <header className="site-header" aria-label="Jake's Murals website header">
        <img className="site-header__image" src={webHeader} alt="JM Web Header" />
        <div className="site-header__contact-container" aria-label="Contact information">
          <a className="site-header__item site-header__phone" href="tel:6107372969" aria-label="Call (610) 737-2969">
            (610) 737-2969
          </a>
          <a className="site-header__item site-header__email" href="mailto:jakeburke1775@gmail.com" aria-label="Email jakeburke1775@gmail.com">
            jakeburke1775@gmail.com
          </a>
        </div>
      </header>
      <main className="site-body" aria-label="Page content">
        <h1 className="services-heading">
          Murals - Interior painting - Window painting - Chalk drawing - Drywall Repair
        </h1>
        <div className="badges" aria-label="Business badges">
          <div className="badge badge-vet" aria-label="Veteran owned and operated">
            Veteran Owned
          </div>
          <div className="badge badge-insured" aria-label="Insured business">
            Fully Insured
          </div>
          <div className="badge badge-estimates" aria-label="Free estimates">
            Free Estimates
          </div>
        </div>
        <section className="photo-collage" aria-label="Example mural photos">
          {photoColumns.map((column, columnIndex) => (
            <div className="photo-column" key={`photo-column-${columnIndex}`}>
              {column.map(({ imageSrc, index }) => (
                <figure className="photo-tile" key={imageSrc}>
                  <button
                    type="button"
                    className="photo-tile__button"
                    onClick={() => setSelectedImage({ src: imageSrc, alt: `Example work ${index + 1}` })}
                    aria-label={`Open example work ${index + 1}`}
                  >
                    <img src={imageSrc} alt={`Example work ${index + 1}`} loading="lazy" />
                  </button>
                </figure>
              ))}
            </div>
          ))}
        </section>

        {selectedImage && (
          <div
            className="image-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded example photo"
            onClick={() => setSelectedImage(null)}
          >
            <div className="image-modal__content" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="image-modal__close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close photo modal"
              >
                Close
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function App() {
  // Enable cache busting in development
  useCacheBuster({ 
    verbose: import.meta.env.DEV, // Only show logs in development
    updateCSS: true 
  });

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
