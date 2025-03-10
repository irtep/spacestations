import { Industry } from "../interfaces/sharedInterfaces";

export const industries: Industry[] = [
    {
        name: "Spacecraft Factory",
        description: "A facility that designs and builds spacecraft for exploration, colonization, and military purposes.",
        requirements: [
            { name: "Silicon", value: 30, use: ["electronics", "solar panels", "semiconductors"] },
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "weaponry"] },
            { name: "Aluminum", value: 50, use: ["lightweight alloys", "aerospace materials"] },
            { name: "Neptunium Ore", value: 90, use: ["advanced energy production", "weaponry", "space propulsion"] }
        ],
        buildCost: 2150,  // Estimated cost of building the industry
        yearlyProfit: 500000  // Profit based on demand for spacecrafts, exploration, and military contracts
    },
    {
        name: "Weapon Factory",
        description: "A factory that specializes in the production of various weapons for defense, exploration, and combat.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "weaponry"] },
            { name: "Rare Minerals", value: 70, use: ["advanced materials", "energy storage", "spacecraft"] },
            { name: "Heavy Metals", value: 55, use: ["construction", "high-strength alloys", "fuel production"] }
        ],
        buildCost: 3700,  // Estimated cost of building the industry
        yearlyProfit: 300000  // Profit based on military contracts, demand for defense, and weaponry
    },
    {
        name: "Luxury Goods Manufacturer",
        description: "A facility that produces high-end, luxury items such as jewelry, electronics, and rare artifacts.",
        requirements: [
            { name: "Gold", value: 80, use: ["currency", "electronics", "luxury items"] },
            { name: "Solar Crystals", value: 85, use: ["solar power enhancements", "energy storage", "advanced electronics"] },
            { name: "Alien Fungi", value: 90, use: ["medicine", "biotechnology", "bioengineering"] }
        ],
        buildCost: 7450,  // Estimated cost of building the industry
        yearlyProfit: 2000000  // Profit based on high demand for luxury items, rare commodities, and exports
    },
    {
        name: "Leisure & Entertainment Complex",
        description: "A large complex offering various entertainment services, including space tourism, virtual reality experiences, and luxury resorts.",
        requirements: [
            { name: "Water", value: 50, use: ["life support", "agriculture", "chemical processes"] },
            { name: "Oxygen", value: 70, use: ["life support", "industrial processes"] },
            { name: "Frozen Water", value: 50, use: ["life support", "fuel production", "agriculture"] },
            { name: "Frozen Methane", value: 65, use: ["fuel", "chemical production", "energy"] }
        ],
        buildCost: 7000,  // Estimated cost of building the industry
        yearlyProfit: 1000000  // Profit based on high demand for tourism, entertainment, and luxury services
    },
    {
        name: "Agriculture & Food Processing",
        description: "An industry focused on the production and processing of food for both local consumption and export.",
        requirements: [
            { name: "Water", value: 50, use: ["life support", "agriculture", "chemical processes"] },
            { name: "Carbonates", value: 50, use: ["advanced materials", "construction", "energy production"] },
            { name: "Ammonia", value: 45, use: ["fertilizer", "chemical manufacturing"] },
            { name: "Organic Compounds", value: 75, use: ["bioengineering", "medicinal products", "chemistry"] }
        ],
        buildCost: 7000,  // Estimated cost of building the industry
        yearlyProfit: 400000  // Profit based on food exports, local consumption, and farming
    },
    {
        name: "Energy Production Plant",
        description: "A facility dedicated to the generation and distribution of energy to various industries and colonies.",
        requirements: [
            { name: "Hydrogen", value: 65, use: ["fuel", "life support", "chemical processes"] },
            { name: "Jovian Gas", value: 80, use: ["energy production", "chemical synthesis", "propulsion"] },
            { name: "Exotic Gases", value: 80, use: ["energy production", "fuel", "propulsion systems"] },
            { name: "Dark Matter", value: 100, use: ["unlimited energy source", "space-time manipulation", "advanced technology"] }
        ],
        buildCost: 14250,  // Estimated cost of building the industry
        yearlyProfit: 5000000  // Profit based on the high demand for energy, especially in industrialized colonies
    },
    {
        name: "Mining & Extraction",
        description: "A resource extraction industry focusing on mining celestial bodies for valuable materials like metals, ores, and gases.",
        requirements: [
            { name: "Iron Ore", value: 10, use: ["construction", "heavy machinery", "weaponry"] },
            { name: "Sulfuric Gas", value: 60, use: ["chemical manufacturing", "fertilizer production"] },
            { name: "Sulfur", value: 30, use: ["chemicals", "industrial applications"] },
            { name: "Silica", value: 20, use: ["construction", "electronics", "glass manufacturing"] }
        ],
        buildCost: 2800,  // Estimated cost of building the industry
        yearlyProfit: 600000  // Profit based on high demand for mined materials like ores and construction materials
    },
    {
        name: "Chemical Manufacturing Plant",
        description: "A facility that specializes in producing chemicals for various industries, including agriculture, energy, and materials.",
        requirements: [
            { name: "Sulfuric Gas", value: 60, use: ["chemical manufacturing", "fertilizer production"] },
            { name: "Ammonia", value: 45, use: ["fertilizer", "chemical manufacturing"] },
            { name: "Methane", value: 60, use: ["fuel", "chemical manufacturing", "life support"] }
        ],
        buildCost: 4650,  // Estimated cost of building the industry
        yearlyProfit: 350000  // Profit based on demand for chemicals in farming, manufacturing, and industrial use
    },
    {
        name: "Space Research Lab",
        description: "A cutting-edge research facility dedicated to space exploration, astrophysics, and scientific advancement.",
        requirements: [
            { name: "Solar Crystals", value: 85, use: ["solar power enhancements", "energy storage", "advanced electronics"] },
            { name: "Rare Ices", value: 50, use: ["life support", "fuel production", "research"] },
            { name: "Neptunium Ore", value: 90, use: ["advanced energy production", "weaponry", "space propulsion"] }
        ],
        buildCost: 7800,  // Estimated cost of building the industry
        yearlyProfit: 1500000  // Profit based on research grants, technological breakthroughs, and military contracts
    },
    {
        name: "Space Tourism",
        description: "A luxury service industry offering unique travel experiences to tourists wishing to explore space.",
        requirements: [
            { name: "Frozen Water", value: 50, use: ["life support", "fuel production", "agriculture"] },
            { name: "Gold", value: 80, use: ["currency", "electronics", "luxury items"] },
            { name: "Alien Fungi", value: 90, use: ["medicine", "biotechnology", "bioengineering"] }
        ],
        buildCost: 7650,  // Estimated cost of building the industry
        yearlyProfit: 2500000  // Profit based on high demand for luxury space travel experiences and space tourism
    }
];

