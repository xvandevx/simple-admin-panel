import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comments } from './comments.model';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments) private commentsRepository: typeof Comments,
  ) {}

  async add(dto: CommentDto) {
    await this.commentsRepository.create(dto);
  }

  async update(id: number, dto: CommentDto) {
    await this.commentsRepository.update(dto, { where: { id } });
  }

  async getAll() {
    return await this.commentsRepository.findAll({
      include: { all: true },
    });
  }

  async delete(id) {
    const row = await this.commentsRepository.findOne({
      where: { id },
      order: [['id', 'ASC']],
    });
    if (row) {
      await row.destroy(); // deletes the row
    }
  }
}
