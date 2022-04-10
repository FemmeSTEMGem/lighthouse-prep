const checkAir = function (samples, threshold) {
  let cleanResults = 0;
  let dirtyResults = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "clean") {
      cleanResults += 1;
    } else if (samples[i] === "dirty") {
      dirtyResults += 1;
    }
  };
  if (dirtyResults / cleanResults >= threshold) {
    return "Polluted";
  } else if (dirtyResults / cleanResults < threshold) {
    return "Clean";
  };
}

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))