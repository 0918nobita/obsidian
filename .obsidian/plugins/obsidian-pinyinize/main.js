"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
function annotate(parentNode, oldText) {
  console.log(oldText.textContent.match(/zn_(.*?)_ch/g));
}
var MyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    new import_obsidian.Notice("Hello from my Obsidian plugin!");
    this.registerMarkdownPostProcessor((element, _context) => {
      const children = [...element.childNodes];
      for (const child of children) {
        const nodes = [...child.childNodes];
        for (const node of nodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node;
            annotate(child, text);
          }
        }
      }
    });
  }
  onunload() {
  }
};
