interface IOptions {
  id: number;
  value: string;
}

export interface ISelectProps {
  config: {
    name: string;
    label: string;
    id: string;
    options: IOptions[];
  };
}
