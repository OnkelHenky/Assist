export interface CompetitionsServerResponse {
  count: number,
  competitions: Competition[];
};

export interface Competition {
    id: number,
    area: any[],
    name: string,
    plan: string,
    logo: string
  };
