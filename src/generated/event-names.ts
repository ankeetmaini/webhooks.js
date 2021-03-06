// THIS FILE IS GENERATED - DO NOT EDIT DIRECTLY
// make edits in scripts/generate-types.js

export declare module EventNames {
  type ErrorEvent = "error";
  type WildcardEvent = "*";
  type CheckRunEvent =
    | "check_run"
    | "check_run.completed"
    | "check_run.created"
    | "check_run.requested_action"
    | "check_run.rerequested";

  type CheckSuiteEvent =
    | "check_suite"
    | "check_suite.completed"
    | "check_suite.requested"
    | "check_suite.rerequested";

  type CodeScanningAlertEvent =
    | "code_scanning_alert"
    | "code_scanning_alert.appeared_in_branch"
    | "code_scanning_alert.closed_by_user"
    | "code_scanning_alert.created"
    | "code_scanning_alert.fixed"
    | "code_scanning_alert.reopened"
    | "code_scanning_alert.reopened_by_user";

  type CommitCommentEvent = "commit_comment" | "commit_comment.created";

  type ContentReferenceEvent =
    | "content_reference"
    | "content_reference.created";

  type CreateEvent = "create";

  type DeleteEvent = "delete";

  type DeployKeyEvent =
    | "deploy_key"
    | "deploy_key.created"
    | "deploy_key.deleted";

  type DeploymentEvent = "deployment" | "deployment.created";

  type DeploymentStatusEvent =
    | "deployment_status"
    | "deployment_status.created";

  type ForkEvent = "fork";

  type GithubAppAuthorizationEvent =
    | "github_app_authorization"
    | "github_app_authorization.revoked";

  type GollumEvent = "gollum";

  type InstallationEvent =
    | "installation"
    | "installation.created"
    | "installation.deleted"
    | "installation.new_permissions_accepted"
    | "installation.suspend"
    | "installation.unsuspend";

  type InstallationRepositoriesEvent =
    | "installation_repositories"
    | "installation_repositories.added"
    | "installation_repositories.removed";

  type IssueCommentEvent =
    | "issue_comment"
    | "issue_comment.created"
    | "issue_comment.deleted"
    | "issue_comment.edited";

  type IssuesEvent =
    | "issues"
    | "issues.assigned"
    | "issues.closed"
    | "issues.deleted"
    | "issues.demilestoned"
    | "issues.edited"
    | "issues.labeled"
    | "issues.locked"
    | "issues.milestoned"
    | "issues.opened"
    | "issues.pinned"
    | "issues.reopened"
    | "issues.transferred"
    | "issues.unassigned"
    | "issues.unlabeled"
    | "issues.unlocked"
    | "issues.unpinned";

  type LabelEvent =
    | "label"
    | "label.created"
    | "label.deleted"
    | "label.edited";

  type MarketplacePurchaseEvent =
    | "marketplace_purchase"
    | "marketplace_purchase.cancelled"
    | "marketplace_purchase.changed"
    | "marketplace_purchase.pending_change"
    | "marketplace_purchase.pending_change_cancelled"
    | "marketplace_purchase.purchased";

  type MemberEvent =
    | "member"
    | "member.added"
    | "member.edited"
    | "member.removed";

  type MembershipEvent =
    | "membership"
    | "membership.added"
    | "membership.removed";

  type MetaEvent = "meta" | "meta.deleted";

  type MilestoneEvent =
    | "milestone"
    | "milestone.closed"
    | "milestone.created"
    | "milestone.deleted"
    | "milestone.edited"
    | "milestone.opened";

  type OrganizationEvent =
    | "organization"
    | "organization.deleted"
    | "organization.member_added"
    | "organization.member_invited"
    | "organization.member_removed"
    | "organization.renamed";

  type OrgBlockEvent =
    | "org_block"
    | "org_block.blocked"
    | "org_block.unblocked";

  type PackageEvent = "package" | "package.published" | "package.updated";

  type PageBuildEvent = "page_build";

  type PingEvent = "ping";

  type ProjectCardEvent =
    | "project_card"
    | "project_card.converted"
    | "project_card.created"
    | "project_card.deleted"
    | "project_card.edited"
    | "project_card.moved";

  type ProjectColumnEvent =
    | "project_column"
    | "project_column.created"
    | "project_column.deleted"
    | "project_column.edited"
    | "project_column.moved";

  type ProjectEvent =
    | "project"
    | "project.closed"
    | "project.created"
    | "project.deleted"
    | "project.edited"
    | "project.reopened";

  type PublicEvent = "public";

  type PullRequestEvent =
    | "pull_request"
    | "pull_request.assigned"
    | "pull_request.closed"
    | "pull_request.edited"
    | "pull_request.labeled"
    | "pull_request.locked"
    | "pull_request.merged"
    | "pull_request.opened"
    | "pull_request.ready_for_review"
    | "pull_request.reopened"
    | "pull_request.review_request_removed"
    | "pull_request.review_requested"
    | "pull_request.synchronize"
    | "pull_request.unassigned"
    | "pull_request.unlabeled"
    | "pull_request.unlocked";

