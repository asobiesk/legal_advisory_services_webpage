const { exec } = require("child_process");

exec("npm run start", (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error}`);
        return;
    }

    // Command executed successfully
    console.log(`Command output: ${stdout}`);

    // Check for any error output
    if (stderr) {
        console.error(`Command error output: ${stderr}`);
    }
});

console.log("Started on port 3000");
