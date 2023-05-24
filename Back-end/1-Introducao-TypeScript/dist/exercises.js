"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
// A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado. A = s²
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
// A fórmula para o cálculo é multiplicar a medida da base pela medida da altura. A = b * h
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
// A fórmula consiste em multiplicar a medida da base pela medida da altura e dividir o resultado
// pela metade. A = (b * h) / 2
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
// A fórmula para o cálculo consiste em somar a medida de todos os lados. P = a + b + c + d + e + f ...
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
