import { QueryResult } from "pg";

type OS = "windows" | "linux" | "mac";

interface IDevInfo{
    id: number,
    developerSince: Date,
    preferredOS: OS,
    developerId: number
}

type DevInfoCreate = Omit<IDevInfo, "id">;
type DevInfoResult = QueryResult<IDevInfo>;

export { IDevInfo, DevInfoCreate, DevInfoResult }