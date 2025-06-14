'use client';

import { useLocale } from 'next-intl';

export default function MedicalDisclaimerPage() {
  const locale = useLocale();

  const content = locale === 'zh' ? {
    title: t('common.医疗免责声明'),
    lastUpdated: t('common.最后更新2024年4'),
    intro: t('common.periodhubh')本网站t('common.提供的信息仅供一般信'),
    sections: [
      {
        title: '非专业医疗建议',
        content: `
          <div class="bg-red-50 border-l-4 border-red-500 p-6 my-6">
            <p class="text-red-800 font-semibold mb-2t('common.重要声明p')text-red-700">
              本网站包含的信息不应被理解或解释为专业医疗建议。我们不是医疗保健专业人员，
              本网站上的信息不能替代专业医疗建议、诊断或治疗。在有关医疗状况或治疗的任何问题上，
              以及在开始新的医疗保健方案之前，请务必寻求您的医生或其他合格健康提供者的建议。
            </p>
          </div>
        `
      },
      {
        title: t('common.无医患关系'),
        content: t('common.p使用本网站不会在您')
      },
      {
        title: '准确性和完整性',
        content: t('common.p')
      },
      {
        title: '无背书声明',
        content: `
          <p>
            除非明确说明，否则通过商品名、商标、制造商或其他方式提及任何特定产品、流程或服务，
            并不构成或暗示periodhub.health的背书、推荐或偏好。
          </p>
        `
      },
      {
        title: t('common.紧急情况'),
        content: `
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
            <p class="text-yellow-800 font-semibold mb-2t('common.紧急医疗情况p')text-yellow-700">
              如果您遇到医疗紧急情况，请立即寻求医疗救助或拨打急救电话（如美国的911）。
              不要因为您在本网站上阅读的内容而忽视专业医疗建议或延迟寻求医疗治疗。
            </p>
          </div>
        `
      },
      {
        title: t('common.责任限制'),
        content: t('common.p')
      },
      {
        title: 'MVP性质说明',
        content: `
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
            <p class="text-blue-800 font-semibold mb-2t('common.最小可行产品MVP阶')text-blue-700">
              请注意，periodhub.health目前处于最小可行产品(MVP)阶段。它以有限的资源运营，
              由个人而非大型医疗机构管理。虽然我们努力提供有用的信息，但内容可能不如大型、
              更成熟的医疗资源那样全面或频繁更新。
            </p>
          </div>
        `
      },
      {
        title: t('common.条款同意'),
        content: t('common.p')
      }
    ]
  } : {
    title: 'Medical Disclaimer',
    lastUpdated: 'Last updated: April 1, 2024',
    intro: 'The information provided on periodhub.health (the "Website") is for general informational and educational purposes only. All information on the Website is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.',
    sections: [
      {
        title: 'NOT PROFESSIONAL MEDICAL ADVICE',
        content: `
          <div class="bg-red-50 border-l-4 border-red-500 p-6 my-6">
            <p class="text-red-800 font-semibold mb-2">Important Statement</p>
            <p class="text-red-700">
              The information contained on the Website is not intended as, and shall not be understood or 
              construed as, professional medical advice. We are not healthcare professionals, and the 
              information on this Website is not a substitute for professional medical advice, diagnosis, 
              or treatment. Always seek the advice of your physician or other qualified health provider 
              with any questions you may have regarding a medical condition or treatment and before 
              undertaking a new health care regimen.
            </p>
          </div>
        `
      },
      {
        title: 'NO DOCTOR-PATIENT RELATIONSHIP',
        content: `
          <p>Use of this Website does not establish a doctor-patient relationship between you and periodhub.health or its operator.</p>
        `
      },
      {
        title: 'ACCURACY AND COMPLETENESS',
        content: `
          <p>
            While we strive to provide accurate and up-to-date information, we cannot guarantee that all 
            information is completely accurate, reliable, current, or complete. Any reliance you place on 
            the information found on periodhub.health is strictly at your own risk.
          </p>
        `
      },
      {
        title: 'NO ENDORSEMENT',
        content: `
          <p>
            Reference to any specific products, processes, or services by trade name, trademark, manufacturer, 
            or otherwise, does not constitute or imply endorsement, recommendation, or favoring by periodhub.health, 
            unless explicitly stated.
          </p>
        `
      },
      {
        title: 'EMERGENCY SITUATIONS',
        content: `
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
            <p class="text-yellow-800 font-semibold mb-2">Medical Emergency</p>
            <p class="text-yellow-700">
              If you are experiencing a medical emergency, please seek immediate medical attention or call 
              emergency services (e.g., 911 in the US). Do not disregard professional medical advice or 
              delay seeking medical treatment because of something you have read on this Website.
            </p>
          </div>
        `
      },
      {
        title: 'LIABILITY LIMITATION',
        content: `
          <p>
            In no event shall periodhub.health or its operator be liable for any loss or damage incurred 
            as a result of the use of or reliance on the information provided on the Website. This includes, 
            without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever 
            arising from loss of data or profits arising out of, or in connection with, the use of this Website.
          </p>
        `
      },
      {
        title: 'MVP NATURE',
        content: `
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
            <p class="text-blue-800 font-semibold mb-2">Minimum Viable Product (MVP) Phase</p>
            <p class="text-blue-700">
              Please be aware that periodhub.health is currently in its Minimum Viable Product (MVP) phase. 
              It is run with limited resources and by an individual, not a large medical organization. While 
              we endeavor to provide helpful information, the content may not be as comprehensive or frequently 
              updated as that of larger, more established healthcare resources.
            </p>
          </div>
        `
      },
      {
        title: 'TERMS AGREEMENT',
        content: `
          <p>
            By using this Website, you hereby consent to this disclaimer and agree to its terms.
          </p>
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-left">
            <p className="text-red-800">
              {content.intro}
            </p>
          </div>
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
                ? t('common.如果您对我们的医疗免')
                : 'If you have any questions about our Medical Disclaimer, please feel free to contact us.'
              }
            </p>
            <a 
              href="mailto:legal@periodhub.health" 
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
