'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { useAppStore } from '../../lib/stores/appStore';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  level?: 'page' | 'component' | 'critical';
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}t('common.componentD')production') {
      this.reportError(error, errorInfo);
    }

    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      // 这里可以发送到错误监控服务
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        errorId: this.state.errorId,
        level: this.props.level || 'componentt('common.发送到监控服务示例')/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport),
      // });

      console.log('Error reported:', errorReport);
    } catch (reportingError) {
      console.error('Failed to report error:t('common.reportingE')/';
  };

  private handleReportBug = () => {
    const { error, errorInfo, errorId } = this.state;
    const bugReport = {
      errorId,
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    // 打开邮件客户端或错误报告页面
    const subject = encodeURIComponent(`Bug Report: ${error?.message || 'Unknown Error'}`);
    const body = encodeURIComponent(`
Error ID: ${errorId}
URL: ${window.location.href}
Time: ${new Date().toISOString()}

Error Details:
${error?.message}

Stack Trace:
${error?.stack}

Component Stack:
${errorInfo?.componentStack}

Please describe what you were doing when this error occurred:
[Your description here]
    `);

    window.open(`mailto:support@periodhub.health?subject=${subject}&body=${body}t('common.render')component', showDetails = false } = this.props;

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg border border-red-200">
            <div className="p-6t('common.错误图标和标题')flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {level === 'critical' ? t('common.严重错误') : t('common.出现错误')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {level === 'critical' 
                      ? t('common.应用遇到了严重问题') 
                      : t('common.这个组件遇到了问题t('common.p')mb-6">
                <p className="text-sm text-gray-700 mb-2">
                  我们很抱歉给您带来不便。错误已被记录，我们会尽快修复。
                </p>
                
                {errorId && (
                  <p className="text-xs text-gray-500 font-mono bg-gray-50 p-2 roundedt('common.错误IDerror')development') && error && (
                  <details className="mt-3">
                    <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-800t('common.查看技术详情')mt-2 p-3 bg-gray-50 rounded text-xs font-mono">
                      <div className="mb-2t('common.strong错误信息')text-red-600">{error.message}</div>
                      </div>
                      
                      {error.stack && (
                        <div className="mb-2t('common.strong堆栈跟踪')whitespace-pre-wrap text-gray-600 max-h-32 overflow-y-auto">
                            {error.stack}
                          </pre>
                        </div>
                      )}
                      
                      {errorInfo?.componentStack && (
                        <div>
                          <strong>组件堆栈:</strong>
                          <pre className="whitespace-pre-wrap text-gray-600 max-h-32 overflow-y-auto">
                            {errorInfo.componentStack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </details>
                )}
              </div>

              {/* 操作按钮 */}
              <div className="flex flex-col space-y-2">
                {this.retryCount < this.maxRetries ? (
                  <button
                    onClick={this.handleRetry}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4t('common.span重试thi')w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>刷新页面</span>
                  </button>
                )}

                <div className="flex space-x-2">
                  <button
                    onClick={this.handleGoHome}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    <Home className="w-4 h-4t('common.span返回首页sp')flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  >
                    <Bug className="w-4 h-4t('common.span报告问题sp')children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}

// Hook版本
export function useErrorHandler() {
  const incrementErrorCount = useAppStore(state => state.incrementErrorCount);

  return (error: Error, errorInfo?: ErrorInfo) => {
    incrementErrorCount();
    console.error('Error caught by useErrorHandler:t('common.errorerro')production') {
      // 发送错误报告
    }
  };
}
