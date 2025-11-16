import { Link } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "10 Essential Self-Editing Tips Every Author Should Know",
      category: "Writing Tips",
      date: "January 15, 2025",
      excerpt: "Discover practical techniques to polish your manuscript before submission. Learn how to identify common mistakes and strengthen your narrative voice.",
      author: "Margaret Bryce",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Independent Publishing in 2025",
      category: "Publishing Trends",
      date: "January 10, 2025",
      excerpt: "Exploring the latest trends in independent publishing, from digital platforms to print-on-demand services. What authors need to know about the evolving landscape.",
      author: "Robert Davis",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Building Your Author Platform: A Step-by-Step Guide",
      category: "Marketing",
      date: "January 5, 2025",
      excerpt: "Learn how to build a strong online presence as an author. Tips for social media, author websites, and engaging with your readership.",
      author: "Lisa Patel",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Interview with Emily Watson: From Manuscript to Bestseller",
      category: "Author Interviews",
      date: "December 28, 2024",
      excerpt: "An in-depth conversation with bestselling author Emily Watson about her writing process, publishing journey, and advice for aspiring writers.",
      author: "Editorial Team",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Understanding Book Cover Design: What Makes a Cover Sell?",
      category: "Design",
      date: "December 20, 2024",
      excerpt: "Our creative director shares insights on effective book cover design, color psychology, typography choices, and what catches readers' attention.",
      author: "David Kim",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "The Art of Writing Compelling Character Arcs",
      category: "Writing Tips",
      date: "December 15, 2024",
      excerpt: "Explore techniques for creating memorable characters with satisfying growth throughout your story. Examples from bestselling novels.",
      author: "Margaret Bryce",
      readTime: "9 min read"
    }
  ]

  const downloads = [
    {
      id: 1,
      title: "Self-Editing Checklist",
      description: "A comprehensive checklist to help you polish your manuscript before submission.",
      type: "PDF",
      size: "245 KB"
    },
    {
      id: 2,
      title: "Manuscript Formatting Guide",
      description: "Learn how to properly format your manuscript according to industry standards.",
      type: "PDF",
      size: "312 KB"
    },
    {
      id: 3,
      title: "Author Marketing Toolkit",
      description: "Resources and templates to help you market your book effectively.",
      type: "ZIP",
      size: "1.2 MB"
    },
    {
      id: 4,
      title: "Query Letter Template",
      description: "A professional template to help you craft an effective query letter.",
      type: "DOCX",
      size: "45 KB"
    }
  ]

  return (
    <div className="blog">
      <section className="page-hero">
        <div className="container">
          <h1>Blog & Resources</h1>
          <p className="page-subtitle">Insights, Tips, and Tools for Authors</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Articles Section */}
          <div className="articles-section">
            <h2 className="section-title">Latest Articles</h2>
            <div className="articles-grid">
              {articles.map(article => (
                <article key={article.id} className="article-card">
                  <div className="article-header">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <div className="article-meta">
                      <span className="article-author">{article.author}</span>
                      <span className="article-read-time">{article.readTime}</span>
                    </div>
                    <Link to={`/blog/${article.id}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Interviews Section */}
          <div className="interviews-section section bg-light">
            <div className="container">
              <h2 className="section-title">Author Interview Series</h2>
              <div className="interview-highlight">
                <div className="interview-content">
                  <span className="interview-label">Featured Interview</span>
                  <h3>Emily Watson: From Manuscript to Bestseller</h3>
                  <p>
                    Join us for an exclusive conversation with Emily Watson, whose debut novel 
                    "The Midnight Library" became an instant bestseller. She shares her journey 
                    from first draft to published book, the challenges she faced, and her advice 
                    for aspiring authors.
                  </p>
                  <Link to="/blog/4" className="btn btn-primary">
                    Read Full Interview
                  </Link>
                </div>
                <div className="interview-image">
                  <div className="placeholder-image">
                    <p>Interview Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Downloads Section */}
          <div className="downloads-section section">
            <div className="container">
              <h2 className="section-title">Downloadable Resources</h2>
              <p className="downloads-intro">
                Access our collection of free resources designed to help you on your publishing journey.
              </p>
              <div className="downloads-grid">
                {downloads.map(download => (
                  <div key={download.id} className="download-card">
                    <div className="download-icon">
                      {download.type === 'PDF' && '📄'}
                      {download.type === 'ZIP' && '📦'}
                      {download.type === 'DOCX' && '📝'}
                    </div>
                    <h3>{download.title}</h3>
                    <p>{download.description}</p>
                    <div className="download-meta">
                      <span>{download.type}</span>
                      <span>•</span>
                      <span>{download.size}</span>
                    </div>
                    <button className="btn btn-outline">Download</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="categories-section section bg-light">
            <div className="container">
              <h2 className="section-title">Browse by Category</h2>
              <div className="categories-grid">
                <Link to="/blog?category=writing-tips" className="category-card">
                  <h3>Writing Tips</h3>
                  <p>Practical advice to improve your craft</p>
                </Link>
                <Link to="/blog?category=publishing-trends" className="category-card">
                  <h3>Publishing Trends</h3>
                  <p>Stay updated with industry news</p>
                </Link>
                <Link to="/blog?category=marketing" className="category-card">
                  <h3>Marketing</h3>
                  <p>Strategies to promote your book</p>
                </Link>
                <Link to="/blog?category=author-interviews" className="category-card">
                  <h3>Author Interviews</h3>
                  <p>Conversations with published authors</p>
                </Link>
                <Link to="/blog?category=design" className="category-card">
                  <h3>Design</h3>
                  <p>Cover design and layout insights</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

