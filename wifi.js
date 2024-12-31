const { exec } = require("child_process");

function getWifiProfiles() {
    return new Promise((resolve, reject) => {
        // Fetch all Wi-Fi profiles
        exec("netsh wlan show profiles", (error, stdout, stderr) => {
            if (error) {
                return reject(`Error fetching profiles: ${error.message}`);
            }
            if (stderr) {
                return reject(`Error: ${stderr}`);
            }

            // Parse profile names
            const profiles = stdout.match(/(?:All User Profile\s*:\s)(.*)/g)
                ?.map(line => line.split(":")[1].trim());

            if (!profiles || profiles.length === 0) {
                return resolve([]);
            }

            // Fetch keys for each profile
            const promises = profiles.map(profile => getWifiKey(profile));
            Promise.all(promises)
                .then(resolve)
                .catch(reject);
        });
    });
}

function getWifiKey(profile) {
    return new Promise((resolve) => {
        const sanitizedProfile = profile.replace(/"/g, '\\"');
        exec(`netsh wlan show profile "${sanitizedProfile}" key=clear`, (error, stdout, stderr) => {
            if (error || stderr) {
                resolve({ profile, key: "Error fetching key or not available" });
                return;
            }

            // Extract key content
            const keyMatch = stdout.match(/Key Content\s*:\s(.*)/);
            const key = keyMatch ? keyMatch[1] : "No Key Found";
            resolve({ profile, key });
        });
    });
}

// Main execution
getWifiProfiles()
    .then(profiles => {
        console.log("Wi-Fi Profiles and Keys:");
        profiles.forEach(({ profile, key }) => {
            console.log(`Profile: ${profile}`);
            console.log(`Key: ${key} \n`);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });