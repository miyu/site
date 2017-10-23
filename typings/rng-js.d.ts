declare global {
    class RNG {
        constructor(seed: string | Function);
        random(minInclusive: number, maxExclusive: number): number;
        uniform(): number;
        normal(): number;
        exponential(): number;
        poisson(x: number): number;
        gamma(x: number): number;
    }
}

export class Dummy {
}