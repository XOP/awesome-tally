import compareVersions from "compare-versions";
import storage from "store2";

import { KEY as appKey } from "./configure";

const KEY = `${appKey}/misc`;

export default function initVersion() {
  const newVersion = process.env.REACT_APP_VERSION || "0.0.1";

  if (storage.has(KEY)) {
    const store = storage.get(KEY);
    const { version } = store;

    if (compareVersions(newVersion, version) === 1) {
      storage.set(KEY, {
        ...store,
        version: newVersion,
      });
    }
  } else {
    storage.set(KEY, {
      version: newVersion
    });
  }
}
