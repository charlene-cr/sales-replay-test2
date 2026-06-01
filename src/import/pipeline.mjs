import { normalizeImportedEvent } from "./normalize.mjs";
import { findDuplicateEvents } from "./duplicates.mjs";

export async function collectImportStream(records, options = {}) {
  const normalized = [];
  for await (const record of records) {
    const event = normalizeImportedEvent(record);
    if (options.filter && !options.filter(event)) continue;
    normalized.push(event);
  }
  const duplicates = findDuplicateEvents(normalized);
  return { events: normalized, duplicates };
}

export async function* mapImportStream(records, mapper) {
  for await (const record of records) {
    yield mapper(normalizeImportedEvent(record));
  }
}
