import { planReconciliation } from "./planner.mjs";

export function createWorkspace(input) {
  const actions = planReconciliation(input);
  const queues = groupActions(actions);
  return {
    actions,
    queues,
    openedAt: new Date().toISOString(),
  };
}

export function groupActions(actions) {
  const queues = new Map();
  for (const action of actions) {
    const bucket = queues.get(action.type) ?? [];
    bucket.push(action);
    queues.set(action.type, bucket);
  }
  return queues;
}
