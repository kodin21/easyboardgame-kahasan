import Char from './Char';

function Box({ dir }) {
  return (
    <div className="Box">
      <Char dir={dir} />
      {dir.faster && <div className="indicator">2x</div>}
    </div>
  );
}
var Box2 = document.querySelector('#Box');
console.log(Box2);

export default Box;
