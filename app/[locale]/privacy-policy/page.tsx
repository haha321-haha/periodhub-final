import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

// Types
type Locale = 'en' | 'zh';

// Generate metadata for the privacy policy page
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const title = locale === 'zh' ? t('common.隐私政策') : 'Privacy Policy';
  const description = locale === 'zh' 
    ? t('common.了解我们如何收集使用')
    : 'Learn how we collect, use, and protect your personal information.';

  return {
    title: `${title} | periodhub.health`,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function PrivacyPolicyPage({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  unstable_setRequestLocale(locale);

  const content = locale === 'zh' ? {
    title: t('common.隐私政策'),
    lastUpdated: t('common.最后更新2024年4'),
    sections: [
      {
        title: t('common.1信息收集'),
        content: t('common.p我们可能收集以下类')
      },
      {
        title: '2. 信息使用',
        content: `
          <p>我们使用收集的信息用于：</p>
          <ul>
            <li>提供和改进我们的服务</li>
            <li>个性化您的用户体验</li>
            <li>发送重要通知和更新</li>
            <li>进行数据分析以改善网站功能</li>
            <li>确保网站安全和防止欺诈</li>
          </ul>
        `
      },
      {
        title: '3. 信息共享',
        content: t('common.p我们不会出售交易或')
      },
      {
        title: '4. 数据安全',
        content: `
          <p>我们采取适当的安全措施来保护您的个人信息：</p>
          <ul>
            <li>使用SSL加密技术保护数据传输</li>
            <li>定期更新安全协议</li>
            <li>限制员工访问个人信息</li>
            <li>定期备份和安全存储数据</li>
          </ul>
          <p>但请注意，没有任何互联网传输或存储方法是100%安全的。</p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p class="text-blue-800t('common.strongMVP阶')
      },
      {
        title: '5. Cookie使用',
        content: `
          <p>我们使用Cookie来：</p>
          <ul>
            <li>记住您的偏好设置</li>
            <li>分析网站流量</li>
            <li>改善用户体验</li>
            <li>提供个性化内容</li>
          </ul>
          <p>您可以通过浏览器设置控制Cookie的使用。</p>
        `
      },
      {
        title: t('common.6您的权利'),
        content: t('common.p您有权p')
      },
      {
        title: '7. 联系我们',
        content: `
          <p>如果您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>
          <ul>
            <li>电子邮件：tiyibaofu@outlook.com</li>
            <li>邮寄地址：[公司地址]</li>
          </ul>
        `
      }
    ]
  } : {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 1, 2024',
    sections: [
      {
        title: '1. Information Collection',
        content: `
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> When you register an account or use our services, we may collect your name, email address, and other information.</li>
            <li><strong>Health Information:</strong> Health-related information you provide when using our symptom tracking tools.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including access times, page views, etc.</li>
            <li><strong>Technical Information:</strong> Your IP address, browser type, device information, etc.</li>
          </ul>
        `
      },
      {
        title: '2. Information Use',
        content: `
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Personalize your user experience</li>
            <li>Send important notices and updates</li>
            <li>Conduct data analysis to improve website functionality</li>
            <li>Ensure website security and prevent fraud</li>
          </ul>
        `
      },
      {
        title: '3. Information Sharing',
        content: `
          <p>We do not sell, trade, or transfer your personal information to third parties, except when:</p>
          <ul>
            <li>We have your explicit consent</li>
            <li>Required by law or court order</li>
            <li>To protect our rights, property, or safety</li>
            <li>Working with trusted third-party service providers (who agree to confidentiality)</li>
          </ul>
        `
      },
      {
        title: '4. Data Security',
        content: `
          <p>We take appropriate security measures to protect your personal information:</p>
          <ul>
            <li>Use SSL encryption technology to protect data transmission</li>
            <li>Regularly update security protocols</li>
            <li>Limit employee access to personal information</li>
            <li>Regular backup and secure data storage</li>
          </ul>
          <p>However, please be aware that no data transmission over the internet or storage system can be guaranteed to be 100% secure.</p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p class="text-blue-800"><strong>MVP Phase Notice:</strong> Please be aware that periodhub.health is currently in its Minimum Viable Product (MVP) phase, focused on minimal infrastructure and cost, aiming for near-zero data collection of personal information.</p>
          </div>
        `
      },
      {
        title: '5. Cookie Usage',
        content: `
          <p>We use cookies to:</p>
          <ul>
            <li>Remember your preference settings</li>
            <li>Analyze website traffic</li>
            <li>Improve user experience</li>
            <li>Provide personalized content</li>
          </ul>
          <p>You can control cookie usage through your browser settings.</p>
        `
      },
      {
        title: '6. Your Rights',
        content: `
          <p>You have the right to:</p>
          <ul>
            <li>Access information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Data portability</li>
          </ul>
        `
      },
      {
        title: '7. Contact Us',
        content: `
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: tiyibaofu@outlook.com</li>
            <li>Mailing Address: [Company Address]</li>
          </ul>
        `
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <header className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            {content.title}
          </h1>
          <p className="text-neutral-600 mb-8">
            {content.lastUpdated}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            {content.sections.map((section, index) => (
              <section key={index} className="border-b border-neutral-200 pb-6 last:border-b-0">
                <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                  {section.title}
                </h2>
                <div 
                  className="prose prose-neutral max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-neutral-50 py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">
              {locale === 'zh' ? t('common.有疑问') : 'Questions?'}
            </h2>
            <p className="text-neutral-600 mb-6">
              {locale === 'zh' 
                ? t('common.如果您对我们的隐私政')
                : 'If you have any questions about our Privacy Policy, please feel free to contact us.'
              }
            </p>
            <a
              href="mailto:tiyibaofu@outlook.com"
              className="btn-primary"
            >
              {locale === 'zh' ? t('common.联系我们') : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
