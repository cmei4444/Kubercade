/**
 * Submit a time. Returns the best time (which will equal `time` if it's a new best time)
 *
 * @param width
 * @param height
 * @param mines
 * @param time
 */
export declare function submitTime(width: number, height: number, mines: number, time: number): Promise<number>;
/** Get best time for a given board */
export declare function getBest(width: number, height: number, mines: number): Promise<number | undefined>;
//# sourceMappingURL=best-times.d.ts.map