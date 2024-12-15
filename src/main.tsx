import { FC, Suspense, lazy } from 'react';
import './style/index.scss';
import { Preview, InfoSMPC } from './Components';

// Асинхронная загрузка компонентов
const Scenario = lazy(() => import('./Components/Scenario').then((module) => ({ default: module.Scenario })));
const Experts = lazy(() => import('./Components/Experts').then((module) => ({ default: module.Experts })));
const Programs = lazy(() => import('./Components/Programs').then((module) => ({ default: module.Programs })));
const Organizers = lazy(() => import('./Components/Organizers').then((module) => ({ default: module.Organizers })));
const Career = lazy(() => import('./Components/Career').then((module) => ({ default: module.Career })));
const Map = lazy(() => import('./Components/Map').then((module) => ({ default: module.Map })));
const HowItWas = lazy(() => import('./Components/HowItWas').then((module) => ({ default: module.HowItWas })));

export const Main: FC = () => (
  <div>
    <Preview />
    <InfoSMPC />
    <Suspense fallback={<div>Загрузка...</div>}>
      <Scenario />
      <HowItWas />
      <Experts />
      <Programs />
      <Organizers />
      <Career />
      <Map />
    </Suspense>
  </div>
);
