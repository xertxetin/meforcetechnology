var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_vite = require("vite");
var import_path = __toESM(require("path"), 1);
var import_ws = require("ws");
var import_http = __toESM(require("http"), 1);
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  const server = import_http.default.createServer(app);
  const events = [];
  const subscriptions = /* @__PURE__ */ new Map();
  const wss = new import_ws.WebSocketServer({ server, path: "/nostr" });
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      try {
        const data = JSON.parse(message.toString());
        if (!Array.isArray(data)) return;
        const type = data[0];
        if (type === "EVENT") {
          const event = data[1];
          const actualEvent = data.length === 3 ? data[2] : data[1];
          if (actualEvent && actualEvent.id) {
            if (actualEvent.kind < 2e4 || actualEvent.kind >= 3e4) {
              events.push(actualEvent);
              if (events.length > 5e3) events.shift();
            }
            subscriptions.forEach((sub, subId) => {
              if (sub.ws.readyState === import_ws.WebSocket.OPEN) {
                sub.ws.send(JSON.stringify(["EVENT", subId, actualEvent]));
              }
            });
            ws.send(JSON.stringify(["OK", actualEvent.id, true, ""]));
            wss.clients.forEach((client) => {
              if (client !== ws && client.readyState === import_ws.WebSocket.OPEN) {
                client.send(JSON.stringify(["EVENT", "oiia-discovery", actualEvent]));
              }
            });
          }
        } else if (type === "REQ") {
          const subId = data[1];
          const filters = data.slice(2);
          subscriptions.set(subId, { ws, filters });
          events.forEach((ev) => {
            ws.send(JSON.stringify(["EVENT", subId, ev]));
          });
          ws.send(JSON.stringify(["EOSE", subId]));
        } else if (type === "CLOSE") {
          const subId = data[1];
          subscriptions.delete(subId);
        }
      } catch (err) {
      }
    });
    ws.on("close", () => {
      const toDelete = [];
      subscriptions.forEach((sub, id) => {
        if (sub.ws === ws) toDelete.push(id);
      });
      toDelete.forEach((id) => subscriptions.delete(id));
    });
  });
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", eventsStored: events.length });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
