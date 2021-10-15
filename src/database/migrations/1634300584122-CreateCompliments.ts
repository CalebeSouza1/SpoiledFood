import { query } from "express";
import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1634300584122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "requests_id",
                        type: "uuid",
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserRequestCompliments",
                        referencedTableName: "requests",
                        referencedColumnNames: ["id"],
                        columnNames: ["requests_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]            
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
