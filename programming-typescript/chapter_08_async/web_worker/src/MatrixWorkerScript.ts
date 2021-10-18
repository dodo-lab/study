import { Protocol, Matrix, MatrixProtocol } from './common';

type Data<P extends Protocol, C extends keyof P = keyof P> = C extends C
  ? { command: C; args: P[C]['in'] }
  : never;

function handle(
  data: Data<MatrixProtocol>
): MatrixProtocol[typeof data.command]['out'] {
  switch (data.command) {
    case 'determinant':
      return determinant(...data.args);
    case 'dot-product':
      return dotProduct(...data.args);
    case 'invert':
      return invert(...data.args);
  }
}

onmessage = ({ data }) => postMessage(handle(data));

function determinant(matrix: Matrix): number {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

function dotProduct(matrixA: Matrix, matrixB: Matrix): Matrix {
  return matrixA;
}

function invert(matrix: Matrix): Matrix {
  return matrix;
}
