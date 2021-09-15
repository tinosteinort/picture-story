import { TestBed } from '@angular/core/testing';

import { RendererService } from './renderer.service';

describe('RendererService', () => {
  let service: RendererService;

  beforeEach(() => {
    service = new RendererService();
  });

  it('should replace new line', () => {
    expect(service.render('Line1\nLine2')).toEqual('Line1<br/>Line2');
  });
});
