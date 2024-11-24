import { FC } from 'react';
import './style/index.scss';
import { Preview, InfoSMPC, Scenario, Experts, Programs, Career, Map, Organizers } from './Components';

export const Main: FC = () => {
  return (
    <div>
      <Preview />
      <InfoSMPC />
      <Scenario />
      <Experts />
      <Programs />
      <Organizers />
      <Career />
      <Map />
    </div>
  );
};
