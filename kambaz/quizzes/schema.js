import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
  _id: String,
  text: String,
});

const questionSchema = new mongoose.Schema({
  _id: String,
  title: String,
  type: {
    type: String,
    enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_BLANK"],
    default: "MULTIPLE_CHOICE",
  },
  points: { type: Number, default: 10 },
  questionText: String,
  choices: [choiceSchema],
  correctAnswer: String,
});

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, required: true },
    course: { type: String, ref: "CourseModel" },
    description: String,
    quizType: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
    },
    points: { type: Number, default: 0 },
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    maxAttempts: { type: Number, default: 1 },
    showCorrectAnswers: { type: Boolean, default: true },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: String,
    availableDate: String,
    untilDate: String,
    published: { type: Boolean, default: false },
    questions: [questionSchema],
  },
  { collection: "quizzes" }
);

export default quizSchema;
