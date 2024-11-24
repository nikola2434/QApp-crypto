import { Column1 } from './Column1';
import { Column2 } from './Column2';
import { Column3 } from './Column3';

import style from './Blocks.module.scss';

export const Blocks = () => {
  return (
    <div className={style.blocks}>
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
};
