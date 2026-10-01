// Sylphx tenant-journey fixture: one dependency-free HTTP server.
// The synthetic journey deploys the `journey` branch and asserts both the
// marker and the branch line, so a deploy of the wrong branch fails.
import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'

const branch = readFileSync(new URL('./BRANCH', import.meta.url), 'utf8').trim()
const body = `sylphx-journey-fixture ok\nbranch=${branch}\n`
createServer((req, res) => {
	if (req.url === '/healthz') {
		res.writeHead(200, { 'content-type': 'text/plain' })
		res.end('ok\n')
		return
	}
	res.writeHead(200, {
		'content-type': 'text/plain; charset=utf-8',
		'cache-control': 'no-store',
		'x-robots-tag': 'noindex',
	})
	res.end(body)
}).listen(Number(process.env.PORT || 3000), '0.0.0.0')
