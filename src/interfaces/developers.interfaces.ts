import {QueryResult} from "pg";

interface IDeveloper{
    id: number,
    name: string,
    email: string
}

type DeveloperCreate = Omit<IDeveloper, "id">;
type DeveloperUpdate = Partial<DeveloperCreate>;
type DeveloperRead = Array<IDeveloper>;
type DeveloperResult = QueryResult<IDeveloper>;

export { IDeveloper, DeveloperCreate, DeveloperRead, DeveloperResult, DeveloperUpdate };