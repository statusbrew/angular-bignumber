describe('ngBignumber', function() {
  //var params;

  beforeEach(module('ngBignumber', function(bignumberProvider) {
    //bignumber.configure(1);
  }));

  it('should be defined', inject(function(bignumber) {
    expect(bignumber).toBeDefined();
  }));

  it('should be work for english', inject(function(bignumber) {
    expect(bignumber(1000, 2, 'en')).toEqual('1.00K');
    expect(bignumber(1000000, 2, 'en')).toEqual('1.00M');
    expect(bignumber(1000000000, 2, 'en')).toEqual('1.00B');
    expect(bignumber(1000, 'abcString', 'en')).toEqual('1K');
    expect(bignumber(1000000, '1', 'en')).toEqual('1.0M');
    expect(bignumber(1000000000, '1', 'en')).toEqual('1.0B');
    expect(bignumber(1000, 0, 'en')).toEqual('1K');
    expect(bignumber(1000000, 0, 'en')).toEqual('1M');
    expect(bignumber(1000000000, 0, 'en')).toEqual('1B');
  }));

  it('should be work for japanese', inject(function(bignumber) {
    expect(bignumber(1000, 2, 'ja')).toEqual('1.00千');
    expect(bignumber(1000000, 2, 'ja')).toEqual('100.00万');
    expect(bignumber(1000000000, 2, 'ja')).toEqual('10.00億');
    expect(bignumber(1000, 'abcString', 'ja')).toEqual('1千');
    expect(bignumber(1000000, '1', 'ja')).toEqual('100.0万');
    expect(bignumber(1000000000, '1', 'ja')).toEqual('10.0億');
    expect(bignumber(1000, 0, 'ja')).toEqual('1千');
    expect(bignumber(1000000, 0, 'ja')).toEqual('100万');
    expect(bignumber(1000000000, 0, 'ja')).toEqual('10億');
  }));

  it('should be work for russian', inject(function(bignumber) {
    expect(bignumber(1000, 2, 'ru')).toEqual('1.00тыс');
    expect(bignumber(1000000, 2, 'ru')).toEqual('1.00млн');
    expect(bignumber(1000000000, 2, 'ru')).toEqual('1.00млрд');
    expect(bignumber(1000, 'abcString', 'ru')).toEqual('1тыс');
    expect(bignumber(1000000, '1', 'ru')).toEqual('1.0млн');
    expect(bignumber(1000000000, '1', 'ru')).toEqual('1.0млрд');
    expect(bignumber(1000, 0, 'ru')).toEqual('1тыс');
    expect(bignumber(1000000, 0, 'ru')).toEqual('1млн');
    expect(bignumber(1000000000, 0, 'ru')).toEqual('1млрд');
  }));

});
