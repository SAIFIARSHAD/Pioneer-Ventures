import helthcareImg from '../assets/helthcare.jpg';
import mediaImg from '../assets/media.jpg';
import softwareImg from '../assets/software.jpg'


export const siteContent = {
    company: {
        name: 'Pioneer Ventures',
        legalName: 'Pioneer Ventures Group',
        tagline: 'Future of Innovations & Growths',
        shortDescription: 'A diversified business group focused on innovation, transformation, and quality across multiple industries.',
        description: 'Pioneer Ventures is a forward-looking business group dedicated to driving growth, transformation, and long-term value across diverse sectors including media, construction, food & beverages, healthcare, information technology, media distribution, renewable energy, and real estate.',
        email: 'info@pioneerventure.in',
        hrEmail: 'hrpioneer0012@gmail.com',
        phone: '+91 9810475719',
        phoneRaw: '9810475719',
        addressLine1: 'A-142',
        addressLine2: 'Noida Sector 63',
        city: 'Noida',
        state: 'Uttar Pradesh',
        postalCode: '201301',
        country: 'India',
        fullAddress: 'A-142, Noida Sector 63, Noida, Uttar Pradesh 201301, India',
        copyright: '© 2026 Pioneer Ventures. All rights reserved.',
    },

    navigation: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Our Portfolio', path: '/services' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Career', path: '/careers' },
        //{ label: 'Contact Us', path: '/contact' },
    ],

    home: {
        hero: {
            eyebrow: 'Diversified Business Group',
            title: 'Future of Innovations & Growths',
            subtitle: 'Welcome to Pioneer Ventures, a vibrant and forward-thinking organization committed to driving growth, transformation, and excellence across multiple industries. We combine creativity, expertise, and operational intent to build meaningful business opportunities with precision and care.',
            ctaPrimary: {
                label: 'Explore Our Portfolio',
                path: '/services',
            },
            ctaSecondary: {
                label: 'Contact Us',
                path: '/contact',
            },
            stats: [
                { value: '8+', label: 'Business Verticals' },
                { value: 'Multi-Industry', label: 'Growth Approach' },
                { value: 'Delhi NCR', label: 'Business Base' },
            ],
            image: {
                src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                alt: 'Modern corporate building representing diversified business growth',
            },
        },

        intro: {
            title: 'Building opportunities across sectors with strategic intent',
            description: 'Pioneer Ventures brings together diverse industries under one professional identity, creating a platform where innovation, responsible growth, and long-term opportunity can thrive together.',
        },

        values: [{
                title: 'Innovation',
                description: 'We believe in embracing new ideas, technologies, and business approaches that open doors to future-ready growth.',
            },
            {
                title: 'Integrity',
                description: 'We focus on building trust through transparency, ethical practices, and reliable professional conduct.',
            },
            {
                title: 'Impact',
                description: 'We aim to create meaningful outcomes for our portfolio businesses, partners, and the communities we influence.',
            },
        ],

        aboutHighlight: {
            eyebrow: 'About Pioneer Ventures',
            title: 'A diversified group built on creativity, authenticity, and distinction',
            description: 'At Pioneer Ventures, we are committed to cultivating quality, originality, and responsible growth across our expanding portfolio of businesses. Our approach is shaped by strategic thinking, operational discipline, and a strong belief in long-term value creation.',
            bullets: [
                'A diversified business platform spanning multiple sectors',
                'A strong focus on innovation, sustainability, and operational quality',
                'Partnership-led thinking rooted in trust and long-term relationships',
                'A commitment to principled growth, refinement, and future opportunity',
            ],
            image: {
                src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
                alt: 'Professional business meeting representing strategic planning and collaboration',
            },
        },

        trustStrip: [
            { value: '8+', label: 'Core Business Verticals' },
            { value: 'Growth-Driven', label: 'Business Philosophy' },
            { value: 'Quality-Led', label: 'Execution Approach' },
            { value: 'Future-Focused', label: 'Strategic Direction' },
        ],

        featuredVerticalsTitle: 'Our Business Verticals',
        featuredVerticalsSubtitle: 'Our portfolio reflects a broad and carefully positioned business presence across industries that shape growth, opportunity, and long-term value.',

        whyChooseUs: {
            eyebrow: 'Why Pioneer Ventures',
            title: 'A business group guided by synergy, responsibility, and sustained growth',
            description: 'We believe in the strength of cross-sector thinking, the importance of eco-conscious business development, and the value of relationships built on trust, consistency, and long-term intent.',
            points: [
                'Diversified sector presence with a unified business identity',
                'Strategic thinking focused on long-term scalability',
                'Responsible business orientation with quality-first execution',
                'A commitment to trust, partnership, and continuous improvement',
            ],
        },

        cta: {
            eyebrow: 'Contact Us',
            title: 'Ready to take the next step?',
            description: 'We would love to hear from you. Connect with Pioneer Ventures to discuss business opportunities, collaborations, partnerships, or general inquiries.',
            primary: {
                label: 'Connect Now',
                path: '/contact',
            },
        },
    },

    aboutPage: {
        hero: {
            eyebrow: 'About Us',
            title: 'Where innovation meets opportunity across industries',
            subtitle: 'Pioneer Ventures is a multi-industry business group founded on the principles of growth, transformation, innovation, and long-term value creation.',
        },

        whoWeAre: {
            title: 'Who we are',
            paragraphs: [
                'Pioneer Ventures is an evolving business group dedicated to building opportunities across diverse industries through creativity, strategic thinking, and operational commitment.',
                'Our group is designed to support growth and transformation across sectors such as media, construction, food and beverages, healthcare, information technology, media distribution, renewable energy, and real estate.',
                'At our core, we believe in responsible expansion, innovation-led thinking, and a professional culture built on trust, collaboration, and long-term relationships.',
            ],
            image: {
                src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
                alt: 'Team discussion in a corporate office setting',
            },
        },

        philosophy: {
            title: 'Our philosophy',
            paragraphs: [
                'We believe that diversified growth becomes more meaningful when it is guided by integrity, quality, and disciplined execution.',
                'By bringing together varied expertise and business interests under one identity, we aim to create a stronger foundation for innovation, resilience, and opportunity.',
                'Our long-term vision is to build businesses that not only grow commercially but also contribute positively through responsibility, sustainability, and trust.',
            ],
        },

        sectorsTitle: 'Sectors we operate in',
        sectorsSubtitle: 'Our business interests span industries that reflect both current opportunity and long-term relevance in a changing market environment.',
    },

    businessVerticals: [{
            slug: 'media',
            title: 'Media',
            shortDescription: 'We create and support media initiatives focused on content, reach, and audience engagement.',
            fullDescription: 'Our media vertical is centered on storytelling, communication, and audience connection. We focus on delivering compelling content experiences and building media capabilities that remain relevant in a fast-evolving landscape.',
            imageUrl: mediaImg,
            //imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/MDR_Kripo_live.jpg/1280px-MDR_Kripo_live.jpg',
        },
        {
            slug: 'software-development-it-company',
            title: 'Software Development & IT Company',
            shortDescription: 'We deliver technology-led solutions focused on software development, digital systems, and scalable business growth.',
            fullDescription: 'Our software and IT vertical focuses on building digital products, technology services, and scalable solutions that support modern business growth. We see IT as a strategic enabler of transformation, efficiency, and long-term innovation.',
            imageUrl: softwareImg,
            //'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        },
        {
            slug: 'food-beverages',
            title: 'Food & Beverages',
            shortDescription: 'We build food and beverage ventures centered on quality experience and consumer value.',
            fullDescription: 'Our food and beverage vertical is driven by the idea that memorable experiences are built through quality, service, and strong consumer understanding. We focus on creating offerings that combine taste, consistency, and long-term brand potential.',
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        },
        {
            slug: 'healthcare',
            title: 'Healthcare',
            shortDescription: 'We support wellness-focused initiatives with a commitment to holistic care and better living.',
            fullDescription: 'Our healthcare vertical reflects a commitment to improving quality of life through wellness-oriented offerings and thoughtful care solutions. We believe healthcare growth should be rooted in trust, compassion, and long-term value for individuals and communities.',
            imageUrl: helthcareImg,
            //imageUrl: 'https://unsplash.com/photos/a-person-holding-a-bunch-of-plants-in-their-hands-kc0bC_uv3UY.jpg',
        },
        {
            slug: 'media-distribution',
            title: 'Media Distribution',
            shortDescription: 'We strengthen content accessibility through distribution-focused models and strategic networks.',
            fullDescription: 'Our media distribution vertical is designed to connect content with audiences through structured reach and reliable access. We focus on enabling better visibility, stronger networks, and efficient delivery models.',
            imageUrl: 'https://images.unsplash.com/photo-1581594693701-3d2d9b2f7b0d?auto=format&fit=crop&w=1200&q=80',
        },
        {
            slug: 'renewable-energy',
            title: 'Renewable Energy',
            shortDescription: 'We invest in responsible energy initiatives aligned with sustainability and long-term progress.',
            fullDescription: 'Our renewable energy vertical reflects our commitment to future-focused development and sustainable opportunity. We believe responsible energy solutions can create both environmental value and strong long-term business relevance.',
            imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
        },
        {
            slug: 'real-estate',
            title: 'Real Estate',
            shortDescription: 'We participate in real estate opportunities that create value through space, utility, and growth.',
            fullDescription: 'Our real estate vertical is focused on building and supporting projects that combine functionality, long-term value, and community relevance. We view real estate as an important part of broader economic and social development.',
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        },
    ],

    servicesPage: {
        hero: {
            eyebrow: 'Our Portfolio',
            title: 'Business verticals that shape our identity',
            subtitle: 'Explore the sectors that define Pioneer Ventures and reflect our diversified approach to long-term business growth and opportunity creation.',
        },
    },

    galleryPage: {
        hero: {
            eyebrow: 'Gallery',
            title: 'A visual journey across our business sectors',
            subtitle: 'Discover a curated visual showcase of the industries, opportunities, and business directions that shape the Pioneer Ventures portfolio.',
        },
    },

    careersPage: {
        hero: {
            eyebrow: 'Career',
            title: 'Join our dynamic team',
            subtitle: 'At Pioneer Ventures, we are innovators, creators, and problem-solvers working across multiple industries with a shared commitment to growth and excellence.',
        },
        cultureTitle: 'A collaborative and inclusive environment',
        cultureDescription: 'We believe in fostering a culture of collaboration, innovation, mutual respect, and continuous learning. Our people are at the heart of the value we create.',
        benefits: [
            'Collaborative and inclusive work environment',
            'Opportunities for growth and professional development',
            'Competitive compensation and benefits package',
            'Flexible work arrangements and evolving role opportunities',
            'The chance to contribute across multiple industries',
        ],
        processTitle: 'A thoughtful and fair hiring process',
        processDescription: 'Our interview process is designed to evaluate your skills, experience, and fit for the role in a transparent and structured way. We aim to make every interaction clear, respectful, and meaningful.',
        processSteps: [
            'Initial profile review',
            'Introductory screening discussion',
            'Role-based technical or functional evaluation',
            'Final discussion with the hiring team',
        ],
        openPositions: [{
                title: 'Full Stack Web Developer',
                description: 'We are looking for a Full Stack Web Developer with 4-6 years of experience in modern web technologies and end-to-end application development.',
            },
            {
                title: 'Company Secretary',
                description: 'Responsible for statutory compliance, documentation, governance support, and regulatory processes under applicable corporate laws.',
            },
            {
                title: 'Chartered Accountant',
                description: 'Seeking a qualified Chartered Accountant to manage reporting, financial oversight, and daily accounting operations with accuracy and discipline.',
            },
            {
                title: 'Executive Assistant',
                description: 'An exciting opportunity to support leadership through communication, coordination, and executive-level operational assistance.',
            },
            {
                title: 'Sales and Marketing Executive - Real Estate',
                description: 'Responsible for client engagement, lead generation, and market-facing support within the real estate vertical.',
            },
        ],
    },

    contactPage: {
        hero: {
            eyebrow: 'Contact Us',
            title: 'Let’s start a conversation',
            subtitle: 'Have a question or want to work together? Reach out to Pioneer Ventures for business inquiries, collaborations, or general communication.',
        },
        formTitle: 'Send a message',
        formDescription: 'Fill out the form below and our team will get back to you as soon as possible.',
        infoTitle: 'Contact Info',
    },

    footer: {
        description: 'Innovation meets opportunity across multiple industries.',
        quickLinksHeading: 'Quick Links',
        contactHeading: 'Contact',
    },
};