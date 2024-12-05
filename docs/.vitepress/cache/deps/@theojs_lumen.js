import {
  computed,
  defineComponent,
  h,
  nextTick,
  onMounted,
  ref
} from "./chunk-X54IR6VG.js";
import {
  __publicField
} from "./chunk-JVWSFFO4.js";

// node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/types/index.ts
import { default as default2 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/DocBox.vue";
import { default as default3 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/DocLinks.vue";
import { default as default4 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/DocBoxCube.vue";
import { default as default5 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/DocVideoLink.vue";
import { default as default6 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/Announcement.vue";
import { default as default7 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/DocAsideLogo.vue";
import { default as default8 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/HomeFooter.vue";
import { default as default9 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/HomeUnderline.vue";
import { default as default10 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/DocTwikoo.vue";
import { default as default11 } from "/Users/linhan/Desktop/atom/new-atom-tools/node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/components/ShareButton.vue";

// node_modules/.pnpm/@iconify+vue@4.1.2_vue@3.5.13_typescript@5.7.2_/node_modules/@iconify/vue/dist/iconify.mjs
var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
var validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
var defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
var defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
var defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
var defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
var optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data;
}
var dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage3, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage3.icons[name] = icon;
    } else {
      storage3.missing.add(name);
    }
  });
}
function addIconToStorage(storage3, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage3.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
var simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage3 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage3.icons[iconName] || (storage3.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage3 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage3, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage3 = getStorage(provider, prefix);
  return !!addIconSet(storage3, data);
}
var defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
var defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
var isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
var regex = /\sid="(\S+)"/g;
var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
var storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
var configStorage = /* @__PURE__ */ Object.create(null);
var fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
var fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
var detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
var fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
var prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
var send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
var fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage3 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage3[provider] || (storage3[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach((storage3) => {
    const items = storage3.loaderCallbacks;
    if (items) {
      storage3.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage3) {
  if (!storage3.pendingCallbacksFlag) {
    storage3.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage3.pendingCallbacksFlag = false;
      const items = storage3.loaderCallbacks ? storage3.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage3.provider;
      const prefix = storage3.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage3.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage3.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage3], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
var idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage3) => {
    (storage3.loaderCallbacks || (storage3.loaderCallbacks = [])).push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames3 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames3) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        config.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {
}
var redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send3;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send3 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send3 = api.send;
      }
    }
  }
  if (!redundancy || !send3) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send3, callback)().abort;
}
var browserCacheVersion = "iconify2";
var browserCachePrefix = "iconify";
var browserCacheCountKey = browserCachePrefix + "-count";
var browserCacheVersionKey = browserCachePrefix + "-version";
var browserStorageHour = 36e5;
var browserStorageCacheExpiration = 168;
var browserStorageLimit = 50;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage3, value) {
  return setStoredItem(storage3, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage3) {
  return parseInt(getStoredItem(storage3, browserCacheCountKey)) || 0;
}
var browserStorageConfig = {
  local: true,
  session: true
};
var browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
var browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
var _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage3 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage3, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage3.lastModifiedCached = storage3.lastModifiedCached ? Math.min(storage3.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function updateLastModified(storage3, lastModified) {
  const lastValue = storage3.lastModifiedCached;
  if (
    // Matches or newer
    lastValue && lastValue >= lastModified
  ) {
    return lastValue === lastModified;
  }
  storage3.lastModifiedCached = lastModified;
  if (lastValue) {
    for (const key in browserStorageConfig) {
      iterateBrowserStorage(key, (item) => {
        const iconSet = item.data;
        return item.provider !== storage3.provider || iconSet.prefix !== storage3.prefix || iconSet.lastModified === lastModified;
      });
    }
  }
  return true;
}
function storeInBrowserStorage(storage3, data) {
  if (!browserStorageStatus) {
    initBrowserStorage();
  }
  function store(key) {
    let func;
    if (!browserStorageConfig[key] || !(func = getBrowserStorage(key))) {
      return;
    }
    const set = browserStorageEmptyItems[key];
    let index;
    if (set.size) {
      set.delete(index = Array.from(set).shift());
    } else {
      index = getBrowserStorageItemsCount(func);
      if (index >= browserStorageLimit || !setBrowserStorageItemsCount(func, index + 1)) {
        return;
      }
    }
    const item = {
      cached: Math.floor(Date.now() / browserStorageHour),
      provider: storage3.provider,
      data
    };
    return setStoredItem(
      func,
      browserCachePrefix + index.toString(),
      JSON.stringify(item)
    );
  }
  if (data.lastModified && !updateLastModified(storage3, data.lastModified)) {
    return;
  }
  if (!Object.keys(data.icons).length) {
    return;
  }
  if (data.not_found) {
    data = Object.assign({}, data);
    delete data.not_found;
  }
  if (!store("local")) {
    store("session");
  }
}
function emptyCallback() {
}
function loadedNewIcons(storage3) {
  if (!storage3.iconsLoaderFlag) {
    storage3.iconsLoaderFlag = true;
    setTimeout(() => {
      storage3.iconsLoaderFlag = false;
      updateCallbacks(storage3);
    });
  }
}
function loadNewIcons(storage3, icons) {
  if (!storage3.iconsToLoad) {
    storage3.iconsToLoad = icons;
  } else {
    storage3.iconsToLoad = storage3.iconsToLoad.concat(icons).sort();
  }
  if (!storage3.iconsQueueFlag) {
    storage3.iconsQueueFlag = true;
    setTimeout(() => {
      storage3.iconsQueueFlag = false;
      const { provider, prefix } = storage3;
      const icons2 = storage3.iconsToLoad;
      delete storage3.iconsToLoad;
      let api;
      if (!icons2 || !(api = getAPIModule(provider))) {
        return;
      }
      const params = api.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data) => {
          if (typeof data !== "object") {
            item.icons.forEach((name) => {
              storage3.missing.add(name);
            });
          } else {
            try {
              const parsed = addIconSet(
                storage3,
                data
              );
              if (!parsed.length) {
                return;
              }
              const pending = storage3.pendingIcons;
              if (pending) {
                parsed.forEach((name) => {
                  pending.delete(name);
                });
              }
              storeInBrowserStorage(storage3, data);
            } catch (err) {
              console.error(err);
            }
          }
          loadedNewIcons(storage3);
        });
      });
    });
  }
}
var loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage3 = getStorage(provider, prefix);
    const pendingQueue = storage3.pendingIcons || (storage3.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage3) => {
    const { provider, prefix } = storage3;
    if (newIcons[provider][prefix].length) {
      loadNewIcons(storage3, newIcons[provider][prefix]);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
var separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
var defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
var svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
var commonProps = {
  display: "inline-block"
};
var monotoneProps = {
  backgroundColor: "currentColor"
};
var coloredProps = {
  backgroundColor: "transparent"
};
var propsToAdd = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
};
var propsToAddTo = {
  webkitMask: monotoneProps,
  mask: monotoneProps,
  background: coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + prop] = propsToAdd[prop];
  }
}
var customisationAliases = {};
["horizontal", "vertical"].forEach((prefix) => {
  const attr = prefix.slice(0, 1) + "Flip";
  customisationAliases[prefix + "-flip"] = attr;
  customisationAliases[prefix.slice(0, 1) + "-flip"] = attr;
  customisationAliases[prefix + "Flip"] = attr;
});
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
var render = (icon, props) => {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const componentProps = { ...svgDefaults };
  const mode = props.mode || "svg";
  const style = {};
  const propsStyle = props.style;
  const customStyle2 = typeof propsStyle === "object" && !(propsStyle instanceof Array) ? propsStyle : {};
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style.color = value;
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default: {
        const alias = customisationAliases[key];
        if (alias) {
          if (value === true || value === "true" || value === 1) {
            customisations[alias] = true;
          }
        } else if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
      }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style.verticalAlign = "-0.125em";
  }
  if (mode === "svg") {
    componentProps.style = {
      ...style,
      ...customStyle2
    };
    Object.assign(componentProps, renderAttribs);
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    componentProps["innerHTML"] = replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifyVue");
    return h("svg", componentProps);
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  componentProps.style = {
    ...style,
    "--svg": svgToURL(html),
    "width": fixSize(renderAttribs.width),
    "height": fixSize(renderAttribs.height),
    ...commonProps,
    ...useMask ? monotoneProps : coloredProps,
    ...customStyle2
  };
  return h("span", componentProps);
};
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window3 = window;
  if (_window3.IconifyPreload !== void 0) {
    const preload = _window3.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window3.IconifyProviders !== void 0) {
    const providers = _window3.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
var emptyIcon = {
  ...defaultIconProps,
  body: ""
};
var Icon = defineComponent({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: false,
  // Set initial data
  data() {
    return {
      // Current icon name
      _name: "",
      // Loading
      _loadingIcon: null,
      // Mounted status
      iconMounted: false,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this.iconMounted = true;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      if (this._loadingIcon) {
        this._loadingIcon.abort();
        this._loadingIcon = null;
      }
    },
    // Get data for icon to render or null
    getIcon(icon, onload) {
      if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
        this._name = "";
        this.abortLoading();
        return {
          data: icon
        };
      }
      let iconName;
      if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
        this.abortLoading();
        return null;
      }
      const data = getIconData(iconName);
      if (!data) {
        if (!this._loadingIcon || this._loadingIcon.name !== icon) {
          this.abortLoading();
          this._name = "";
          if (data !== null) {
            this._loadingIcon = {
              name: icon,
              abort: loadIcons([iconName], () => {
                this.counter++;
              })
            };
          }
        }
        return null;
      }
      this.abortLoading();
      if (this._name !== icon) {
        this._name = icon;
        if (onload) {
          onload(icon);
        }
      }
      const classes = ["iconify"];
      if (iconName.prefix !== "") {
        classes.push("iconify--" + iconName.prefix);
      }
      if (iconName.provider !== "") {
        classes.push("iconify--" + iconName.provider);
      }
      return { data, classes };
    }
  },
  // Render icon
  render() {
    this.counter;
    const props = this.$attrs;
    const icon = this.iconMounted || props.ssr ? this.getIcon(props.icon, props.onLoad) : null;
    if (!icon) {
      return render(emptyIcon, props);
    }
    let newProps = props;
    if (icon.classes) {
      newProps = {
        ...props,
        class: (typeof props["class"] === "string" ? props["class"] + " " : "") + icon.classes.join(" ")
      };
    }
    return render({
      ...defaultIconProps,
      ...icon.data
    }, newProps);
  }
});

