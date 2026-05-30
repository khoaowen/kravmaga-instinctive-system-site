# Security Policy

## Supported Versions

Only the current `main` branch is supported.

## Reporting a Vulnerability

Please do not open a public issue with exploit details, credentials, tokens, or personal data.

If GitHub private vulnerability reporting is enabled for this repository, use it. Otherwise, contact the repository owner directly through GitHub.

Include:

- A short description of the issue
- Steps to reproduce
- Affected files, pages, or dependencies
- Whether any secret, token, or personal data may be exposed

## Secrets and Privacy

- Do not commit `.env`, `.env.*`, `.dev.vars`, Cloudflare tokens, analytics credentials, or personal member data.
- Store deployment credentials in GitHub Actions secrets or Cloudflare, never in the repository.
- Keep forms and contact collection minimal unless a matching privacy notice and retention process are in place.
