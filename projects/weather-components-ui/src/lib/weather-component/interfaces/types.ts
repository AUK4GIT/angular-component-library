interface WIcon {
  type: string;
  src: string;
}

interface Weather {
  temperature: number;
  city: string;
  humidity: number;
  windSpeed: number;
  wIcon?: WIcon;
}

export type { WIcon, Weather };