  type PullRequestReviewEvent =
    | "pull_request_review"
    | "pull_request_review.dismissed"
    | "pull_request_review.edited"
    | "pull_request_review.submitted";

  type PullRequestReviewCommentEvent =
    | "pull_request_review_comment"
    | "pull_request_review_comment.created"
    | "pull_request_review_comment.deleted"
    | "pull_request_review_comment.edited";

  type PushEvent = "push";

  type ReleaseEvent =
    | "release"
    | "release.created"
    | "release.deleted"
    | "release.edited"
    | "release.prereleased"
    | "release.published"
    | "release.released"
    | "release.unpublished";

  type RepositoryDispatchEvent =
    | "repository_dispatch"
    | "repository_dispatch.on-demand-test";

  type RepositoryEvent =
    | "repository"
    | "repository.archived"
    | "repository.created"
    | "repository.deleted"
    | "repository.edited"
    | "repository.privatized"
    | "repository.publicized"
    | "repository.renamed"
    | "repository.transferred"
    | "repository.unarchived";

  type RepositoryImportEvent = "repository_import";

  type RepositoryVulnerabilityAlertEvent =
    | "repository_vulnerability_alert"
    | "repository_vulnerability_alert.create"
    | "repository_vulnerability_alert.dismiss"
    | "repository_vulnerability_alert.resolve";

  type SecurityAdvisoryEvent =
    | "security_advisory"
    | "security_advisory.performed"
    | "security_advisory.published"
    | "security_advisory.updated";

  type SponsorshipEvent =
    | "sponsorship"
    | "sponsorship.cancelled"
    | "sponsorship.created"
    | "sponsorship.edited"
    | "sponsorship.pending_cancellation"
    | "sponsorship.pending_tier_change"
    | "sponsorship.tier_changed";

  type StarEvent = "star" | "star.created" | "star.deleted";

  type StatusEvent = "status";

  type TeamEvent =
    | "team"
    | "team.added_to_repository"
    | "team.created"
    | "team.deleted"
    | "team.edited"
    | "team.removed_from_repository";

  type TeamAddEvent = "team_add";

  type WatchEvent = "watch" | "watch.started";

  type WorkflowDispatchEvent = "workflow_dispatch";

  type WorkflowRunEvent = "workflow_run" | "workflow_run.action";

  type StringNames =
    | "check_run"
    | "check_suite"
    | "code_scanning_alert"
    | "commit_comment"
    | "content_reference"
    | "create"
    | "delete"
    | "deploy_key"
    | "deployment"
    | "deployment_status"
    | "fork"
    | "github_app_authorization"
    | "gollum"
    | "installation"
    | "installation_repositories"
    | "issue_comment"
    | "issues"
    | "label"
    | "marketplace_purchase"
    | "member"
    | "membership"
    | "meta"
    | "milestone"
    | "organization"
    | "org_block"
    | "package"
    | "page_build"
    | "ping"
    | "project_card"
    | "project_column"
    | "project"
    | "public"
    | "pull_request"
    | "pull_request_review"
    | "pull_request_review_comment"
    | "push"
    | "release"
    | "repository_dispatch"
    | "repository"
    | "repository_import"
    | "repository_vulnerability_alert"
    | "security_advisory"
    | "sponsorship"
    | "star"
    | "status"
    | "team"
    | "team_add"
    | "watch"
    | "workflow_dispatch"
    | "workflow_run";

  type All =
    | ErrorEvent
    | WildcardEvent
    | CheckRunEvent
    | CheckSuiteEvent
    | CodeScanningAlertEvent
    | CommitCommentEvent
    | ContentReferenceEvent
    | CreateEvent
    | DeleteEvent
    | DeployKeyEvent
    | DeploymentEvent
    | DeploymentStatusEvent
    | ForkEvent
    | GithubAppAuthorizationEvent
    | GollumEvent
    | InstallationEvent
    | InstallationRepositoriesEvent
    | IssueCommentEvent
    | IssuesEvent
    | LabelEvent
    | MarketplacePurchaseEvent
    | MemberEvent
    | MembershipEvent
    | MetaEvent
    | MilestoneEvent
    | OrganizationEvent
    | OrgBlockEvent
    | PackageEvent
    | PageBuildEvent
    | PingEvent
    | ProjectCardEvent
    | ProjectColumnEvent
    | ProjectEvent
    | PublicEvent
    | PullRequestEvent
    | PullRequestReviewEvent
    | PullRequestReviewCommentEvent
    | PushEvent
    | ReleaseEvent
    | RepositoryDispatchEvent
    | RepositoryEvent
    | RepositoryImportEvent
    | RepositoryVulnerabilityAlertEvent
    | SecurityAdvisoryEvent
    | SponsorshipEvent
    | StarEvent
    | StatusEvent
    | TeamEvent
    | TeamAddEvent
    | WatchEvent
    | WorkflowDispatchEvent
    | WorkflowRunEvent;
}
