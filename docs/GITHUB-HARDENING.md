# GitHub Repository Hardening

Apply these repository settings in GitHub after pushing the `.github/` configuration.

## Branch Protection

Protect `main` under Settings > Branches:

- Require a pull request before merging
- Require 0 approvals for solo-maintainer operation
- Do not require Code Owners review unless another maintainer is available
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

## Cloudflare Deploy Secrets

Repository-owned deploy workflows require a GitHub token or GitHub App with `workflows` permission before `.github/workflows/` files can be pushed. The active deployment path is the GitHub Actions `Deploy` workflow using Wrangler. Editing `.github/workflows/` requires a GitHub credential or GitHub App with `workflow`/Workflows permission.

## Dependabot Auto-Merge Policy

The repository has an auto-merge workflow for Dependabot PRs:

- Patch and minor updates are queued for squash merge after all required checks pass.
- Security updates are handled by the same rule when they are not major updates.
- Major updates are never auto-merged; they receive a comment and stay open for manual review.
- The workflow does not checkout or execute PR code, because it runs with elevated `pull_request_target` permissions.

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
