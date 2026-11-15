# Import review

The uploaded archive matches upstream snapshot 316797ccb2adf8a527cfaa60f0a0e185019ae9db after CRLF normalization for Windows launchers. Original MIT terms retained.

## Review findings

- The server binds to 127.0.0.1 and rejects non-loopback Origin values; this is a local single-user app, not an authenticated public web service. Local-origin requests and local processes remain a risk. Validate Host/Origin protections and API authentication before LAN/Internet deployment.
- App PIN is a local UI protection, not a replacement for API authorization or encrypted data at rest.
- Billing and backup files contain sensitive records; restrict OS file permissions and protect backups. Google Drive backup is opt-in.
- Original donation UI and supporter data are disabled/reset for this edition; no payment destination is invented.
- Active installer and updater GitHub references point to the Vtechiee repo; the original docs and historical release notes are retained as upstream references. No installer release is provided yet.
- Basic credential-pattern scan did not find common GitHub, AWS, Google API keys or private key PEM blocks in text files. This is not an exhaustive secret or dependency scan.
- Unit tests could not start in the review environment because dependencies are not installed (first missing module: fflate). Run npm ci, lint, tests and build in a connected environment. Verify GST rules and exports with a qualified practitioner.

Keep the upstream internal storage identifiers and launcher names for compatibility; migrating data formats or changing installer directory names needs separate testing.