// node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/analytics/googleAnalytics.ts
var googleAnalytics_default = ({ id }) => {
  if (false) mountGoogleAnalytics(id);
};

// node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/analytics/umamiAnalytics.ts
function mountUmami(options) {
  if (true) {
    return;
  }
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(...options);
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length) return;
  for (const property of properties) {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.setAttribute("data-website-id", property.id);
    script.src = property.src;
    document.head.appendChild(script);
  }
}
var umamiAnalytics_default = (options) => {
  if (typeof window !== "undefined") {
    mountUmami(options);
  }
};

// node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/analytics/baiduAnalytics.ts
import { inBrowser } from "vitepress";
function baiduAnalytics(options) {
  var _a;
  const { baiduId } = options;
  if (!inBrowser) return;
  if (!baiduId) {
    console.warn("警告：百度统计 ID 缺失，统计数据将无法生效");
    return;
  }
  if (!document.querySelector(`#analytics-plugin-${baiduId}`)) {
    window._hmt = window._hmt || [];
    const script = document.createElement("script");
    script.id = `analytics-plugin-${baiduId}`;
    script.async = true;
    script.src = `https://hm.baidu.com/hm.js?${baiduId}`;
    (_a = document.querySelector("head")) == null ? void 0 : _a.appendChild(script);
  }
}
function trackPageview(baiduId, pageUrl) {
  if (!inBrowser) return;
  if (!pageUrl || typeof pageUrl !== "string") pageUrl = "/";
  if (pageUrl.startsWith("http")) {
    const urlFragment = pageUrl.split("/");
    const origin = `${urlFragment[0]}//${urlFragment[2]}`;
    pageUrl = pageUrl.replace(origin, "");
  }
  if (window._hmt) {
    window._hmt.push(["_setAccount", baiduId]);
    window._hmt.push(["_trackPageview", pageUrl]);
  }
}

