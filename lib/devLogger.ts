export const logDev = (...args: any[]) => {
  if (__DEV__) {
    console.log("[DEV]", ...args);
  }
};
