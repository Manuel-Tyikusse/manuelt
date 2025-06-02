function Home(){
    return (
        <div>
            <section >
                <nav className="navbar">
                    <h2 id="nome"> Manuel</h2>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#">Skills</a>
                    <a href="#">Work</a>
                    <a href="#">Contact</a>
                </nav>
            </section >
            <section className="hero" id="about">
                    <div className="intro">
                        <h1>Hi,<br />I am Manuel<br/> Frontend Developer</h1>
                        <p>"Your vision, My expertise: <br/ > Giving life to your projects"</p>
                        
                    </div>
                    <div className="intro-image">
                        <img src="./Coding-6--Streamline-Brooklyn.png" />
                    </div>
                    
            </section>
            <button className="button" >Contact me</button>

            <section className="about">
                <div>
                    <div className="aboutMe-container">
                        <h3>About me</h3>
                    </div>
                    <div className="noIdea">
                        <div className="img-container">
                            <img src="Coding-A-Website-2--Streamline-Brooklyn.png" className="img-about"/>
                        </div>
                        <div className="textf-container">
                            <div className="primeiro">
                            <p>Hello! I am Manuel, an enthusiastic Frontend Developer
                            with a passion for creating engaging and intuitive
                            web experience. Ever since I discovered the power of briging 
                            ideas to life through code.  I've dedicated myselfto mastering 
                            the latest web technologies
                            </p>
                            </div>
                            <div className="segundo">
                            <p >
                            I specialize in building responsive and high-performance user interfaces, focusing on
                            React.js, modern JavaScript, HTML5, and CSS.  I believe that good code not only functions 
                            well but it is also clean, maintainable,  and acessible to everyone.
                            Outside of coding .I love explore new technologies and delving into interface design 
                            to further enhance my projects. 
                            </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="skills-section">
                <h3 className="skills-titles">My Skills</h3>
                <div className="skills-grid">
                    <div className="skill-item">
                        <img src="js.jpg" alt="JavaScript Icon" className="skill-icon"/>
                        <p>JavaScript (ES6+)</p>
                    </div>
                    <div className="skill-item">
                        <img src="2300px-React-icon.svg (1).png" alt="React.js Icon"  className="skill-icon"/>
                        <p>React.js </p>
                    </div>
                    <div className="skill-item">
                        <img src="5968267.png" alt="HTML5 Icon"  className="skill-icon"/>
                        <p>HTML5</p>
                    </div>
                    <div className="skill-item">
                        <img src="919826.png" alt="CSS3 Icon"  className="skill-icon"/>
                        <p>CSS3</p>
                    </div>
                    <div className="skill-item">
                        <img src="1200px-Git_icon.svg.png" alt="Git Icon"  className="skill-icon"/>
                        <p>Git & Github</p>
                    </div>
                    <div className="skill-item">
                        <img src="google_firebase-2-512 (1).png" alt="Firebase Icon"  className="skill-icon"/>
                        <p>Firebase</p>
                    </div>
                </div>
            </section>
            <section className="work-section">
                    <h3 className="work-title">My Work / Projects</h3>
                    <div className="projects-grid"> {}
                    <div className="project-card">
                    <img src="/images/project-ecommerce.png" alt="Ecommerce
                    Website Screenshot" className="project-image"/>
                    <div className="project-info">
                    <h4 className="project-name">E-commerce Store
                    Frontend</h4>
                    <p className="project-description">
                    A responsive e-commerce application built with
                    React, featuring product Browse, shopping cart functionality, and user
                    authentication.
                    </p>
                    <div className="project-techs">
                    <span>React.js</span>
                    <span>Redux</span>
                    <span>Styled Components</span>
                    <span>REST API</span>
                    </div>
                    <div className="project-links">
                    <a
                    href="https://github.com/SeuUsuario/ecommerce-repo" target="_blank"
                    rel="noopener noreferrer" className="github-link">
                    <img src="github (1).png" alt="GitHub Icon"
                    /> GitHub
                    </a>
                    <a href="https://demo.ecommerce.com">
                    </a>
                    </div>
                    </div>
                    </div>
                    {/* PROJETO 2: Exemplo de Card de Projeto */}
                    <div className="project-card">
                    <img src="/images/project-dashboard.png" alt="Admin
                    Dashboard Screenshot" className="project-image"/>
                    <div className="project-info">
                    <h4 className="project-name">Admin Dashboard
                    Interface</h4>
                    <p className="project-description">
                    An interactive admin dashboard for managing users
                    and data, designed with a focus on usability and modern UI/UX
                    principles.
                    </p>
                    <div className="project-techs">
                    <span>React.js</span>
                    <span>Chart.js</span>
                    <span>Tailwind CSS</span>
                    </div>
                    <div className="project-links">
                    <a
                    href="https://github.com/SeuUsuario/dashboard-repo" target="_blank"
                    rel="noopener noreferrer" className="github-link">
                    <img src="github (1).png" alt="GitHub Icon"
                    /> GitHub
                    </a>
                    {/* Se não tiver live demo, pode omitir este link
                    */}
                    </div>
                    </div>
                    </div>
                    {/* Adicione mais project-cards para cada um dos seus projetos
                    */}
                    </div>
            </section>

            <section className="contact-section">
                <h3 className="contact-title">Contact Me</h3>
                <div className="contact-info-container">
                
                <div className="contact-item">
                <a href="mailto:manueldevsolutions@gmail.com"
                className="contact-link">
                <img src="360_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg" alt="Email Icon"
                className="contact-icon" />
                <span>manueldevsolutions@gmail.com"</span>
                </a>
                </div>
                <div className="contact-item">
                <a href="https://wa.me/244933269713" target="_blank"
                rel="noopener noreferrer" className="contact-link">
                <img src="whatsapp-call-icon-psd-editable_314999-3666 (1) (1).jpg" alt="WhatsApp Icon" className="contact-icon" />
                <span> WhatsApp </span>
                </a>
                </div>
                {/* Item de Contato: LinkedIn */}
                <div className="contact-item">
                <a href="https://linkedin.com/in/manuel-devsolutions-4572035a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=adroid_app"
                target="_blank" rel="noopener noreferrer" className="contact-link">
                <img src="2048px-LinkedIn_icon.svg.png" alt="LinkedIn Icon"
                className="contact-icon" />
                <span>LinkedIn</span>
                </a>
                </div>
                {/* Item de Contato: X (antigo Twitter) */}
                <div className="contact-item">
                <a href="https://x.com/ManuelDevS59680?t=kWoOnZu-NwaillN4AD8psA&s=09" target="_blank"
                rel="noopener noreferrer" className="contact-link">
                <img src="new-2023-twitter-logo-x-icon-design_1017-45418.jpg" alt="X (Twitter) Icon"
                className="contact-icon" />
                <span>X (Twitter)</span>
                </a>
                </div>
                </div>
            </section>

        </div>
    )
}
export default Home