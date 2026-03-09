"use client";

import { create } from "zustand";

type StudyStore = {
  streak: number;
  completedHours: number;
  toggleTask: (taskId: string) => void;
  doneTasks: Record<string, boolean>;
};

export const useStudyStore = create<StudyStore>((set) => ({
  streak: 12,
  completedHours: 3.5,
  doneTasks: {},
  toggleTask: (taskId) =>
    set((state) => ({
      doneTasks: {
        ...state.doneTasks,
        [taskId]: !state.doneTasks[taskId]
      }
    }))
}));
