import {uuid} from '../../../../views_V2024/main';

describe('uuid function', () => {
  // 测试 UUID 是否符合预期的格式
  it('should generate a valid UUID format', () => {
    const generatedUuid = uuid();
    expect(generatedUuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  // 测试 UUID 是否每次调用都是唯一的
  it('should generate unique UUIDs on each call', () => {
    const uuidSet = new Set();
    for (let i = 0; i < 1000; i++) {
      uuidSet.add(uuid());
    }
    expect(uuidSet.size).toBe(1000);
  });

  // 测试是否可以使用自定义模板字符串
  it('should support custom template strings', () => {
    const customTemplate = 'xxxx-xxxx-xxxx-xxxx-xxxx';
    const generatedUuid = uuid(customTemplate);
    console.log(generatedUuid);
    expect(generatedUuid).toMatch(new RegExp('^' + customTemplate.replace(/[x]/g, '[0-9a-f]') + '$', 'i'));
  });

  // 测试是否可以生成特定版本的 UUID
  it('should generate version 4 UUIDs', () => {
    const generatedUuid = uuid();
    const versionPart = generatedUuid.substring(14, 15);
    expect(versionPart).toBe('4');
  });

  // 测试是否正确处理 'y' 字符
  it('should handle "y" character correctly', () => {
    const generatedUuid = uuid();
    const yPart = generatedUuid.substring(19, 20);
    expect(['8', '9', 'a', 'b']).toContain(yPart);
  });
});
