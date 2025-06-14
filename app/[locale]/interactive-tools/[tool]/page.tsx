import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamic imports for interactive tools
const PainTrackerTool = dynamic(() => import('../components/PainTrackerTool'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
  </div>
});

const SymptomAssessmentTool = dynamic(() => import('../components/SymptomAssessmentTool'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
  </div>
});

const ConstitutionTestTool = dynamic(() => import('../components/ConstitutionTestTool'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
  </div>
});

const PeriodPainAssessmentTool = dynamic(() => import('../components/PeriodPainAssessmentTool'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
  </div>
});

// Types
type Locale = 'en' | 'zh';

interface Tool {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    estimatedTime: string;
  };
  content: string;
  locale: Locale;
}

// Mock function to get tool data - replace with actual data fetching
const getToolBySlug = async (slug: string, locale: Locale): Promise<Tool | null> => {
  const sampleTools: Tool[] = [
    {
      slug: 'symptom-assessment',
      frontmatter: {
        title: locale === 'zh' ? t('tools.症状评估工具') : 'Symptom Assessment Tool',
        description: locale === 'zh'
          ? t('tools.通过专业问卷快速识别')
          : 'Quickly identify pain types through professional questionnaires and receive precise personalized recommendations.',
        category: locale === 'zh' ? t('tools.评估工具') : 'Assessment',
        difficulty: locale === 'zh' ? t('tools.简单') : 'Easy',
        estimatedTime: locale === 'zh' ? t('tools.510分钟') : '5-10 minutes',
      },
      content: locale === 'zh' ? `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 class="text-lg font-semibold text-blue-800 mb-2t('tools.开始评估前h3')text-blue-700">请确保您在一个安静、私密的环境中，可以专心回答问题。这个评估将帮助您更好地了解自己的症状模式。</p>
        </div>
        
        <h2>症状评估问卷</h2>
        <p>请根据您最近3个月的经期体验回答以下问题：</p>
        
        <div class="space-y-6 mt-6">
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4t('tools.1疼痛强度h3')text-gray-600 mb-3">请评估您经期疼痛的平均强度（1-10分，10分为最痛）：</p>
            <div class="grid grid-cols-5 gap-2">
              <button class="p-3 border rounded hover:bg-primary-50 transition-colorst('tools.12分brspan')text-xs text-gray-500t('tools.轻微spanbutt')p-3 border rounded hover:bg-primary-50 transition-colorst('tools.34分brspan')text-xs text-gray-500t('tools.轻度spanbutt')p-3 border rounded hover:bg-primary-50 transition-colorst('tools.56分brspan')text-xs text-gray-500t('tools.中度spanbutt')p-3 border rounded hover:bg-primary-50 transition-colorst('tools.78分brspan')text-xs text-gray-500t('tools.重度spanbutt')p-3 border rounded hover:bg-primary-50 transition-colorst('tools.910分brspan')text-xs text-gray-500t('tools.极重spanbutt')bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4t('tools.2疼痛类型h3')text-gray-600 mb-3">您的疼痛主要表现为：</p>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" class="mr-3t('tools.痉挛性疼痛抽筋样')flex items-center">
                <input type="checkbox" class="mr-3t('tools.胀痛腹部胀满')flex items-center">
                <input type="checkbox" class="mr-3t('tools.刺痛针扎样')flex items-center">
                <input type="checkbox" class="mr-3t('tools.钝痛持续性隐痛')flex items-center">
                <input type="checkbox" class="mr-3t('tools.放射痛向腰背部扩散')bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4">3. 伴随症状</h3>
            <p class="text-gray-600 mb-3t('tools.除了腹痛您还有以下症')grid grid-cols-2 gap-2">
              <label class="flex items-center">
                <input type="checkbox" class="mr-3t('tools.头痛')flex items-center">
                <input type="checkbox" class="mr-3t('tools.恶心呕吐')flex items-center">
                <input type="checkbox" class="mr-3t('tools.腰痛')flex items-center">
                <input type="checkbox" class="mr-3t('tools.乳房胀痛')flex items-center">
                <input type="checkbox" class="mr-3t('tools.情绪波动')flex items-center">
                <input type="checkbox" class="mr-3t('tools.疲劳乏力')flex items-center">
                <input type="checkbox" class="mr-3t('tools.失眠')flex items-center">
                <input type="checkbox" class="mr-3t('tools.食欲改变')bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4">4. 疼痛时间</h3>
            <p class="text-gray-600 mb-3t('tools.疼痛通常在什么时候开')space-y-2">
              <label class="flex items-center">
                <input type="radio" name="pain-timing" class="mr-3t('tools.月经前12天')flex items-center">
                <input type="radio" name="pain-timing" class="mr-3t('tools.月经第一天')flex items-center">
                <input type="radio" name="pain-timing" class="mr-3t('tools.月经期间持续')flex items-center">
                <input type="radio" name="pain-timing" class="mr-3t('tools.排卵期也有疼痛')text-center">
            <button class="btn-primary px-8 py-3">
              提交评估
            </button>
          </div>
        </div>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
          <h3 class="text-lg font-semibold text-yellow-800 mb-2t('tools.重要提醒h3')text-yellow-700t('tools.此评估仅供参考不能替') : `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 class="text-lg font-semibold text-blue-800 mb-2">Before Starting</h3>
          <p class="text-blue-700">Please ensure you're in a quiet, private environment where you can focus on answering the questions. This assessment will help you better understand your symptom patterns.</p>
        </div>
        
        <h2>Symptom Assessment Questionnaire</h2>
        <p>Please answer the following questions based on your menstrual experience over the past 3 months:</p>
        
        <div class="space-y-6 mt-6">
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4">1. Pain Intensity</h3>
            <p class="text-gray-600 mb-3">Please rate the average intensity of your menstrual pain (1-10 scale, 10 being the worst):</p>
            <div class="grid grid-cols-5 gap-2">
              <button class="p-3 border rounded hover:bg-primary-50 transition-colors">1-2<br><span class="text-xs text-gray-500">Minimal</span></button>
              <button class="p-3 border rounded hover:bg-primary-50 transition-colors">3-4<br><span class="text-xs text-gray-500">Mild</span></button>
              <button class="p-3 border rounded hover:bg-primary-50 transition-colors">5-6<br><span class="text-xs text-gray-500">Moderate</span></button>
              <button class="p-3 border rounded hover:bg-primary-50 transition-colors">7-8<br><span class="text-xs text-gray-500">Severe</span></button>
              <button class="p-3 border rounded hover:bg-primary-50 transition-colors">9-10<br><span class="text-xs text-gray-500">Extreme</span></button>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4">2. Pain Type</h3>
            <p class="text-gray-600 mb-3">Your pain is mainly characterized as:</p>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" class="mr-3"> Cramping (spasm-like)
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-3"> Bloating (abdominal fullness)
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-3"> Sharp pain (stabbing)
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-3"> Dull ache (continuous)
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-3"> Radiating pain (to back/legs)
              </label>
            </div>
          </div>
          
          <div class="text-center">
            <button class="btn-primary px-8 py-3">
              Submit Assessment
            </button>
          </div>
        </div>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
          <h3 class="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
          <p class="text-yellow-700">This assessment is for reference only and cannot replace professional medical diagnosis. If your symptoms are severe or worsening, please seek medical attention promptly.</p>
        </div>
      `,
      locale,
    },
    {
      slug: 'pain-tracker',
      frontmatter: {
        title: locale === 'zh' ? t('tools.疼痛追踪器') : 'Pain Tracker',
        description: locale === 'zh' 
          ? t('tools.记录疼痛模式分析趋势')
          : 'Track pain patterns, analyze trends, and optimize treatment effectiveness.',
        category: locale === 'zh' ? t('tools.追踪工具') : 'Tracking',
        difficulty: locale === 'zh' ? t('tools.简单') : 'Easy',
        estimatedTime: locale === 'zh' ? t('tools.每日23分钟') : '2-3 minutes daily',
      },
      content: locale === 'zh' ? t('tools.h2疼痛追踪工具h2')bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 class="text-lg font-semibold text-green-800 mb-2t('tools.使用建议h3')text-green-700">建议每天在固定时间记录，持续至少3个月经周期，以获得更准确的模式分析。</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4t('tools.今日记录h3')space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2t('tools.疼痛强度010la')range" min="0" max="10" class="w-full">
                <div class="flex justify-between text-xs text-gray-500 mt-1t('tools.span无痛span')block text-sm font-medium mb-2">月经状态</label>
                <select class="w-full p-2 border rounded">
                  <option>请选择</option>
                  <option>月经期</option>
                  <option>月经前期</option>
                  <option>月经后期</option>
                  <option>排卵期</option>
                  <option>其他时期</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2t('tools.使用的缓解方法lab')space-y-1">
                  <label class="flex items-center text-sm">
                    <input type="checkbox" class="mr-2t('tools.热敷')flex items-center text-sm">
                    <input type="checkbox" class="mr-2t('tools.药物')flex items-center text-sm">
                    <input type="checkbox" class="mr-2t('tools.运动')flex items-center text-sm">
                    <input type="checkbox" class="mr-2t('tools.休息')w-full btn-primary">保存今日记录</button>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4t('tools.趋势分析h3')space-y-4">
              <div class="bg-gray-100 p-4 rounded">
                <h4 class="font-medium mb-2t('tools.本月平均疼痛强度h4')text-2xl font-bold text-primary-600">6.2/10</div>
                <p class="text-sm text-gray-600t('tools.比上月下降08分')bg-gray-100 p-4 rounded">
                <h4 class="font-medium mb-2t('tools.疼痛天数h4')text-2xl font-bold text-secondary-600t('tools.4天div')text-sm text-gray-600t('tools.本周期疼痛持续时间p')bg-gray-100 p-4 rounded">
                <h4 class="font-medium mb-2t('tools.最有效缓解方法h4')text-lg font-semibold text-accent-600t('tools.热敷休息div')text-sm text-gray-600">基于您的记录分析</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 bg-purple-50 border-l-4 border-purple-500 p-6">
          <h3 class="text-lg font-semibold text-purple-800 mb-2t('tools.数据导出h3')text-purple-700 mb-4t('tools.您可以导出疼痛记录在')btn-outline">导出PDF报告</button>
        </div>
      ` : `
        <h2>Pain Tracking Tool</h2>
        <p>Track your daily pain to identify patterns and provide accurate symptom information to your healthcare provider.</p>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 class="text-lg font-semibold text-green-800 mb-2">Usage Tips</h3>
          <p class="text-green-700">We recommend recording at the same time each day for at least 3 menstrual cycles to get more accurate pattern analysis.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4">Today's Record</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">Pain Intensity (0-10)</label>
                <input type="range" min="0" max="10" class="w-full">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>No Pain</span>
                  <span>Extreme</span>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Menstrual Status</label>
                <select class="w-full p-2 border rounded">
                  <option>Please select</option>
                  <option>Menstrual period</option>
                  <option>Pre-menstrual</option>
                  <option>Post-menstrual</option>
                  <option>Ovulation</option>
                  <option>Other</option>
                </select>
              </div>
              
              <button class="w-full btn-primary">Save Today's Record</button>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="font-semibold mb-4">Trend Analysis</h3>
            <div class="space-y-4">
              <div class="bg-gray-100 p-4 rounded">
                <h4 class="font-medium mb-2">Average Pain This Month</h4>
                <div class="text-2xl font-bold text-primary-600">6.2/10</div>
                <p class="text-sm text-gray-600">Decreased by 0.8 from last month</p>
              </div>
              
              <div class="bg-gray-100 p-4 rounded">
                <h4 class="font-medium mb-2">Pain Days</h4>
                <div class="text-2xl font-bold text-secondary-600">4 days</div>
                <p class="text-sm text-gray-600">Duration this cycle</p>
              </div>
            </div>
          </div>
        </div>
      `,
      locale,
    },
    {
      slug: 'constitution-test',
      frontmatter: {
        title: locale === 'zh' ? t('tools.中医体质测试') : 'TCM Constitution Test',
        description: locale === 'zh'
          ? t('tools.通过8个问题了解您的')
          : 'Discover your TCM constitution type through 8 questions and get personalized acupoint, diet, and lifestyle recommendations.',
        category: locale === 'zh' ? t('tools.体质评估') : 'Constitution Assessment',
        difficulty: locale === 'zh' ? t('tools.简单') : 'Easy',
        estimatedTime: locale === 'zh' ? t('tools.58分钟') : '5-8 minutes',
      },
      content: '', // Content will be handled by the ConstitutionTestTool component
      locale,
    },
    {
      slug: 'period-pain-assessment',
      frontmatter: {
        title: locale === 'zh' ? t('tools.痛经速测小工具') : 'Period Pain Assessment Tool',
        description: locale === 'zh'
          ? t('tools.回答几个简单问题初步')
          : 'Answer a few simple questions to understand your period pain type and severity, and get personalized health recommendations.',
        category: locale === 'zh' ? t('tools.健康评估') : 'Health Assessment',
        difficulty: locale === 'zh' ? t('tools.简单') : 'Easy',
        estimatedTime: locale === 'zh' ? t('tools.35分钟') : '3-5 minutes',
      },
      content: '', // Content will be handled by the PeriodPainAssessmentTool component
      locale,
    },
    {
      slug: 'period-pain-assessment',
      frontmatter: {
        title: locale === 'zh' ? t('tools.痛经速测小工具') : 'Period Pain Assessment Tool',
        description: locale === 'zh'
          ? t('tools.回答几个简单问题初步')
          : 'Answer a few simple questions to understand your period pain type and severity, and get personalized health recommendations.',
        category: locale === 'zh' ? t('tools.健康评估') : 'Health Assessment',
        difficulty: locale === 'zh' ? t('tools.简单') : 'Easy',
        estimatedTime: locale === 'zh' ? t('tools.35分钟') : '3-5 minutes',
      },
      content: '', // Content will be handled by the PeriodPainAssessmentTool component
      locale,
    }
  ];

  const tool = sampleTools.find(t => t.slug === slug && t.locale === locale);
  return tool || null;
};

