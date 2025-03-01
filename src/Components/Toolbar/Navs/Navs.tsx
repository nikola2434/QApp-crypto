import { linksData } from './links.data';
import style from './Navs.module.scss';

export const Navs = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {linksData.map((item) => (
          <li key={item.link}>
            <a href={item.link} className={item.primary ? style.primary : ''}>
              {item.primary ? <span>{item.label}</span> : item.label}
              {item.primary && <div className={style.back}></div>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
