import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BLOG_POSTS = [
    {
        slug: 'istanbul-city-of-cats',
        title: 'Istanbul: the city of 10,000 cats',
        date: 'April 8, 2025',
        location: 'Istanbul, Türkiye',
        readTime: '8 min read',
        excerpt:
            'Nobody warned me about the cats. Within ten minutes of landing, I had already stopped to pet three of them. Here\'s what happened when I spent spring break in the world\'s most cat-friendly city.',
        coverEmoji: '🐈',
        coverBg: '#F2DDD3',
        tags: ['Travel', 'Cats', 'Turkey'],
    },
    {
        slug: 'cat-cafe-kyoto',
        title: 'A morning at Kyoto\'s oldest cat café',
        date: 'April 11, 2025',
        location: 'Kyoto, Japan',
        readTime: '5 min read',
        excerpt:
            'Neko no Jikan opened in 2006 and it shows — in the best way. The cats are ancient and wise, the matcha is excellent, and they do not care at all that you\'re there.',
        coverEmoji: '🍵',
        coverBg: '#D4EFEA',
        tags: ['Travel', 'Cats', 'Japan'],
    },
];

export default function Blog() {
    const navigate = useNavigate();

    return (
        <main>
            <section className="blog-hero">
                <div className="container">
                    <div className="section-label">Spring break 2025</div>
                    <h1 className="section-title">The cat travel diaries</h1>
                    <p className="section-desc">
                        Two weeks, four cities, and an embarrassing number of cat photos.
                        These are the stories.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="blog-grid">
                        {BLOG_POSTS.map(post => (
                            <article
                                key={post.slug}
                                className="blog-card"
                                onClick={() => { navigate(`/blog/${post.slug}`); window.scrollTo(0, 0); }}
                            >
                                <div
                                    className="blog-card-img"
                                    style={{ background: post.coverBg }}
                                >
                                    {/*
                    Replace emoji with an <img> tag pointing to your photo:
                    <img src={`/images/${post.slug}-cover.jpg`} alt={post.title} />
                  */}
                                    <span style={{ fontSize: 64 }}>{post.coverEmoji}</span>
                                </div>
                                <div className="blog-card-body">
                                    <div className="blog-meta">
                                        <span>{post.date}</span>
                                        <span>·</span>
                                        <span>{post.location}</span>
                                        <span>·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <div className="post-tag-row">
                                        {post.tags.map(t => (
                                            <span key={t} className="tag tag-ink">{t}</span>
                                        ))}
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="read-more">Read story →</div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}