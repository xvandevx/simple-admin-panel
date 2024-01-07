import { Injectable } from '@nestjs/common';
import {Contents} from "./contents.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateContentDto} from "./dto/create-content.dto";
import {UpdateContentDto} from "./dto/update-content.dto";
import {PagesService} from "../pages/pages.service";

@Injectable()
export class ContentsService {
  constructor(@InjectModel(Contents) private contentsRepository: typeof Contents,
          private pagesRepository: PagesService
  ) {}

  async add(dto: CreateContentDto) {
    const content = await this.contentsRepository.create(dto);
    await content.$set('pages', dto.pages.split(',').map(id => Number(id)));

  }

  async update(id: number, dto: UpdateContentDto) {
    const content = await this.contentsRepository.findByPk(id)
    await content.update({
       name: dto.name,
       code: dto.code,
       type: dto.type,
       value: dto.value,
    });
    await content.$set('pages', dto.pages.split(',').map(id => Number(id)));
  }

  async getAll() {
    const contents = await this.contentsRepository.findAll({include: {all: true}});
    return contents;
  }

  async getByCode(code) {
    const content = await this.contentsRepository.findOne({  where: { code }, include: {all: true}});
    return content;
  }

  async delete(id) {
    const row = await this.contentsRepository.findOne({
      where: { id },
    });
    if (row) {
      await row.destroy(); // deletes the row
    }
  }
}