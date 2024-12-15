import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../home.css'; // Import your CSS file for styling

const Homepage = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/signup');
  };

  const handleReadMoreClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    // <div className="homepage">
    //   {/* Call to Action Section */}
    //   <section className="call-to-action">
    //     <h2>Ready to Dive into JobXplore?</h2>
    //     <p>Sign up today and start exploring exciting job opportunities tailored to your career goals.</p>
    //     <a href="/signup" className="cta-button">Get Started</a>
    //   </section>
    <div className="homepage">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Job</h1>
        <p>Sign up today and start exploring exciting job opportunities tailored to your career goals.</p>
        <a href="/signup" className="cta-button">Get Started</a>
      </div>
    </section>

      {/* Career Advice Section */}
      <section className="career-advice">
        <h2>Career Advice & Tips</h2>
        <div className="advice-list">
          <div className="advice-card">
            <img src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?ga=GA1.1.1815051509.1721971629&semt=ais_hybrid" alt="Career Advice 1" className="advice-image" />
            <h3>How to Ace Your Interview</h3>
            <p>Get expert tips on how to prepare for and succeed in your job interviews.</p>
            <a href="https://www.ef.com/wwen/blog/language/11-tips-how-to-ace-a-job-interview/" className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <div className="advice-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAaRovP3Fg44g9dbc8CHB8zGkedLVSEwBSA&s" alt="Career Advice 2" className="advice-image" />
            <h3>Building a Standout Resume</h3>
            <p>Learn the best practices for crafting a resume that gets noticed by employers.</p>
            <a href="https://enhancv.com/blog/how-to-make-your-resume-stand-out/" className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <div className="advice-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCAOu_ahNYpfH4MtWjK_mPwxEpaAKPt0kAA&s" alt="Career Advice 3" className="advice-image" />
            <h3>Networking Strategies for Success</h3>
            <p>Discover effective networking strategies to expand your professional connections and advance your career.</p>
            <a href="https://blog.hubspot.com/marketing/the-ultimate-guide-to-non_awkward-effective-networking" className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          {/* Add more advice cards as needed */}
          </div>
              {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>"I found the perfect job through this platform! The process was smooth and straightforward."</p>
            <span>- Sarah Lee</span>
          </div>
          <div className="testimonial-card">
            <p>"A great resource for job seekers. The job recommendations were spot on and helped me land a great role."</p>
            <span>- Michael Brown</span>
          </div>
        </div>
      </section>

       
      </section>
    </div>
  );
};

export default Homepage;




