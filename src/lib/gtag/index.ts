export const GA_TRACKING_ID = 'G-GDS7MEK1WW';

export interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const pageview = (url: URL) => {
  const isProduction = process.env.NODE_ENV === 'production';
  try {
    if (typeof window !== 'undefined') {
      if (isProduction) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    }
  } catch (error) {
    return `Error from the trackerPageView => ${error}`;
  }
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