// node_modules/.pnpm/@theojs+lumen@5.0.0/node_modules/@theojs/lumen/types/utils.ts
import { useData } from "vitepress";
var usePrelink = () => {
  const { frontmatter } = useData();
  return computed(() => {
    var _a;
    return (_a = frontmatter.value.hero) == null ? void 0 : _a.prelink;
  }).value;
};
var isExternalLink = (link) => /^https?:\/\//.test(link);
var initTwikoo = async (envId) => {
  try {
    const twikoo = await import("./twikoo.all.min-B22F3GIK.js");
    console.log("Twikoo 加载成功");
    if (typeof window !== "undefined") {
      await nextTick();
      const twikooElement = document.querySelector("#twikoo");
      if (twikooElement) {
        twikoo.init({
          envId,
          el: "#twikoo"
        });
      } else {
        console.error("未找到 Twikoo 元素。");
      }
    }
  } catch (error) {
    console.error("初始化 Twikoo 失败：", error);
  }
};
var useVideoToggle = () => {
  const isVideoOpen = ref(false);
  const toggleVideo = () => {
    isVideoOpen.value = !isVideoOpen.value;
  };
  return [isVideoOpen, toggleVideo];
};
var moveDomElements = () => {
  onMounted(() => {
    const targetElement = document.querySelector(".VPHero .text");
    const sourceElement = document.querySelector("#hero-text");
    if (targetElement && sourceElement) {
      targetElement.innerHTML = "";
      targetElement.appendChild(sourceElement);
    }
  });
};
var useCopyLink = () => {
  const copied = ref(false);
  const copyLink = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2e3);
    } catch (error) {
      console.error("复制链接失败：", error);
      alert("复制链接失败，请手动复制。");
    }
  };
  return { copied, copyLink };
};
var video = {
  bilibili: {
    src: (id) => `https://player.bilibili.com/player.html?aid=${id}`,
    title: "Bilibili video player"
  },
  tencent: {
    src: (id) => `https://v.qq.com/txp/iframe/player.html?vid=${id}`,
    title: "Tencent Video player"
  },
  youku: {
    src: (id) => `https://player.youku.com/embed/${id}`,
    title: "Youku video player"
  },
  youtube: {
    src: (id) => `https://www.youtube-nocookie.com/embed/${id}`,
    title: "YouTube video player"
  },
  vimeo: {
    src: (id) => `https://player.vimeo.com/video/${id}`,
    title: "Vimeo video player"
  },
  xigua: {
    src: (id) => `https://www.ixigua.com/iframe/${id}`,
    title: "XiGua video player"
  }
};
var getVideoConfig = (props) => {
  if (props.to && props.id) {
    return video[props.to];
  }
  if (props.id) {
    return video.youtube;
  }
  return {
    src: props.src || "",
    title: "Custom video player"
  };
};

