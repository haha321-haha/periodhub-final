/**
 * 日期验证工具函数
 * 用于确保所有日期输入组件的一致性验证
 */

/**
 * 获取今天的日期字符串（YYYY-MM-DD格式）
 * 用于日期输入的max属性
 */
export const getTodayDateString = (): string => {
  return new Date().toISOString().split('T')[0];
};

/**
 * 验证日期是否有效（不能是未来日期）
 * @param dateString - 日期字符串（YYYY-MM-DD格式）
 * @returns boolean - 是否为有效日期
 */
export const isValidDate = (dateString: string): boolean => {
  if (!dateString) return false;
  
  const selectedDate = new Date(dateString);
  const today = new Date();
  
  // 设置为今天的最后一刻，确保今天的日期也被认为是有效的
  today.setHours(23, 59, 59, 999);
  
  // 检查日期格式是否正确
  if (isNaN(selectedDate.getTime())) return false;
  
  // 检查是否为未来日期
  return selectedDate <= today;
};

/**
 * 验证结束日期是否有效（不能早于开始日期，不能是未来日期）
 * @param startDate - 开始日期字符串
 * @param endDate - 结束日期字符串
 * @returns object - 验证结果
 */
export const validateEndDate = (startDate: string, endDate: string): {
  isValid: boolean;
  errorType?: 'future' | 'beforeStart' | 'invalid';
} => {
  if (!endDate) return { isValid: true }; // 空值是允许的
  
  // 检查是否为未来日期
  if (!isValidDate(endDate)) {
    return { isValid: false, errorType: 'future' };
  }
  
  // 检查是否早于开始日期
  if (startDate && new Date(endDate) < new Date(startDate)) {
    return { isValid: false, errorType: 'beforeStart' };
  }
  
  return { isValid: true };
};

/**
 * 格式化日期显示
 * @param dateString - 日期字符串
 * @param locale - 语言环境（默认为中文）
 * @returns string - 格式化后的日期字符串
 */
export const formatDate = (dateString: string, locale: string = 'zh-CN'): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * 计算两个日期之间的天数差
 * @param fromDate - 起始日期
 * @param toDate - 结束日期
 * @returns number - 天数差
 */
export const getDaysDifference = (fromDate: string, toDate: string): number => {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const diffTime = to.getTime() - from.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * 获取日期验证错误消息的键
 * @param errorType - 错误类型
 * @returns string - 翻译键
 */
export const getDateValidationErrorKey = (errorType: 'future' | 'beforeStart' | 'invalid'): string => {
  switch (errorType) {
    case 'future':
      return 'dateValidation.futureDate';
    case 'beforeStart':
      return 'dateValidation.beforeStartDate';
    case 'invalid':
      return 'dateValidation.invalidDate';
    default:
      return 'dateValidation.invalidDate';
  }
};
