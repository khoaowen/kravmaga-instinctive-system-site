# GitHub Repository Hardening

Apply these repository settings in GitHub after pushing the `.github/` configuration.

## Branch Protection

Protect `main` under Settings > Branches:

- Require a pull request before merging
- Require at least 1 approval
- Require review from Code Owners
- Dismiss stale approvals when new commits are pushed
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Required checks:
  - `Build and typecheck`
  - `Analyze JavaScript and TypeScript`
  - `Gitleaks`
- Require conversation resolution before merging
- Block force pushes
- Block deletions
- Include administrators if you want the same process for repo owners

## Security and Analysis

Enable these under Settings > Code security and analysis:

- Dependabot alerts
- Dependabot security updates
- Dependency graph
- Code scanning
- Secret scanning
- Push protection for secret scanning
- Private vulnerability reporting

## Actions Permissions

Use least privilege under Settings > Actions > General:

- Allow GitHub Actions and reusable workflows
- Allow actions created by GitHub and verified creators
- Set workflow permissions to `Read repository contents permission`
- Disable `Allow GitHub Actions to create and approve pull requests` unless you explicitly need it

## Repository Privacy

- Keep the repository private if it contains unpublished business information, member data, internal pricing strategy, or deployment notes.
- Keep production credentials only in GitHub Actions secrets or Cloudflare.
- Do not store membership lists, health information, minors' data, payment exports, or private email threads in the repository.
