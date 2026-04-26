declare module 'asciinema-player' {
  interface PlayerOptions {
    autoPlay?: boolean;
    loop?: boolean | number;
    terminalFontFamily?: string;
    fit?: 'width' | 'height' | 'both' | false;
    speed?: number;
    theme?: string;
    rows?: number;
    cols?: number;
  }

  interface PlayerInstance {
    el: HTMLElement;
    dispose(): void;
  }

  function create(
    src: string,
    container: HTMLElement,
    opts?: PlayerOptions
  ): PlayerInstance;

  export { create };
}
