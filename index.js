const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");

function init() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "title",
				message: "Enter the title of your project:",
			},
			{
				type: "input",
				name: "description",
				message: "Provide a brief description of your project:",
			},

			{
				type: "input",
				name: "instal",
				message: "Explain installation process:",
			},
			{
				type: "input",
				name: "usage",
				message: "Provide instructions and examples for use:",
			},
			{
				type: "input",
				name: "contribute",
				message: "Guidelines for project contribution:",
			},
			{
				type: "input",
				name: "test",
				message: "Provide examples on how to run tests:",
			},

			{
				type: "list",
				name: "license",
				message: "Add a license:",
				choices: [
					"MIT License",
					"Apache License 2.0",
					"GNU General Public License (GPL) 3.0",
					"none",
				],
			},

			{
				type: "input",
				name: "github",
				message: "Enter a link to your GitHub profile:",
			},

			{
				type: "input",
				name: "email",
				message: "Enter your email address:",
			},
		])
		.then((answers) => {
			const readmeContent = generateMarkdown(answers);

			fs.writeFile("README.MD", readmeContent, (err) => {
				if (err) {
					console.error("error writing README.md:", err);
				} else {
					console.log("README.md has been successfully generated!");
				}
			});
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

init();
