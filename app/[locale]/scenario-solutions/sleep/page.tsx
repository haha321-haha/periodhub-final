import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Moon, 
  Volume2, 
  Bed, 
  CheckCircle,
  ArrowLeft,
  Clock,
  Thermometer,
  Heart
} from 'lucide-react';

type Locale = 'en' | 'zh';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'scenarioSolutionsPage' });
  
  return {
    title: `Sleep Solutions - Period Hub`,
    description: 'Sleep solutions for menstrual pain relief',
  };
}

export default async function SleepScenarioPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  const t = await getTranslations('scenarioSolutionsPage');

  return (
    <div className="space-y-12">
      <nav className="flex items-center space-x-2 text-sm text-neutral-600">
        <Link href={`/${locale}/scenario-solutions`} className="hover:text-primary-600 transition-colors">
          Scenario Solutions
        </Link>
        <span>/</span>
        <span className="text-neutral-800">Sleep Solutions</span>
      </nav>

      <header className="text-center">
        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Moon className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
          {locale === 'zh' ? '睡眠解决方案' : 'Sleep Solutions'}
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {locale === 'zh' ? '科学的睡眠方法帮助缓解经期不适' : 'Scientific sleep methods to help relieve menstrual discomfort'}
        </p>
      </header>

      <section className="bg-gradient-to-br from-purple-50 to-neutral-50 p-6 md:p-8 rounded-xl">
        <div className="flex items-center mb-6">
          <Volume2 className="w-6 h-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-neutral-800">
            {locale === 'zh' ? '助眠音频系统' : 'Sleep Audio System'}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 mb-4">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              {locale === 'zh' ? '白噪音音频' : 'White Noise Audio'}
            </h3>
            <p className="text-neutral-600 mb-4 text-sm">
              {locale === 'zh' ? '雨声、海浪声、风声等自然白噪音' : 'Rain, ocean waves, wind and other natural white noise'}
            </p>
            <ul className="space-y-2">
              <li className="flex items-start text-sm text-neutral-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                {locale === 'zh' ? '掩盖环境杂音，创造安静睡眠环境' : 'Mask environmental noise, create quiet sleep environment'}
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-50 text-purple-600 mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">
              {locale === 'zh' ? '冥想引导音频' : 'Guided Meditation Audio'}
            </h3>
            <p className="text-neutral-600 mb-4 text-sm">
              {locale === 'zh' ? '专业冥想导师引导的睡眠冥想练习' : 'Sleep meditation practices guided by professional meditation instructors'}
            </p>
            <ul className="space-y-2">
              <li className="flex items-start text-sm text-neutral-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                {locale === 'zh' ? '引导深呼吸、身体扫描、放松冥想' : 'Guides deep breathing, body scanning, relaxation meditation'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Link 
          href={`/${locale}/scenario-solutions`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {locale === 'zh' ? '返回场景解决方案总览' : 'Back to Scenario Solutions Overview'}
        </Link>
      </div>
    </div>
  );
}
