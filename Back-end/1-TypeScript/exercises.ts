// A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado. A = s²
export function getSquareArea(side: number): number {
  return side ** 2
}

// A fórmula para o cálculo é multiplicar a medida da base pela medida da altura. A = b * h
export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

// A fórmula consiste em multiplicar a medida da base pela medida da altura e dividir o resultado
// pela metade. A = (b * h) / 2

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

// A fórmula para o cálculo consiste em somar a medida de todos os lados. P = a + b + c + d + e + f ...
export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(sideA: number, sideB: number, sideC: number): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}
