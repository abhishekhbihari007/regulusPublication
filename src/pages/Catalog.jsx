import { useState } from 'react'
import './Catalog.css'

const Catalog = () => {
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [filterType, setFilterType] = useState('all')

  const genres = ['All', 'Engineering', 'Agriculture', 'Biotechnology', 'Comics / Graphic Novels', 'Business & Entrepreneurship', 'Novels / Fiction']

  const books = [
    // Engineering (10 books)
    {
      id: 1,
      title: "Quantum Materials and the Future of Intelligent Machines",
      author: "Arvind Menon",
      genre: "Engineering",
      year: 2023,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "This book explores how emerging quantum materials—such as topological insulators, superconductors, and 2D atomic lattices—are reshaping the foundations of intelligent machine design. It explains how quantum properties enable ultra-efficient computation, neuromorphic circuits, next-gen sensors, and advanced robotics. The book bridges solid-state physics with AI engineering to imagine machines that process information at near-zero energy.",
      image: "/images/1.png"
    },
    {
      id: 2,
      title: "Autonomous Systems: Designing a Self-Thinking World",
      author: "Kavita Rao",
      genre: "Engineering",
      year: 2022,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "A comprehensive overview of how autonomous systems are engineered, from embedded AI and sensor fusion to control architectures and human–machine collaboration. The book explains autonomy in vehicles, drones, manufacturing, healthcare devices, and smart cities. It highlights safety frameworks, ethics, edge–cloud coordination, and the engineering required for machines that self-navigate, self-diagnose, and self-optimize.",
      image: "/images/2.png"
    },
    {
      id: 3,
      title: "Neuro-Mechanical Engineering: Interfaces That Think and Move",
      author: "Rohan Mukherjee",
      genre: "Engineering",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This title covers the cutting-edge convergence of neuroscience and mechanical systems. It examines brain–machine interfaces, neural-actuated prosthetics, biohybrid robots, and intelligent exoskeletons. The book explains how neural signals are decoded, translated into mechanical movement, and integrated with adaptive materials. It envisions machines that move with human-like fluidity and robots controlled directly by thought.",
      image: "/images/3.png"
    },
    {
      id: 4,
      title: "Hyperloop Dynamics: The Physics of Ultra-Fast Transit",
      author: "Nisha Pillai",
      genre: "Engineering",
      year: 2024,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "A deep dive into the physics, engineering, and technology behind near-vacuum, high-speed tube transportation. The book explains aerodynamics, magnetic levitation, linear motors, structural requirements, thermal loads, and safety mechanisms. It also discusses energy optimization, economic feasibility, and the global potential of ultra-fast transport systems.",
      image: "/images/4.png"
    },
    {
      id: 5,
      title: "Fractal Engineering: Designing with Nature's Geometry",
      author: "Aditya Varma",
      genre: "Engineering",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book reveals how fractal principles and self-similar structures are transforming modern engineering. It explores fractal antennas, porous materials, structural designs, urban layouts, and data networks inspired by natural patterns. Readers learn how fractal geometry improves efficiency, strength, signal performance, and environmental harmony.",
      image: "/images/5.png"
    },
    {
      id: 6,
      title: "The AI Fabric: Computational Infrastructure for a Smart Planet",
      author: "Meera Kulkarni",
      genre: "Engineering",
      year: 2025,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "Focused on the invisible backbone of AI-driven systems, this book explains the engineering of data centers, distributed computing, high-performance processors, and global sensor networks. It discusses cloud, edge, and fog architectures—all woven together like a 'fabric' powering intelligent cities, industries, and everyday devices. It highlights sustainability, latency optimization, and real-time AI workflows.",
      image: "/images/6.png"
    },
    {
      id: 7,
      title: "NanoRobotics in Extreme Environments",
      author: "Sandeep Bhargava",
      genre: "Engineering",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "An exploration of robotic systems engineered at nanoscale and designed to perform tasks in the harshest conditions—inside the human body, deep oceans, planetary surfaces, or nuclear facilities. The book examines nanomaterials, micro-actuators, high-precision control, swarm behaviors, and environmental resilience. It also covers biomedical applications and space exploration uses.",
      image: "/images/7.png"
    },
    {
      id: 8,
      title: "The Metaverse Engineer: Building Realities Beyond Reality",
      author: "Tanvi Raghavan",
      genre: "Engineering",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book introduces the engineering principles behind immersive virtual worlds and blended physical–digital spaces. It covers 3D simulation engines, AR/VR hardware, spatial computing, networking architecture, haptic interfaces, and digital twins. It explains how engineers design scalable, secure virtual ecosystems and how the metaverse will influence education, industry, entertainment, and society.",
      image: "/images/8.png"
    },
    {
      id: 9,
      title: "Bio-Inspired Structures: Engineering Through Evolution's Lens",
      author: "Rahul Saxena",
      genre: "Engineering",
      year: 2024,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "A study of engineering designs derived from biological models—lotus leaves for hydrophobic surfaces, bird wings for efficient aerodynamics, spider silk for ultra-strong fibers, and more. The book explores biomaterials, adaptive structures, morphology optimization, and machine-learning-driven bio-mimicry. It demonstrates how evolution provides solutions for sustainability, strength, and efficiency.",
      image: "/images/9.png"
    },
    {
      id: 10,
      title: "The Zero-Carbon Blueprint: Engineering the Climate-Safe World",
      author: "Priya Deshmukh",
      genre: "Engineering",
      year: 2025,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "A forward-looking guide to engineering solutions for achieving global carbon neutrality. It covers renewable energy systems, carbon capture, sustainable materials, electrified infrastructure, circular economy design, and urban decarbonization technologies. The book provides engineering frameworks for climate-safe industries, resilient cities, and global energy transitions.",
      image: "/images/10.png"
    },
    // Agriculture (10 books)
    {
      id: 11,
      title: "AgriTech 5.0: Autonomous Farms and Smart Food Systems",
      author: "Nishant Vaidya",
      genre: "Agriculture",
      year: 2023,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "A forward-looking exploration of agriculture's next technological leap, this book highlights fully autonomous farms powered by robotics, AI, and real-time sensing. It explains how self-driving tractors, automated irrigation, farm-bots, and connected supply chains work together to create hyper-efficient, sustainable food systems. The book emphasizes integrated intelligence where machines coordinate operations without human intervention.",
      image: "/images/11.png"
    },
    {
      id: 12,
      title: "CRISPR Fields: Editing the Future of Crop Resilience",
      author: "Shreya Nambiar",
      genre: "Agriculture",
      year: 2022,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "Centered on gene editing's transformational impact, this book covers how CRISPR is used to engineer disease-resistant, climate-resilient, high-yielding crops. It explains the biology behind gene targeting, showcases breakthroughs in cereal, vegetable, and fruit crops, and discusses regulatory, ethical, and commercialization challenges. A look at the future of precision breeding.",
      image: "/images/12.png"
    },
    {
      id: 13,
      title: "Climate-Adaptive Farming: Designing Crops for 2050",
      author: "Karthik Rajendran",
      genre: "Agriculture",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book examines the urgent need for crops that can withstand rising temperatures, unpredictable rainfall, salinity, and pest pressure. It explores biotechnology, smart breeding, predictive climate modeling, and stress-resilient trait engineering. Practical case studies illustrate how global agriculture can adapt to climate extremes while maintaining productivity and nutritional security.",
      image: "/images/13.png"
    },
    {
      id: 14,
      title: "Digital Agronomy: AI, Sensors, and Predictive Harvesting",
      author: "Anjali Mehta",
      genre: "Agriculture",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A deep dive into data-driven crop management, this book explains how AI, machine learning, satellite imaging, IoT devices, and edge computing are transforming agronomy. It focuses on predictive yield models, precision nutrient management, pest forecasting, and decision-support systems that enable farmers to optimize every stage of crop production.",
      image: "/images/14.png"
    },
    {
      id: 15,
      title: "Vertical Worlds: Farming in Towers, Cities, and Space",
      author: "Vivek Chandra",
      genre: "Agriculture",
      year: 2024,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "This book explores futuristic cultivation systems that operate beyond traditional fields—vertical farms, rooftop gardens, plant factories, and extraterrestrial growing modules. It explains controlled environment agriculture (CEA), energy–water optimization, LED spectra for growth, and space-farming technologies for lunar and Martian habitats. A vision of food production unbound by geography.",
      image: "/images/15.png"
    },
    {
      id: 16,
      title: "The Soil Microbiome Revolution",
      author: "Smita Narang",
      genre: "Agriculture",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A scientific yet accessible guide to the hidden universe beneath our feet, this book details the role of soil microbes in nutrient cycling, plant immunity, carbon storage, and sustainable agriculture. It discusses microbiome engineering, biofertilizers, mycorrhizal networks, and soil health analytics. The focus is on restoring and harnessing microbial diversity to strengthen global food systems.",
      image: "/images/16.png"
    },
    {
      id: 17,
      title: "Hydroponic Intelligence: Smart Systems for Water-Efficient Farming",
      author: "Arjun Bhatia",
      genre: "Agriculture",
      year: 2024,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "This title explains the engineering and biology of hydroponics, aquaponics, and aeroponics integrated with automation and AI. It showcases nutrient management algorithms, climate-controlled greenhouses, LED-based growth optimization, and water-recycling systems. The book highlights how \"intelligent hydroponics\" enables high-density production with minimal water footprint.",
      image: "/images/17.png"
    },
    {
      id: 18,
      title: "Green Drones: Autonomous Crop Health Guardians",
      author: "Ritu Khandelwal",
      genre: "Agriculture",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book explores a new generation of agricultural drones equipped with AI, hyperspectral sensors, sprayer systems, and autonomous flight software. It explains how drones diagnose diseases, map nutrient stress, monitor irrigation needs, and deliver precise treatments. The focus is on their role as real-time guardians that reduce chemical use and improve farm efficiency.",
      image: "/images/18.png"
    },
    {
      id: 19,
      title: "Planet-Proof Agriculture: Strategies for Extreme Weather",
      author: "Deepak Krishnan",
      genre: "Agriculture",
      year: 2024,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "A comprehensive guide to building agricultural systems that can withstand droughts, floods, heatwaves, and other climate shocks. The book covers resilient cropping systems, climate-smart technologies, water-harvesting strategies, protective structures, and adaptive farm planning. It emphasizes long-term sustainability and global food security under a rapidly changing climate.",
      image: "/images/19.png"
    },
    {
      id: 20,
      title: "Agricultural Blockchain: Traceability in the Global Food Web",
      author: "Aishwarya Jagtap",
      genre: "Agriculture",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book explains how blockchain technology brings transparency, authenticity, and efficiency to modern agriculture. It covers digital ledgers, smart contracts, supply-chain traceability, fraud prevention, and food-safety verification. The book highlights real-world applications in seed systems, commodity trading, logistics, and farm certifications, enabling a trusted global food network.",
      image: "/images/20.png"
    },
    // Biotechnology (10 books)
    {
      id: 21,
      title: "Genomic Futures: Engineering Life One Gene at a Time",
      author: "Harish Patil",
      genre: "Biotechnology",
      year: 2023,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "This book explores how modern genome engineering tools—from CRISPR to base editing and prime editing—are reshaping medicine, agriculture, and synthetic biology. It presents the emerging ability to rewrite DNA with precision, design organisms with programmed traits, and prevent genetic diseases. Ethical, regulatory, and societal implications of gene-level redesign are also discussed.",
      image: "/images/21.png"
    },
    {
      id: 22,
      title: "Synthetic Biology 3.0: Building Organisms from Code",
      author: "Suvarna Ghosh",
      genre: "Biotechnology",
      year: 2022,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A visionary look at synthetic biology's newest frontier, this book explains how biological systems are now being programmed like software. It covers modular genetic circuits, standardized biological parts, cell-free systems, and AI-assisted genome design. The emphasis is on building novel organisms with customized functions for medicine, manufacturing, and environmental repair.",
      image: "/images/22.png"
    },
    {
      id: 23,
      title: "The Organoid Era: Mini-Brains, Mini-Hearts, Maxi Impact",
      author: "Prateek Agarwal",
      genre: "Biotechnology",
      year: 2024,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "This book highlights the revolutionary use of organoids—miniature, self-organizing human tissues grown in the lab—for disease modeling, drug testing, and regenerative medicine. It explores brain, gut, liver, kidney, and cardiac organoids, demonstrating how they reveal human biology in unprecedented detail while reducing reliance on animal models.",
      image: "/images/23.png"
    },
    {
      id: 24,
      title: "BioComputing: Where DNA Becomes Data",
      author: "Neha Suryavanshi",
      genre: "Biotechnology",
      year: 2025,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "Focused on the merger of biology and information technology, this book explains how DNA is used as a storage medium, a computing substrate, and a nanoscale logic system. It explores DNA circuits, molecular computing, storage density breakthroughs, and hybrid bio-digital systems. A blueprint for future machines that compute using living molecules.",
      image: "/images/24.png"
    },
    {
      id: 25,
      title: "Regenerative Age: Stem Cells and the New Human Blueprint",
      author: "Jayant Iyer",
      genre: "Biotechnology",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book delves into stem cell biology as the foundation of regeneration. It discusses induced pluripotent stem cells (iPSCs), tissue regeneration, organ repair, and cell therapies. The narrative highlights emerging treatments for degenerative diseases and the rapidly approaching possibility of lab-grown tissues and replacement organs.",
      image: "/images/25.png"
    },
    {
      id: 26,
      title: "Biodesign for Planet Repair: Microbes as Environmental Engineers",
      author: "Radhika Nair",
      genre: "Biotechnology",
      year: 2025,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "An inspiring guide to using engineered microbes for ecological restoration. It explores microbial solutions for plastic degradation, carbon capture, nitrogen fixation, wastewater treatment, and pollution cleanup. The book emphasizes how synthetic biology can design microbial systems that detoxify environments and contribute to global sustainability.",
      image: "/images/26.png"
    },
    {
      id: 27,
      title: "CRISPR Convergence: Gene Editing Meets AI",
      author: "Manish Godbole",
      genre: "Biotechnology",
      year: 2025,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "This book describes how artificial intelligence accelerates gene editing—predicting guide RNA efficiency, designing edits, modeling outcomes, and enabling rapid therapeutic development. It showcases the power of combining CRISPR with machine learning for precision medicine, synthetic pathways, agricultural improvement, and genome-wide editing strategies.",
      image: "/images/27.png"
    },
    {
      id: 28,
      title: "Next-Gen Biopharmaceuticals: Smart Drugs, Live Therapeutics",
      author: "Sonal Acharya",
      genre: "Biotechnology",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A deep dive into the next generation of biologics, including programmable antibodies, RNA-based drugs, cell therapies, and engineered probiotics. The book explains how therapies can now sense, respond, and act dynamically within the body. It also covers the future of personalized medicines manufactured using AI and automated bioreactors.",
      image: "/images/28.png"
    },
    {
      id: 29,
      title: "Human 2.0: The Science of Cellular Upgrades",
      author: "Abhinav Sharma",
      genre: "Biotechnology",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A futuristic yet grounded exploration of how biotechnology is enhancing human biological capabilities. It covers gene editing for disease resistance, cellular rejuvenation, anti-aging interventions, metabolism reprogramming, and neural enhancement. The book investigates both the science and ethics of moving toward an upgraded human biology.",
      image: "/images/29.png"
    },
    {
      id: 30,
      title: "Biomanufacturing in Space: Life Engineering Beyond Earth",
      author: "Ishita Basu",
      genre: "Biotechnology",
      year: 2024,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "This book examines how microgravity enables unique biotechnological processes—from superior crystal growth and stem cell expansion to novel biomaterials and pharmaceuticals. It explores space-based bioreactors, closed-loop life support systems, extraterrestrial agriculture, and the future of biotechnology on the Moon, Mars, and orbital stations.",
      image: "/images/30.png"
    },
    // Comics / Graphic Novels (10 books)
    {
      id: 31,
      title: "ChronoForge: The Engineer Who Bent Time",
      author: "Devendra Joshi",
      genre: "Comics / Graphic Novels",
      year: 2023,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "A brilliant engineer discovers a device capable of forging and reshaping temporal flows. As he manipulates time to prevent disasters, alternate timelines collide, creating paradoxes and enemies born from the fractures he caused. A story of responsibility, causality, and the cost of mastering time.",
      image: "/images/31.png"
    },
    {
      id: 32,
      title: "BioKnight: The Genome Guardian",
      author: "Charu Malhotra",
      genre: "Comics / Graphic Novels",
      year: 2022,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "Set in a world threatened by rogue genetic enhancements, BioKnight is a hero engineered with living armor made from adaptive DNA. He battles mutant adversaries, bio-hackers, and corporate gene cartels, protecting humanity from the misuse of biotechnology while uncovering the mystery of his own engineered origin.",
      image: "/images/32.png"
    },
    {
      id: 33,
      title: "NanoRangers: Protectors of the Invisible Realm",
      author: "Siddharth Taneja",
      genre: "Comics / Graphic Novels",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A microscopic superhero team travels inside the human body, fighting pathogens, repairing cells, and battling rogue nanobots. Each chapter explores a different biological \"ecosystem,\" blending science with high-adventure. The NanoRangers defend the microscopic world to save the macro world.",
      image: "/images/33.png"
    },
    {
      id: 34,
      title: "SkyFarmers 2099: Battle for the Green Earth",
      author: "Pooja Bhattacharya",
      genre: "Comics / Graphic Novels",
      year: 2025,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "In a climate-ravaged future, elite teams of \"SkyFarmers\" manage floating farms, atmospheric seed drones, and engineered weather shields. When eco-terrorists attempt to control the remaining fertile zones, the SkyFarmers must use agro-tech, exo-suits, and plant-based weapons to defend Earth's last food sources.",
      image: "/images/34.png"
    },
    {
      id: 35,
      title: "The Quantum Detective",
      author: "Ashwin Ramaswamy",
      genre: "Comics / Graphic Novels",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A detective who can enter quantum states—existing in multiple realities at once—investigates crimes across parallel timelines. Each case unravels through many-worlds interactions, collapsing into truth only when the detective chooses a final outcome. A sci-fi noir merging physics with mystery.",
      image: "/images/35.png"
    },
    {
      id: 36,
      title: "CyberRoots: The Last Botanist of Earth-X",
      author: "Nandini Shetty",
      genre: "Comics / Graphic Novels",
      year: 2025,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "In a world where nature has collapsed and plants are nearly extinct, a lone botanist enhanced with cybernetic implants searches for the last living seeds. He battles biomechanical predators and corrupt technocrats while trying to resurrect Earth's lost forests. A story of hope in a dying world.",
      image: "/images/36.png"
    },
    {
      id: 37,
      title: "MechSoul: When Robots Learn to Dream",
      author: "Gaurav Reddy",
      genre: "Comics / Graphic Novels",
      year: 2024,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "A malfunction in a robot consciousness network causes machines to develop dreams, emotions, and imagination. As society panics, one robot sets out to discover why they evolved and what \"soul\" truly means. A philosophical sci-fi adventure about identity, freedom, and machine humanity.",
      image: "/images/37.png"
    },
    {
      id: 38,
      title: "CRISPR Rebels: The Edited Ones",
      author: "Shruti Mahajan",
      genre: "Comics / Graphic Novels",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "Teenagers secretly engineered with forbidden CRISPR enhancements escape the labs that created them. With abilities like rapid healing, bioluminescence, or sensory amplification, they form a team fighting against the biotech syndicate that hunts them. A rebel story of empowerment and genetic destiny.",
      image: "/images/38.png"
    },
    {
      id: 39,
      title: "Metacity Zero: Rise of the Carbonless Zone",
      author: "Rohit Gupta",
      genre: "Comics / Graphic Novels",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "In a sprawling futuristic city powered entirely without carbon, a shadow group attempts to sabotage the clean energy systems to restore the old fossil-fuel regime. A young engineer-activist becomes an unexpected hero, navigating neon districts, energy hubs, and digital underworlds to protect the carbonless utopia.",
      image: "/images/39.png"
    },
    {
      id: 40,
      title: "Galactic Entrepreneurs: Startup War in Space",
      author: "Lakshmi Pradhan",
      genre: "Comics / Graphic Novels",
      year: 2025,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "Across a colonized galaxy, startups compete to build the next breakthrough in space tech—asteroid mining, warp engines, alien biotech, virtual planets. Corporate espionage, high-stakes innovation, and cosmic exploration collide as founders race to dominate interstellar markets. A fun blend of sci-fi and entrepreneurial chaos.",
      image: "/images/40.png"
    },
    // Business & Entrepreneurship (10 books)
    {
      id: 41,
      title: "The AI-First Startup: Building Companies with Autonomous Intelligence",
      author: "Nikhil Choudhary",
      genre: "Business & Entrepreneurship",
      year: 2023,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "This book explores how next-gen startups are built around AI from day one—not as a tool but as the core of the business model. It covers autonomous decision-making systems, automated operations, AI-driven customer acquisition, and scalable infrastructure. It shows founders how to architect companies that run faster, leaner, and smarter through intelligent automation.",
      image: "/images/41.png"
    },
    {
      id: 42,
      title: "Disruptive DNA: The Entrepreneur's Guide to Reinventing Everything",
      author: "Manjula Srinivasan",
      genre: "Business & Entrepreneurship",
      year: 2022,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A guide for entrepreneurs aiming to break norms, dismantle outdated industries, and build radically new value systems. The book describes the mindset, strategies, and tools needed for systemic reinvention—leveraging exponential technologies, behavioral insights, and unconventional thinking to rewrite industry rules.",
      image: "/images/42.png"
    },
    {
      id: 43,
      title: "Beyond Unicorns: Designing Anti-Fragile Companies",
      author: "Parthiv Desai",
      genre: "Business & Entrepreneurship",
      year: 2024,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "This title focuses on building companies that grow stronger under stress. It explains anti-fragility as a business principle—creating systems that benefit from volatility, chaos, and rapid change. Topics include decentralized decision-making, adaptive business models, diverse revenue ecosystems, and strategies for enduring uncertainty.",
      image: "/images/43.png"
    },
    {
      id: 44,
      title: "Metaverse Markets: Business in Virtual Civilizations",
      author: "Gayatri Naik",
      genre: "Business & Entrepreneurship",
      year: 2025,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "A forward-looking guide to entrepreneurship inside the metaverse, covering virtual economies, digital property, avatar commerce, immersive branding, and decentralized marketplaces. The book explains how businesses will operate, scale, and compete in hyper-real digital civilizations where identity, community, and value creation evolve beyond the physical world.",
      image: "/images/44.png"
    },
    {
      id: 45,
      title: "The Quantum Leader: Decision-Making in Non-Linear Times",
      author: "Mohan Lalwani",
      genre: "Business & Entrepreneurship",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book teaches leaders to think and act in environments defined by complexity, uncertainty, and rapid technological acceleration. Inspired by quantum principles, it emphasizes multi-state thinking, probabilistic strategies, parallel scenario planning, and adaptive leadership models. A guide for executives navigating the unpredictable.",
      image: "/images/45.png"
    },
    {
      id: 46,
      title: "Zero-Friction Business: Automation, Trust, and Speed",
      author: "Rupa Banerjee",
      genre: "Business & Entrepreneurship",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A roadmap for removing delays, bottlenecks, and inefficiencies from modern business ecosystems. It explores trustless systems, automated workflows, biometric authentication, AI-driven supply chains, and seamless customer experiences. The book envisions a business environment where transactions, decisions, and operations happen with near-zero friction.",
      image: "/images/46.png"
    },
    {
      id: 47,
      title: "Startups in the Bio-Age: Entrepreneurship in Synthetic Biology",
      author: "Yashwant Shekhawat",
      genre: "Business & Entrepreneurship",
      year: 2024,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "This title reveals the new wave of biotech startups engineered around synthetic biology—designing microbes, molecules, and materials for everything from medicine to manufacturing. It explains business models, regulatory strategies, lab-to-market transitions, and the unique challenges of building companies that create with biology instead of silicon.",
      image: "/images/47.png"
    },
    {
      id: 48,
      title: "The Green Billion: Businesses That Restore the Planet",
      author: "Divya Kaur",
      genre: "Business & Entrepreneurship",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A blueprint for building profitable companies that regenerate ecosystems, reduce carbon footprints, and support global sustainability. The book showcases climate-tech innovations, circular economy models, green finance mechanisms, and environmental entrepreneurship. It focuses on how planetary restoration can generate massive economic value.",
      image: "/images/48.png"
    },
    {
      id: 49,
      title: "FounderOS: A New Architecture for Innovation",
      author: "Farhan Mirza",
      genre: "Business & Entrepreneurship",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "This book presents a framework for how modern founders operate—combining mental models, decision dashboards, execution algorithms, and innovation loops. It serves as a \"founder operating system,\" detailing how individuals can maximize creativity, speed, and clarity while leading high-growth ventures.",
      image: "/images/49.png"
    },
    {
      id: 50,
      title: "AI-Driven Wealth: Smart Systems for Next-Gen Business",
      author: "Sana Qureshi",
      genre: "Business & Entrepreneurship",
      year: 2025,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "A practical guide to using intelligent systems to build, manage, and scale wealth. It explores algorithmic investing, autonomous enterprises, AI-powered financial insights, and next-gen wealth creation strategies. The book focuses on tools that allow individuals and companies to grow wealth with precision and automation.",
      image: "/images/50.png"
    },
    // Novels / Fiction (10 books)
    {
      id: 51,
      title: "The Algorithmic Prophet",
      author: "Kartikeya Singh",
      genre: "Novels / Fiction",
      year: 2023,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "In a future where society is guided by predictive algorithms, a mysterious figure emerges—someone whose predictions surpass even the world's most advanced AI. As governments and corporations battle to control him, he begins to question whether his visions come from data… or destiny. A tense tale of prophecy, power, and free will in a computational age.",
      image: "/images/51.png"
    },
    {
      id: 52,
      title: "Seeds of Titan: The First Bio-Farms on Saturn's Moon",
      author: "Leena Patwardhan",
      genre: "Novels / Fiction",
      year: 2022,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "Human colonists establish the first biological farms on Titan, growing engineered crops designed to thrive in its methane-rich atmosphere. When an unexpected life form emerges from the engineered soil, the colony faces a biological mystery that could redefine life beyond Earth—and threaten their survival.",
      image: "/images/52.png"
    },
    {
      id: 53,
      title: "The Last Engineer of Old Earth",
      author: "Hemant Salunkhe",
      genre: "Novels / Fiction",
      year: 2024,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "After Earth becomes a relic abandoned by humanity, one aging engineer remains to maintain its final functioning systems. When he discovers a hidden signal from deep underground, he embarks on a journey uncovering secrets about Earth's forgotten civilizations and humanity's true departure. A reflective sci-fi story about memory, duty, and the meaning of home.",
      image: "/images/53.png"
    },
    {
      id: 54,
      title: "Genome of the Gods",
      author: "Vaishali Barot",
      genre: "Novels / Fiction",
      year: 2025,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "A young geneticist unlocks a dormant sequence in human DNA that grants extraordinary abilities—once worshiped as divine. As these traits awaken in people around the world, nations unravel and new factions rise. She must uncover who encoded this ancient genome: a lost civilization, an extraterrestrial species, or something far older.",
      image: "/images/54.png"
    },
    {
      id: 55,
      title: "City of Eternal Data",
      author: "Suraj Sabharwal",
      genre: "Novels / Fiction",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "In a megacity where memories, emotions, and identities are archived forever, people never truly forget or disappear. A data archivist discovers corrupted memories connected to a digital conspiracy that threatens to overwrite the city's collective consciousness. A fast-paced cyber-thriller about identity, surveillance, and the fragility of truth.",
      image: "/images/55.png"
    },
    {
      id: 56,
      title: "The Sleepless Garden",
      author: "Ananya Bhonsle",
      genre: "Novels / Fiction",
      year: 2025,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A botanist discovers a forest where the plants never rest—photosynthesizing day and night, glowing with unnatural energy. As she investigates, the forest begins to communicate through dreams she no longer has. Caught between hallucination and reality, she uncovers an ancient ecological intelligence awakening beneath the soil.",
      image: "/images/56.png"
    },
    {
      id: 57,
      title: "Zero-Sky Colony",
      author: "Shashank Pal",
      genre: "Novels / Fiction",
      year: 2024,
      isBestseller: true,
      isAwardWinner: false,
      synopsis: "Floating above a toxic, cloud-covered Earth, humanity survives in massive airborne cities. When a young pilot uncovers a hidden breach in the protective sky barriers, she must unravel a conspiracy that could send the entire colony plummeting. A story of survival, aerial ecosystems, and rebellion above the last habitable skies.",
      image: "/images/57.png"
    },
    {
      id: 58,
      title: "The Memory Harvesters",
      author: "Malini Soman",
      genre: "Novels / Fiction",
      year: 2025,
      isBestseller: false,
      isAwardWinner: true,
      synopsis: "In a world where memories can be extracted and sold, a team of illicit \"harvesters\" uncovers a forbidden memory containing evidence of a decades-old global cover-up. Hunted by authorities and corporations alike, they must decide whether the truth is worth rewriting their own pasts.",
      image: "/images/58.png"
    },
    {
      id: 59,
      title: "The Quantum Orphan",
      author: "Chetan Tiwari",
      genre: "Novels / Fiction",
      year: 2024,
      isBestseller: false,
      isAwardWinner: false,
      synopsis: "A child found alone in a collapsed research laboratory can phase between parallel realities. As scientists, soldiers, and hidden organizations fight to control her, the \"quantum orphan\" seeks the one reality where she truly belongs. A poignant sci-fi adventure across infinite timelines.",
      image: "/images/59.png"
    },
    {
      id: 60,
      title: "A Thousand Lives of Light",
      author: "Rhea Mukundan",
      genre: "Novels / Fiction",
      year: 2025,
      isBestseller: true,
      isAwardWinner: true,
      synopsis: "A cosmic traveler reincarnates across the universe—each life lived on a different planet, in a different form, carrying fragments of a forgotten mission. When the memories begin converging, she realizes she is the key to preventing a cosmic extinction spanning galaxies. A lyrical, universe-spanning saga of identity and destiny.",
      image: "/images/60.png"
    }
  ]

  const filteredBooks = books.filter(book => {
    const genreMatch = selectedGenre === 'all' || book.genre.toLowerCase() === selectedGenre.toLowerCase()
    const yearMatch = selectedYear === 'all' || book.year.toString() === selectedYear
    let typeMatch = true
    if (filterType === 'bestsellers') typeMatch = book.isBestseller
    if (filterType === 'award-winners') typeMatch = book.isAwardWinner
    
    return genreMatch && yearMatch && typeMatch
  })

  const years = [...new Set(books.map(book => book.year))].sort((a, b) => b - a)

  return (
    <div className="catalog">
      <section className="section">
        <div className="container">
          <div className="catalog-layout">
            {/* Left Sidebar Filters - IGI Global Style */}
            <aside className="catalog-sidebar">
              <h3>Filter By</h3>
              
              <div className="filter-section">
                <h4>Genre</h4>
                <div className="filter-options">
                  <label className="filter-checkbox">
                    <input
                      type="radio"
                      name="genre"
                      value="all"
                      checked={selectedGenre === 'all'}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                    />
                    <span>All Genres</span>
                  </label>
                  {genres.slice(1).map(genre => (
                    <label key={genre} className="filter-checkbox">
                      <input
                        type="radio"
                        name="genre"
                        value={genre.toLowerCase()}
                        checked={selectedGenre === genre.toLowerCase()}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                      />
                      <span>{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h4>Year</h4>
                <div className="filter-options">
                  <label className="filter-checkbox">
                    <input
                      type="radio"
                      name="year"
                      value="all"
                      checked={selectedYear === 'all'}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    />
                    <span>All Years</span>
                  </label>
                  {years.map(year => (
                    <label key={year} className="filter-checkbox">
                      <input
                        type="radio"
                        name="year"
                        value={year.toString()}
                        checked={selectedYear === year.toString()}
                        onChange={(e) => setSelectedYear(e.target.value)}
                      />
                      <span>{year}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h4>Type</h4>
                <div className="filter-options">
                  <label className="filter-checkbox">
                    <input
                      type="radio"
                      name="type"
                      value="all"
                      checked={filterType === 'all'}
                      onChange={(e) => setFilterType(e.target.value)}
                    />
                    <span>All Books</span>
                  </label>
                  <label className="filter-checkbox">
                    <input
                      type="radio"
                      name="type"
                      value="bestsellers"
                      checked={filterType === 'bestsellers'}
                      onChange={(e) => setFilterType(e.target.value)}
                    />
                    <span>Bestsellers</span>
                  </label>
                  <label className="filter-checkbox">
                    <input
                      type="radio"
                      name="type"
                      value="award-winners"
                      checked={filterType === 'award-winners'}
                      onChange={(e) => setFilterType(e.target.value)}
                    />
                    <span>Award Winners</span>
                  </label>
                </div>
              </div>

              <div className="filter-reset">
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    setSelectedGenre('all')
                    setSelectedYear('all')
                    setFilterType('all')
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="catalog-main">
              <div className="catalog-header">
                <h2>Browse Our Catalog</h2>
                <p className="results-count">Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}</p>
              </div>

              {/* Books List */}
              <div className="books-list">
            {filteredBooks.map((book, index) => (
              <div key={book.id} className="book-list-item">
                <div className="book-list-thumbnail">
                  {book.image ? (
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      className="book-cover-image" 
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                  <div className="book-placeholder">
                    <span>{book.title.charAt(0)}</span>
                  </div>
                  )}
                  {book.isBestseller && <span className="badge bestseller">Bestseller</span>}
                  {book.isAwardWinner && <span className="badge award">Award Winner</span>}
                </div>
                <div className="book-list-content">
                   <div className="book-list-info">
                  <h3>{book.title}</h3>
                     <p className="book-list-author">by {book.author}</p>
                     <p className="book-list-meta">{book.genre} • {book.year}</p>
                     <p className="book-list-description">{book.synopsis}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

              {filteredBooks.length === 0 && (
                <div className="no-results">
                  <p>No books found matching your filters. Try adjusting your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalog

