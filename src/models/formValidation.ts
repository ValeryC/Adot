export type CreateDestinationModalProps = {
  title: string;
  destination: string;
  adress: string;
  link: string;
  population: number;
  hotel: number;
  income: number;
  area: number;
  toggle: boolean;
};

export type EditDestinationModalProps = CreateDestinationModalProps & {
  index: number;
};

export type FormProps = Omit<CreateDestinationModalProps, "title">;
