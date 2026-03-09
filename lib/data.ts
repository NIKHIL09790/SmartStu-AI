export const featureCards = [
  {
    title: "AI Tutor",
    description: "Ask any question and get personalized explanations in seconds."
  },
  {
    title: "Smart Planner",
    description: "Adaptive schedules tailored to deadlines and your focus patterns."
  },
  {
    title: "Quiz Generator",
    description: "Turn chapters into quick MCQs and test retention immediately."
  }
];

export const todaysPlan = [
  { id: "math", title: "Math Revision", description: "Calculus chapter 5, 45 mins", badge: "High Priority" },
  { id: "bio", title: "Biology Notes", description: "Active recall for cell structure", badge: "Due Today" },
  { id: "hist", title: "History Quiz", description: "Practice 20 MCQs from Unit 3", badge: "Quick Win" }
];

export const plannerItems = [
  { subject: "Physics", progress: 72, slot: "08:00 - 09:00" },
  { subject: "Math", progress: 55, slot: "10:00 - 11:00" },
  { subject: "English", progress: 40, slot: "17:00 - 17:45" }
];

export const chatSeed = [
  { role: "assistant" as const, content: "Hi! Share your topic and I will make a concise study plan." },
  { role: "user" as const, content: "Help me revise photosynthesis for tomorrow's quiz." },
  {
    role: "assistant" as const,
    content: "Start with light-dependent reactions, then Calvin cycle. I can quiz you after a 15-minute review."
  }
];

export const quizQuestions = [
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    answer: "Mitochondria"
  },
  {
    question: "Which method helps long-term retention best?",
    options: ["Rereading", "Highlighting", "Active recall", "Passive listening"],
    answer: "Active recall"
  }
];

export const progressData = [
  { week: "W1", hours: 8, chapters: 3, score: 62 },
  { week: "W2", hours: 11, chapters: 5, score: 70 },
  { week: "W3", hours: 9, chapters: 4, score: 76 },
  { week: "W4", hours: 13, chapters: 6, score: 84 }
];
