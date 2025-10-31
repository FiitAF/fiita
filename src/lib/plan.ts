import type { Exercise, Goal, Place, Level } from '@/data/exercises';
import { EXERCISES } from '@/data/exercises';

function scaleReps(base: string, level: Level): string {
  // يدعم "NxM", "Xs", "Xmin"
  const m = base.match(/^(\d+)x(\d+)$/);
  const sec = base.endsWith('s');
  const min = base.endsWith('min');

  const factor = level === 'easy' ? 0.8 : level === 'hard' ? 1.2 : 1.0;

  if (m) {
    const sets = parseInt(m[1], 10);
    const reps = Math.max(1, Math.round(parseInt(m[2], 10) * factor));
    return `${sets}x${reps}`;
  }
  if (sec) {
    const v = parseInt(base.replace('s',''), 10);
    return `${Math.max(10, Math.round(v * factor))}s`;
  }
  if (min) {
    const v = parseInt(base.replace('min',''), 10);
    return `${Math.max(5, Math.round(v * factor))}min`;
  }
  return base;
}

export function buildPlan(goal: Goal, place: Place, level: Level): Exercise[] {
  const pool = EXERCISES.filter(e => e.goal === goal && e.place === place);
  return pool.map(e => ({ ...e, baseReps: scaleReps(e.baseReps, level) }));
}


