import format from "pg-format";
import { IProject, ProjectCreate, ProjectResult, ProjectUpdate } from "../interfaces";
import { client } from "../database";

const create = async (payload: ProjectCreate): Promise<IProject> => {
    const queryFormat: string = format(
        'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: ProjectResult = await client.query(queryFormat);
    return query.rows[0];
};

const retrieve = async (projectId: string): Promise<IProject> => {
    const queryString = `
        SELECT 
            p.id AS "projectId",
            p.name AS "projectName",
            p.description AS "projectDescription",
            p.repository AS "projectRepository",
            p."startDate" AS "projectStartDate",
            p."endDate" AS "projectEndDate",
            d.name AS "projectDeveloperName"
        FROM projects p 
        LEFT JOIN developers d
            ON p."developerId" = d.id
        WHERE p.id = $1
    `;

    const query: ProjectResult = await client.query(queryString, [projectId]);
    return query.rows[0];
};

const partialUpdate = async (payload: ProjectUpdate, projectId: string): Promise<IProject> => {
    const queryFormat: string = format(
        'UPDATE projects SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: ProjectResult = await client.query(queryFormat, [projectId]);
    return query.rows[0];
}

export default { create, retrieve, partialUpdate };