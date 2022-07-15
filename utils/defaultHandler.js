export default async function defaultHandler(req, res, single, controllers) {
	const { method, url } = req;
	let accepted = [];
	let urlRegExp = null;
	if (single) {
		const paths = url.split("/");
		paths.pop();
		paths.push();
		// [^\/]*[a-z][^\/]*
		urlRegExp = new RegExp(`${paths.join("/")}\/:id[\/]*`);
	}
	for (const c in controllers) {
		console.log(
			`urlRegExp: ${urlRegExp} MATCH ${controllers[c].path}\t${urlRegExp.test(
				controllers[c].path,
			)}`,
		);
		if (urlRegExp.test(controllers[c].path)) {
			if (controllers[c].method.toLowerCase() === method.toLowerCase())
				return controllers[c].handler();
		}
	}
	// controllers.entries.forEach((c) => {});

	/**
	 * !RegEx - /^\/cart\/\d+\/?$/i
	 */
	res.status(500).end();
}
/**
 * !Not Implemented
 * TODO add url matcher to get the right handler
 */
