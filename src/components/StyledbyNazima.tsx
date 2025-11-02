import React, { useEffect } from 'react';
// Assuming you have Lucide icons available in your project for external links/buttons
import { ChevronRight, ExternalLink } from 'lucide-react'; 

// NOTE: Since you are using a modern project (with the Badge component, etc.), 
// this conversion relies on utility classes (like Tailwind CSS) for styling.

const FullPage: React.FC = () => {
    // A simple useEffect to ensure Google Fonts are loaded, though typically handled by the main app
    useEffect(() => {
        // You might want to remove this if fonts are loaded globally in your React app
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    // --- Styling Variables (Transformed from CSS variables for inline use where necessary) ---
    // In a real project, these colors would be defined in your tailwind.config.js
    const ACCENT_MAUVE = 'rgba(176,139,180,1)';
    const ACCENT_GOLD = 'rgba(197,168,128,1)';
    const SOFT_MAUVE_TINT = 'rgba(176,139,180,.18)';
    const SOFT_GOLD_TINT = 'rgba(197,168,128,.18)';
    const RING_COLOR = 'rgba(176,139,180,.35)';
    const CARD_SHADOW = '0 10px 25px rgba(0,0,0,.06)';
    const BORDER_COLOR = 'rgba(0,0,0,.06)';
    const MutedText = 'text-gray-500'; // Represents --muted

    // Helper component for the decorative header frame style (using Tailwind and inline style)
    const HeaderFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div 
            className="relative p-8 md:p-6 mb-4 border rounded-[28px] shadow-lg"
            style={{
                borderColor: 'rgba(197,168,128,.35)',
                boxShadow: CARD_SHADOW,
                background: `
                    radial-gradient(circle at 0 0, transparent 20px, white 20px),
                    radial-gradient(circle at 100% 0, transparent 20px, white 20px),
                    radial-gradient(circle at 0 100%, transparent 20px, white 20px),
                    radial-gradient(circle at 100% 100%, transparent 20px, white 20px),
                    linear-gradient(135deg, ${SOFT_GOLD_TINT}, ${SOFT_MAUVE_TINT})
                `.replace(/\s/g, ''), // Removed original SVG attempt, simplified to a gradient border effect
            }}
        >
            {children}
        </div>
    );

    // Helper component for Cards
    const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
        <article 
            className={`bg-white border rounded-[20px] shadow-md overflow-hidden flex flex-col ${className}`}
            style={{ 
                boxShadow: CARD_SHADOW, 
                borderColor: BORDER_COLOR 
            }}
        >
            {children}
        </article>
    );

    const navItems = ["Home", "Shop", "Lookbook", "About", "Reviews", "Contact"];

    return (
        <div className="bg-white text-gray-900 font-['Inter'] min-h-screen">
            <header className="max-w-7xl mx-auto px-6">
                <HeaderFrame>
                    <div className="text-center font-['Great_Vibes'] text-6xl md:text-7xl tracking-wider">
                        StyledByNazima
                    </div>
                    <div 
                        className="text-center mt-2 font-['Playfair_Display'] font-semibold text-lg"
                        style={{ color: ACCENT_MAUVE }}
                    >
                        Where Tradition Meets Elegance
                    </div>
                </HeaderFrame>

                <nav className="flex flex-wrap justify-center gap-5 py-3 md:py-4" aria-label="Primary">
                    {navItems.map(item => (
                        <a 
                            key={item}
                            href={`#${item.toLowerCase()}`} 
                            className="font-['Playfair_Display'] font-semibold tracking-wide px-4 py-2 rounded-full hover:bg-gray-50 hover:shadow-inner transition-all duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </header>

            <main id="home" className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-7 items-center py-10">
                    <div 
                        className="p-7 bg-white/70 border rounded-[20px] shadow-lg"
                        style={{ background: `linear-gradient(180deg, #fff, #fff7fa)`, borderColor: BORDER_COLOR }}
                    >
                        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-3">
                            Premium Hyderabadi & Pakistani Ethnic Wear
                        </h1>
                        <p className={MutedText + ' mb-5'}>
                            Explore Ethnic Dresses, Dubai Abayas, and Scarfs crafted with premium fabrics and elegant detailing. Pricing is slightly premium to reflect our unwavering quality.
                        </p>
                        <a 
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-[1.01]" 
                            href="#shop" 
                            aria-label="Browse collections"
                            style={{ 
                                borderColor: ACCENT_GOLD,
                                border: '1px solid',
                                background: 'linear-gradient(180deg, #fff, #fff5ea)',
                                boxShadow: CARD_SHADOW
                            }}
                        >
                            Shop Collections <ChevronRight className="w-5 h-5"/>
                        </a>
                    </div>
                    
                    <div className="relative rounded-[20px] overflow-hidden border shadow-lg">
                        <img 
                            src="https://i.pinimg.com/736x/b4/26/c0/b426c00ba15e65ba9a9bec1362401b5f.jpg" 
                            alt="Elegant traditional outfit poster"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-x-3 bottom-3 flex gap-2 justify-center" aria-hidden="true">
                            {["Premium Quality", "Modest Elegance", "Timeless Craft"].map(chip => (
                                <span 
                                    key={chip}
                                    className="bg-white/85 border px-3 py-2 rounded-full font-['Playfair_Display'] font-semibold backdrop-blur-sm text-sm"
                                    style={{ borderColor: 'rgba(0,0,0,.08)' }}
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Shop Categories */}
            <section id="shop" className="py-16 md:py-20 max-w-7xl mx-auto px-6">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-10">Shop the Collections</h2>
                <div className="grid md:grid-cols-12 gap-5">
                    {[
                        { title: "Ethnic wear", pill: "Premium • Limited", desc: "Graceful silhouettes, intricate embroidery, and luxe fabrics inspired by Hyderabadi heritage.", img: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Ethnic Dresses" },
                        { title: "Abayah's", pill: "Modest • Premium", desc: "Flowing abayas with refined cuts and embellishments, balancing modesty and modern elegance.", img: "https://anahco.com/cdn/shop/files/74B14B69-8788-40EF-81D3-D90F881B2B3C_900x.jpg?v=1695227233", alt: "Dubai Abayas" },
                        { title: "Scarf's", pill: "Soft • Classic", desc: "Soft, airy scarfs that complete every look with grace and comfort.", img: "https://images.unsplash.com/photo-1693985007521-e08e64770947?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Scarfs" },
                    ].map((item, index) => (
                        <Card key={index} className="col-span-12 md:col-span-4">
                            <img src={item.img} alt={item.alt} className="w-full h-auto object-cover" />
                            <div className="p-4 md:p-5">
                                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">{item.title}</h3>
                                <p 
                                    className="inline-block px-3 py-1 mb-3 rounded-full font-semibold text-xs text-green-800"
                                    style={{ background: '#f6fffb', border: BORDER_COLOR, borderStyle: 'solid' }}
                                >
                                    {item.pill}
                                </p>
                                <p className={MutedText}>{item.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Lookbook */}
            <section id="lookbook" className="py-16 md:py-20 bg-gray-50 border-t border-b">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-10">Lookbook & Posters</h2>
                    <div className="grid md:grid-cols-12 gap-5">
                        {[
                            { name: "Pashmina Hijab", img: "https://anahco.com/cdn/shop/files/53460061-F8BD-4AEB-A226-3BB3922B2EBD_900x.jpg?v=1755706347" },
                            { name: "Feriha Ruffled Dresses", img: "https://anahco.com/cdn/shop/files/B0DA707F-4DF5-4840-B6C5-ACC044E6E0B7.jpg?v=1722613105" },
                            { name: "Printed Abayah", img: "https://anahco.com/cdn/shop/files/F4402B4E-A969-46CF-9E63-85A9D4FE918A_900x.jpg?v=1740716903" },
                        ].map((model, index) => (
                            <figure key={index} className="relative col-span-12 md:col-span-4 rounded-[18px] overflow-hidden border shadow-lg">
                                <img src={model.img} alt={`${model.name} styled look`} className="w-full h-auto object-cover" />
                                <figcaption 
                                    className="absolute left-3 bottom-3 border px-3 py-1 rounded-full font-['Playfair_Display'] font-bold text-sm"
                                    style={{ background: 'rgba(255,255,255,.86)', borderColor: 'rgba(0,0,0,.08)' }}
                                >
                                    {model.name}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-16 md:py-20 bg-pink-50/50 border-t border-b">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4">About StyledByNazima</h2>
                    <p className={MutedText + ' max-w-3xl mx-auto'}>
                        StyledByNazima celebrates Hyderabadi and Pakistani aesthetics through premium fabrics, intricate work, and elegant modest designs. Each piece is curated with love to feel timeless yet modern, reflecting Muslim cultural beauty and craftsmanship. Our pricing is intentionally a little premium to honor the artisanship and quality you deserve.
                    </p>
                </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="py-16 md:py-20 max-w-7xl mx-auto px-6">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
                <div className="grid md:grid-cols-12 gap-5">
                    {[
                        { quote: "“Beautiful collection with elegant designs and premium quality fabrics.”", reviewer: "Salma Tabassum" },
                        { quote: "“Loved the detailing and comfort – truly worth every purchase.”", reviewer: "Shama Afreen" },
                        { quote: "“As a mother, I am so happy to see such graceful dresses. May Allah put more barakah in this business and bless the hands that designed these clothes, love you mera baccha!!”", reviewer: "Fatima" },
                    ].map((review, index) => (
                        <Card key={index} className="col-span-12 md:col-span-4">
                            <div className="p-4 md:p-5">
                                <div className="font-['Playfair_Display'] text-lg italic text-gray-700">“{review.quote.slice(1, -1)}”</div>
                                <div 
                                    className="mt-3 font-['Playfair_Display'] font-bold"
                                    style={{ color: ACCENT_MAUVE }}
                                >
                                    — {review.reviewer}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 md:py-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-center mb-10">Visit & Contact</h2>
                    <div className="grid md:grid-cols-12 gap-5 items-start">
                        <div className="col-span-12 md:col-span-4 bg-white border rounded-[20px] shadow-md p-5">
                            <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">Store Address</h3>
                            <p className={MutedText}>
                                PATEL'S RESIDENCY, H NO.14-1-129/28/92A, SITE-3,BORABANDA,HYDERABAD,500018.
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-4 bg-white border rounded-[20px] shadow-md p-5 text-center">
                            <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">Call Us</h3>
                            <p className="mb-4">
                                <a className="font-semibold border-b border-dashed" href="tel:+919502509455" style={{ borderColor: ACCENT_GOLD }}>+91 9502509455</a>
                            </p>
                            <a 
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-transform duration-200 hover:scale-[1.05]" 
                                href="https://wa.me/919502509455" 
                                target="_blank" 
                                rel="noopener"
                                style={{ background: '#eaffee', border: '1px solid #bde5c8' }}
                            >
                                WhatsApp Order <ExternalLink className="w-4 h-4"/>
                            </a>
                        </div>
                        <div className="col-span-12 md:col-span-4 bg-white border rounded-[20px] shadow-md p-5">
                            <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">Follow</h3>
                            <p className="mb-2">
                                Instagram: <a className="font-semibold border-b border-dashed" href="https://instagram.com/itsafrozmirza" target="_blank" rel="noopener" style={{ borderColor: ACCENT_GOLD }}>@itsafrozmirza</a>
                            </p>
                            <p>
                                Email: <a className="font-semibold border-b border-dashed" href="mailto:hello@styledbynazima.com" style={{ borderColor: ACCENT_GOLD }}>hello@styledbynazima.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600">
                <div className="font-['Playfair_Display'] text-lg mb-1">"Special thanks to the developer who made this possible!"💖</div>
                <div>Instagram: <span className="font-bold">@itsafrozmirza</span></div>
            </footer>
        </div>
    );
};

export default FullPage;