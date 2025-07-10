export const logInfo = (msg, meta) => {
    console.info(`[INFO] ${new Date().toISOString()} - ${msg}`, meta);
};

export const logError = (err, meta) => {
    console.error(`[ERROR] ${new Date().toISOString()} -`, err, meta);
};
