import { Module } from '@nestjs/common';
import { WorksController } from './works.controller';
import { WorksService } from './works.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Works } from './works.model';

@Module({
  imports: [SequelizeModule.forFeature([Works])],
  controllers: [WorksController],
  providers: [WorksService],
  exports: [WorksService],
})
export class WorksModule {}
