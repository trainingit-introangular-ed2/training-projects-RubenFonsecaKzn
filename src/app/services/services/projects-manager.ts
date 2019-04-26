export interface ProjectsManager {
  create(projectName: string);
  read(): Promise<any>;
}
