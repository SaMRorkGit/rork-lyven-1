const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Rork metro (withRorkMetro) is disabled because it injects a dev inspector that
// requires react-native private APIs (getInspectorDataForViewAtPoint, InspectorOverlay)
// which are not available in Expo's React Native. Re-enable when the SDK supports it:
// const { withRorkMetro } = require("@rork-ai/toolkit-sdk/metro");
// module.exports = withRorkMetro(config);
module.exports = config;
