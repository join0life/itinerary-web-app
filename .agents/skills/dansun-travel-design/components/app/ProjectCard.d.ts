/**
 * A team space in the project feed: 160px tall muted card, name + description + owner badge.
 */
export interface ProjectCardProps {
  name: string;
  description?: string;
  /** owner nickname shown in the footer badge */
  owner?: string;
  joined?: boolean;
  onJoin?: () => void;
  /** pass to show 삭제 instead of the join action (owner's own list) */
  onDelete?: () => void;
  onClick?: () => void;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
