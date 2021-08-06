import { normalSpeed, fastSpeed } from '../configs/GameSetting';

const fast = (faster) => (faster ? fastSpeed : normalSpeed);

const calculateBottom = (bottom, maxBottom, faster) => {
  if (bottom < maxBottom) {
    return bottom + fast(faster);
  }
  return bottom;
};

const calculateLeft = (left, maxLeft, faster) => {
  if (left < maxLeft) {
    return left + fast(faster);
  }
  return left;
};

const calculateRight = (right, maxRight, faster) => {
  if (right > maxRight) {
    return right - fast(faster);
  }
  return right;
};

const calculateTop = (top, maxTop, faster) => {
  if (top > maxTop) {
    return top - fast(faster);
  }
  return top;
};

export {
  calculateBottom, calculateLeft, calculateRight, calculateTop,
};
