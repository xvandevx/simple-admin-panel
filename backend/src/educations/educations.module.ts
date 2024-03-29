import { Module } from '@nestjs/common';
import { EducationsController } from './educations.controller';
import { EducationsService } from './educations.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Educations } from './educations.model';

@Module({
  imports: [SequelizeModule.forFeature([Educations])],
  controllers: [EducationsController],
  providers: [EducationsService],
  exports: [EducationsService],
})
export class EducationsModule {}
