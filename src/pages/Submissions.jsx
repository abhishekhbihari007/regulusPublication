import { useState } from 'react'
import './Submissions.css'

const Submissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    genre: '',
    wordCount: '',
    title: '',
    synopsis: '',
    queryLetter: '',
    manuscriptFile: null
  })

  const [openFaq, setOpenFaq] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      manuscriptFile: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your submission! We will review your manuscript and get back to you within 10 days.')
  }

  const faqs = [
    {
      id: 1,
      question: "What file formats do you accept?",
      answer: "We accept manuscripts in Microsoft Word (.doc, .docx) or PDF format. Please ensure your file is properly formatted and free of password protection."
    },
    {
      id: 2,
      question: "What is the minimum/maximum word count?",
      answer: "Minimum word count varies by genre: Fiction (50,000+), Non-fiction (40,000+), Children's books (500-2,000). There is no strict maximum, but we typically work with manuscripts up to 150,000 words."
    },
    {
      id: 3,
      question: "How long does the review process take?",
      answer: "We provide initial feedback on your synopsis within 10 days. If we're interested in seeing the full manuscript, the complete review process typically takes 4-6 weeks."
    },
    {
      id: 4,
      question: "Do you charge for manuscript evaluation?",
      answer: "No, our manuscript evaluation service is completely free. We only charge fees if you decide to proceed with our publishing services after acceptance."
    },
    {
      id: 5,
      question: "Can I submit multiple manuscripts?",
      answer: "Yes, you can submit multiple manuscripts, but please submit them separately. Each manuscript will be evaluated individually."
    },
    {
      id: 6,
      question: "What happens after my manuscript is accepted?",
      answer: "After acceptance, our team will work with you through editing, design, production, and marketing phases. We'll provide a detailed timeline and keep you informed at every step."
    }
  ]

  const genreSpecifics = {
    Fiction: "We welcome all sub-genres including literary fiction, mystery, romance, sci-fi, fantasy, and historical fiction. Strong character development and compelling narratives are essential.",
    "Non-fiction": "Non-fiction submissions should be well-researched, factually accurate, and offer unique insights or perspectives. We accept memoirs, self-help, business, history, and more.",
    Children: "Children's books should be age-appropriate, engaging, and include positive messages. We accept picture books, early readers, middle-grade, and young adult fiction.",
    Academic: "Academic works should contribute meaningfully to their field. Please include your credentials and any relevant academic affiliations.",
    Poetry: "We accept poetry collections with a minimum of 50 pages. Strong imagery, unique voice, and thematic coherence are important.",
    Biography: "Biographical works should be well-researched and provide new insights or perspectives on the subject. Authorization or proper attribution is required for living subjects."
  }

  return (
    <div className="submissions">
      <section className="page-hero">
        <div className="container">
          <h1>Submit Your Manuscript</h1>
          <p className="page-subtitle">Start Your Publishing Journey Today</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Guidelines */}
          <div className="guidelines-section">
            <h2>Submission Guidelines</h2>
            
            <div className="guideline-item">
              <h3>File Format</h3>
              <p>Please submit your manuscript as a Microsoft Word (.doc, .docx) or PDF file. Ensure the document is properly formatted with clear chapter breaks and page numbers.</p>
            </div>

            <div className="guideline-item">
              <h3>Word Count Requirements</h3>
              <ul>
                <li><strong>Fiction:</strong> 50,000 words minimum</li>
                <li><strong>Non-fiction:</strong> 40,000 words minimum</li>
                <li><strong>Children's Books:</strong> 500-2,000 words</li>
                <li><strong>Poetry:</strong> 50 pages minimum</li>
                <li><strong>Academic:</strong> 30,000 words minimum</li>
              </ul>
            </div>

            <div className="guideline-item">
              <h3>Genre-Specific Requirements</h3>
              <div className="genre-specs">
                {Object.entries(genreSpecifics).map(([genre, desc]) => (
                  <div key={genre} className="genre-spec">
                    <strong>{genre}:</strong>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="guideline-item">
              <h3>Required Information</h3>
              <p>Please include the following with your submission:</p>
              <ul>
                <li>Author name and contact information</li>
                <li>Manuscript title</li>
                <li>Genre and word count</li>
                <li>Brief synopsis (200-500 words)</li>
                <li>Optional: Query letter or author bio</li>
              </ul>
            </div>
          </div>

          {/* Submission Form */}
          <div className="submission-form-section">
            <h2>Online Submission Form</h2>
            <form onSubmit={handleSubmit} className="submission-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Genre *</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-fiction">Non-fiction</option>
                    <option value="Children">Children</option>
                    <option value="Academic">Academic</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Biography">Biography</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Manuscript Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Word Count *</label>
                  <input
                    type="number"
                    name="wordCount"
                    value={formData.wordCount}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Synopsis *</label>
                <textarea
                  name="synopsis"
                  value={formData.synopsis}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Provide a brief synopsis of your manuscript (200-500 words)"
                />
              </div>

              <div className="form-group">
                <label>Query Letter (Optional)</label>
                <textarea
                  name="queryLetter"
                  value={formData.queryLetter}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about yourself, your writing background, and why you think your manuscript would be a good fit for Regulus International Publishing House"
                />
              </div>

              <div className="form-group">
                <label>Upload Manuscript *</label>
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  onChange={handleFileChange}
                  required
                />
                <small>Accepted formats: .doc, .docx, .pdf (Max size: 10MB)</small>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Submit Manuscript
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map(faq => (
                <div key={faq.id} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle">{openFaq === faq.id ? '−' : '+'}</span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Submissions

