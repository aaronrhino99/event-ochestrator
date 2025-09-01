function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function minutesFromTimestamp(iso) {
  const d = new Date(iso);
  return d.getUTCHours() * 60 + d.getUTCMinutes();
}

function isWithinDnd(timestampIso, startHHMM, endHHMM) {
  const t = minutesFromTimestamp(timestampIso);
  const start = toMinutes(startHHMM);
  const end = toMinutes(endHHMM);

  if (start < end) {
    return t >= start && t < end;
  } else {
    // crosses midnight
    return t >= start || t < end;
  }
}

module.exports = { isWithinDnd };
