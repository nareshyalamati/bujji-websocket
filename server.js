const WebSocket = require("ws");
const PORT = process.env.PORT || 10000;

const server = new WebSocket.Server({ port: PORT }, () => {
    console.log(`✅ WebSocket Server Running on Port ${PORT}`);
});

server.on("connection", (ws) => {
    console.log("🎉 Client connected");

    ws.on("message", (msg) => {
        console.log("📨 Received:", msg);
        ws.send(`Server Echo: ${msg}`);
    });

    ws.on("close", () => console.log("❌ Client disconnected"));
});