// node_modules/.pnpm/iconify-icon@2.1.0/node_modules/iconify-icon/dist/iconify-icon.mjs
var defaultIconDimensions2 = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
var defaultIconTransformations2 = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
var defaultIconProps2 = Object.freeze({
  ...defaultIconDimensions2,
  ...defaultIconTransformations2
});
var defaultExtendedIconProps2 = Object.freeze({
  ...defaultIconProps2,
  body: "",
  hidden: false
});
var defaultIconSizeCustomisations2 = Object.freeze({
  width: null,
  height: null
});
var defaultIconCustomisations2 = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations2,
  // Transformations
  ...defaultIconTransformations2
});
function rotateFromString2(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
var separator2 = /[\s,]+/;
function flipFromString2(custom, flip) {
  flip.split(separator2).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
var defaultCustomisations = {
  ...defaultIconCustomisations2,
  preserveAspectRatio: ""
};
function getCustomisations(node) {
  const customisations = {
    ...defaultCustomisations
  };
  const attr = (key, def) => node.getAttribute(key) || def;
  customisations.width = attr("width", null);
  customisations.height = attr("height", null);
  customisations.rotate = rotateFromString2(attr("rotate", ""));
  flipFromString2(customisations, attr("flip", ""));
  customisations.preserveAspectRatio = attr("preserveAspectRatio", attr("preserveaspectratio", ""));
  return customisations;
}
function haveCustomisationsChanged(value1, value2) {
  for (const key in defaultCustomisations) {
    if (value1[key] !== value2[key]) {
      return true;
    }
  }
  return false;
}
var matchIconName2 = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var stringToIcon2 = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName2(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName2(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName2(result, allowSimpleName) ? null : result;
  }
  return null;
};
var validateIconName2 = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName2)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName2)) && icon.name.match(matchIconName2));
};
function mergeIconTransformations2(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData2(parent, child) {
  const result = mergeIconTransformations2(parent, child);
  for (const key in defaultExtendedIconProps2) {
    if (key in defaultIconTransformations2) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations2[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree2(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}
function internalGetIconData2(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData2(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData2(data, currentProps);
}
function parseIconSet2(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree2(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData2(data, name, item));
      names.push(name);
    }
  }
  return names;
}
var optionalPropertyDefaults2 = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions2
};
function checkOptionalProps2(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet2(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps2(obj, optionalPropertyDefaults2)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName2) || typeof icon.body !== "string" || !checkOptionalProps2(
      icon,
      defaultExtendedIconProps2
    )) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName2) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps2(
      icon,
      defaultExtendedIconProps2
    )) {
      return null;
    }
  }
  return data;
}
var dataStorage2 = /* @__PURE__ */ Object.create(null);
function newStorage2(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage2(provider, prefix) {
  const providerStorage = dataStorage2[provider] || (dataStorage2[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage2(provider, prefix));
}
function addIconSet2(storage3, data) {
  if (!quicklyValidateIconSet2(data)) {
    return [];
  }
  return parseIconSet2(data, (name, icon) => {
    if (icon) {
      storage3.icons[name] = icon;
    } else {
      storage3.missing.add(name);
    }
  });
}
function addIconToStorage2(storage3, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage3.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
function listIcons$1(provider, prefix) {
  let allIcons = [];
  const providers = typeof provider === "string" ? [provider] : Object.keys(dataStorage2);
  providers.forEach((provider2) => {
    const prefixes = typeof provider2 === "string" && typeof prefix === "string" ? [prefix] : Object.keys(dataStorage2[provider2] || {});
    prefixes.forEach((prefix2) => {
      const storage3 = getStorage2(provider2, prefix2);
      allIcons = allIcons.concat(
        Object.keys(storage3.icons).map(
          (name) => (provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name
        )
      );
    });
  });
  return allIcons;
}
var simpleNames2 = false;
function allowSimpleNames2(allow) {
  if (typeof allow === "boolean") {
    simpleNames2 = allow;
  }
  return simpleNames2;
}
function getIconData2(name) {
  const icon = typeof name === "string" ? stringToIcon2(name, true, simpleNames2) : name;
  if (icon) {
    const storage3 = getStorage2(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage3.icons[iconName] || (storage3.missing.has(iconName) ? null : void 0);
  }
}
function addIcon$1(name, data) {
  const icon = stringToIcon2(name, true, simpleNames2);
  if (!icon) {
    return false;
  }
  const storage3 = getStorage2(icon.provider, icon.prefix);
  return addIconToStorage2(storage3, icon.name, data);
}
function addCollection$1(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames2 && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet2(data)) {
      data.prefix = "";
      parseIconSet2(data, (name, icon) => {
        if (icon && addIcon$1(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName2({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage3 = getStorage2(provider, prefix);
  return !!addIconSet2(storage3, data);
}
function iconLoaded$1(name) {
  return !!getIconData2(name);
}
function getIcon$1(name) {
  const result = getIconData2(name);
  return result ? {
    ...defaultIconProps2,
    ...result
  } : null;
}
function sortIcons2(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage3 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage3[provider] || (storage3[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage2(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback2(storages, id) {
  storages.forEach((storage3) => {
    const items = storage3.loaderCallbacks;
    if (items) {
      storage3.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks2(storage3) {
  if (!storage3.pendingCallbacksFlag) {
    storage3.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage3.pendingCallbacksFlag = false;
      const items = storage3.loaderCallbacks ? storage3.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage3.provider;
      const prefix = storage3.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage3.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage3.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback2([storage3], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
var idCounter2 = 0;
function storeCallback2(callback, icons, pendingSources) {
  const id = idCounter2++;
  const abort = removeCallback2.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage3) => {
    (storage3.loaderCallbacks || (storage3.loaderCallbacks = [])).push(item);
  });
  return abort;
}
var storage2 = /* @__PURE__ */ Object.create(null);
function setAPIModule2(provider, item) {
  storage2[provider] = item;
}
function getAPIModule2(provider) {
  return storage2[provider] || storage2[""];
}
function listToIcons2(list, validate = true, simpleNames3 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon2(item, validate, simpleNames3) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig2 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery2(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        config.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy2(cfg) {
  const config = {
    ...defaultConfig2,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery2(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}
function createAPIConfig2(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
var configStorage2 = /* @__PURE__ */ Object.create(null);
var fallBackAPISources2 = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
var fallBackAPI2 = [];
while (fallBackAPISources2.length > 0) {
  if (fallBackAPISources2.length === 1) {
    fallBackAPI2.push(fallBackAPISources2.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI2.push(fallBackAPISources2.shift());
    } else {
      fallBackAPI2.push(fallBackAPISources2.pop());
    }
  }
}
configStorage2[""] = createAPIConfig2({
  resources: ["https://api.iconify.design"].concat(fallBackAPI2)
});
function addAPIProvider$1(provider, customConfig) {
  const config = createAPIConfig2(customConfig);
  if (config === null) {
    return false;
  }
  configStorage2[provider] = config;
  return true;
}
function getAPIConfig2(provider) {
  return configStorage2[provider];
}
function listAPIProviders() {
  return Object.keys(configStorage2);
}
function emptyCallback$12() {
}
var redundancyCache2 = /* @__PURE__ */ Object.create(null);
function getRedundancyCache2(provider) {
  if (!redundancyCache2[provider]) {
    const config = getAPIConfig2(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy2(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache2[provider] = cachedReundancy;
  }
  return redundancyCache2[provider];
}
function sendAPIQuery2(target, query, callback) {
  let redundancy;
  let send3;
  if (typeof target === "string") {
    const api = getAPIModule2(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$12;
    }
    send3 = api.send;
    const cached = getRedundancyCache2(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig2(target);
    if (config) {
      redundancy = initRedundancy2(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule2(moduleKey);
      if (api) {
        send3 = api.send;
      }
    }
  }
  if (!redundancy || !send3) {
    callback(void 0, 424);
    return emptyCallback$12;
  }
  return redundancy.query(query, send3, callback)().abort;
}
var browserCacheVersion2 = "iconify2";
var browserCachePrefix2 = "iconify";
var browserCacheCountKey2 = browserCachePrefix2 + "-count";
var browserCacheVersionKey2 = browserCachePrefix2 + "-version";
var browserStorageHour2 = 36e5;
var browserStorageCacheExpiration2 = 168;
var browserStorageLimit2 = 50;
function getStoredItem2(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem2(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem2(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount2(storage3, value) {
  return setStoredItem2(storage3, browserCacheCountKey2, value.toString());
}
function getBrowserStorageItemsCount2(storage3) {
  return parseInt(getStoredItem2(storage3, browserCacheCountKey2)) || 0;
}
var browserStorageConfig2 = {
  local: true,
  session: true
};
var browserStorageEmptyItems2 = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
var browserStorageStatus2 = false;
function setBrowserStorageStatus2(status) {
  browserStorageStatus2 = status;
}
var _window2 = typeof window === "undefined" ? {} : window;
function getBrowserStorage2(key) {
  const attr = key + "Storage";
  try {
    if (_window2 && _window2[attr] && typeof _window2[attr].length === "number") {
      return _window2[attr];
    }
  } catch (err) {
  }
  browserStorageConfig2[key] = false;
}
function iterateBrowserStorage2(key, callback) {
  const func = getBrowserStorage2(key);
  if (!func) {
    return;
  }
  const version = getStoredItem2(func, browserCacheVersionKey2);
  if (version !== browserCacheVersion2) {
    if (version) {
      const total2 = getBrowserStorageItemsCount2(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem2(func, browserCachePrefix2 + i.toString());
      }
    }
    setStoredItem2(func, browserCacheVersionKey2, browserCacheVersion2);
    setBrowserStorageItemsCount2(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour2) - browserStorageCacheExpiration2;
  const parseItem = (index) => {
    const name = browserCachePrefix2 + index.toString();
    const item = getStoredItem2(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem2(func, name);
  };
  let total = getBrowserStorageItemsCount2(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount2(func, total);
      } else {
        browserStorageEmptyItems2[key].add(i);
      }
    }
  }
}
function initBrowserStorage2() {
  if (browserStorageStatus2) {
    return;
  }
  setBrowserStorageStatus2(true);
  for (const key in browserStorageConfig2) {
    iterateBrowserStorage2(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage3 = getStorage2(
        provider,
        prefix
      );
      if (!addIconSet2(storage3, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage3.lastModifiedCached = storage3.lastModifiedCached ? Math.min(storage3.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function updateLastModified2(storage3, lastModified) {
  const lastValue = storage3.lastModifiedCached;
  if (
    // Matches or newer
    lastValue && lastValue >= lastModified
  ) {
    return lastValue === lastModified;
  }
  storage3.lastModifiedCached = lastModified;
  if (lastValue) {
    for (const key in browserStorageConfig2) {
      iterateBrowserStorage2(key, (item) => {
        const iconSet = item.data;
        return item.provider !== storage3.provider || iconSet.prefix !== storage3.prefix || iconSet.lastModified === lastModified;
      });
    }
  }
  return true;
}
function storeInBrowserStorage2(storage3, data) {
  if (!browserStorageStatus2) {
    initBrowserStorage2();
  }
  function store(key) {
    let func;
    if (!browserStorageConfig2[key] || !(func = getBrowserStorage2(key))) {
      return;
    }
    const set = browserStorageEmptyItems2[key];
    let index;
    if (set.size) {
      set.delete(index = Array.from(set).shift());
    } else {
      index = getBrowserStorageItemsCount2(func);
      if (index >= browserStorageLimit2 || !setBrowserStorageItemsCount2(func, index + 1)) {
        return;
      }
    }
    const item = {
      cached: Math.floor(Date.now() / browserStorageHour2),
      provider: storage3.provider,
      data
    };
    return setStoredItem2(
      func,
      browserCachePrefix2 + index.toString(),
      JSON.stringify(item)
    );
  }
  if (data.lastModified && !updateLastModified2(storage3, data.lastModified)) {
    return;
  }
  if (!Object.keys(data.icons).length) {
    return;
  }
  if (data.not_found) {
    data = Object.assign({}, data);
    delete data.not_found;
  }
  if (!store("local")) {
    store("session");
  }
}
function emptyCallback2() {
}
function loadedNewIcons2(storage3) {
  if (!storage3.iconsLoaderFlag) {
    storage3.iconsLoaderFlag = true;
    setTimeout(() => {
      storage3.iconsLoaderFlag = false;
      updateCallbacks2(storage3);
    });
  }
}
function loadNewIcons2(storage3, icons) {
  if (!storage3.iconsToLoad) {
    storage3.iconsToLoad = icons;
  } else {
    storage3.iconsToLoad = storage3.iconsToLoad.concat(icons).sort();
  }
  if (!storage3.iconsQueueFlag) {
    storage3.iconsQueueFlag = true;
    setTimeout(() => {
      storage3.iconsQueueFlag = false;
      const { provider, prefix } = storage3;
      const icons2 = storage3.iconsToLoad;
      delete storage3.iconsToLoad;
      let api;
      if (!icons2 || !(api = getAPIModule2(provider))) {
        return;
      }
      const params = api.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery2(provider, item, (data) => {
          if (typeof data !== "object") {
            item.icons.forEach((name) => {
              storage3.missing.add(name);
            });
          } else {
            try {
              const parsed = addIconSet2(
                storage3,
                data
              );
              if (!parsed.length) {
                return;
              }
              const pending = storage3.pendingIcons;
              if (pending) {
                parsed.forEach((name) => {
                  pending.delete(name);
                });
              }
              storeInBrowserStorage2(storage3, data);
            } catch (err) {
              console.error(err);
            }
          }
          loadedNewIcons2(storage3);
        });
      });
    });
  }
}
var loadIcons$1 = (icons, callback) => {
  const cleanedIcons = listToIcons2(icons, true, allowSimpleNames2());
  const sortedIcons = sortIcons2(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback2
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage2(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage3 = getStorage2(provider, prefix);
    const pendingQueue = storage3.pendingIcons || (storage3.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage3) => {
    const { provider, prefix } = storage3;
    if (newIcons[provider][prefix].length) {
      loadNewIcons2(storage3, newIcons[provider][prefix]);
    }
  });
  return callback ? storeCallback2(callback, sortedIcons, sources) : emptyCallback2;
};
var loadIcon$1 = (icon) => {
  return new Promise((fulfill, reject) => {
    const iconObj = typeof icon === "string" ? stringToIcon2(icon, true) : icon;
    if (!iconObj) {
      reject(icon);
      return;
    }
    loadIcons$1([iconObj || icon], (loaded) => {
      if (loaded.length && iconObj) {
        const data = getIconData2(iconObj);
        if (data) {
          fulfill({
            ...defaultIconProps2,
            ...data
          });
          return;
        }
      }
      reject(icon);
    });
  });
};
function testIconObject(value) {
  try {
    const obj = typeof value === "string" ? JSON.parse(value) : value;
    if (typeof obj.body === "string") {
      return {
        ...obj
      };
    }
  } catch (err) {
  }
}
function parseIconValue(value, onload) {
  const name = typeof value === "string" ? stringToIcon2(value, true, true) : null;
  if (!name) {
    const data2 = testIconObject(value);
    return {
      value,
      data: data2
    };
  }
  const data = getIconData2(name);
  if (data !== void 0 || !name.prefix) {
    return {
      value,
      name,
      data
      // could be 'null' -> icon is missing
    };
  }
  const loading = loadIcons$1([name], () => onload(value, name, getIconData2(name)));
  return {
    value,
    name,
    loading
  };
}
var isBuggedSafari = false;
try {
  isBuggedSafari = navigator.vendor.indexOf("Apple") === 0;
} catch (err) {
}
function getRenderMode(body, mode) {
  switch (mode) {
    case "svg":
    case "bg":
    case "mask":
      return mode;
  }
  if (mode !== "style" && (isBuggedSafari || body.indexOf("<a") === -1)) {
    return "svg";
  }
  return body.indexOf("currentColor") === -1 ? "bg" : "mask";
}
var unitsSplit2 = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest2 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize$1(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit2);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest2.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs2(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent2(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent2(body, start, end) {
  const split = splitSVGDefs2(body);
  return mergeDefsAndContent2(split.defs, start + split.content + end);
}
var isUnsetKeyword2 = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG2(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps2,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations2,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent2(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize$1(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize$1(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword2(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
function iconToHTML$1(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL2(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData2(svg) {
  return "data:image/svg+xml," + encodeSVGforURL2(svg);
}
function svgToURL$1(svg) {
  return 'url("' + svgToData2(svg) + '")';
}
var detectFetch2 = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
var fetchModule2 = detectFetch2();
function setFetch(fetch2) {
  fetchModule2 = fetch2;
}
function getFetch() {
  return fetchModule2;
}
function calculateMaxLength2(provider, prefix) {
  const config = getAPIConfig2(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort2(status) {
  return status === 404;
}
var prepare2 = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength2(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath2(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig2(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
var send2 = (host, params, callback) => {
  if (!fetchModule2) {
    callback("abort", 424);
    return;
  }
  let path = getPath2(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule2(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort2(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
var fetchAPIModule2 = {
  prepare: prepare2,
  send: send2
};
function toggleBrowserCache(storage3, value) {
  switch (storage3) {
    case "local":
    case "session":
      browserStorageConfig2[storage3] = value;
      break;
    case "all":
      for (const key in browserStorageConfig2) {
        browserStorageConfig2[key] = value;
      }
      break;
  }
}
var nodeAttr = "data-style";
var customStyle = "";
function appendCustomStyle(style) {
  customStyle = style;
}
function updateStyle(parent, inline) {
  let styleNode = Array.from(parent.childNodes).find((node) => node.hasAttribute && node.hasAttribute(nodeAttr));
  if (!styleNode) {
    styleNode = document.createElement("style");
    styleNode.setAttribute(nodeAttr, nodeAttr);
    parent.appendChild(styleNode);
  }
  styleNode.textContent = ":host{display:inline-block;vertical-align:" + (inline ? "-0.125em" : "0") + "}span,svg{display:block}" + customStyle;
}
function exportFunctions() {
  setAPIModule2("", fetchAPIModule2);
  allowSimpleNames2(true);
  let _window3;
  try {
    _window3 = window;
  } catch (err) {
  }
  if (_window3) {
    initBrowserStorage2();
    if (_window3.IconifyPreload !== void 0) {
      const preload = _window3.IconifyPreload;
      const err = "Invalid IconifyPreload syntax.";
      if (typeof preload === "object" && preload !== null) {
        (preload instanceof Array ? preload : [preload]).forEach((item) => {
          try {
            if (
              // Check if item is an object and not null/array
              typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
              typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
              !addCollection$1(item)
            ) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        });
      }
    }
    if (_window3.IconifyProviders !== void 0) {
      const providers = _window3.IconifyProviders;
      if (typeof providers === "object" && providers !== null) {
        for (const key in providers) {
          const err = "IconifyProviders[" + key + "] is invalid.";
          try {
            const value = providers[key];
            if (typeof value !== "object" || !value || value.resources === void 0) {
              continue;
            }
            if (!addAPIProvider$1(key, value)) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        }
      }
    }
  }
  const _api2 = {
    getAPIConfig: getAPIConfig2,
    setAPIModule: setAPIModule2,
    sendAPIQuery: sendAPIQuery2,
    setFetch,
    getFetch,
    listAPIProviders
  };
  return {
    enableCache: (storage3) => toggleBrowserCache(storage3, true),
    disableCache: (storage3) => toggleBrowserCache(storage3, false),
    iconLoaded: iconLoaded$1,
    iconExists: iconLoaded$1,
    // deprecated, kept to avoid breaking changes
    getIcon: getIcon$1,
    listIcons: listIcons$1,
    addIcon: addIcon$1,
    addCollection: addCollection$1,
    calculateSize: calculateSize$1,
    buildIcon: iconToSVG2,
    iconToHTML: iconToHTML$1,
    svgToURL: svgToURL$1,
    loadIcons: loadIcons$1,
    loadIcon: loadIcon$1,
    addAPIProvider: addAPIProvider$1,
    appendCustomStyle,
    _api: _api2
  };
}
var monotoneProps2 = {
  "background-color": "currentColor"
};
var coloredProps2 = {
  "background-color": "transparent"
};
var propsToAdd2 = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
var propsToAddTo2 = {
  "-webkit-mask": monotoneProps2,
  "mask": monotoneProps2,
  "background": coloredProps2
};
for (const prefix in propsToAddTo2) {
  const list = propsToAddTo2[prefix];
  for (const prop in propsToAdd2) {
    list[prefix + "-" + prop] = propsToAdd2[prop];
  }
}
function fixSize2(value) {
  return value ? value + (value.match(/^[-0-9.]+$/) ? "px" : "") : "inherit";
}
function renderSPAN(data, icon, useMask) {
  const node = document.createElement("span");
  let body = data.body;
  if (body.indexOf("<a") !== -1) {
    body += "<!-- " + Date.now() + " -->";
  }
  const renderAttribs = data.attributes;
  const html = iconToHTML$1(body, {
    ...renderAttribs,
    width: icon.width + "",
    height: icon.height + ""
  });
  const url = svgToURL$1(html);
  const svgStyle = node.style;
  const styles = {
    "--svg": url,
    "width": fixSize2(renderAttribs.width),
    "height": fixSize2(renderAttribs.height),
    ...useMask ? monotoneProps2 : coloredProps2
  };
  for (const prop in styles) {
    svgStyle.setProperty(prop, styles[prop]);
  }
  return node;
}
var policy;
function createPolicy() {
  try {
    policy = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (s) => s
    });
  } catch (err) {
    policy = null;
  }
}
function cleanUpInnerHTML(html) {
  if (policy === void 0) {
    createPolicy();
  }
  return policy ? policy.createHTML(html) : html;
}
function renderSVG(data) {
  const node = document.createElement("span");
  const attr = data.attributes;
  let style = "";
  if (!attr.width) {
    style = "width: inherit;";
  }
  if (!attr.height) {
    style += "height: inherit;";
  }
  if (style) {
    attr.style = style;
  }
  const html = iconToHTML$1(data.body, attr);
  node.innerHTML = cleanUpInnerHTML(html);
  return node.firstChild;
}
function findIconElement(parent) {
  return Array.from(parent.childNodes).find((node) => {
    const tag = node.tagName && node.tagName.toUpperCase();
    return tag === "SPAN" || tag === "SVG";
  });
}
function renderIcon(parent, state) {
  const iconData = state.icon.data;
  const customisations = state.customisations;
  const renderData = iconToSVG2(iconData, customisations);
  if (customisations.preserveAspectRatio) {
    renderData.attributes["preserveAspectRatio"] = customisations.preserveAspectRatio;
  }
  const mode = state.renderedMode;
  let node;
  switch (mode) {
    case "svg":
      node = renderSVG(renderData);
      break;
    default:
      node = renderSPAN(renderData, {
        ...defaultIconProps2,
        ...iconData
      }, mode === "mask");
  }
  const oldNode = findIconElement(parent);
  if (oldNode) {
    if (node.tagName === "SPAN" && oldNode.tagName === node.tagName) {
      oldNode.setAttribute("style", node.getAttribute("style"));
    } else {
      parent.replaceChild(node, oldNode);
    }
  } else {
    parent.appendChild(node);
  }
}
function setPendingState(icon, inline, lastState) {
  const lastRender = lastState && (lastState.rendered ? lastState : lastState.lastRender);
  return {
    rendered: false,
    inline,
    icon,
    lastRender
  };
}
function defineIconifyIcon(name = "iconify-icon") {
  let customElements;
  let ParentClass;
  try {
    customElements = window.customElements;
    ParentClass = window.HTMLElement;
  } catch (err) {
    return;
  }
  if (!customElements || !ParentClass) {
    return;
  }
  const ConflictingClass = customElements.get(name);
  if (ConflictingClass) {
    return ConflictingClass;
  }
  const attributes = [
    // Icon
    "icon",
    // Mode
    "mode",
    "inline",
    "noobserver",
    // Customisations
    "width",
    "height",
    "rotate",
    "flip"
  ];
  const IconifyIcon = class extends ParentClass {
    /**
     * Constructor
     */
    constructor() {
      super();
      // Root
      __publicField(this, "_shadowRoot");
      // Initialised
      __publicField(this, "_initialised", false);
      // Icon state
      __publicField(this, "_state");
      // Attributes check queued
      __publicField(this, "_checkQueued", false);
      // Connected
      __publicField(this, "_connected", false);
      // Observer
      __publicField(this, "_observer", null);
      __publicField(this, "_visible", true);
      const root = this._shadowRoot = this.attachShadow({
        mode: "open"
      });
      const inline = this.hasAttribute("inline");
      updateStyle(root, inline);
      this._state = setPendingState({
        value: ""
      }, inline);
      this._queueCheck();
    }
    /**
     * Connected to DOM
     */
    connectedCallback() {
      this._connected = true;
      this.startObserver();
    }
    /**
     * Disconnected from DOM
     */
    disconnectedCallback() {
      this._connected = false;
      this.stopObserver();
    }
    /**
     * Observed attributes
     */
    static get observedAttributes() {
      return attributes.slice(0);
    }
    /**
     * Observed properties that are different from attributes
     *
     * Experimental! Need to test with various frameworks that support it
     */
    /*
    static get properties() {
        return {
            inline: {
                type: Boolean,
                reflect: true,
            },
            // Not listing other attributes because they are strings or combination
            // of string and another type. Cannot have multiple types
        };
    }
    */
    /**
     * Attribute has changed
     */
    attributeChangedCallback(name2) {
      switch (name2) {
        case "inline": {
          const newInline = this.hasAttribute("inline");
          const state = this._state;
          if (newInline !== state.inline) {
            state.inline = newInline;
            updateStyle(this._shadowRoot, newInline);
          }
          break;
        }
        case "noobserver": {
          const value = this.hasAttribute("noobserver");
          if (value) {
            this.startObserver();
          } else {
            this.stopObserver();
          }
          break;
        }
        default:
          this._queueCheck();
      }
    }
    /**
     * Get/set icon
     */
    get icon() {
      const value = this.getAttribute("icon");
      if (value && value.slice(0, 1) === "{") {
        try {
          return JSON.parse(value);
        } catch (err) {
        }
      }
      return value;
    }
    set icon(value) {
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      this.setAttribute("icon", value);
    }
    /**
     * Get/set inline
     */
    get inline() {
      return this.hasAttribute("inline");
    }
    set inline(value) {
      if (value) {
        this.setAttribute("inline", "true");
      } else {
        this.removeAttribute("inline");
      }
    }
    /**
     * Get/set observer
     */
    get observer() {
      return this.hasAttribute("observer");
    }
    set observer(value) {
      if (value) {
        this.setAttribute("observer", "true");
      } else {
        this.removeAttribute("observer");
      }
    }
    /**
     * Restart animation
     */
    restartAnimation() {
      const state = this._state;
      if (state.rendered) {
        const root = this._shadowRoot;
        if (state.renderedMode === "svg") {
          try {
            root.lastChild.setCurrentTime(0);
            return;
          } catch (err) {
          }
        }
        renderIcon(root, state);
      }
    }
    /**
     * Get status
     */
    get status() {
      const state = this._state;
      return state.rendered ? "rendered" : state.icon.data === null ? "failed" : "loading";
    }
    /**
     * Queue attributes re-check
     */
    _queueCheck() {
      if (!this._checkQueued) {
        this._checkQueued = true;
        setTimeout(() => {
          this._check();
        });
      }
    }
    /**
     * Check for changes
     */
    _check() {
      if (!this._checkQueued) {
        return;
      }
      this._checkQueued = false;
      const state = this._state;
      const newIcon = this.getAttribute("icon");
      if (newIcon !== state.icon.value) {
        this._iconChanged(newIcon);
        return;
      }
      if (!state.rendered || !this._visible) {
        return;
      }
      const mode = this.getAttribute("mode");
      const customisations = getCustomisations(this);
      if (state.attrMode !== mode || haveCustomisationsChanged(state.customisations, customisations) || !findIconElement(this._shadowRoot)) {
        this._renderIcon(state.icon, customisations, mode);
      }
    }
    /**
     * Icon value has changed
     */
    _iconChanged(newValue) {
      const icon = parseIconValue(newValue, (value, name2, data) => {
        const state = this._state;
        if (state.rendered || this.getAttribute("icon") !== value) {
          return;
        }
        const icon2 = {
          value,
          name: name2,
          data
        };
        if (icon2.data) {
          this._gotIconData(icon2);
        } else {
          state.icon = icon2;
        }
      });
      if (icon.data) {
        this._gotIconData(icon);
      } else {
        this._state = setPendingState(icon, this._state.inline, this._state);
      }
    }
    /**
     * Force render icon on state change
     */
    _forceRender() {
      if (!this._visible) {
        const node = findIconElement(this._shadowRoot);
        if (node) {
          this._shadowRoot.removeChild(node);
        }
        return;
      }
      this._queueCheck();
    }
    /**
     * Got new icon data, icon is ready to (re)render
     */
    _gotIconData(icon) {
      this._checkQueued = false;
      this._renderIcon(icon, getCustomisations(this), this.getAttribute("mode"));
    }
    /**
     * Re-render based on icon data
     */
    _renderIcon(icon, customisations, attrMode) {
      const renderedMode = getRenderMode(icon.data.body, attrMode);
      const inline = this._state.inline;
      renderIcon(this._shadowRoot, this._state = {
        rendered: true,
        icon,
        inline,
        customisations,
        attrMode,
        renderedMode
      });
    }
    /**
     * Start observer
     */
    startObserver() {
      if (!this._observer && !this.hasAttribute("noobserver")) {
        try {
          this._observer = new IntersectionObserver((entries) => {
            const intersecting = entries.some((entry) => entry.isIntersecting);
            if (intersecting !== this._visible) {
              this._visible = intersecting;
              this._forceRender();
            }
          });
          this._observer.observe(this);
        } catch (err) {
          if (this._observer) {
            try {
              this._observer.disconnect();
            } catch (err2) {
            }
            this._observer = null;
          }
        }
      }
    }
    /**
     * Stop observer
     */
    stopObserver() {
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
        this._visible = true;
        if (this._connected) {
          this._forceRender();
        }
      }
    }
  };
  attributes.forEach((attr) => {
    if (!(attr in IconifyIcon.prototype)) {
      Object.defineProperty(IconifyIcon.prototype, attr, {
        get: function() {
          return this.getAttribute(attr);
        },
        set: function(value) {
          if (value !== null) {
            this.setAttribute(attr, value);
          } else {
            this.removeAttribute(attr);
          }
        }
      });
    }
  });
  const functions = exportFunctions();
  for (const key in functions) {
    IconifyIcon[key] = IconifyIcon.prototype[key] = functions[key];
  }
  customElements.define(name, IconifyIcon);
  return IconifyIcon;
}
var IconifyIconComponent = defineIconifyIcon() || exportFunctions();
var {
  enableCache,
  disableCache,
  iconLoaded,
  iconExists,
  // deprecated, kept to avoid breaking changes
  getIcon,
  listIcons,
  addIcon: addIcon2,
  addCollection: addCollection2,
  calculateSize: calculateSize2,
  buildIcon,
  iconToHTML: iconToHTML2,
  svgToURL: svgToURL2,
  loadIcons: loadIcons2,
  loadIcon,
  addAPIProvider: addAPIProvider2,
  _api
} = IconifyIconComponent;
export {
  default6 as Announcement,
  default7 as DocAsideLogo,
  default2 as DocBox,
  default4 as DocBoxCube,
  default3 as DocLinks,
  default5 as DocVideoLink,
  default8 as HomeFooter,
  default9 as HomeUnderline,
  Icon,
  default11 as ShareButton,
  default10 as Twikoo,
  baiduAnalytics,
  getVideoConfig,
  googleAnalytics_default as googleAnalytics,
  initTwikoo,
  isExternalLink,
  moveDomElements,
  trackPageview,
  umamiAnalytics_default as umamiAnalytics,
  useCopyLink,
  usePrelink,
  useVideoToggle,
  video
};
/*! Bundled license information:

iconify-icon/dist/iconify-icon.mjs:
  (**
  * (c) Iconify
  *
  * For the full copyright and license information, please view the license.txt
  * files at https://github.com/iconify/iconify
  *
  * Licensed under MIT.
  *
  * @license MIT
  * @version 2.1.0
  *)
*/
//# sourceMappingURL=@theojs_lumen.js.map
