import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {WorksModule} from "./works/works.module";
import {ConfigModule} from "@nestjs/config";
import {Works} from "./works/works.model";
import {SkillsModule} from "./skills/skills.module";
import {Skills} from "./skills/skills.model";
import {Pages} from "./pages/pages.model";
import {PagesModule} from "./pages/pages.module";
import {Contents} from "./contents/contents.model";
import {ContentsModule} from "./contents/contents.module";
import {PageContents} from "./contents/page-contents.model";
import {WorkSkills} from "./works/work-skills.model";
import {Educations} from "./educations/educations.model";
import {EducationsModule} from "./educations/educations.module";
import {Users} from "./users/users.model";
import {Roles} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles";
import {UsersModule} from "./users/users.module";
import {RolesModule} from "./roles/roles.module";
import {AuthModule} from "./auth/auth.module";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "./auth/auth.guard";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.local.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [
                Works,
                Skills,
                WorkSkills,
                Pages,
                Contents,
                PageContents,
                Educations,
                Roles,
                Users,
                UserRoles
            ],
            autoLoadModels: true,
            logging: false,
            synchronize: true,
        }),
        WorksModule,
        SkillsModule,
        PagesModule,
        ContentsModule,
        EducationsModule,
        UsersModule,
        RolesModule,
        AuthModule,
    ],
    controllers: [],
    providers: [
        /*{
            provide: APP_GUARD,
            useClass: AuthGuard,
        },*/
    ],
})
export class AppModule {
    constructor() {
        console.log('envs', process.env)
    }
}
