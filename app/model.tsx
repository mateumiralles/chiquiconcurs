export class Solution {
  content: string;
  isTrue: boolean;

  constructor(content: string, isTrue: boolean = false) {
    this.content = content;
    this.isTrue = isTrue;
  }
}

export class Question {
  content: string;
  solutions: Solution[];

  constructor(
    content: string,
    solutions: Solution[] = [
      new Solution("A"),
      new Solution("B"),
      new Solution("C", true),
      new Solution("D"),
    ]
  ) {
    this.content = content;
    this.solutions = solutions;
  }
}

export class QuestionListByDiff {
  difficulty: Number;
  questions: Question[];

  constructor(difficulty: number, questions: Question[]) {
    this.difficulty = difficulty;
    this.questions = questions;
  }
}
