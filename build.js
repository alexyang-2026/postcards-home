// NOTE: this was my first project with Node.js and I was learning the syntax and logic of it.
// The comments are either to explain why I implemented something, or as a reference explaining to me how it works.

const fs = require("fs");
const path = require("path");

const sourceDir = __dirname;
const outputDir = path.join(__dirname, "www");

// Excluded list that must not be copied into the www/ file
const excluded = new Set([
    "www",                          // Do not copy output folder into the output folder because that is weird :(
    "node_modules",                 // Node dependencies are not part of the website
    ".git",                         // Git internal repository data is not part of the app
    ".gitignore",
    ".assetsignore",
    "_headers",
    "package.json",                 
    "package-lock.json",
    "capacitor.config.ts",
    "capacitor.config.json",
    "build.js",                     // This backend script should not be copied into www as well
    "README.md",  
    "TODO.md",                      // Also not needed for the app
    "404.html",                     // This is only for web pages
    "404.css",
    "404.js",
    "ios", "android",               // I do not want to commit entire native apps to the bundle
    "dev_tools",                    // Dev tools for creating assets, not part of the app, which is also why most scripts here aren't in HTML/CSS/JS
    ".venv",
]);

function copyDirectory(source, destination){
    // Use Node's filesystem module to create a directory. Make it synchronous: Node must wait for the folder creation to finish before moving to next line
    // recursive: true means that Node can create missing parent directories along th epath
    fs.mkdirSync(destination, {recursive:true});

    const items = fs.readdirSync(source);

    items.forEach(function(item) {
        if (excluded.has(item)) {
            return;
        }

        const sourcePath = path.join(source, item);
        const destinationPath = path.join(destination, item);

        // Get information about the sourcePath object and check whether it is a file/directory
        const stats = fs.statSync(sourcePath);

        if (stats.isDirectory()) {
            copyDirectory(sourcePath, destinationPath);     // Use a recursion because it helps us create the nested folders structure
        } else {
            fs.copyFileSync(sourcePath, destinationPath);  // If it is a file, then just copy the file over
        }
    })
}

// Delete the old www/ folder and wait until removal finishes before continuing
// force: true means that if www/ doesn't exist, don't throw an error
fs.rmSync(outputDir, { recursive: true, force: true });

copyDirectory(sourceDir, outputDir);

console.log("Postcards Home built into www/")