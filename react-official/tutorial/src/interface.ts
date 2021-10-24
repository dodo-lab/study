import { Repeat } from 'typescript-tuple';

export type SquareValue = 'O' | 'X' | null;
export type BoardState = Repeat<SquareValue, 9>;
