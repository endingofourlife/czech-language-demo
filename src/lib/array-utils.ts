export function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
}

export function getRandomItems<T>(arr: T[], count: number): T[] {
    return shuffleArray(arr).slice(0, count);
}