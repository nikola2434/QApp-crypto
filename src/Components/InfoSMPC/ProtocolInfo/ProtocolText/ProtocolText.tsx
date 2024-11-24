import style from './ProtocolText.module.scss';

export const ProtocolText = () => {
  return (
    <div className={style.text}>
      <h2>Протокол конфиденциальных вычислений —</h2>
      <p>
        криптографический протокол, который распределяет вычисления между несколькими сторонами, при этом ни одна из
        сторон не может видеть данные других сторон
      </p>
      <div className={style.container_block}>
        <div className={style.block_1}>Разделение секрета</div>
        <div className={style.block_2}>Обмен случайными значениями</div>
        <div className={style.block_3}>
          <span>Невозможно восстановить изначальные данные</span>
        </div>
      </div>
    </div>
  );
};
