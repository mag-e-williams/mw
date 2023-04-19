// import { isProject } from 'api/parsers';
import { ProjectType } from 'api/types/Project';
import { Projects } from 'api/types/mockData/Projects';

/**
 * Fetches all projects
 */
export function fetchProjects(): Array<ProjectType> {
  // return Projects.filter(isProject) ?? [];
  return Projects;
}
