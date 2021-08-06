function Char({ dir, className }) {
  return (
    <div
      className={className}
      style={{ left: `${dir.left}px`, bottom: `${dir.bottom}px` }}
    ></div>
  );
}

export default Char;
