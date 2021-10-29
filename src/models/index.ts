export interface IUserType {
  total_count: number;
  incomplete_results: boolean;
  items: IUserItemType[];
}
export interface IUserItemType {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface IUserRepoItemType {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: 223;
  forks_count: 223;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: null;
  hooks_url: string;
  html_url: string;
  id: 44957578;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: null;
  languages_url: string;
  license: null;
  merges_url: string;
  milestones_url: string;
  mirror_url: null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: 0;
  open_issues_count: 0;
  owner: { login: string; id: 905434; node_id: string; avatar_url: string; gravatar_id: string };
  permissions: { admin: boolean; maintain: boolean; push: boolean; triage: boolean; pull: boolean };
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  size: 12083;
  ssh_url: string;
  stargazers_count: 844;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: [];
  trees_url: string;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: 844;
  watchers_count: 844;
}