export const defenseStructures: Industry[] = [
    {
        name: "Missile Base",
        description: "A facility designed for the defense of strategic assets and colonies. Equipped with long-range missile systems for intercepting threats from space.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "weaponry"] },
            { name: "Rare Minerals", value: 70, use: ["advanced materials", "energy storage", "spacecraft"] },
            { name: "Aluminum", value: 50, use: ["lightweight alloys", "aerospace materials"] }
        ],
        buildCost: 5000,  // Estimated cost of building the missile base
        yearlyProfit: -200000  // Negative profit due to high maintenance and defense costs
    },
    {
        name: "Star Fortress",
        description: "A massive, heavily armored fortress built in orbit or around strategic locations, equipped with advanced weaponry and shielding to protect against large-scale attacks.",
        requirements: [
            { name: "Neptunium Ore", value: 90, use: ["advanced energy production", "weaponry", "space propulsion"] },
            { name: "Heavy Metals", value: 55, use: ["construction", "high-strength alloys", "fuel production"] },
            { name: "Rare Minerals", value: 70, use: ["advanced materials", "energy storage", "spacecraft"] },
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "weaponry"] }
        ],
        buildCost: 15000,  // Estimated cost of building the star fortress
        yearlyProfit: -1000000  // Negative profit due to the enormous maintenance costs and upkeep of the fortress
    },
    {
        name: "Defense Satellite Network",
        description: "A network of advanced satellites placed in orbit, providing real-time surveillance, missile defense, and tactical support for the military and colonies.",
        requirements: [
            { name: "Silicon", value: 30, use: ["electronics", "solar panels", "semiconductors"] },
            { name: "Solar Crystals", value: 85, use: ["solar power enhancements", "energy storage", "advanced electronics"] },
            { name: "Jovian Gas", value: 80, use: ["energy production", "chemical synthesis", "propulsion"] }
        ],
        buildCost: 6000,  // Estimated cost of building the defense satellite network
        yearlyProfit: -500000  // Negative profit due to maintenance and ongoing defense costs
    },
    {
        name: "Planetary Shield Generator",
        description: "A massive energy generator capable of deploying a protective energy shield around a planet or space station, safeguarding it from enemy fire and space debris.",
        requirements: [
            { name: "Neptunium Ore", value: 90, use: ["advanced energy production", "weaponry", "space propulsion"] },
            { name: "Dark Matter", value: 100, use: ["unlimited energy source", "space-time manipulation", "advanced technology"] },
            { name: "Exotic Gases", value: 80, use: ["energy production", "fuel", "propulsion systems"] }
        ],
        buildCost: 25000,  // Estimated cost of building the planetary shield generator
        yearlyProfit: -2000000  // Negative profit due to the massive energy and maintenance costs involved
    },
    {
        name: "Anti-Spacecraft Laser Base",
        description: "A powerful laser defense system designed to destroy incoming hostile spacecraft or missiles, ensuring the safety of key locations and colonies.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "weaponry"] },
            { name: "Silicon", value: 30, use: ["electronics", "solar panels", "semiconductors"] },
            { name: "Aluminum", value: 50, use: ["lightweight alloys", "aerospace materials"] },
            { name: "Neptunium Ore", value: 90, use: ["advanced energy production", "weaponry", "space propulsion"] }
        ],
        buildCost: 8000,  // Estimated cost of building the anti-spacecraft laser base
        yearlyProfit: -300000  // Negative profit due to high maintenance and operational costs
    },
    {
        name: "Orbital Defense Platform",
        description: "An orbital defense platform equipped with advanced weapon systems, designed to intercept and destroy threats targeting space stations or fleets in orbit.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "weaponry"] },
            { name: "Rare Minerals", value: 70, use: ["advanced materials", "energy storage", "spacecraft"] },
            { name: "Heavy Metals", value: 55, use: ["construction", "high-strength alloys", "fuel production"] },
            { name: "Jovian Gas", value: 80, use: ["energy production", "chemical synthesis", "propulsion"] }
        ],
        buildCost: 12000,  // Estimated cost of building the orbital defense platform
        yearlyProfit: -700000  // Negative profit due to high maintenance and defensive costs
    }
];
