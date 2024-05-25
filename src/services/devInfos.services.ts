import format from "pg-format";
import { IDevInfo, DevInfoCreate, DevInfoResult } from "../interfaces";
import { client } from "../database";

const create = async (payload: DevInfoCreate): Promise<IDevInfo> => {
    const queryFormat: string = format(
        'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: DevInfoResult = await client.query(queryFormat);
    return query.rows[0];
};

export default { create };