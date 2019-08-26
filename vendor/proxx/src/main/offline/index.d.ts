/** Tell the service worker to skip waiting. Resolves once the controller has changed. */
export declare function skipWaiting(): Promise<unknown>;
/** Is there currently a waiting worker? */
export declare let updateReady: boolean;
/** Set up the service worker and monitor changes */
export declare function init(): Promise<void>;
//# sourceMappingURL=index.d.ts.map