
declare global {
  interface Window {
    fbq: any;
  }
}

export const trackEvent = (eventName: string) => {
  if (window.fbq) {
    window.fbq('track', eventName);
  }
};
