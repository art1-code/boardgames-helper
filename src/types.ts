export type DieType = 4 | 6 | 8 | 10 | 12 | 20 | 100;

export type Player = {
  id: number;
  name: string;
  color: string;
  life: number;
  controlsOpen?: boolean;
};
