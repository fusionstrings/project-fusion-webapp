import {
  Hello
} from 'app/scripts/main';

describe('Hello', function(){
  it('returns world', function(){
	let hello = new Hello();
	expect(hello.world()).to.equal('world');
  });
});
