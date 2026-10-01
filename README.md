# journey-fixture

The fixture the Sylphx tenant journey deploys every 15 minutes
(SylphxAI/cloud `docs/runbooks/tenant-journey.md`). A dependency-free Node
server: `GET /` answers `sylphx-journey-fixture ok` and `branch=<branch>`,
`GET /healthz` answers `ok`.

- `main` (default) answers `branch=main`.
- `journey` answers `branch=journey`. The journey deploys this non-default
  branch and asserts its line, so a deploy that builds the default branch fails.

No secrets, no data, no external calls. Do not add dependencies: the build
must stay seconds long and free.
