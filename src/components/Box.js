import Char from './Char';

function Box({ dir, faster }) {
  return (
    <div className="Box">
      <Char dir={dir} />
      {faster && <div className="indicator">2x</div>}
    </div>
  );
}

export default Box;
