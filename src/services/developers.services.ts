import format from "pg-format";
import { IDeveloper, DeveloperCreate, DeveloperRead, DeveloperResult, DeveloperUpdate } from "../interfaces";
import { client } from "../database"

const create = async(payload: DeveloperCreate): Promise<IDeveloper> => {
    const queryFormat: string = format(
        'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: DeveloperResult = await client.query(queryFormat);
    return query.rows[0];
}

const retrieve = async(developerId: string): Promise<IDeveloper> => {
    const queryString: string = `
        SELECT
            d.id AS "developerId",
            d.name AS "developerName",
            d.email AS "developerEmail",
            i."developerSince" AS "developerInfoDeveloperSince",
            i."preferredOS" AS "developerInfoPreferredOS"
        FROM developers d
        LEFT JOIN "developerInfos" i
            ON i."developerId" = d.id
        WHERE d.id = $1
    `;
    const query: DeveloperResult = await client.query(queryString, [developerId]);
    return query.rows[0];
};

const partialUpdate = async(
    payload: DeveloperUpdate,
    developerId: string
): Promise<IDeveloper> => {
    const queryFormat: string = format(
        'UPDATE "developers" SET(%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: DeveloperResult = await client.query(queryFormat, [developerId]);
    return query.rows[0];
};

const destroy = async(developerId: string): Promise<void> => {
    await client.query('DELETE FROM "developers" WHERE "id" = $1;', [developerId]);
};


export default { create, retrieve, partialUpdate, destroy };