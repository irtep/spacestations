import { Industry, ShipSystem } from "../interfaces/sharedInterfaces";

export const spacecrafts: Industry[] = [
    // Cargo Ships
    {
        name: "Standard Cargo Ship",
        description: "A versatile, medium-sized cargo ship used for transporting goods across space. Suitable for low-priority shipments.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "transportation"] },
            { name: "Aluminum", value: 50, use: ["lightweight alloys", "aerospace materials"] },
            { name: "Silicon", value: 30, use: ["electronics", "solar panels", "semiconductors"] }
        ],
        buildCost: 5000,  // Estimated cost of building the standard cargo ship
        yearlyProfit: -100000  // Negative profit due to maintenance and fuel costs
    },
    {
        name: "Heavy Cargo Ship",
        description: "A large cargo ship designed for transporting heavy or bulk materials over long distances. Requires specialized infrastructure to load and unload.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "transportation"] },
            { name: "Rare Minerals", value: 60, use: ["advanced materials", "heavy construction"] },
            { name: "Aluminum", value: 50, use: ["lightweight alloys", "aerospace materials"] }
        ],
        buildCost: 12000,  // Estimated cost of building the heavy cargo ship
        yearlyProfit: -300000  // Negative profit due to high operational and fuel costs
    },
    {
        name: "Luxury Cargo Ship",
        description: "A high-end cargo ship used for transporting luxury goods, rare artifacts, and exclusive products across space. Smaller but more efficient.",
        requirements: [
            { name: "Aluminum", value: 50, use: ["lightweight alloys", "aerospace materials"] },
            { name: "Rare Metals", value: 70, use: ["luxury materials", "advanced tech components"] },
            { name: "Silicon", value: 30, use: ["electronics", "solar panels", "semiconductors"] }
        ],
        buildCost: 8000,  // Estimated cost of building the luxury cargo ship
        yearlyProfit: -200000  // Negative profit due to maintenance and fuel costs
    },
    {
        name: "Freight Transporter",
        description: "A specialized cargo ship designed for bulk transportation of raw materials and ores. Large, slow-moving but highly reliable.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "transportation"] },
            { name: "Aluminum", value: 40, use: ["lightweight alloys", "aerospace materials"] },
            { name: "Jovian Gas", value: 60, use: ["energy production", "chemical synthesis", "propulsion"] }
        ],
        buildCost: 7000,  // Estimated cost of building the freight transporter
        yearlyProfit: -250000  // Negative profit due to high energy and maintenance costs
    },
    {
        name: "Bulk Transporter",
        description: "A massive cargo ship designed for carrying huge quantities of raw materials or bulk goods. Often used for interplanetary cargo transport.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "transportation"] },
            { name: "Rare Minerals", value: 50, use: ["advanced materials", "heavy construction"] },
            { name: "Aluminum", value: 50, use: ["lightweight alloys", "aerospace materials"] }
        ],
        buildCost: 15000,  // Estimated cost of building the bulk transporter
        yearlyProfit: -400000  // Negative profit due to massive maintenance costs
    },

    // Military Ships
    {
        name: "Scout Ship",
        description: "A small, agile spacecraft designed for reconnaissance and gathering intelligence in enemy territory.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "military"] },
            { name: "Silicon", value: 40, use: ["electronics", "sensors", "communication"] },
            { name: "Aluminum", value: 30, use: ["lightweight alloys", "aerospace materials"] }
        ],
        buildCost: 6000,  // Estimated cost of building the scout ship
        yearlyProfit: -150000  // Negative profit due to high operational and maintenance costs
    },
    {
        name: "Interceptor",
        description: "A fast, heavily armed spacecraft designed for engaging enemy ships in battle. Equipped with powerful weapons systems.",
        requirements: [
            { name: "Rare Minerals", value: 70, use: ["weaponry", "military technology"] },
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "military"] },
            { name: "Aluminum", value: 40, use: ["lightweight alloys", "aerospace materials"] }
        ],
        buildCost: 10000,  // Estimated cost of building the interceptor
        yearlyProfit: -500000  // Negative profit due to weapons systems and maintenance
    },
    {
        name: "Destroyer",
        description: "A large, heavily armored military ship equipped with advanced weapons and shields, designed for fleet protection and offensive missions.",
        requirements: [
            { name: "Rare Metals", value: 80, use: ["weaponry", "advanced construction"] },
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "military"] },
            { name: "Jovian Gas", value: 60, use: ["energy production", "propulsion", "weapons"] }
        ],
        buildCost: 20000,  // Estimated cost of building the destroyer
        yearlyProfit: -800000  // Negative profit due to the operational costs of maintaining a military fleet
    },
    {
        name: "Battleship",
        description: "A heavily armed and armored military ship designed for large-scale space combat. Equipped with devastating weaponry and capable of sustained combat operations.",
        requirements: [
            { name: "Rare Minerals", value: 90, use: ["weaponry", "military technology"] },
            { name: "Neptunium Ore", value: 100, use: ["advanced energy production", "weapons"] },
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "military"] }
        ],
        buildCost: 40000,  // Estimated cost of building the battleship
        yearlyProfit: -1500000  // Negative profit due to high upkeep and defense systems
    },
    {
        name: "Flagship Carrier",
        description: "The largest and most powerful military ship, capable of carrying a fleet of smaller ships and deploying fighters or drones. The core of a military fleet.",
        requirements: [
            { name: "Iron", value: 1, use: ["heavy industry", "construction", "military"] },
            { name: "Neptunium Ore", value: 100, use: ["advanced energy production", "weapons"] },
            { name: "Silicon", value: 40, use: ["electronics", "communication", "sensors"] }
        ],
        buildCost: 50000,  // Estimated cost of building the flagship carrier
        yearlyProfit: -2000000  // Negative profit due to massive operational costs
    }
];

