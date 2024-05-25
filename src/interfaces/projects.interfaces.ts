import { QueryResult } from "pg";

interface IProject{
    id: number,
    name: string,
    description: string,
    repository: string,
    startDate: Date,
    endDate: Date | null,
    developerId: number
}

type ProjectCreate = Omit<IProject, "id">;
type ProjectUpdate = Partial<ProjectCreate>;
type ProjectResult = QueryResult<IProject>;

export { IProject, ProjectCreate, ProjectUpdate, ProjectResult };