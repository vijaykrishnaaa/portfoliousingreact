import React, { useState, useEffect } from 'react';
import './Portfolio.css'


const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ src: '', title: '', desc: '' });

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show", "show-top");
          } else {
            entry.target.classList.remove("show", "show-top");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".hidden, .hidden-right, .hidden-top").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    e.target.reset();
  };

  const openModal = (imgSrc, title, desc) => {
    setModalData({ src: imgSrc, title, desc });
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home">
        <div className="home-bg"></div>
        <div className="container">
          <div className="home-grid">
            <div className="home-content">
              <h1><span>VIJAY KRISHNA BURRA</span></h1>
              <p>
                A self-taught web developer and student passionate about crafting
                clean, responsive, and user-centric web experiences.
              </p>
              <div className="cta-buttons">
                <a href="#skills" className="btn">View Skills</a>
                <a href="vijaycv.docx" className="btn" id="resume-download">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="home-image">
              <img src="vijayy.png.png" alt="Vijay Krishna Burra" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text hidden">
              <p>
                I'm currently pursuing
                <span> BTech at Amrita Vishwa Vidyapeetham (2023–2027)</span>. I'm
                a self-taught full-stack web developer with a strong foundation in
                front-end and back-end development, and an active learner always
                exploring new tools and frameworks.
              </p>
              <p>
                I'm confident in <span>HTML, CSS, JavaScript</span>, and modern
                libraries like <span>React and Node.js</span>. My passion for web
                development drives me to create efficient, scalable solutions with
                clean code.
              </p>
              <div className="tech-list">
                <span className="tech-item">Python</span>
                <span className="tech-item">C</span>
                <span className="tech-item">HTML</span>
                <span className="tech-item">CSS</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">ReactJS</span>
                <span className="tech-item">NodeJS</span>
                <span className="tech-item">Express</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">MySQL</span>
              </div>
            </div>
            <div className="hidden-right">
              <div className="section-title">
                <h2>Education Timeline</h2>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <h3>Amrita Vishwa Vidyapeetham, Coimbatore</h3>
                  <p>2023 - 2027 (Continuing)</p>
                </div>
                <div className="timeline-item">
                  <h3>Fiitjee, Visakhapatnam</h3>
                  <p>2021 - 2023</p>
                </div>
                <div className="timeline-item">
                  <h3>Aditya Talent School, Kakinada</h3>
                  <p>2016 - 2021</p>
                </div>
                <div className="timeline-item">
                  <h3>Kendriya Vidyalaya, Visakhapatnam</h3>
                  <p>2011 - 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <div className="section-title">
            <h2>My Skills</h2>
          </div>
          <div className="skills-container">
            <div className="skill-category hidden">
              <h3>Technical Skills</h3>
              <ul className="skill-list">
                <li className="skill-item">Python</li>
                <li className="skill-item">HTML5</li>
                <li className="skill-item">CSS3</li>
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">ReactJS</li>
                <li className="skill-item">Node.js</li>
                <li className="skill-item">Express.js</li>
                <li className="skill-item">MongoDB</li>
                <li className="skill-item">MySQL</li>
                <li className="skill-item">Git & GitHub</li>
              </ul>
            </div>

            <div className="skill-category hidden-right">
              <h3>Personal Skills</h3>
              <ul className="skill-list">
                <li className="skill-item">Problem Solving</li>
                <li className="skill-item">Attention to Detail</li>
                <li className="skill-item">Time Management</li>
                <li className="skill-item">Effective Communication</li>
                <li className="skill-item">Critical Thinking</li>
                <li className="skill-item">Team Collaboration</li>
                <li className="skill-item">Clean Code Practices</li>
                <li className="skill-item">Emotional Intelligence</li>
                <li className="skill-item">Strong Work Ethics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2>My Projects</h2>
          </div>
          <div className="projects-container">
            <div className="project-card hidden-top">
              <div className="project-image">
                <img src="flight.jpg" alt="Flight Management System" />
              </div>
              <div className="project-content">
                <h3>Enhanced Flight Management System</h3>
                <p>A sophisticated flight management solution using the Max-Flow algorithm to optimize flight routes, manage capacity, and reduce delays. The system intelligently allocates resources and calculates optimal paths for maximum efficiency.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Graph Theory</span>
                  <span>Algorithm Design</span>
                  <span>Data Structures</span>
                </div>
                <a href="https://github.com/vijaykrishnaaa/flightmanagementusingminmaxflow" className="project-link" target="_blank" rel="noopener noreferrer">
                  View on GitHub <i>&rarr;</i>
                </a>
              </div>
            </div>
            
            <div className="project-card hidden-top" style={{transitionDelay: '0.2s'}}>
              <div className="project-image">
                <img src="restaurant.jpg" alt="Restaurant Management System" />
              </div>
              <div className="project-content">
                <h3>Restaurant Management System</h3>
                <p>A comprehensive solution for restaurant operations including table management, order processing, inventory tracking, and billing. Features include real-time updates, staff management, and sales analytics for better business decisions.</p>
                <div className="project-tech">
                  <span>HTML/CSS</span>
                  <span>JavaScript</span>
                  <span>Node.js</span>
                  <span>MySQL</span>
                  <span>REST API</span>
                </div>
                <a href="https://github.com/vijaykrishnaaa/restaurantproj" className="project-link" target="_blank" rel="noopener noreferrer">
                  View on GitHub <i>&rarr;</i>
                </a>
              </div>
            </div>

            <div className="project-card hidden-top" style={{transitionDelay: '0.2s'}}>
              <div className="project-image">
                <img src="portfolio.png" alt="myportfolio" />
              </div>
              <div className="project-content">
                <h3>Vijay Krishna Burra - Portfolio Website</h3>
                <p>A modern, responsive portfolio website showcasing my skills, projects, certifications, and professional background as a web developer.</p>
                <div className="project-tech">
                  <span>HTML/CSS</span>
                  <span>JavaScript</span>
                  <span>ReactJS</span>
                </div>
                <a href="https://github.com/vijaykrishnaaa/myportfolio" className="project-link" target="_blank" rel="noopener noreferrer">
                  View on GitHub <i>&rarr;</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="container">
          <div className="section-title">
            <h2>My Certifications</h2>
          </div>
          <div className="certificates-container">
            <div
              className="certificate-item hidden-top"
              data-title="Software Engineering Job Simulation"
              data-desc="Goldman Sachs (Forage) - Oct 2024"
              onClick={() => openModal("goldmansachs.png", "Software Engineering Job Simulation", "Goldman Sachs (Forage) - Oct 2024")}
            >
              <div className="certificate-img">
                <img src="goldmansachs.png" alt="Certification" />
              </div>
              <div className="certificate-info">
                <h3>Software Engineering Job Simulation</h3>
                <p>Goldman Sachs (Forage) - Oct 2024</p>
              </div>
            </div>

            <div
              className="certificate-item hidden-top"
              data-title="Torch it up-AI Journey with PyTorch"
              data-desc="Amrita/IETE - Mar 2025"
              style={{transitionDelay: '0.2s'}}
              onClick={() => openModal("B Vijay Krishna-CB.SC.U4CSE23112.jpg", "Torch it up-AI Journey with PyTorch", "Amrita/IETE - Mar 2025")}
            >
              <div className="certificate-img">
                <img
                  src="B Vijay Krishna-CB.SC.U4CSE23112.jpg"
                  alt="Certification"
                />
              </div>
              <div className="certificate-info">
                <h3>Torch it up-AI Journey with PyTorch</h3>
                <p>Amrita/IETE - Mar 2025</p>
              </div>
            </div>

            <div
              className="certificate-item hidden-top"
              data-title="Automate the Boring Stuff with Python"
              data-desc="Udemy - Mar 2025"
              style={{transitionDelay: '0.2s'}}
              onClick={() => openModal("vijaypython.png", "Automate the Boring Stuff with Python", "Udemy - Mar 2025")}
            >
              <div className="certificate-img">
                <img src="vijaypython.png" alt="Certification" />
              </div>
              <div className="certificate-info">
                <h3>Automate the Boring Stuff with Python</h3>
                <p>Udemy - Mar 2025</p>
              </div>
            </div>

            <div
              className="certificate-item hidden-top"
              data-title="How To CSS"
              data-desc="Codekaro - May 2025"
              style={{transitionDelay: '0.2s'}}
              onClick={() => openModal("1000182459.jpg", "How To CSS", "Codekaro - May 2025")}
            >
              <div className="certificate-img">
                <img src="1000182459.jpg" alt="Certification" />
              </div>
              <div className="certificate-info">
                <h3>How To CSS</h3>
                <p>Codekaro - May 2025</p>
              </div>
            </div>

            <div
              className="certificate-item hidden-top"
              data-title="IETE Workshop on Docker"
              data-desc="Amrita/IETE - Dec 2023"
              style={{transitionDelay: '0.2s'}}
              onClick={() => openModal("BURRA VIJAY KRISHNA .png", "IETE Workshop on Docker", "Amrita/IETE - Dec 2023")}
            >
              <div className="certificate-img">
                <img src="BURRA VIJAY KRISHNA .png" alt="Certification" />
              </div>
              <div className="certificate-info">
                <h3>IETE Workshop on Docker</h3>
                <p>Amrita/IETE - Dec 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item hidden">
                <div className="contact-text">
                  <h3>Email</h3>
                  <a href="mailto:vijaykrishna7583@gmail.com">
                    vijaykrishna7583@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item hidden" style={{transitionDelay: '0.2s'}}>
                <div className="contact-text">
                  <h3>LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/vijay-krishna-burra-636774291/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/vijay-krishna-burra
                  </a>
                </div>
              </div>

              <div className="contact-item hidden" style={{transitionDelay: '0.4s'}}>
                <div className="contact-text">
                  <h3>GitHub</h3>
                  <a href="https://github.com/vijaykrishnaaa" target="_blank" rel="noopener noreferrer">
                    github.com/vijaykrishnaaa
                  </a>
                </div>
              </div>

              <div className="contact-item hidden" style={{transitionDelay: '0.6s'}}>
                <div className="contact-text">
                  <h3>Languages</h3>
                  <p>English, Telugu, Hindi (fluent in speaking and reading)</p>
                  <p>Japanese(Learning)</p>
                </div>
              </div>
            </div>

            <div className="contact-form hidden-right">
              <form id="message-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" required></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="social-links">
              <a
                href="https://linkedin.com/in/vijay-krishna-burra-636774291/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vijaykrishnaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a href="mailto:vijaykrishna7583@gmail.com" className="social-link">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div id="certificateModal" className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img id="expandedImg" src={modalData.src} alt="Expanded Certificate" />
            <div id="certificateTitle" className="certificate-title">
              {modalData.title} - {modalData.desc}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
