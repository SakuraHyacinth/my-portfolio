import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';

const PROJECTS = [
    {
        icon: '🐾',
        title: 'PurrTracker',
        description: 'A React app to track feeding schedules, vet visits, and health records for multiple cats. Built for multi-cat households with a clean, intuitive UI.',
        tags: [
            { label: 'React', color: 'teal' },
            { label: 'LocalStorage', color: 'ink' },
        ],
        link: 'https://github.com/YOUR_USERNAME/purrtracker',
    },
    {
        icon: '😺',
        title: 'Meow Match',
        description: 'A swipe-style adoption matcher pairing prospective owners with shelter cats using preference data. Filter by breed, energy level, and coat type.',
        tags: [
            { label: 'JavaScript', color: 'accent' },
            { label: 'CSS Grid', color: 'ink' },
        ],
        link: 'https://github.com/YOUR_USERNAME/meow-match',
    },
    {
        icon: '📷',
        title: 'Caturday Gallery',
        description: 'An auto-organizing photo gallery that lets you tag, filter, and caption your best cat photos. Fully client-side with drag-and-drop upload support.',
        tags: [
            { label: 'HTML/CSS/JS', color: 'teal' },
            { label: 'File API', color: 'ink' },
        ],
        link: 'https://github.com/YOUR_USERNAME/caturday-gallery',
    },
];

const SKILLS = [
    'React', 'JavaScript', 'HTML & CSS',
    'Responsive Design', 'Git & GitHub', 'Vite',
    'React Router', 'REST APIs', 'Figma',
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <main>
            {/* ── Hero ── */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-text">
                        <div className="hero-eyebrow">🐱 Open to internship opportunities</div>
                        <h1>Hi, I'm <em>Felix</em> — developer & proud cat parent</h1>
                        <p className="hero-sub">
                            I build clean, responsive web experiences and foster kittens in my spare time.
                            Passionate about thoughtful UI, accessible code, and cats of all sizes.
                        </p>
                        <div className="hero-btns">
                            <button
                                className="btn btn-primary"
                                onClick={() => { navigate('/blog'); window.scrollTo(0, 0); }}
                            >
                                Read my spring break blog →
                            </button>
                            <button
                                className="btn btn-outline"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View projects
                            </button>
                        </div>
                    </div>

                    <div className="hero-image-wrap">
                        <div className="hero-image-frame">
                            {/*
                Replace the emoji below with your own photo:
                <img src="/images/profile.jpg" alt="Felix holding a cat" />
              */}
                            🐈
                        </div>
                        <div className="hero-badge">
                            🏠 Currently fostering 3 kittens
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Projects ── */}
            <section className="section" id="projects">
                <div className="container">
                    <div className="section-label">What I've built</div>
                    <h2 className="section-title">Projects</h2>
                    <p className="section-desc">
                        A mix of class projects, personal experiments, and cat-themed side projects.
                    </p>
                    <div className="projects-grid">
                        {PROJECTS.map(p => (
                            <ProjectCard key={p.title} {...p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Skills ── */}
            <section className="section skills-bg" id="skills">
                <div className="container">
                    <div className="section-label">What I work with</div>
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {SKILLS.map(skill => (
                            <div key={skill} className="skill-item">
                                <span className="skill-dot"></span>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About ── */}
            <section className="section" id="about">
                <div className="container">
                    <div className="about-grid">
                        <div>
                            <div className="section-label">A little about me</div>
                            <h2 className="section-title">Developer by day, cat foster by night</h2>
                            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                                I'm a second-year Computer Information Systems student with a love for building things on the web.
                                I got into programming to solve real problems — my first project was a feeding-schedule app for
                                my own two cats, Mochi and Boba.
                            </p>
                            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
                                Outside of class, I volunteer with a local cat rescue, help socialize feral kittens, and
                                document my travels looking for street cats around the world.
                            </p>
                            <div className="about-stats">
                                <div className="stat-box">
                                    <span className="stat-number">23</span>
                                    <span className="stat-label">Cats fostered</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-number">8</span>
                                    <span className="stat-label">Projects built</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-number">4</span>
                                    <span className="stat-label">Cities visited for cats</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-number">2</span>
                                    <span className="stat-label">Cats of my own</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-img-wrap">
                            {/*
                Replace emoji divs with your own photos, e.g.:
                <img src="/images/cat1.jpg" alt="My cat Mochi" className="about-img-cell" />
              */}
                            <div className="about-img-cell tall">🐈‍⬛</div>
                            <div className="about-img-cell">😸</div>
                            <div className="about-img-cell">🐾</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}