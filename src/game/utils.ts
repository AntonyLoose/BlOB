export function clamp(value: number, max: number, min: number): number {
    return Math.max(min, Math.min(value, max));
}
