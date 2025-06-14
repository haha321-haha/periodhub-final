'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function UserSuccessStories() {
  const locale = useLocale();

  const stories = [
    {
      id: 1,
      name: locale === 'en' ? 'Lisa Li' : t('common.李小雅'),
      role: locale === 'en' ? 'IT Professional, 25' : t('common.IT从业者25岁'),
      initial: locale === 'en' ? 'L' : '李',
      testimonial: locale === 'en'
        ? '"Through personalized assessment, I discovered I have prostaglandin-excess type dysmenorrhea. Following the platform\'s dietary and exercise recommendations, my pain intensity dropped from 8 to 3 points in 3 months, and my work efficiency improved significantly!"'
        : 't('common.通过个性化评估发现我')',
      bgColor: 'bg-primary-100',
      textColor: 'text-primary-600'
    },
    {
      id: 2,
      name: locale === 'en' ? 'Tina Zhang' : t('common.张婷婷'),
      role: locale === 'en' ? 'University Student, 20' : t('common.大学生20岁'),
      initial: locale === 'en' ? 'T' : '张',
      testimonial: locale === 'en'
        ? '"The teen section content is so helpful! I learned heat therapy, yoga, and breathing techniques. Now I\'m not afraid of getting my period during exams. I even helped my roommates improve, and our relationships got better!"'
        : 't('common.青少年专区的内容太有')',
      bgColor: 'bg-secondary-100',
      textColor: 'text-secondary-600'
    },
    {
      id: 3,
      name: locale === 'en' ? 'Wendy Wang' : t('common.王芳'),
      role: locale === 'en' ? 'Working Mother, 32' : t('common.职场妈妈32岁'),
      initial: locale === 'en' ? 'W' : '王',
      testimonial: locale === 'en'
        ? '"The pain diary feature helped me discover the connection between menstrual pain and stress. Combined with doctor\'s treatment and platform recommendations, I\'ve basically said goodbye to monthly suffering, and my quality of life has improved significantly."'
        : 't('common.疼痛日志功能帮我发现')',
      bgColor: 'bg-accent-100',
      textColor: 'text-accent-600'
    }
  ];

  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-10 text-center">
          {locale === 'en' ? 'User Success Stories' : t('common.用户成功案例')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="card">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full ${story.bgColor} flex items-center justify-center text-lg font-bold ${story.textColor} mr-4`}>
                  {story.initial}
                </div>
                <div>
                  <h3 className="font-semibold">{story.name}</h3>
                  <p className="text-sm text-neutral-500">{story.role}</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-4">
                {story.testimonial}
              </p>
              <div className="flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-neutral-700">
            {locale === 'en'
              ? 'Over 10,000+ women have found their own solutions here'
              : t('common.已有超过10000女')
            }
          </p>
          <Link href={`/${locale}/interactive-tools`} className="btn-primary mt-4 mobile-touch-target">
            {locale === 'en' ? 'Join them and start your healing journey' : t('common.加入她们开始您的康复')}
          </Link>
        </div>
      </div>
    </section>
  );
}
