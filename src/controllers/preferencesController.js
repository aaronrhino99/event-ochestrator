const store = {};

exports.getPreferences = (req, res) => {
  const { userId } = req.params;
  const prefs = store[userId];
  if (!prefs) {
    return res.status(404).json({ message: 'Preferences not found' });
  }
  res.json(prefs);
};

exports.savePreferences = (req, res) => {
  const { userId } = req.params;
  const body = req.body;

  if (!body.dnd || !body.dnd.start || !body.dnd.end) {
    return res.status(400).json({ message: 'Invalid DND format' });
  }
  if (!body.eventSettings) {
    return res.status(400).json({ message: 'Missing eventSettings' });
  }

  store[userId] = body;
  res.json({ message: 'Preferences saved' });
};

exports.store = store;
