export function shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
}

export function getRandomSample<T>(arr: T[], count: number): T[] {
    return shuffle(arr).slice(0, count);
}

export function getRandomElement<T>(arr: T[]) : T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}