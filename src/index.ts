import { App } from "./app"

const PORT = process.env.PORT || 3001;

new App().server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Para encerrar precione CRTL + C");
    console.log("Good Code! 🚀");
});
