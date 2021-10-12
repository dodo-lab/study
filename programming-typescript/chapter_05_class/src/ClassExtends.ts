export default function ClassExtends() {
  console.log('[クラスと継承]');

  type Color = 'Black' | 'White';
  type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
  type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  class Game {
    private pieces = Game.makePieces();

    private static makePieces() {
      return [
        // キング
        new King('White', 'E', 1),
        new King('Black', 'E', 8),
        // クイーン
        new Queen('White', 'D', 1),
        new Queen('Black', 'D', 8),
      ];
    }
  }

  class Position {
    constructor(private file: File, private rank: Rank) {}

    distanceFrom(position: Position) {
      return {
        rank: Math.abs(position.rank - this.rank),
        file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
      };
    }
  }

  abstract class Piece {
    protected position: Position;
    constructor(private readonly color: Color, file: File, rank: Rank) {
      this.position = new Position(file, rank);
    }

    moveTo(position: Position) {
      this.position = position;
    }

    abstract canMoveTo(position: Position): boolean;
  }

  class King extends Piece {
    canMoveTo(position: Position) {
      const distance = this.position.distanceFrom(position);
      return distance.rank < 2 && distance.file < 2;
    }
  }
  class Queen extends Piece {
    canMoveTo(position: Position) {
      const distance = this.position.distanceFrom(position);
      return (
        distance.rank === 0 ||
        distance.file === 0 ||
        distance.rank === distance.file
      );
    }
  }
  class Bishop extends Piece {
    canMoveTo(position: Position) {
      const distance = this.position.distanceFrom(position);
      return distance.rank === distance.file;
    }
  }
  class Knight extends Piece {
    canMoveTo(position: Position) {
      const distance = this.position.distanceFrom(position);
      return (
        (distance.rank === 1 && distance.file === 2) ||
        (distance.rank === 2 && distance.file === 1)
      );
    }
  }
  class Rook extends Piece {
    canMoveTo(position: Position) {
      const distance = this.position.distanceFrom(position);
      return distance.rank === 0 || distance.file === 0;
    }
  }
  class Pawn extends Piece {
    canMoveTo(position: Position) {
      const distance = this.position.distanceFrom(position);
      return distance.rank === 1 && distance.file === 0;
    }
  }
}
