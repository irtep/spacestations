import { scaleFactor, sunRadius } from "../measures/measures";
//import { CelestialAsset } from "./celestialAssets";

export interface CelestialBody {
    name: string;
    orbitRadius: number;
    angle: number;
    radius: number;
    parent?: string; // Parent body for moons
    color: string; // Color for the planet
    assets: string[];
};

export const celestialPositions: CelestialBody[] = [
    { name: "Sun", orbitRadius: 0, angle: 0, radius: sunRadius, color: "yellow", assets: [] }, // No assets for Sun
    { 
        name: "Mercury", 
        orbitRadius: 0.4 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 2, 
        color: "gray", 
        assets: ["Mercurium Ore", "Solar Crystals"] // Rare ore and crystals found on Mercury
    },
    { 
        name: "Venus", 
        orbitRadius: 0.7 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 4, 
        color: "goldenrod", 
        assets: ["Sulfuric Gas", "Venusian Quartz"] // Gaseous compounds and minerals on Venus
    },
    { 
        name: "Earth", 
        orbitRadius: 1 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 4, 
        color: "blue", 
        assets: ["Water", "Silicon", "Iron", "Gold"] // Earth is abundant in common resources
    },
    { 
        name: "Mars", 
        orbitRadius: 1.5 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 3, 
        color: "red", 
        assets: ["Martian Dust", "Iron Ore", "Water Ice"] // Martian resources for construction and life support
    },
    { 
        name: "Ceres", 
        orbitRadius: 2.77 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 2, 
        color: "lightgray", 
        assets: ["Rare Minerals", "Water Ice"] // Dwarf planet in the asteroid belt rich in valuable minerals
    },
    { 
        name: "Jupiter", 
        orbitRadius: 5.2 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 30, 
        color: "orange", 
        assets: ["Hydrogen", "Helium", "Ammonia", "Jovian Gas"] // Giant gas giant with large amounts of gases useful for energy
    },
    { 
        name: "Ganymede", 
        orbitRadius: 20, 
        angle: Math.random() * Math.PI * 2, 
        radius: 5, 
        parent: "Jupiter", 
        color: "gray", 
        assets: ["Frozen Water", "Oxygen", "Metallic Ore"] // Jupiter's largest moon with water ice and ores
    },
    { 
        name: "Callisto", 
        orbitRadius: 25, 
        angle: Math.random() * Math.PI * 2, 
        radius: 5, 
        parent: "Jupiter", 
        color: "gray", 
        assets: ["Frozen Water", "Heavy Metals", "Alien Fungi"] // Callisto’s ice and unexplored biology
    },
    { 
        name: "Io", 
        orbitRadius: 15, 
        angle: Math.random() * Math.PI * 2, 
        radius: 4, 
        parent: "Jupiter", 
        color: "yellow", 
        assets: ["Sulfur", "Silica", "Volcanic Materials"] // Volcanically active moon rich in sulfur and metals
    },
    { 
        name: "Europa", 
        orbitRadius: 18, 
        angle: Math.random() * Math.PI * 2, 
        radius: 4, 
        parent: "Jupiter", 
        color: "lightblue", 
        assets: ["Liquid Water", "Alien Microbial Life", "Carbonates"] // Subsurface ocean could harbor alien life and resources
    },
    { 
        name: "Saturn", 
        orbitRadius: 9.5 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 25, 
        color: "goldenrod", 
        assets: ["Methane", "Ammonia", "Helium-3"] // Gas giant with valuable isotopes and gases
    },
    { 
        name: "Titan", 
        orbitRadius: 30, 
        angle: Math.random() * Math.PI * 2, 
        radius: 6, 
        parent: "Saturn", 
        color: "orange", 
        assets: ["Methane Lakes", "Organic Compounds", "Ice"] // Saturn’s largest moon with hydrocarbon lakes and resources
    },
    { 
        name: "Uranus", 
        orbitRadius: 19.2 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 12, 
        color: "lightblue", 
        assets: ["Hydrogen", "Helium", "Frozen Water"] // Ice giant with valuable elements like hydrogen and helium
    },
    { 
        name: "Neptune", 
        orbitRadius: 30.1 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 12, 
        color: "darkblue", 
        assets: ["Neptunium Ore", "Ice", "Exotic Gases"] // Ice giant with exotic and rare gases
    },
    { 
        name: "Pluto", 
        orbitRadius: 39.5 * scaleFactor, 
        angle: Math.random() * Math.PI * 2, 
        radius: 2, 
        color: "lightgray", 
        assets: ["Frozen Methane", "Rare Ices", "Dark Matter"] // Dwarf planet in the outer reaches with exotic resources
    }
];
