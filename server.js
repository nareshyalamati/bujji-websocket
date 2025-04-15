const WebSocket = require("ws");
const PORT = process.env.PORT || 10000;

const server = new WebSocket.Server({ port: PORT }, () => {
    console.log(`✅ WebSocket Server Running on Port ${PORT}`);
});

server.on("connection", (ws) => {
    console.log("🎉 Client connected");

    let i = 1;
    const intervalId = setInterval(() => {
        if (i <= 100) {
            ws.send(`Number: ${i}`);
            i++;
        } else {
            clearInterval(intervalId);
            ws.send("✅ Done sending numbers 1 to 100");
        }
    }, 3000); // 3 seconds

    ws.on("close", () => {
        console.log("❌ Client disconnected");
        clearInterval(intervalId);
    });
});
