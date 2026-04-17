import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from './Blog.jsx';

/* ─────────────────────────────────────────────
   Full post content — one object per slug.
   Replace the placeholder photo cells with real
   <img> tags pointing to your own images.
───────────────────────────────────────────── */
const POST_CONTENT = {
    'istanbul-city-of-cats': {
        intro: `Istanbul is legendary for many things — the Grand Bazaar, the Bosphorus, the layered skyline
    of minarets and rooftop terraces. But what nobody told me, and what I ended up loving most, was the
    cats. They are absolutely, unapologetically everywhere. Dozing on restaurant chairs, threading between
    tourists' ankles at Hagia Sophia, staring imperiously from market stalls in Kapalıçarşı. Within ten
    minutes of landing I had already crouched on a cobblestone to pet three of them.`,

        section1Title: 'Community cats, not strays',
        section1: `Istanbul's cats aren't strays in the way most cities mean the word. They're community cats —
    fed and adored by entire neighborhoods. Every corner shop keeps a bowl of water on the step. Restaurant
    owners save scraps. Old women carry little bags of kibble on their morning walks through the bazaar.
    The cats, for their part, understand the arrangement perfectly. They carry themselves with the unhurried
    dignity of tiny landlords, because that's essentially what they are.`,

        quote: `"In Istanbul, the cat is not a stray. It is a neighbor who simply prefers to sleep outside."`,

        section2Title: 'Karaköy King and the breakfast standoff',
        section2: `My favorite encounter happened on a foggy Thursday morning in Karaköy. I sat on a low stone
    wall with a glass of çay and watched a big tabby with half an ear — I named him Karaköy King — hold
    court over a full breakfast bowl while three other cats waited at a respectful distance. He ate slowly,
    deliberately, making eye contact with me every few bites as if to confirm that yes, this was his bowl,
    and yes, he had absolutely earned it. Honestly, iconic behavior.`,

        section3Title: 'Practical notes for cat-seeking travelers',
        section3: `The best neighborhoods for cat-spotting are Balat, Karaköy, and the streets behind the
    Grand Bazaar. Bring small treats if you want to make friends quickly, though most Istanbul cats are
    social enough without incentives. Avoid flash photography — the cats will simply walk away, and they
    will not forgive you. The documentary "Kedi" (2016) is required pre-trip viewing and will make you
    cry on a plane.`,

        closing: `I came home with 600 photos, approximately 590 of which are cats. Istanbul will ruin every
    other city for you, and I mean that as the highest possible compliment. I'll be back next spring.`,

        photos: [
            { emoji: '🐾', bg: '#F2DDD3', caption: 'Cat #1 — replace with your photo' },
            { emoji: '😺', bg: '#D4EFEA', caption: 'Cat #2 — replace with your photo' },
            { emoji: '🐈‍⬛', bg: '#FAEEDA', caption: 'Cat #3 — replace with your photo' },
        ],
        widePhoto: { emoji: '🌆', bg: '#E6F1FB', caption: 'Istanbul skyline from Galata Bridge' },
    },

    'cat-cafe-kyoto': {
        intro: `Neko no Jikan means "cat time" in Japanese, and that is exactly what you get — a gentle,
    unhurried hour in a room full of cats who are politely indifferent to your presence. The café opened
    in Kyoto in 2006 and the cats have been there almost as long. Some of them are old enough to have
    developed opinions about which chair is theirs, and they will defend those opinions.`,

        section1Title: 'The cats of Neko no Jikan',
        section1: `There are twelve resident cats, each with a laminated profile card on the wall. Ichiro is
    a seventeen-year-old orange tabby who sleeps in a heated cat bed from approximately 9am to closing
    time and will tolerate exactly three seconds of petting before slowly relocating. Hana is a black
    longhair who will sit on your lap if you are reading but will leave the moment you look at your phone.
    These are cats with standards, and I respect that enormously.`,

        quote: `"Hana settled onto my lap the moment I opened my book and stayed for forty full minutes. I was afraid to turn the page."`,

        section2Title: 'The matcha situation',
        section2: `The café also serves excellent matcha. I ordered the thick ceremonial grade with a small
    wagashi sweet shaped like a cat paw — I can't tell if that's cute or slightly dark, but it was
    delicious either way. The rule is no food near the cats, which is enforced with polite laminated
    signs in four languages and a single sharp look from the staff if you forget.`,

        section3Title: 'What I learned',
        section3: `Cat cafés get a mixed reputation, and some deserve it — cats in stressful, cramped
    environments aren't happy cats. Neko no Jikan is different. The cats have multiple rooms, private
    hiding spaces, and the clear option to ignore you entirely. Every cat I saw looked comfortable and
    healthy. If you're ever in Kyoto, book the first slot of the day when it's quiet and the cats are
    at their most social.`,

        closing: `I left with cat hair on my coat, matcha on my fingers, and a fierce desire to move to
    Kyoto immediately. The cats would probably prefer I don't.`,

        photos: [
            { emoji: '🍵', bg: '#D4EFEA', caption: 'Matcha and wagashi — replace with your photo' },
            { emoji: '😸', bg: '#F2DDD3', caption: 'Hana on my lap — replace with your photo' },
            { emoji: '🐱', bg: '#EEEDFE', caption: 'Ichiro in his throne — replace with your photo' },
        ],
        widePhoto: { emoji: '🏯', bg: '#E1F5EE', caption: 'View from the café window' },
    },
};

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const meta = BLOG_POSTS.find(p => p.slug === slug);
    const content = POST_CONTENT[slug];

    if (!meta || !content) {
        return (
            <main className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={() => navigate('/blog')}>
                    ← Back to blog
                </button>
            </main>
        );
    }

    return (
        <main>
            <section className="post-hero">
                <div className="container">
                    <button className="back-btn" onClick={() => { navigate('/blog'); window.scrollTo(0, 0); }}>
                        ← Back to blog
                    </button>
                    <div className="post-tag-row">
                        {meta.tags.map(t => (
                            <span key={t} className="tag tag-accent">{t}</span>
                        ))}
                    </div>
                    <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', maxWidth: 720 }}>{meta.title}</h1>
                    <div className="blog-meta" style={{ marginTop: 12 }}>
                        <span>{meta.date}</span>
                        <span>·</span>
                        <span>{meta.location}</span>
                        <span>·</span>
                        <span>{meta.readTime}</span>
                    </div>
                </div>

                {/* Cover image — replace emoji div with <img> tag */}
                <div
                    className="post-hero-img"
                    style={{ background: meta.coverBg }}
                >
                    {/*
            To use a real photo:
            <img src={`/images/${slug}-cover.jpg`} alt={meta.title} />
          */}
                    <span style={{ fontSize: 80 }}>{meta.coverEmoji}</span>
                </div>
            </section>

            <article className="post-body">
                <p style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--ink-muted)', marginBottom: 32 }}>
                    {content.intro}
                </p>

                <div className="post-photo-grid">
                    {content.photos.map((photo, i) => (
                        <div key={i} className="post-photo-cell" style={{ background: photo.bg }}>
                            {/*
                Replace with:
                <img src={`/images/${slug}-photo-${i+1}.jpg`} alt={photo.caption} />
              */}
                            <span style={{ fontSize: 32 }}>{photo.emoji}</span>
                        </div>
                    ))}
                    <div className="post-photo-wide" style={{ background: content.widePhoto.bg }}>
                        {/*
              Replace with:
              <img src={`/images/${slug}-wide.jpg`} alt={content.widePhoto.caption} />
            */}
                        <span style={{ fontSize: 48 }}>{content.widePhoto.emoji}</span>
                    </div>
                </div>

                <h2>{content.section1Title}</h2>
                <p>{content.section1}</p>

                <blockquote>{content.quote}</blockquote>

                <h2>{content.section2Title}</h2>
                <p>{content.section2}</p>

                <h2>{content.section3Title}</h2>
                <p>{content.section3}</p>

                <p style={{ marginTop: 24 }}>{content.closing}</p>

                <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
                    <button
                        className="btn btn-outline"
                        onClick={() => { navigate('/blog'); window.scrollTo(0, 0); }}
                    >
                        ← All posts
                    </button>
                </div>
            </article>
        </main>
    );
}