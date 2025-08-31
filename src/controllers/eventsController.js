const { store } = require('./preferencesController');
const { isWithinDnd } = require('../helpers');

exports.handleEvent = (req, res) => {
  const { eventId, userId, eventType, timestamp } = req.body;

  if (!eventId || !userId || !eventType || !timestamp) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const prefs = store[userId];
  if (!prefs) {
    return res.json({ decision: 'PROCESS_NOTIFICATION' });
  }

  // user disabled notifications for this event
  const eventSettings = prefs.eventSettings[eventType];
  if (eventSettings && eventSettings.enabled === false) {
    return res.json({ decision: 'DO_NOT_NOTIFY', reason: 'USER_UNSUBSCRIBED' });
  }

  // check if time is inside DND window
  const dnd = prefs.dnd;
  if (isWithinDnd(timestamp, dnd.start, dnd.end)) {
    return res.json({ decision: 'DO_NOT_NOTIFY', reason: 'DND_ACTIVE' });
  }

  res.json({ decision: 'PROCESS_NOTIFICATION' });
};
