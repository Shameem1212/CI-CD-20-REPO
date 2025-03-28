import { Schema, model } from 'mongoose';

interface IAnswer extends Document {
  text: string;
  isCorrect: boolean;
}

interface IQuestion extends Document {
  question: string;
  answers: IAnswer[];
}

const QuestionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  answers: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
    }
  ]
});

const Question = model<IQuestion>('Question', QuestionSchema);
export { IQuestion, QuestionSchema };
export default Question;


//main.workflow.yml should be deployed

//2nd yml folder should be tested/developed