// Generate static params for all tools
export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'zh'];
  const toolSlugs = [
    'symptom-assessment',
    'pain-tracker',
    'constitution-test',
    'period-pain-assessment'
  ];

  const params = [];
  for (const locale of locales) {
    for (const tool of toolSlugs) {
      params.push({ locale, tool });
    }
  }

  return params;
}

// Generate metadata for the tool
export async function generateMetadata({
  params: { locale, tool }
}: {
  params: { locale: Locale; tool: string }
}): Promise<Metadata> {
  const toolData = await getToolBySlug(tool, locale);

  if (!toolData) {
    return {
      title: locale === 'zh' ? '工具未找到' : 'Tool Not Found',
      description: locale === 'zh' ? '抱歉，我们找不到您要查找的工具。' : 'Sorry, we could not find the tool you are looking for.',
    };
  }

  return {
    title: `${toolData.frontmatter.title} | periodhub.health`,
    description: toolData.frontmatter.description,
    openGraph: {
      title: toolData.frontmatter.title,
      description: toolData.frontmatter.description,
      type: 'website',
    },
  };
}

export default async function ToolPage({
  params: { locale, tool }
}: {
  params: { locale: Locale; tool: string }
}) {
  unstable_setRequestLocale(locale);

  const toolData = await getToolBySlug(tool, locale);
  const t = await getTranslations({ locale, namespace: 'common' });
  const tTool = await getTranslations({ locale, namespace: 'toolPage' });

  if (!toolData) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Back to Tools */}
      <div className="container-custom">
        <Link 
          href={`/${locale}/interactive-tools`} 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tTool('backToTools')}
        </Link>
      </div>

      {/* Tool Header */}
      <header className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-neutral-600 mb-4">
            <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
              {toolData.frontmatter.category}
            </span>
            <span>• {toolData.frontmatter.difficulty}</span>
            <span>• {toolData.frontmatter.estimatedTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            {toolData.frontmatter.title}
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            {toolData.frontmatter.description}
          </p>
        </div>
      </header>

      {/* Tool Content */}
      <main className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Render interactive tool if available */}
          {tool === 'pain-tracker' ? (
            <PainTrackerTool locale={locale} />
          ) : tool === 'symptom-assessment' ? (
            <SymptomAssessmentTool locale={locale} />
          ) : tool === 'constitution-test' ? (
            <ConstitutionTestTool locale={locale} />
          ) : tool === 'period-pain-assessment' ? (
            <PeriodPainAssessmentTool locale={locale} />
          ) : (
            <div
              className="prose prose-lg max-w-none prose-primary prose-headings:text-neutral-800 prose-p:text-neutral-700"
              dangerouslySetInnerHTML={{ __html: toolData.content }}
            />
          )}
        </div>
      </main>

      {/* Medical Disclaimer */}
      <section className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-6 rounded-r-lg">
            <p className="font-bold mb-2">
              {tTool('medicalDisclaimer')}
            </p>
            <p className="text-sm">
              {tTool('medicalDisclaimerText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
