import { applyEvent, createLedger } from "../../src/index.mjs";

export function buildLedgerFromEvents(events, seed = {}) {
  let ledger = createLedger(seed);
  for (const event of events) {
    ledger = applyEvent(ledger, event);
  }
  return ledger;
}

export function balancedEvent(id, debitAccount, creditAccount, amount) {
  return {
    id,
    entries: [
      { accountId: debitAccount, amount },
      { accountId: creditAccount, amount: -amount },
    ],
  };
}
