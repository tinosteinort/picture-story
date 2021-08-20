import { TestBed } from '@angular/core/testing';

import { RendererService } from './renderer.service';

describe('RendererService', () => {
  let service: RendererService;

  beforeEach(() => {
    service = new RendererService();
  });

  it('should be created', () => {
    expect(service.render('a')).toEqual('[a]');
  });
});
