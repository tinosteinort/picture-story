import { RendererService } from './renderer.service';

describe('RendererService', () => {
  let service: RendererService;

  beforeEach(() => {
    service = new RendererService();
  });

  it('should replace new line', () => {
    expect(service.render('Line1\nLine2')).toEqual('Line1<br/>Line2');
  });

  it('escape some tag', () => {
    expect(service.render('Hi<b>Hi</b>Hi')).toEqual('Hi&lt;b&gt;Hi&lt;/b&gt;Hi');
  });

  it('escape script', () => {
    expect(service.render('Hi<script>alert("hi");</script>Hi')).toEqual('Hi&lt;script&gt;alert(&quot;hi&quot;);&lt;/script&gt;Hi');
  });

  it('should first escape and then replace', () => {
    expect(service.render('<b>Line1</b>\nLine2')).toEqual('&lt;b&gt;Line1&lt;/b&gt;<br/>Line2');
  });
});
