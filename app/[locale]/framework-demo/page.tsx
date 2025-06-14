'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Rocket,
  Zap,
  Shield,
  BarChart3,
  Search,
  Settings,
  Bell,
  Database,
  Cpu,
  Monitor
} from 'lucide-reactt('common.exportdef')1月', value: 65 },
    { label: '2月', value: 78 },
    { label: '3月', value: 90 },
    { label: '4月', value: 81 },
    { label: t('common.5月'), value: 95 },
    { label: t('common.6月t('common.value88')演示功能: ${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8t('common.头部')text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4t('common.PeriodHub')text-xl text-gray-600 max-w-3xl mx-auto">
            体验我们全新的高级框架系统，包含状态管理、性能监控、缓存系统、高级组件等强大功能
          </p>
        </div>

        {/* 功能演示网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12t('common.Toast通知系统')bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Bell className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semiboldt('common.Toast通知系统h')text-gray-600 mb-4">
              高级通知系统，支持多种类型、自动关闭、动画效果
            </p>
            <button
              onClick={() => showDemo(t('common.Toast通知'))}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colorst('common.显示随机通知')bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semiboldt('common.模态框系统h3')text-gray-600 mb-4">
              灵活的模态框系统，支持确认对话框、自定义内容、动画效果
            </p>
            <button
              onClick={() => showDemo(t('common.模态框'))}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colorst('common.打开确认对话框')bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semiboldt('common.数据可视化h3')text-gray-600 mb-4">
              内置图表组件，支持线图、柱图、饼图等多种类型
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600t('common.图表演示区域p')bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Search className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-semiboldt('common.搜索系统h3')text-gray-600 mb-4">
              高级搜索功能，支持防抖、过滤、排序、历史记录
            </p>
            <input
              type="text"
              placeholder=t('common.搜索演示')
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparentt('common.div')grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 text-blue-600 border-blue-200 border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80t('common.缓存命中率p')text-2xl font-bold mt-1">95%</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">+5.2%</span>
                </div>
              </div>
              <Database className="w-6 h-6 opacity-80" />
            </div>
          </div>

          <div className="bg-green-50 text-green-600 border-green-200 border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80t('common.页面加载时间p')text-2xl font-bold mt-1">1.2s</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">-12.3%</span>
                </div>
              </div>
              <Zap className="w-6 h-6 opacity-80" />
            </div>
          </div>

          <div className="bg-red-50 text-red-600 border-red-200 border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80t('common.错误计数p')text-2xl font-bold mt-1">0</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">0%</span>
                </div>
              </div>
              <Shield className="w-6 h-6 opacity-80" />
            </div>
          </div>

          <div className="bg-purple-50 text-purple-600 border-purple-200 border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80t('common.API调用p')text-2xl font-bold mt-1">5</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">+8.7%</span>
                </div>
              </div>
              <Cpu className="w-6 h-6 opacity-80t('common.div')bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">🚀 框架革命成果展示</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => showDemo(t('common.缓存系统'))}
              className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colorst('common.测试缓存系统')性能监控')}
              className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colorst('common.测试性能监控')状态管理')}
              className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colorst('common.查看状态管理')mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-2t('common.框架革命完成h4')text-gray-600">
              我们成功实现了企业级的React框架，包含状态管理、性能监控、缓存系统、高级组件等功能。
              现在可以继续优化和扩展更多功能！
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
