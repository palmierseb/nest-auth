import { Article } from './article.entity';

describe('ArticleEntity', () => {
  it('should be defined', () => {
    expect(new Article()).toBeDefined();
  });
});
