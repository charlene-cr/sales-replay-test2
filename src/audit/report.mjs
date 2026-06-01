import { formatCurrency } from "../format.mjs";

export function renderAuditReport({ title, summary, findings = [] }) {
  const lines = [`# ${title}`, "", "## Summary", ""];
  lines.push(`Accounts: ${summary.accounts.length}`);
  lines.push(`Events: ${summary.eventCount}`);
  lines.push(`Balance: ${formatCurrency(summary.balance)}`);
  lines.push("", "## Findings", "");
  if (findings.length === 0) {
    lines.push("No findings.");
  } else {
    for (const finding of findings) {
      lines.push(`- [${finding.severity}] ${finding.message}`);
    }
  }
  return lines.join("\n");
}
