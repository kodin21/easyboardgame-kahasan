function Char({ dir }) {
  return (
    <div
      className="Char"
      style={{ left: `${dir.left}px`, bottom: `${dir.bottom}px` }}
    ></div>
  );
}

export default Char;
