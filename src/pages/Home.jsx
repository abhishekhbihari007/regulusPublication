import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [email, setEmail] = useState('')
  const [expandedGenres, setExpandedGenres] = useState({})
  const [loadedImages, setLoadedImages] = useState(new Set())
  const imageRefs = useRef({})
  const booksPerGenre = 5 // Show 5 books initially

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  const toggleGenre = (genre) => {
    setExpandedGenres(prev => ({
      ...prev,
      [genre]: !prev[genre]
    }))
  }
  const books = [
    // Engineering (10 books)
    { id: 1, title: "Quantum Materials and the Future of Intelligent Machines", image: "/images/1.png", genre: "Engineering" },
    { id: 2, title: "Autonomous Systems: Designing a Self-Thinking World", image: "/images/2.png", genre: "Engineering" },
    { id: 3, title: "Neuro-Mechanical Engineering: Interfaces That Think and Move", image: "/images/3.png", genre: "Engineering" },
    { id: 4, title: "Hyperloop Dynamics: The Physics of Ultra-Fast Transit", image: "/images/4.png", genre: "Engineering" },
    { id: 5, title: "Fractal Engineering: Designing with Nature's Geometry", image: "/images/5.png", genre: "Engineering" },
    { id: 6, title: "The AI Fabric: Computational Infrastructure for a Smart Planet", image: "/images/6.png", genre: "Engineering" },
    { id: 7, title: "NanoRobotics in Extreme Environments", image: "/images/7.png", genre: "Engineering" },
    { id: 8, title: "The Metaverse Engineer: Building Realities Beyond Reality", image: "/images/8.png", genre: "Engineering" },
    { id: 9, title: "Bio-Inspired Structures: Engineering Through Evolution's Lens", image: "/images/9.png", genre: "Engineering" },
    { id: 10, title: "The Zero-Carbon Blueprint: Engineering the Climate-Safe World", image: "/images/10.png", genre: "Engineering" },
    // Agriculture (10 books)
    { id: 11, title: "AgriTech 5.0: Autonomous Farms and Smart Food Systems", image: "/images/11.png", genre: "Agriculture" },
    { id: 12, title: "CRISPR Fields: Editing the Future of Crop Resilience", image: "/images/12.png", genre: "Agriculture" },
    { id: 13, title: "Climate-Adaptive Farming: Designing Crops for 2050", image: "/images/13.png", genre: "Agriculture" },
    { id: 14, title: "Digital Agronomy: AI, Sensors, and Predictive Harvesting", image: "/images/14.png", genre: "Agriculture" },
    { id: 15, title: "Vertical Worlds: Farming in Towers, Cities, and Space", image: "/images/15.png", genre: "Agriculture" },
    { id: 16, title: "The Soil Microbiome Revolution", image: "/images/16.png", genre: "Agriculture" },
    { id: 17, title: "Hydroponic Intelligence: Smart Systems for Water-Efficient Farming", image: "/images/17.png", genre: "Agriculture" },
    { id: 18, title: "Green Drones: Autonomous Crop Health Guardians", image: "/images/18.png", genre: "Agriculture" },
    { id: 19, title: "Planet-Proof Agriculture: Strategies for Extreme Weather", image: "/images/19.png", genre: "Agriculture" },
    { id: 20, title: "Agricultural Blockchain: Traceability in the Global Food Web", image: "/images/20.png", genre: "Agriculture" },
    // Biotechnology (10 books)
    { id: 21, title: "Genomic Futures: Engineering Life One Gene at a Time", image: "/images/21.png", genre: "Biotechnology" },
    { id: 22, title: "Synthetic Biology 3.0: Building Organisms from Code", image: "/images/22.png", genre: "Biotechnology" },
    { id: 23, title: "The Organoid Era: Mini-Brains, Mini-Hearts, Maxi Impact", image: "/images/23.png", genre: "Biotechnology" },
    { id: 24, title: "BioComputing: Where DNA Becomes Data", image: "/images/24.png", genre: "Biotechnology" },
    { id: 25, title: "Regenerative Age: Stem Cells and the New Human Blueprint", image: "/images/25.png", genre: "Biotechnology" },
    { id: 26, title: "Biodesign for Planet Repair: Microbes as Environmental Engineers", image: "/images/26.png", genre: "Biotechnology" },
    { id: 27, title: "CRISPR Convergence: Gene Editing Meets AI", image: "/images/27.png", genre: "Biotechnology" },
    { id: 28, title: "Next-Gen Biopharmaceuticals: Smart Drugs, Live Therapeutics", image: "/images/28.png", genre: "Biotechnology" },
    { id: 29, title: "Human 2.0: The Science of Cellular Upgrades", image: "/images/29.png", genre: "Biotechnology" },
    { id: 30, title: "Biomanufacturing in Space: Life Engineering Beyond Earth", image: "/images/30.png", genre: "Biotechnology" },
    // Comics / Graphic Novels (10 books)
    { id: 31, title: "ChronoForge: The Engineer Who Bent Time", image: "/images/31.png", genre: "Comics / Graphic Novels" },
    { id: 32, title: "BioKnight: The Genome Guardian", image: "/images/32.png", genre: "Comics / Graphic Novels" },
    { id: 33, title: "NanoRangers: Protectors of the Invisible Realm", image: "/images/33.png", genre: "Comics / Graphic Novels" },
    { id: 34, title: "SkyFarmers 2099: Battle for the Green Earth", image: "/images/34.png", genre: "Comics / Graphic Novels" },
    { id: 35, title: "The Quantum Detective", image: "/images/35.png", genre: "Comics / Graphic Novels" },
    { id: 36, title: "CyberRoots: The Last Botanist of Earth-X", image: "/images/36.png", genre: "Comics / Graphic Novels" },
    { id: 37, title: "MechSoul: When Robots Learn to Dream", image: "/images/37.png", genre: "Comics / Graphic Novels" },
    { id: 38, title: "CRISPR Rebels: The Edited Ones", image: "/images/38.png", genre: "Comics / Graphic Novels" },
    { id: 39, title: "Metacity Zero: Rise of the Carbonless Zone", image: "/images/39.png", genre: "Comics / Graphic Novels" },
    { id: 40, title: "Galactic Entrepreneurs: Startup War in Space", image: "/images/40.png", genre: "Comics / Graphic Novels" },
    // Business & Entrepreneurship (10 books)
    { id: 41, title: "The AI-First Startup: Building Companies with Autonomous Intelligence", image: "/images/41.png", genre: "Business & Entrepreneurship" },
    { id: 42, title: "Disruptive DNA: The Entrepreneur's Guide to Reinventing Everything", image: "/images/42.png", genre: "Business & Entrepreneurship" },
    { id: 43, title: "Beyond Unicorns: Designing Anti-Fragile Companies", image: "/images/43.png", genre: "Business & Entrepreneurship" },
    { id: 44, title: "Metaverse Markets: Business in Virtual Civilizations", image: "/images/44.png", genre: "Business & Entrepreneurship" },
    { id: 45, title: "The Quantum Leader: Decision-Making in Non-Linear Times", image: "/images/45.png", genre: "Business & Entrepreneurship" },
    { id: 46, title: "Zero-Friction Business: Automation, Trust, and Speed", image: "/images/46.png", genre: "Business & Entrepreneurship" },
    { id: 47, title: "Startups in the Bio-Age: Entrepreneurship in Synthetic Biology", image: "/images/47.png", genre: "Business & Entrepreneurship" },
    { id: 48, title: "The Green Billion: Businesses That Restore the Planet", image: "/images/48.png", genre: "Business & Entrepreneurship" },
    { id: 49, title: "FounderOS: A New Architecture for Innovation", image: "/images/49.png", genre: "Business & Entrepreneurship" },
    { id: 50, title: "AI-Driven Wealth: Smart Systems for Next-Gen Business", image: "/images/50.png", genre: "Business & Entrepreneurship" },
    // Novels / Fiction (10 books)
    { id: 51, title: "The Algorithmic Prophet", image: "/images/51.png", genre: "Novels / Fiction" },
    { id: 52, title: "Seeds of Titan: The First Bio-Farms on Saturn's Moon", image: "/images/52.png", genre: "Novels / Fiction" },
    { id: 53, title: "The Last Engineer of Old Earth", image: "/images/53.png", genre: "Novels / Fiction" },
    { id: 54, title: "Genome of the Gods", image: "/images/54.png", genre: "Novels / Fiction" },
    { id: 55, title: "City of Eternal Data", image: "/images/55.png", genre: "Novels / Fiction" },
    { id: 56, title: "The Sleepless Garden", image: "/images/56.png", genre: "Novels / Fiction" },
    { id: 57, title: "Zero-Sky Colony", image: "/images/57.png", genre: "Novels / Fiction" },
    { id: 58, title: "The Memory Harvesters", image: "/images/58.png", genre: "Novels / Fiction" },
    { id: 59, title: "The Quantum Orphan", image: "/images/59.png", genre: "Novels / Fiction" },
    { id: 60, title: "A Thousand Lives of Light", image: "/images/60.png", genre: "Novels / Fiction" }
  ]

  // Group books by genre
  const booksByGenre = books.reduce((acc, book) => {
    if (!acc[book.genre]) {
      acc[book.genre] = []
    }
    acc[book.genre].push(book)
    return acc
  }, {})

  const genres = ['Engineering', 'Agriculture', 'Biotechnology', 'Comics / Graphic Novels', 'Business & Entrepreneurship', 'Novels / Fiction']

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '100px', // Start loading 100px before image enters viewport
      threshold: 0.01
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          
          // Load image if it has data-src and hasn't been loaded yet
          if (img.dataset.src && !img.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
          
          observer.unobserve(img)
        }
      })
    }, observerOptions)

    // Observe all images that have data-src (lazy loaded images)
    Object.values(imageRefs.current).forEach((ref) => {
      if (ref && ref.dataset.src) {
        observer.observe(ref)
      }
    })

    return () => {
      Object.values(imageRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [expandedGenres])

  // Preload first 6 images (first row of first genre)
  useEffect(() => {
    const firstGenreBooks = booksByGenre[genres[0]] || []
    const firstSixBooks = firstGenreBooks.slice(0, 6)
    firstSixBooks.forEach((book) => {
      if (book.image && !loadedImages.has(book.image)) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = book.image
        document.head.appendChild(link)
        setLoadedImages(prev => new Set([...prev, book.image]))
      }
    })
  }, [])

  return (
    <div className="home">
      {/* Discover More Section */}
      <section className="discover-more-section">
        <div className="container">
          <div className="discover-more-grid">
            <Link to="/about" className="discover-card">
              <h3 className="discover-card-title">About Us</h3>
              <p className="discover-card-description">Learn about our story, mission, and the team behind Regulus International</p>
              <span className="discover-card-arrow">→</span>
            </Link>
            
            <Link to="/services" className="discover-card">
              <h3 className="discover-card-title">Services</h3>
              <p className="discover-card-description">From manuscript evaluation to marketing and distribution</p>
              <span className="discover-card-arrow">→</span>
            </Link>
            
            <Link to="/authors" className="discover-card">
              <h3 className="discover-card-title">Author Spotlight</h3>
              <p className="discover-card-description">Meet our talented authors and read their success stories</p>
              <span className="discover-card-arrow">→</span>
            </Link>
            
            <Link to="/catalog" className="discover-card">
              <h3 className="discover-card-title">Latest Releases</h3>
              <p className="discover-card-description">Discover our newest titles across all genres</p>
              <span className="discover-card-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {genres.map((genre) => {
        const genreBooks = booksByGenre[genre] || []
        const isExpanded = expandedGenres[genre]
        const displayedBooks = isExpanded ? genreBooks : genreBooks.slice(0, booksPerGenre)
        const hasMoreBooks = genreBooks.length > booksPerGenre

        return (
          <section key={genre} className="genre-section">
            <div className="container">
              <h2 className="genre-title">{genre}</h2>
              <div className="books-grid">
                {displayedBooks.map((book, bookIndex) => {
                  // First 6 images (first genre, first row) should load immediately
                  const isFirstGenre = genre === genres[0]
                  const isAboveFold = isFirstGenre && bookIndex < 6
                  const isLoaded = loadedImages.has(book.image)
                  
                  return (
                  <div key={book.id} className="book-card">
                    <div className="book-image-container">
                      {!isLoaded && !isAboveFold && <div className="image-placeholder" />}
                      <img 
                        ref={(el) => {
                          if (el) imageRefs.current[book.id] = el
                        }}
                        data-src={!isAboveFold ? book.image : undefined}
                        src={isAboveFold ? book.image : undefined}
                        alt={book.title} 
                        className={`book-image ${isLoaded || isAboveFold ? 'loaded' : ''}`}
                        loading={isAboveFold ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={isAboveFold ? "high" : "auto"}
                        width="200"
                        height="320"
                        onLoad={(e) => {
                          const imgSrc = e.target.src || e.target.dataset.src
                          if (imgSrc && !loadedImages.has(imgSrc)) {
                            setLoadedImages(prev => new Set([...prev, imgSrc]))
                          }
                        }}
                      />
                    </div>
                    <h3 className="book-title">{book.title}</h3>
                  </div>
                  )
                })}
              </div>
              {hasMoreBooks && (
                <div className="view-more-container">
                  <button 
                    className="view-more-button" 
                    onClick={() => toggleGenre(genre)}
                  >
                    {isExpanded ? 'View Less' : 'View More'}
                  </button>
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* Newsletter Subscription Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-description">Subscribe to our newsletter for the latest releases, author interviews, and publishing insights.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
