export interface LinkInterface {
  label: string;
  link: string;
  primary?: boolean;
}

export const linksData: LinkInterface[] = [
  { label: 'Технология', link: '#info' },
  { label: 'Спикеры', link: '#speakers' },
  { label: 'Программа', link: '#program' },
  { label: 'Призы', link: '#prizes', primary: true },
  { label: 'Карьера', link: '#career' },
];
