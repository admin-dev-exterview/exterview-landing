// Extend the Window interface to include hbspt
interface Window {
  hbspt?: {
    forms: {
      create: (options: {
        portalId: string;
        formId: string;
        target: string;
      }) => void;
    };
  };
}
