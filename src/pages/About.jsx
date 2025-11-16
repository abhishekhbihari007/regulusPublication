import './About.css'

const About = () => {
  const team = [
    {
      id: 1,
      name: "Robert Davis",
      role: "Co-Founder & CEO",
      bio: "With over 20 years in publishing, Robert brings extensive industry knowledge and a passion for discovering new voices."
    },
    {
      id: 2,
      name: "Margaret Bryce",
      role: "Co-Founder & Editorial Director",
      bio: "Margaret's editorial expertise has shaped hundreds of bestselling books across multiple genres."
    },
    {
      id: 3,
      name: "David Kim",
      role: "Creative Director",
      bio: "David leads our design team, creating captivating covers and layouts that bring stories to visual life."
    },
    {
      id: 4,
      name: "Lisa Patel",
      role: "Marketing Director",
      bio: "Lisa's innovative marketing strategies have helped our authors reach millions of readers worldwide."
    }
  ]

  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our relationships with authors, readers, and partners."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to stay at the forefront of modern publishing."
    },
    {
      title: "Author-First",
      description: "Our authors are at the heart of everything we do. We support them through every step of their publishing journey."
    }
  ]

  const awards = [
    "Best Independent Publisher 2025 - Publishing Excellence Awards",
    "Editor's Choice Award 2024 - Literary Review",
    "Outstanding Marketing Campaign 2025 - Book Marketing Association",
    "Top 10 Publishing Houses - Readers' Choice Awards 2024"
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="page-subtitle">Bringing Stories to Life Since 2010</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Regulus International Publishing House 
                began with a simple mission: to discover and nurture exceptional voices in literature 
                and bring their stories to readers around the world.
              </p>
              <p>
                What started as a small independent publisher has grown into a respected publishing house 
                that has helped over 500 authors share their stories. Our journey has been marked by 
                dedication to quality, innovation in publishing practices, and an unwavering commitment 
                to our authors' success.
              </p>
              <p>
                Today, we publish across multiple genres including fiction, non-fiction, children's 
                literature, academic works, and more. Our books are available worldwide through 
                major retailers and independent bookstores.
              </p>
            </div>
            <div className="content-image">
              <div className="placeholder-image">
                <p>Founders Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <div className="mission-visional">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To empower authors by providing comprehensive publishing services that transform 
                manuscripts into beautifully crafted books, while building lasting relationships 
                with authors and readers worldwide.
              </p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and innovative publishing house, recognized for 
                discovering exceptional talent and creating books that inspire, educate, and 
                entertain readers across all genres and demographics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-photo">
                  <p>{member.name.charAt(0)}</p>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Awards & Recognitions</h2>
          <div className="awards-list">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <span className="award-icon">🏆</span>
                <p>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

