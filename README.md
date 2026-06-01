# Sales Replay Test 2

Sales Replay Test 2 is a small Node.js toolkit for replaying sales events,
checking ledger-style invariants, and producing concise reconciliation reports.
It is intentionally dependency-free so fixture repositories can run quickly in
clean environments.

## Local Development

```bash
npm test
```

After `gh` is authenticated as an account that can create repositories under
`charlene-cr`, this command creates a GitHub repository and opens/merges the PR
fixture set:

```bash
npm run seed:prs -- --visibility private
```

The PR generator creates 15 merged pull requests. The first 10 satisfy the
provided size buckets:

- 2 tiny PRs, each at or below 300 changed lines
- 4 small PRs, each between 100 and 600 changed lines
- 4 medium PRs, each between 600 and 1200 changed lines

The final 5 PRs are larger product/refactor changes that keep the history
looking like a normal application evolved over time.