export const spaceshipSystems: ShipSystem[] = [
    // Propulsion Systems
    {
      name: "Ion Engine",
      type: "Propulsion",
      description: "Efficient, low-thrust propulsion for long-duration space travel.",
      uses: ["Deep space travel", "High-efficiency maneuvering"],
      energyRequirements: "Low, but constant",
      buildCost: 100000
    },
    {
      name: "Fusion Drive",
      type: "Propulsion",
      description: "Uses nuclear fusion to produce thrust, offering high-speed travel over large distances.",
      uses: ["Faster-than-light travel", "Rapid interplanetary movement"],
      energyRequirements: "High, requires advanced energy generation",
      buildCost: 500000
    },
    {
      name: "Plasma Drive",
      type: "Propulsion",
      description: "Ionizes plasma to create thrust, ideal for high-speed maneuvers and evasive actions.",
      uses: ["Combat", "Evasive maneuvers", "Fast planetary orbiting"],
      energyRequirements: "Medium to high",
      buildCost: 300000
    },
    {
      name: "Gravitic Drive",
      type: "Propulsion",
      description: "Manipulates gravity fields to accelerate the spacecraft, providing instant propulsion.",
      uses: ["Instant acceleration", "Bypassing traditional physics"],
      energyRequirements: "Very high",
      buildCost: 1000000
    },
    {
      name: "Warp Drive",
      type: "Propulsion",
      description: "Distorts spacetime around the ship to allow faster-than-light travel.",
      uses: ["Long-distance interstellar travel"],
      energyRequirements: "Extremely high, often requires rare resources",
      buildCost: 2000000
    },
  
    // Weapons Systems
    {
      name: "Laser Cannons",
      type: "Weapons",
      description: "Emits concentrated beams of light for precise, high-damage attacks.",
      uses: ["Targeting small ships", "Precision strikes", "High-tech warfare"],
      energyRequirements: "High, uses ship’s power grid",
      buildCost: 150000
    },
    {
      name: "Railguns",
      type: "Weapons",
      description: "Uses electromagnetic forces to launch projectiles at near-relativistic speeds.",
      uses: ["Long-range combat", "Armor-piercing"],
      energyRequirements: "Very high, requires cooling systems",
      buildCost: 400000
    },
    {
      name: "Plasma Turrets",
      type: "Weapons",
      description: "Fires charged plasma at enemies, causing area damage and disabling systems.",
      uses: ["Area damage", "Heavy assault"],
      energyRequirements: "High, requires thermal regulation",
      buildCost: 350000
    },
    {
      name: "Missile Systems",
      type: "Weapons",
      description: "Fires guided missiles equipped with warheads, useful for hitting fast-moving targets.",
      uses: ["Long-range bombardment", "Anti-shield", "Anti-armor"],
      energyRequirements: "Medium, reload times can vary",
      buildCost: 200000
    },
    {
      name: "EMP Cannons",
      type: "Weapons",
      description: "Disables enemy electronics and shields temporarily by emitting electromagnetic pulses.",
      uses: ["Disabling enemy ships", "Area suppression"],
      energyRequirements: "High, requires precise calibration",
      buildCost: 250000
    },
  
    // Armor Systems
    {
      name: "Reinforced Hull Plating",
      type: "Armor",
      description: "Basic armor made from heavy metals to protect the ship from physical impacts and projectile weapons.",
      uses: ["Defense against standard weaponry", "Basic protection"],
      energyRequirements: "None, purely structural",
      buildCost: 50000
    },
    {
      name: "Energy Shielding",
      type: "Armor",
      description: "Creates a protective energy field that absorbs and disperses incoming damage.",
      uses: ["Protection against energy-based weapons", "Projectiles"],
      energyRequirements: "Very high, shields drain power as they absorb damage",
      buildCost: 300000
    },
    {
      name: "Regenerative Hull",
      type: "Armor",
      description: "Hull material that can repair itself over time, absorbing damage and regrowing damaged sections.",
      uses: ["Long-duration combat", "Recovery in hostile environments"],
      energyRequirements: "Low to medium, requires advanced nanotechnology",
      buildCost: 400000
    },
    {
      name: "Anti-Missile Deflection Shield",
      type: "Armor",
      description: "A specialized shield that uses magnetic fields to deflect or destroy incoming missiles.",
      uses: ["Defense against missile attacks", "Intercepting projectiles"],
      energyRequirements: "High, requires constant monitoring and adaptation",
      buildCost: 350000
    },
    {
      name: "Reactive Armor",
      type: "Armor",
      description: "Armor that reacts to impact and dissipates energy upon detonation or projectile impact.",
      uses: ["Heavy defense", "Against explosive or high-velocity projectiles"],
      energyRequirements: "None, but reduces effectiveness after repeated impacts",
      buildCost: 250000
    },
  
    // Combat Systems
    {
      name: "Targeting Systems",
      type: "Combat",
      description: "Uses sensors, AI, and predictive algorithms to improve the accuracy of weapons.",
      uses: ["Precision targeting", "Enemy tracking"],
      energyRequirements: "Medium, dependent on sensor range",
      buildCost: 100000
    },
    {
      name: "Stealth Technology",
      type: "Combat",
      description: "Makes the ship harder to detect by sensors, reducing the likelihood of being targeted.",
      uses: ["Surprise attacks", "Evasion", "Reconnaissance"],
      energyRequirements: "High, requires constant power for cloaking",
      buildCost: 500000
    },
    {
      name: "Advanced AI Combat Systems",
      type: "Combat",
      description: "A sophisticated AI that manages ship systems, targeting, and evasive maneuvers in real-time.",
      uses: ["Combat strategy", "Enhancing weapon efficiency", "Evasive operations"],
      energyRequirements: "High, requires dedicated processing power",
      buildCost: 600000
    },
    {
      name: "Drones & Autonomous Fighters",
      type: "Combat",
      description: "Deployable drone fleets that act autonomously or under player control to support in combat.",
      uses: ["Swarm tactics", "Distraction", "Boarding"],
      energyRequirements: "Medium, drones require maintenance and control systems",
      buildCost: 400000
    }
  ];
  