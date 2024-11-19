declare global {
    namespace JSX {
      interface IntrinsicElements {
        'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
          autoplay?: boolean;
          controls?: boolean;
          loop?: boolean;
          mode?: string;
          src?: string;
        }, HTMLElement>;
      }
    }
  }
  
  // This ensures the file is treated as a module
  export {};
  