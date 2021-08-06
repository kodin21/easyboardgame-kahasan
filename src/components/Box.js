import { useState } from 'react';
import Char from './Char';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Box({ dir, faster }) {
  const [data, setData] = useLocalStorage('selectedChar', 'circle');

  const [style, setStyle] = useState(data);

  const handler = (e) => {
    setData(e.target.value);
    setStyle(data);
  };

  return (
    <>
      <form className="form">
        <div className="btn-group-vertical">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            value="circle"
            checked={style === 'circle'}
            onChange={handler}
          />
          <label className="btn btn-outline-success" htmlFor="btnradio1">
            Circle
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            value="square"
            checked={style === 'square'}
            onChange={handler}
          />
          <label className="btn btn-outline-success" htmlFor="btnradio2">
            Square
          </label>
        </div>
      </form>

      <div className="Box">
        <Char dir={dir} className={style} />
        {faster && <div className="indicator">2x</div>}
      </div>
    </>
  );
}

export default Box;
