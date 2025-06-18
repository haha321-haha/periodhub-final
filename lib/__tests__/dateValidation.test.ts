/**
 * 日期验证函数的单元测试
 */

import {
  getTodayDateString,
  isValidDate,
  validateEndDate,
  formatDate,
  getDaysDifference
} from '../dateValidation';

describe('日期验证工具函数', () => {
  
  describe('getTodayDateString', () => {
    it('应该返回今天的日期字符串（YYYY-MM-DD格式）', () => {
      const today = getTodayDateString();
      const expectedFormat = /^\d{4}-\d{2}-\d{2}$/;
      expect(today).toMatch(expectedFormat);
      
      // 验证返回的是今天的日期
      const actualToday = new Date().toISOString().split('T')[0];
      expect(today).toBe(actualToday);
    });
  });

  describe('isValidDate', () => {
    it('应该接受今天的日期', () => {
      const today = getTodayDateString();
      expect(isValidDate(today)).toBe(true);
    });

    it('应该接受过去的日期', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split('T')[0];
      expect(isValidDate(yesterdayString)).toBe(true);
    });

    it('应该拒绝未来的日期', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split('T')[0];
      expect(isValidDate(tomorrowString)).toBe(false);
    });

    it('应该拒绝空字符串', () => {
      expect(isValidDate('')).toBe(false);
    });

    it('应该拒绝无效的日期格式', () => {
      expect(isValidDate('invalid-date')).toBe(false);
      expect(isValidDate('2023-13-01')).toBe(false);
      expect(isValidDate('2023-02-30')).toBe(false);
    });
  });

  describe('validateEndDate', () => {
    const today = getTodayDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];

    it('应该接受空的结束日期', () => {
      const result = validateEndDate(today, '');
      expect(result.isValid).toBe(true);
    });

    it('应该接受有效的结束日期', () => {
      const result = validateEndDate(yesterdayString, today);
      expect(result.isValid).toBe(true);
    });

    it('应该拒绝未来的结束日期', () => {
      const result = validateEndDate(today, tomorrowString);
      expect(result.isValid).toBe(false);
      expect(result.errorType).toBe('future');
    });

    it('应该拒绝早于开始日期的结束日期', () => {
      const result = validateEndDate(today, yesterdayString);
      expect(result.isValid).toBe(false);
      expect(result.errorType).toBe('beforeStart');
    });
  });

  describe('formatDate', () => {
    it('应该正确格式化中文日期', () => {
      const dateString = '2023-12-25';
      const formatted = formatDate(dateString, 'zh-CN');
      expect(formatted).toContain('2023');
      expect(formatted).toContain('12');
      expect(formatted).toContain('25');
    });

    it('应该正确格式化英文日期', () => {
      const dateString = '2023-12-25';
      const formatted = formatDate(dateString, 'en-US');
      expect(formatted).toContain('2023');
      expect(formatted).toContain('December');
      expect(formatted).toContain('25');
    });
  });

  describe('getDaysDifference', () => {
    it('应该正确计算日期差', () => {
      const date1 = '2023-12-01';
      const date2 = '2023-12-05';
      const diff = getDaysDifference(date1, date2);
      expect(diff).toBe(4);
    });

    it('应该处理负数差值', () => {
      const date1 = '2023-12-05';
      const date2 = '2023-12-01';
      const diff = getDaysDifference(date1, date2);
      expect(diff).toBe(-4);
    });

    it('应该处理相同日期', () => {
      const date = '2023-12-01';
      const diff = getDaysDifference(date, date);
      expect(diff).toBe(0);
    });
  });
});
