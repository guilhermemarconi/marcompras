/**
 * Generates an unique ID based on current local time and a simple hash generator.
 */
export function generateUniqueId() {
  return '' + Date.now() + Math.random().toString(36).substr(2, 9);
}
