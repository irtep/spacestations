export interface GameObject {
    player: string;
};

export interface CelestialAsset {
    name: string;
    value: number; // Value on a scale from 1 to 100
    use: string[]; // Array of possible uses for the resource
};

export interface Industry {
    name: string;
    description: string;
    requirements: CelestialAsset[];
    buildCost: number;  // The cost to build the industry
    yearlyProfit: number; // Estimated profit per year
};

export interface ShipSystem {
    name: string,
    type: string,
    description: string,
    uses: string[],
    energyRequirements: string,
    buildCost: number
};