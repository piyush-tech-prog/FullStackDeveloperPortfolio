
        // Create the entire page with JavaScript
        document.addEventListener('DOMContentLoaded', () => {
            createNavbar();
            createHero();
            createAbout();
            createSkills();
            createProjects();
            createContact();
            createFooter();
            setupEventListeners();
        });
        
        function createNavbar() {
            const header = document.createElement('header');
            header.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 5%;
                background: white;
                position: sticky;
                top: 0;
                z-index: 100;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            `;
            
            // Logo
            const logo = document.createElement('div');
            logo.innerHTML = '<span style="color:#0ea5e9; font-weight:700; font-size:1.8rem;">JD</span>';
            header.appendChild(logo);
            
            // Navigation
            const nav = document.createElement('nav');
            nav.style.display = 'flex';
            nav.style.gap = '2rem';
            
            const navItems = ['Home', 'Skills', 'Projects', 'Contact'];
            navItems.forEach(item => {
                const link = document.createElement('a');
                link.href = `#${item.toLowerCase()}`;
                link.textContent = item;
                link.style.cssText = `
                    color: #334155;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                `;
                link.addEventListener('mouseenter', () => link.style.color = '#0ea5e9');
                link.addEventListener('mouseleave', () => link.style.color = '#334155');
                nav.appendChild(link);
            });
            header.appendChild(nav);
            
            document.body.appendChild(header);
        }
        
        function createHero() {
            const hero = document.createElement('section');
            hero.id = 'home';
            hero.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 90vh;
                background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                color: white;
                text-align: center;
            `;
            
            const content = document.createElement('div');
            content.style.maxWidth = '800px';
            content.style.padding = '2rem';
            
            const greeting = document.createElement('h2');
            greeting.textContent = "Hello, I'm";
            greeting.style.cssText = `
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
                color: #0ea5e9;
            `;
            content.appendChild(greeting);
            
            const name = document.createElement('h1');
            name.textContent = 'Piyush Sharma';
            name.style.cssText = `
                font-size: 3.5rem;
                font-weight: 800;
                margin: 0 0 1rem;
                letter-spacing: 2px;
            `;
            content.appendChild(name);
            
            const title = document.createElement('h2');
            title.textContent = 'Full Stack Developer';
            title.style.cssText = `
                font-size: 1.8rem;
                font-weight: 400;
                margin-bottom: 2rem;
                color: #e2e8f0;
            `;
            content.appendChild(title);
            
            const cta = document.createElement('div');
            cta.style.display = 'flex';
            cta.style.gap = '1rem';
            cta.style.justifyContent = 'center';
            cta.style.marginTop = '2rem';
            
            const contactBtn = document.createElement('a');
            contactBtn.href = '#contact';
            contactBtn.className = 'btn btn-primary';
            contactBtn.textContent = 'Contact Me';
            cta.appendChild(contactBtn);
            
            const portfolioBtn = document.createElement('a');
            portfolioBtn.href = '#projects';
            portfolioBtn.className = 'btn btn-outline';
            portfolioBtn.textContent = 'View Work';
            portfolioBtn.style.color = 'white';
            portfolioBtn.style.borderColor = 'white';
            portfolioBtn.addEventListener('mouseenter', () => {
                portfolioBtn.style.backgroundColor = 'white';
                portfolioBtn.style.color = '#0ea5e9';
            });
            portfolioBtn.addEventListener('mouseleave', () => {
                portfolioBtn.style.backgroundColor = 'transparent';
                portfolioBtn.style.color = 'white';
            });
            cta.appendChild(portfolioBtn);
            
            content.appendChild(cta);
            hero.appendChild(content);
            document.body.appendChild(hero);
        }
        
        function createAbout() {
            const section = document.createElement('section');
            section.id = 'about';
            section.style.backgroundColor = '#f8fafc';
            
            const container = document.createElement('div');
            container.className = 'container';
            
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = 'About Me';
            container.appendChild(title);
            
            const content = document.createElement('div');
            content.style.display = 'flex';
            content.style.flexWrap = 'wrap';
            content.style.gap = '3rem';
            content.style.alignItems = 'center';
            content.style.justifyContent = 'center';
            
            const image = document.createElement('div');
            image.style.cssText = `
                flex: 1;
                min-width: 300px;
                max-width: 400px;
                height: 400px;
                background: url('me.jpg');
                background-size: cover;
                background-position: center;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            `;
            content.appendChild(image);
            
            const text = document.createElement('div');
            text.style.flex = '1';
            text.style.minWidth = '300px';
            text.style.maxWidth = '600px';
            
            const heading = document.createElement('h3');
            heading.textContent = 'Full Stack Developer';
            heading.style.cssText = `
                font-size: 1.8rem;
                color: #0ea5e9;
                margin-bottom: 1.5rem;
            `;
            text.appendChild(heading);
            
            const description = document.createElement('p');
            description.textContent = "I am an Full Stack Developer and AN DevOps Enthusiast";
            description.style.cssText = `
                font-size: 1.1rem;
                margin-bottom: 1.5rem;
                color: #334155;
            `;
            text.appendChild(description);
            
            const info = document.createElement('div');
            info.style.display = 'grid';
            info.style.gridTemplateColumns = 'repeat(2, 1fr)';
            info.style.gap = '1.5rem';
            info.style.marginBottom = '2rem';
            
            const infoItems = [
                {label: 'Name', value: 'Piyush Sharma'},
                {label: 'Email', value: 'piyushopsaws@gmail.com'},
                {label: 'Location', value: 'Surat, Gujarat'},
            ];
            
            infoItems.forEach(item => {
                const itemDiv = document.createElement('div');
                const label = document.createElement('strong');
                label.textContent = `${item.label}: `;
                label.style.color = '#1e293b';
                
                const value = document.createElement('span');
                value.textContent = item.value;
                value.style.color = '#64748b';
                
                itemDiv.appendChild(label);
                itemDiv.appendChild(value);
                info.appendChild(itemDiv);
            });
            
            text.appendChild(info);
            
            const btn = document.createElement('a');
            btn.href = 'https://s3.us-east-1.amazonaws.com/resume.theplb.xyz/My+Resume.pdf';
            btn.className = 'btn btn-primary';
            btn.textContent = 'Download CV';
            text.appendChild(btn);
            
            content.appendChild(text);
            container.appendChild(content);
            section.appendChild(container);
            document.body.appendChild(section);
        }
        
        function createSkills() {
            const section = document.createElement('section');
            section.id = 'skills';
            
            const container = document.createElement('div');
            container.className = 'container';
            
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = 'My Skills';
            container.appendChild(title);
            
            const skillsGrid = document.createElement('div');
            skillsGrid.style.display = 'grid';
            skillsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
            skillsGrid.style.gap = '2rem';
            skillsGrid.style.maxWidth = '1000px';
            skillsGrid.style.margin = '0 auto';
            
            const skills = [
                {
                    category: 'Frontend',
                    items: [
                        {name: 'HTML/CSS', level: 95},
                        {name: 'JavaScript', level: 90},
                        {name: 'React', level: 85},
                    ]
                },
                {
                    category: 'Backend',
                    items: [
                        {name: 'Node.js', level: 85},
                        {name: 'Express', level: 80},
                        {name: 'Python', level: 75},
                        {name: 'MongoDB', level: 80}
                    ]
                },
                {
                    category: 'Tools',
                    items: [
                        {name: 'Git', level: 90},
                        {name: 'Docker', level: 75},
                        {name: 'AWS', level: 70},
                    ]
                }
            ];
            
            skills.forEach(category => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.padding = '2rem';
                
                const categoryTitle = document.createElement('h3');
                categoryTitle.textContent = category.category;
                categoryTitle.style.cssText = `
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: #0ea5e9;
                    text-align: center;
                `;
                card.appendChild(categoryTitle);
                
                category.items.forEach(skill => {
                    const skillDiv = document.createElement('div');
                    skillDiv.style.marginBottom = '1.5rem';
                    
                    const skillName = document.createElement('div');
                    skillName.style.display = 'flex';
                    skillName.style.justifyContent = 'space-between';
                    skillName.style.marginBottom = '0.5rem';
                    skillName.style.fontWeight = '500';
                    skillName.style.color = '#334155';
                    
                    const name = document.createElement('span');
                    name.textContent = skill.name;
                    
                    const percent = document.createElement('span');
                    percent.textContent = `${skill.level}%`;
                    percent.style.color = '#64748b';
                    
                    skillName.appendChild(name);
                    skillName.appendChild(percent);
                    
                    skillDiv.appendChild(skillName);
                    
                    const progress = document.createElement('div');
                    progress.style.height = '10px';
                    progress.style.backgroundColor = '#e2e8f0';
                    progress.style.borderRadius = '5px';
                    progress.style.overflow = 'hidden';
                    
                    const progressBar = document.createElement('div');
                    progressBar.style.width = '0';
                    progressBar.style.height = '100%';
                    progressBar.style.backgroundColor = '#0ea5e9';
                    progressBar.style.borderRadius = '5px';
                    progressBar.style.transition = 'width 1s ease';
                    
                    progress.appendChild(progressBar);
                    skillDiv.appendChild(progress);
                    card.appendChild(skillDiv);
                    
                    // Animate progress bar
                    setTimeout(() => {
                        progressBar.style.width = `${skill.level}%`;
                    }, 300);
                });
                
                skillsGrid.appendChild(card);
            });
            
            container.appendChild(skillsGrid);
            section.appendChild(container);
            document.body.appendChild(section);
        }
        
        function createProjects() {
            const section = document.createElement('section');
            section.id = 'projects';
            section.style.backgroundColor = '#f8fafc';
            
            const container = document.createElement('div');
            container.className = 'container';
            
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = 'My Projects';
            container.appendChild(title);
            
            const projectsGrid = document.createElement('div');
            projectsGrid.style.display = 'grid';
            projectsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
            projectsGrid.style.gap = '2rem';
            
            const projects = [
                {
                    title: 'E-Commerce Platform',
                    description: 'A full-featured online shopping platform with cart functionality, user authentication, and payment processing.',
                    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
                },
                {
                    title: 'Task Management App',
                    description: 'Collaborative task management tool with drag-and-drop interface, team assignments, and progress tracking.',
                    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
                    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
                }
            ];
            
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card';
                
                const image = document.createElement('div');
                image.style.cssText = `
                    height: 200px;
                    background-image: url(${project.image});
                    background-size: cover;
                    background-position: center;
                `;
                card.appendChild(image);
                
                const content = document.createElement('div');
                content.style.padding = '1.5rem';
                
                const title = document.createElement('h3');
                title.textContent = project.title;
                title.style.cssText = `
                    font-size: 1.4rem;
                    margin-bottom: 0.8rem;
                    color: #1e293b;
                `;
                content.appendChild(title);
                
                const desc = document.createElement('p');
                desc.textContent = project.description;
                desc.style.cssText = `
                    color: #64748b;
                    margin-bottom: 1.2rem;
                `;
                content.appendChild(desc);
                
                const tags = document.createElement('div');
                tags.style.display = 'flex';
                tags.style.flexWrap = 'wrap';
                tags.style.gap = '0.5rem';
                tags.style.marginBottom = '1.5rem';
                
                project.tags.forEach(tag => {
                    const tagEl = document.createElement('span');
                    tagEl.textContent = tag;
                    tagEl.style.cssText = `
                        background: #e0f2fe;
                        color: #0369a1;
                        padding: 0.3rem 0.8rem;
                        border-radius: 20px;
                        font-size: 0.85rem;
                    `;
                    tags.appendChild(tagEl);
                });
                content.appendChild(tags);
                
                const buttons = document.createElement('div');
                buttons.style.display = 'flex';
                buttons.style.gap = '1rem';
                
                const demoBtn = document.createElement('a');
                demoBtn.href = '#';
                demoBtn.className = 'btn btn-primary';
                demoBtn.textContent = 'Live Demo';
                demoBtn.style.flex = '1';
                buttons.appendChild(demoBtn);
                
                const codeBtn = document.createElement('a');
                codeBtn.href = '#';
                codeBtn.className = 'btn btn-outline';
                codeBtn.textContent = 'View Code';
                codeBtn.style.flex = '1';
                buttons.appendChild(codeBtn);
                
                content.appendChild(buttons);
                card.appendChild(content);
                projectsGrid.appendChild(card);
            });
            
            container.appendChild(projectsGrid);
            section.appendChild(container);
            document.body.appendChild(section);
        }
        
        function createContact() {
            const section = document.createElement('section');
            section.id = 'contact';
            
            const container = document.createElement('div');
            container.className = 'container';
            
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = 'Get In Touch';
            container.appendChild(title);
            
            const contactGrid = document.createElement('div');
            contactGrid.style.display = 'grid';
            contactGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
            contactGrid.style.gap = '3rem';
            
            // Contact Info
            const infoCard = document.createElement('div');
            infoCard.className = 'card';
            infoCard.style.padding = '2rem';
            
            const infoTitle = document.createElement('h3');
            infoTitle.textContent = 'Contact Information';
            infoTitle.style.cssText = `
                font-size: 1.8rem;
                margin-bottom: 1.5rem;
                color: #0ea5e9;
            `;
            infoCard.appendChild(infoTitle);
            
            const contactItems = [
                {icon: 'fas fa-map-marker-alt', text: 'Surat, Gujarat'},
                {icon: 'fas fa-phone', text: '+91 8469811928'},
                {icon: 'fas fa-envelope', text: 'piyushopsaws@gmail.com'},
            ];
            
            contactItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.style.display = 'flex';
                itemDiv.style.alignItems = 'center';
                itemDiv.style.marginBottom = '1.5rem';
                
                const icon = document.createElement('i');
                icon.className = item.icon;
                icon.style.cssText = `
                    font-size: 1.2rem;
                    color: #0ea5e9;
                    width: 40px;
                    height: 40px;
                    background: #e0f2fe;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 1rem;
                `;
                itemDiv.appendChild(icon);
                
                const text = document.createElement('span');
                text.textContent = item.text;
                text.style.color = '#334155';
                itemDiv.appendChild(text);
                
                infoCard.appendChild(itemDiv);
            });
            
            contactGrid.appendChild(infoCard);
            
            // Contact Form
            const formCard = document.createElement('div');
            formCard.className = 'card';
            formCard.style.padding = '2rem';
            
            const formTitle = document.createElement('h3');
            formTitle.textContent = 'Send Me a Message';
            formTitle.style.cssText = `
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
                color: #0ea5e9;
            `;
            formCard.appendChild(formTitle);
            
            const form = document.createElement('form');
            
            const fields = [
                {type: 'text', name: 'name', placeholder: 'Your Name', required: true},
                {type: 'email', name: 'email', placeholder: 'Your Email', required: true},
                {type: 'text', name: 'subject', placeholder: 'Subject', required: true},
                {type: 'textarea', name: 'message', placeholder: 'Your Message', required: true}
            ];
            
            fields.forEach(field => {
                const container = document.createElement('div');
                container.style.marginBottom = '1.5rem';
                
                if (field.type === 'textarea') {
                    const textarea = document.createElement('textarea');
                    textarea.name = field.name;
                    textarea.placeholder = field.placeholder;
                    textarea.required = field.required;
                    textarea.style.cssText = `
                        width: 100%;
                        padding: 0.8rem;
                        border: 1px solid #cbd5e1;
                        border-radius: 5px;
                        font-family: inherit;
                        font-size: 1rem;
                        min-height: 150px;
                        resize: vertical;
                    `;
                    container.appendChild(textarea);
                } else {
                    const input = document.createElement('input');
                    input.type = field.type;
                    input.name = field.name;
                    input.placeholder = field.placeholder;
                    input.required = field.required;
                    input.style.cssText = `
                        width: 100%;
                        padding: 0.8rem;
                        border: 1px solid #cbd5e1;
                        border-radius: 5px;
                        font-family: inherit;
                        font-size: 1rem;
                    `;
                    container.appendChild(input);
                }
                
                form.appendChild(container);
            });
            
            const submitBtn = document.createElement('button');
            submitBtn.type = 'submit';
            submitBtn.className = 'btn btn-primary';
            submitBtn.textContent = 'Send Message';
            submitBtn.style.width = '100%';
            form.appendChild(submitBtn);
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            });
            
            formCard.appendChild(form);
            contactGrid.appendChild(formCard);
            
            container.appendChild(contactGrid);
            section.appendChild(container);
            document.body.appendChild(section);
        }
        
        function createFooter() {
            const footer = document.createElement('footer');
            footer.style.cssText = `
                background: #1a1a2e;
                color: #e2e8f0;
                padding: 3rem 2rem;
                text-align: center;
            `;
            
            const container = document.createElement('div');
            container.className = 'container';
            
            const logo = document.createElement('div');
            logo.innerHTML = '<span style="color:#0ea5e9; font-weight:700; font-size:1.8rem;">JD</span>';
            logo.style.marginBottom = '1rem';
            container.appendChild(logo);
            
            const social = document.createElement('div');
            social.style.display = 'flex';
            social.style.justifyContent = 'center';
            social.style.gap = '1.5rem';
            social.style.marginBottom = '1.5rem';
            
            const socialIcons = ['fab fa-github', 'fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-instagram'];
            socialIcons.forEach(icon => {
                const link = document.createElement('a');
                link.href = '#';
                link.style.cssText = `
                    color: #e2e8f0;
                    font-size: 1.2rem;
                    transition: color 0.3s ease;
                `;
                link.addEventListener('mouseenter', () => link.style.color = '#0ea5e9');
                link.addEventListener('mouseleave', () => link.style.color = '#e2e8f0');
                
                const i = document.createElement('i');
                i.className = icon;
                link.appendChild(i);
                
                social.appendChild(link);
            });
            container.appendChild(social);
            
            const copyright = document.createElement('p');
            copyright.textContent = '© 2023 John Doe. All Rights Reserved.';
            copyright.style.color = '#94a3b8';
            container.appendChild(copyright);
            
            footer.appendChild(container);
            document.body.appendChild(footer);
        }
        
        function setupEventListeners() {
            // Handle navbar scroll effect
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.padding = '1rem 5%';
                    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.padding = '1.5rem 5%';
                    header.style.boxShadow = 'none';
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
