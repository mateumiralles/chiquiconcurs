export class Solution {
  content: string;
  isTrue: boolean;

  constructor(content: string, isTrue: boolean = false) {
    this.content = content;
    this.isTrue = isTrue;
  }
}

export class Question {
  difficulty: Number;
  content: string;

  solutions: Solution[];

  constructor(
    difficulty: number,
    content: string,
    solutions: Solution[] = [
      new Solution("A"),
      new Solution("B"),
      new Solution("C", true),
      new Solution("D"),
    ]
  ) {
    this.difficulty = difficulty;
    this.content = content;
    this.solutions = solutions;
  }
}
