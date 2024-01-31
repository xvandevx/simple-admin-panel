import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentDto, GetCommentsType } from '../../../types/blog/comment';

@Controller('blog/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() commentsDto: CommentDto) {
    return this.commentsService.add(commentsDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() commentsDto: CommentDto) {
    return this.commentsService.update(id, commentsDto);
  }

  @Get()
  getAll(): Promise<GetCommentsType> {
    return this.commentsService.getAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.commentsService.delete(id);
  }
}