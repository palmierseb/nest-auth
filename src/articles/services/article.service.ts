import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  findOne(id: number): Promise<Article> {
    return this.articleRepository.findOneBy({ id });
  }

  save(article: Article): Promise<Article> {
    return this.articleRepository.save(article);
  }

  delete(article: Article): void {
    this.articleRepository.delete(article);
  }
}
