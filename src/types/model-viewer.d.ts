declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src: string;
      alt: string;
      exposure?: string;
      'camera-controls'?: string;
      ar?: string;
      'ar-modes'?: string;
    }, HTMLElement>;
  }
}