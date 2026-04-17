import React from 'react';

export default function ProjectCard({ icon, title, description, tags, link }) {
    return (
        <div className="project-card">
            <div className="project-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tag-row">
                {tags.map(tag => (
                    <span key={tag.label} className={`tag tag-${tag.color}`}>{tag.label}</span>
                ))}
            </div>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 16, fontSize: 13, fontWeight: 500, color: 'var(--accent)' }}
                >
                    View project →
                </a>
            )}
        </div>
    );
}