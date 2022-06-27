module.exports = {
	'**/*.(ts|tsx)': () => 'npx tsc --noEmit',

	'**/*.(ts|tsx|js)': (filenames) => [
		`npx eslint --fix ${filenames.join(' ')}`,
	],
}
