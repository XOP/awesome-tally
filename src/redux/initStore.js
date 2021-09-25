const presetStore = {
  global: {
    tallyGoal: 100,
    tallyGoalPrev: 100,
    tallyIncrement: 1,
    growEnabled: true,
  },
  trains: {
    items: [],
  },
};

export default function initStore() {
  const newVersion = process.env.REACT_APP_VERSION || 1;

  let savedStore = localStorage.getItem("awesomeTally");

  if (savedStore) {
    savedStore = JSON.parse(savedStore);

    return savedStore.store;
  } else {
    const data = JSON.stringify({
      version: newVersion,
      store: presetStore,
    });

    localStorage.setItem("awesomeTally", data);

    return presetStore;
  }
}
