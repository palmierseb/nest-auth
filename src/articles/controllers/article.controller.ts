import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { Article } from '../entities/article.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.articleService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() article: Article) {
    return this.articleService.save(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Body() article: Article) {
    return this.articleService.save(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param() Params) {
    return this.articleService.delete(Params.id);
  }
}
