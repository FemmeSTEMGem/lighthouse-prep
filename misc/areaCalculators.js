const calculateRectangleArea = function(length, width) {
  let area = length * width;
    if (length < 0 || width < 0) {
      return undefined;
    } else {
      return area
    }
};

const calculateTriangleArea = function(base, height) {
  let area = base * height / 2;
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return area;
  }
};

const calculateCircleArea = function(radius) {
  let area = Math.PI * (radius * radius)
  if (radius < 0) {
    return undefined;
  } else {
    return area
  }
};

console.log(calculateCircleArea(-1)); // should print undefined


