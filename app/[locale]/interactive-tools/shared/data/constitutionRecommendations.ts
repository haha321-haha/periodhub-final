import { ConstitutionRecommendations, ConstitutionType } from '../types/constitution';

export const constitutionRecommendations: Record<string, Record<ConstitutionType, ConstitutionRecommendations>> = {
  zh: {
    balanced: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.足三里'),
            location: t('tools.膝盖下3寸胫骨外侧1'),
            function: t('tools.调理脾胃增强体质'),
            method: t('tools.顺时针按揉35分钟')
          },
          {
            name: t('tools.关元'),
            location: t('tools.肚脐下3寸'),
            function: t('tools.培元固本调理气血'),
            method: t('tools.温和按压23分钟')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.百会'),
            location: t('tools.头顶正中'),
            function: t('tools.提神醒脑调节情绪'),
            method: t('tools.轻柔按压12分钟')
          }
        ],
        massageTechnique: t('tools.温和按摩以酸胀感为度'),
        frequency: t('tools.每日12次'),
        duration: t('tools.每次1015分钟')
      },
      diet: {
        beneficial: [t('tools.五谷杂粮'), t('tools.新鲜蔬果'), t('tools.优质蛋白'), t('tools.适量坚果')],
        avoid: [t('tools.过度油腻'), t('tools.过度辛辣'), t('tools.过度生冷')],
        principles: [t('tools.饮食均衡'), t('tools.定时定量'), t('tools.细嚼慢咽')],
        sampleMeals: [t('tools.小米粥配青菜'), t('tools.蒸蛋羹'), t('tools.清炖鸡汤'), t('tools.时令水果')]
      },
      lifestyle: {
        exercise: [t('tools.太极拳'), t('tools.八段锦'), t('tools.慢跑'), t('tools.瑜伽')],
        sleep: [t('tools.规律作息'), t('tools.晚上11点前入睡'), t('tools.保证78小时睡眠')],
        emotional: [t('tools.保持心情愉快'), t('tools.适度社交'), t('tools.培养兴趣爱好')],
        seasonal: [t('tools.春季养肝'), t('tools.夏季养心'), t('tools.秋季养肺'), t('tools.冬季养肾')]
      },
      moxibustion: {
        points: [t('tools.足三里'), t('tools.关元')],
        timing: t('tools.每周23次'),
        duration: t('tools.每穴1520分钟'),
        frequency: t('tools.保健为主'),
        precautions: [t('tools.注意防烫'), t('tools.孕期禁用'), t('tools.饭后1小时进行')]
      }
    },
    qi_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.气海'),
            location: t('tools.肚脐下15寸'),
            function: t('tools.补气益气增强体力'),
            method: t('tools.顺时针按揉58分钟')
          },
          {
            name: t('tools.足三里'),
            location: t('tools.膝盖下3寸胫骨外侧1'),
            function: t('tools.健脾益气增强消化'),
            method: t('tools.重点按揉510分钟')
          },
          {
            name: t('tools.脾俞'),
            location: t('tools.第11胸椎棘突下旁开'),
            function: t('tools.健脾益气助消化'),
            method: t('tools.按压配合艾灸效果更佳')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.百会'),
            location: t('tools.头顶正中'),
            function: t('tools.升阳举陷提神益气'),
            method: t('tools.轻柔提拉按压')
          },
          {
            name: t('tools.太冲'),
            location: t('tools.足背第12跖骨间'),
            function: t('tools.疏肝理气调和气血'),
            method: t('tools.按压23分钟')
          }
        ],
        massageTechnique: t('tools.温和持续按压避免过度'),
        frequency: t('tools.每日2次早晚各一次'),
        duration: t('tools.每次1520分钟')
      },
      diet: {
        beneficial: [t('tools.黄芪'), t('tools.党参'), t('tools.山药'), t('tools.大枣'), t('tools.桂圆'), t('tools.小米'), t('tools.南瓜'), t('tools.胡萝卜')],
        avoid: [t('tools.生冷食物'), t('tools.过度油腻'), t('tools.难消化食物'), t('tools.过量生萝卜')],
        principles: [t('tools.温补脾胃'), t('tools.少食多餐'), t('tools.细嚼慢咽'), t('tools.避免过饱')],
        sampleMeals: [t('tools.黄芪炖鸡汤'), t('tools.山药小米粥'), t('tools.红枣桂圆茶'), t('tools.蒸蛋羹')]
      },
      lifestyle: {
        exercise: [t('tools.八段锦'), t('tools.太极拳'), t('tools.散步'), t('tools.轻度瑜伽')],
        sleep: [t('tools.早睡早起'), t('tools.午休30分钟'), t('tools.避免熬夜')],
        emotional: [t('tools.保持乐观'), t('tools.避免过度思虑'), t('tools.适度放松')],
        seasonal: [t('tools.春夏养阳'), t('tools.秋冬进补'), t('tools.避免过度劳累')]
      },
      moxibustion: {
        points: [t('tools.气海'), t('tools.关元'), t('tools.足三里'), t('tools.脾俞')],
        timing: t('tools.每日或隔日'),
        duration: t('tools.每穴2030分钟'),
        frequency: t('tools.连续调理23个月'),
        precautions: [t('tools.温度适中'), t('tools.避免烫伤'), t('tools.经期减量')]
      }
    },
    yang_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.命门'),
            location: t('tools.第2腰椎棘突下'),
            function: t('tools.温补肾阳强腰健肾'),
            method: t('tools.温热按压配合艾灸')
          },
          {
            name: t('tools.肾俞'),
            location: t('tools.第2腰椎棘突下旁开1'),
            function: t('tools.补肾壮阳强腰膝'),
            method: t('tools.双手同时按压')
          },
          {
            name: t('tools.关元'),
            location: t('tools.肚脐下3寸'),
            function: t('tools.温补下焦固本培元'),
            method: t('tools.顺时针按揉配合艾灸')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.涌泉'),
            location: t('tools.足底前13凹陷处'),
            function: t('tools.温补肾阳引火归元'),
            method: t('tools.睡前按摩至发热')
          }
        ],
        massageTechnique: t('tools.温热按摩配合艾灸效果'),
        frequency: t('tools.每日2次'),
        duration: t('tools.每次2030分钟')
      },
      diet: {
        beneficial: [t('tools.羊肉'), t('tools.韭菜'), t('tools.生姜'), t('tools.肉桂'), t('tools.核桃'), t('tools.栗子'), t('tools.黑豆'), t('tools.枸杞')],
        avoid: [t('tools.生冷食物'), t('tools.寒性水果'), t('tools.冰饮'), t('tools.苦寒药物')],
        principles: [t('tools.温补阳气'), t('tools.忌食生冷'), t('tools.适当进补'), t('tools.温热为主')],
        sampleMeals: [t('tools.当归生姜羊肉汤'), t('tools.韭菜炒蛋'), t('tools.核桃粥'), t('tools.枸杞茶')]
      },
      lifestyle: {
        exercise: [t('tools.慢跑'), t('tools.太极拳'), t('tools.八段锦'), t('tools.适度力量训练')],
        sleep: [t('tools.保暖睡眠'), t('tools.避免夜间受凉'), t('tools.充足睡眠')],
        emotional: [t('tools.保持积极心态'), t('tools.避免过度忧虑')],
        seasonal: [t('tools.春夏养阳'), t('tools.秋冬重点保暖'), t('tools.避免贪凉')]
      },
      moxibustion: {
        points: [t('tools.命门'), t('tools.肾俞'), t('tools.关元'), t('tools.足三里')],
        timing: t('tools.每日艾灸'),
        duration: t('tools.每穴3040分钟'),
        frequency: t('tools.长期调理'),
        precautions: [t('tools.注意保暖'), t('tools.避免受风'), t('tools.经期谨慎使用')]
      }
    },
    yin_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.太溪'),
            location: t('tools.内踝后方跟腱前凹陷处'),
            function: t('tools.滋阴补肾清虚热'),
            method: t('tools.轻柔按揉35分钟')
          },
          {
            name: t('tools.三阴交'),
            location: t('tools.内踝上3寸胫骨内侧缘'),
            function: t('tools.滋阴养血调经止痛'),
            method: t('tools.按压至酸胀感')
          },
          {
            name: t('tools.肾俞'),
            location: t('tools.第2腰椎棘突下旁开1'),
            function: t('tools.补肾滋阴强腰膝'),
            method: t('tools.轻柔按压避免过重')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.神门'),
            location: t('tools.腕横纹尺侧端尺侧腕屈'),
            function: t('tools.宁心安神改善睡眠'),
            method: t('tools.睡前按压23分钟')
          }
        ],
        massageTechnique: t('tools.轻柔按摩避免过度刺激'),
        frequency: t('tools.每日12次'),
        duration: t('tools.每次1015分钟')
      },
      diet: {
        beneficial: [t('tools.银耳'), t('tools.百合'), t('tools.枸杞'), t('tools.黑芝麻'), t('tools.蜂蜜'), '梨', t('tools.葡萄'), t('tools.鸭肉')],
        avoid: [t('tools.辛辣食物'), t('tools.煎炸食品'), t('tools.温燥食物'), t('tools.过量咖啡')],
        principles: [t('tools.滋阴润燥'), t('tools.清淡饮食'), t('tools.多饮水'), t('tools.少食辛辣')],
        sampleMeals: [t('tools.银耳莲子汤'), t('tools.百合粥'), t('tools.蜂蜜柠檬水'), t('tools.清蒸鱼')]
      },
      lifestyle: {
        exercise: [t('tools.瑜伽'), t('tools.太极拳'), t('tools.游泳'), t('tools.散步')],
        sleep: [t('tools.规律作息'), t('tools.创造安静睡眠环境'), t('tools.睡前放松')],
        emotional: [t('tools.保持心境平和'), t('tools.学会释放压力'), t('tools.冥想练习')],
        seasonal: [t('tools.秋冬滋阴'), t('tools.避免过度出汗'), t('tools.注意补水')]
      },
      moxibustion: {
        points: [t('tools.太溪'), t('tools.三阴交')],
        timing: t('tools.隔日进行'),
        duration: t('tools.每穴1520分钟'),
        frequency: t('tools.温和调理'),
        precautions: [t('tools.温度不宜过高'), t('tools.时间不宜过长'), t('tools.注意补水')]
      }
    },
    phlegm_dampness: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.丰隆'),
            location: t('tools.外踝上8寸胫骨前缘外'),
            function: t('tools.化痰除湿健脾和胃'),
            method: t('tools.重点按揉58分钟')
          },
          {
            name: t('tools.阴陵泉'),
            location: t('tools.胫骨内侧髁下方凹陷处'),
            function: t('tools.健脾利湿消肿'),
            method: t('tools.按压至酸胀感明显')
          },
          {
            name: t('tools.中脘'),
            location: t('tools.肚脐上4寸'),
            function: t('tools.健脾和胃化湿消痰'),
            method: t('tools.顺时针按揉')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.天枢'),
            location: t('tools.肚脐旁开2寸'),
            function: t('tools.调理肠胃消除腹胀'),
            method: t('tools.双侧同时按揉')
          }
        ],
        massageTechnique: t('tools.稍重按压以促进气血运'),
        frequency: t('tools.每日23次'),
        duration: t('tools.每次1520分钟')
      },
      diet: {
        beneficial: [t('tools.薏米'), t('tools.冬瓜'), t('tools.白萝卜'), t('tools.陈皮'), t('tools.山楂'), t('tools.荷叶'), t('tools.绿豆')],
        avoid: [t('tools.甜腻食物'), t('tools.油炸食品'), t('tools.肥肉'), t('tools.奶制品过量')],
        principles: [t('tools.清淡饮食'), t('tools.少油少盐'), t('tools.控制甜食'), t('tools.多食化湿食物')],
        sampleMeals: [t('tools.薏米红豆汤'), t('tools.冬瓜汤'), t('tools.山楂茶'), t('tools.清蒸蔬菜')]
      },
      lifestyle: {
        exercise: [t('tools.快走'), t('tools.慢跑'), t('tools.游泳'), t('tools.有氧运动')],
        sleep: [t('tools.避免午睡过长'), t('tools.保持规律作息')],
        emotional: [t('tools.保持积极心态'), t('tools.避免过度思虑')],
        seasonal: [t('tools.春夏祛湿'), t('tools.秋冬温补'), t('tools.避免潮湿环境')]
      },
      moxibustion: {
        points: [t('tools.丰隆'), t('tools.阴陵泉'), t('tools.中脘')],
        timing: t('tools.每日或隔日'),
        duration: t('tools.每穴2025分钟'),
        frequency: t('tools.坚持调理'),
        precautions: [t('tools.配合运动'), t('tools.控制饮食'), t('tools.保持环境干燥')]
      }
    },
    damp_heat: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.曲池'),
            location: t('tools.肘横纹外侧端屈肘时肘'),
            function: t('tools.清热解毒祛湿热'),
            method: t('tools.按压至酸胀感')
          },
          {
            name: t('tools.阴陵泉'),
            location: t('tools.胫骨内侧髁下方凹陷处'),
            function: t('tools.清热利湿健脾'),
            method: t('tools.重点按揉')
          },
          {
            name: t('tools.大椎'),
            location: t('tools.第7颈椎棘突下'),
            function: t('tools.清热解表调节免疫'),
            method: t('tools.轻柔按压')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.合谷'),
            location: t('tools.手背第12掌骨间'),
            function: t('tools.清热解毒调理面部'),
            method: t('tools.按压23分钟')
          }
        ],
        massageTechnique: t('tools.适中力度以清热为主'),
        frequency: t('tools.每日12次'),
        duration: t('tools.每次1015分钟')
      },
      diet: {
        beneficial: [t('tools.绿豆'), t('tools.苦瓜'), t('tools.黄瓜'), t('tools.西瓜'), t('tools.薏米'), t('tools.茯苓'), t('tools.莲子心')],
        avoid: [t('tools.辛辣食物'), t('tools.油炸食品'), t('tools.烧烤'), t('tools.酒类'), t('tools.甜腻食物')],
        principles: [t('tools.清热利湿'), t('tools.清淡饮食'), t('tools.多饮水'), t('tools.少食肥甘')],
        sampleMeals: [t('tools.绿豆汤'), t('tools.苦瓜炒蛋'), t('tools.薏米粥'), t('tools.莲子心茶')]
      },
      lifestyle: {
        exercise: [t('tools.游泳'), t('tools.瑜伽'), t('tools.太极拳'), t('tools.避免剧烈运动')],
        sleep: [t('tools.保持凉爽睡眠环境'), t('tools.规律作息')],
        emotional: [t('tools.保持心境平和'), t('tools.避免急躁情绪')],
        seasonal: [t('tools.夏季重点清热'), t('tools.避免暴晒'), t('tools.保持环境通风')]
      },
      moxibustion: {
        points: [t('tools.阴陵泉')],
        timing: t('tools.谨慎使用'),
        duration: t('tools.时间较短'),
        frequency: t('tools.以按摩为主'),
        precautions: [t('tools.避免过热'), t('tools.以清热为主'), t('tools.可用刮痧代替')]
      }
    },
    blood_stasis: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.血海'),
            location: t('tools.髌骨内上缘上2寸'),
            function: t('tools.活血化瘀调经止痛'),
            method: t('tools.按揉至局部发热')
          },
          {
            name: t('tools.三阴交'),
            location: t('tools.内踝上3寸胫骨内侧缘'),
            function: t('tools.活血调经化瘀止痛'),
            method: t('tools.重点按压')
          },
          {
            name: t('tools.膈俞'),
            location: t('tools.第7胸椎棘突下旁开1'),
            function: t('tools.活血化瘀宽胸理气'),
            method: t('tools.按压配合艾灸')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.太冲'),
            location: t('tools.足背第12跖骨间'),
            function: t('tools.疏肝理气活血化瘀'),
            method: t('tools.按压至酸胀感')
          }
        ],
        massageTechnique: t('tools.适度用力以活血为主'),
        frequency: t('tools.每日2次'),
        duration: t('tools.每次1520分钟')
      },
      diet: {
        beneficial: [t('tools.山楂'), t('tools.红花'), t('tools.当归'), t('tools.川芎'), t('tools.红糖'), t('tools.黑木耳'), t('tools.洋葱')],
        avoid: [t('tools.生冷食物'), t('tools.油腻食物'), t('tools.过咸食物')],
        principles: [t('tools.活血化瘀'), t('tools.温通经络'), t('tools.适当温补')],
        sampleMeals: [t('tools.山楂茶'), t('tools.当归炖鸡'), t('tools.黑木耳炒菜'), t('tools.红糖姜茶')]
      },
      lifestyle: {
        exercise: [t('tools.慢跑'), t('tools.太极拳'), t('tools.瑜伽'), t('tools.适度有氧运动')],
        sleep: [t('tools.保持规律作息'), t('tools.避免熬夜')],
        emotional: [t('tools.保持心情愉快'), t('tools.避免情绪郁结')],
        seasonal: [t('tools.春季疏肝'), t('tools.注意保暖'), t('tools.避免受寒')]
      },
      moxibustion: {
        points: [t('tools.血海'), t('tools.三阴交'), t('tools.膈俞')],
        timing: t('tools.每日或隔日'),
        duration: t('tools.每穴2025分钟'),
        frequency: t('tools.经期前后重点调理'),
        precautions: [t('tools.经期谨慎使用'), t('tools.注意温度'), t('tools.配合运动')]
      }
    },
    qi_stagnation: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.太冲'),
            location: t('tools.足背第12跖骨间'),
            function: t('tools.疏肝解郁调畅气机'),
            method: t('tools.按压至酸胀感明显')
          },
          {
            name: t('tools.期门'),
            location: t('tools.第6肋间隙乳头直下'),
            function: t('tools.疏肝理气宽胸解郁'),
            method: t('tools.轻柔按揉')
          },
          {
            name: t('tools.神门'),
            location: t('tools.腕横纹尺侧端'),
            function: t('tools.宁心安神调节情绪'),
            method: t('tools.睡前重点按压')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.印堂'),
            location: t('tools.两眉头连线中点'),
            function: t('tools.宁心安神开窍醒脑'),
            method: t('tools.轻柔按压')
          }
        ],
        massageTechnique: t('tools.轻柔舒缓以疏通为主'),
        frequency: t('tools.每日23次'),
        duration: t('tools.每次1015分钟')
      },
      diet: {
        beneficial: [t('tools.玫瑰花'), t('tools.柠檬'), t('tools.橙子'), t('tools.佛手'), t('tools.香橼'), t('tools.薄荷'), t('tools.茉莉花')],
        avoid: [t('tools.过于油腻'), t('tools.难消化食物'), t('tools.过量咖啡因')],
        principles: [t('tools.疏肝理气'), t('tools.清淡饮食'), t('tools.适量芳香类食物')],
        sampleMeals: [t('tools.玫瑰花茶'), t('tools.柠檬蜂蜜水'), t('tools.薄荷茶'), t('tools.清淡蔬菜')]
      },
      lifestyle: {
        exercise: [t('tools.瑜伽'), t('tools.太极拳'), t('tools.散步'), t('tools.深呼吸练习')],
        sleep: [t('tools.规律作息'), t('tools.睡前放松'), t('tools.创造安静环境')],
        emotional: [t('tools.学会释放压力'), t('tools.培养兴趣爱好'), t('tools.适当社交')],
        seasonal: [t('tools.春季重点疏肝'), t('tools.保持心情愉快'), t('tools.避免情绪波动')]
      },
      moxibustion: {
        points: [t('tools.太冲'), t('tools.神门')],
        timing: t('tools.情绪不佳时'),
        duration: t('tools.每穴1520分钟'),
        frequency: t('tools.按需调理'),
        precautions: [t('tools.温和施灸'), t('tools.配合情绪调节'), t('tools.避免过度刺激')]
      }
    },
    special_diathesis: {
      acupoints: {
        primaryPoints: [
          {
            name: t('tools.风池'),
            location: t('tools.枕骨下胸锁乳突肌与斜'),
            function: t('tools.祛风解表增强抵抗力'),
            method: t('tools.轻柔按压')
          },
          {
            name: t('tools.足三里'),
            location: t('tools.膝盖下3寸胫骨外侧1'),
            function: t('tools.调理脾胃增强体质'),
            method: t('tools.温和按揉')
          }
        ],
        supportingPoints: [
          {
            name: t('tools.迎香'),
            location: t('tools.鼻翼外缘中点旁'),
            function: t('tools.通鼻窍防过敏'),
            method: t('tools.轻柔按揉')
          }
        ],
        massageTechnique: t('tools.温和按摩避免过度刺激'),
        frequency: t('tools.每日1次'),
        duration: t('tools.每次10分钟')
      },
      diet: {
        beneficial: [t('tools.益生菌食品'), t('tools.新鲜蔬果'), t('tools.优质蛋白'), t('tools.抗过敏食物')],
        avoid: [t('tools.已知过敏原'), t('tools.添加剂多的食品'), t('tools.刺激性食物')],
        principles: [t('tools.避免过敏原'), t('tools.增强免疫力'), t('tools.营养均衡')],
        sampleMeals: [t('tools.酸奶'), t('tools.新鲜水果'), t('tools.清淡蔬菜'), t('tools.白肉类')]
      },
      lifestyle: {
        exercise: [t('tools.适度运动'), t('tools.避免过敏环境'), t('tools.增强体质')],
        sleep: [t('tools.保持充足睡眠'), t('tools.避免过敏原')],
        emotional: [t('tools.保持积极心态'), t('tools.学会应对过敏')],
        seasonal: [t('tools.根据季节调整'), t('tools.预防过敏发作')]
      },
      moxibustion: {
        points: [t('tools.足三里')],
        timing: t('tools.谨慎使用'),
        duration: t('tools.时间较短'),
        frequency: t('tools.个体化调理'),
        precautions: [t('tools.避免过敏反应'), t('tools.个体化方案'), t('tools.医生指导下进行')]
      }
    }
  },
  en: {
    balanced: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Zusanli (ST36)',
            location: '3 cun below the knee, 1 finger-width lateral to the tibia',
            function: 'Regulate spleen and stomach, strengthen constitution',
            method: 'Massage clockwise for 3-5 minutes'
          },
          {
            name: 'Guanyuan (CV4)',
            location: '3 cun below the navel',
            function: 'Strengthen vitality, regulate qi and blood',
            method: 'Gentle pressure for 2-3 minutes'
          }
        ],
        supportingPoints: [
          {
            name: 'Baihui (GV20)',
            location: 'Top center of the head',
            function: 'Refresh mind, regulate emotions',
            method: 'Gentle pressure for 1-2 minutes'
          }
        ],
        massageTechnique: 'Gentle massage until feeling soreness',
        frequency: '1-2 times daily',
        duration: '10-15 minutes each session'
      },
      diet: {
        beneficial: ['Whole grains', 'Fresh vegetables and fruits', 'Quality protein', 'Moderate nuts'],
        avoid: ['Excessive greasy food', 'Excessive spicy food', 'Excessive cold food'],
        principles: ['Balanced diet', 'Regular meals', 'Chew slowly'],
        sampleMeals: ['Millet porridge with vegetables', 'Steamed egg custard', 'Clear chicken soup', 'Seasonal fruits']
      },
      lifestyle: {
        exercise: ['Tai Chi', 'Qigong', 'Jogging', 'Yoga'],
        sleep: ['Regular schedule', 'Sleep before 11 PM', 'Ensure 7-8 hours of sleep'],
        emotional: ['Maintain happy mood', 'Moderate socializing', 'Cultivate hobbies'],
        seasonal: ['Nourish liver in spring', 'Nourish heart in summer', 'Nourish lungs in autumn', 'Nourish kidneys in winter']
      },
      moxibustion: {
        points: ['Zusanli', 'Guanyuan'],
        timing: '2-3 times per week',
        duration: '15-20 minutes per point',
        frequency: 'Mainly for health maintenance',
        precautions: ['Prevent burns', 'Avoid during pregnancy', 'Perform 1 hour after meals']
      }
    },
    qi_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Qihai (CV6)',
            location: '1.5 cun below the navel',
            function: 'Tonify qi, enhance physical strength',
            method: 'Massage clockwise for 5-8 minutes'
          },
          {
            name: 'Zusanli (ST36)',
            location: '3 cun below the knee, 1 finger-width lateral to the tibia',
            function: 'Strengthen spleen and qi, enhance digestion',
            method: 'Focus massage for 5-10 minutes'
          },
          {
            name: 'Pishu (BL20)',
            location: '1.5 cun lateral to the 11th thoracic vertebra',
            function: 'Strengthen spleen and qi, aid digestion',
            method: 'Pressure combined with moxibustion works better'
          }
        ],
        supportingPoints: [
          {
            name: 'Baihui (GV20)',
            location: 'Top center of the head',
            function: 'Lift yang qi, refresh and tonify qi',
            method: 'Gentle lifting pressure'
          },
          {
            name: 'Taichong (LR3)',
            location: 'Between 1st and 2nd metatarsals on foot dorsum',
            function: 'Soothe liver qi, harmonize qi and blood',
            method: 'Press for 2-3 minutes'
          }
        ],
        massageTechnique: 'Gentle sustained pressure, avoid excessive force',
        frequency: '2 times daily, morning and evening',
        duration: '15-20 minutes each session'
      },
      diet: {
        beneficial: ['Astragalus', 'Codonopsis', 'Chinese yam', 'Red dates', 'Longan', 'Millet', 'Pumpkin', 'Carrot'],
        avoid: ['Cold raw foods', 'Excessive greasy food', 'Hard-to-digest foods', 'Excessive raw radish'],
        principles: ['Warm and tonify spleen-stomach', 'Small frequent meals', 'Chew slowly', 'Avoid overeating'],
        sampleMeals: ['Astragalus chicken soup', 'Chinese yam millet porridge', 'Red date longan tea', 'Steamed egg custard']
      },
      lifestyle: {
        exercise: ['Qigong', 'Tai Chi', 'Walking', 'Light yoga'],
        sleep: ['Early to bed and early to rise', '30-minute afternoon nap', 'Avoid staying up late'],
        emotional: ['Stay optimistic', 'Avoid overthinking', 'Moderate relaxation'],
        seasonal: ['Nourish yang in spring-summer', 'Tonify in autumn-winter', 'Avoid overexertion']
      },
      moxibustion: {
        points: ['Qihai', 'Guanyuan', 'Zusanli', 'Pishu'],
        timing: 'Daily or every other day',
        duration: '20-30 minutes per point',
        frequency: 'Continuous treatment for 2-3 months',
        precautions: ['Moderate temperature', 'Avoid burns', 'Reduce during menstruation']
      }
    },
    yang_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Mingmen (GV4)',
            location: 'Below the 2nd lumbar vertebra',
            function: 'Warm and tonify kidney yang, strengthen lower back and kidneys',
            method: 'Warm pressure combined with moxibustion'
          },
          {
            name: 'Shenshu (BL23)',
            location: '1.5 cun lateral to the 2nd lumbar vertebra',
            function: 'Tonify kidneys and strengthen yang, strengthen lower back and knees',
            method: 'Press with both hands simultaneously'
          },
          {
            name: 'Guanyuan (CV4)',
            location: '3 cun below the navel',
            function: 'Warm and tonify lower jiao, strengthen foundation',
            method: 'Clockwise massage combined with moxibustion'
          }
        ],
        supportingPoints: [
          {
            name: 'Yongquan (KD1)',
            location: 'Depression in the front 1/3 of the sole',
            function: 'Warm and tonify kidney yang, guide fire back to source',
            method: 'Massage before sleep until warm'
          }
        ],
        massageTechnique: 'Warm massage, better effect when combined with moxibustion',
        frequency: '2 times daily',
        duration: '20-30 minutes each session'
      },
      diet: {
        beneficial: ['Mutton', 'Chinese chives', 'Ginger', 'Cinnamon', 'Walnuts', 'Chestnuts', 'Black beans', 'Goji berries'],
        avoid: ['Cold raw foods', 'Cold-natured fruits', 'Ice drinks', 'Bitter cold medicines'],
        principles: ['Warm and tonify yang qi', 'Avoid cold foods', 'Appropriate tonification', 'Focus on warm foods'],
        sampleMeals: ['Angelica ginger mutton soup', 'Stir-fried eggs with chives', 'Walnut porridge', 'Goji berry tea']
      },
      lifestyle: {
        exercise: ['Jogging', 'Tai Chi', 'Qigong', 'Moderate strength training'],
        sleep: ['Keep warm while sleeping', 'Avoid catching cold at night', 'Adequate sleep'],
        emotional: ['Maintain positive attitude', 'Avoid excessive worry'],
        seasonal: ['Nourish yang in spring-summer', 'Focus on keeping warm in autumn-winter', 'Avoid seeking coolness']
      },
      moxibustion: {
        points: ['Mingmen', 'Shenshu', 'Guanyuan', 'Zusanli'],
        timing: 'Daily moxibustion',
        duration: '30-40 minutes per point',
        frequency: 'Long-term treatment',
        precautions: ['Keep warm', 'Avoid wind exposure', 'Use cautiously during menstruation']
      }
    },
    yin_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Taixi (KD3)',
            location: 'Depression behind the medial malleolus, in front of the Achilles tendon',
            function: 'Nourish yin and tonify kidneys, clear deficiency heat',
            method: 'Gentle massage for 3-5 minutes'
          },
          {
            name: 'Sanyinjiao (SP6)',
            location: '3 cun above the medial malleolus, behind the medial border of the tibia',
            function: 'Nourish yin and blood, regulate menstruation and relieve pain',
            method: 'Press until feeling soreness'
          },
          {
            name: 'Shenshu (BL23)',
            location: '1.5 cun lateral to the 2nd lumbar vertebra',
            function: 'Tonify kidneys and nourish yin, strengthen lower back and knees',
            method: 'Gentle pressure, avoid excessive force'
          }
        ],
        supportingPoints: [
          {
            name: 'Shenmen (HE7)',
            location: 'Ulnar end of the wrist crease, in the depression on the radial side of the flexor carpi ulnaris tendon',
            function: 'Calm the mind and spirit, improve sleep',
            method: 'Press for 2-3 minutes before sleep'
          }
        ],
        massageTechnique: 'Gentle massage, avoid excessive stimulation',
        frequency: '1-2 times daily',
        duration: '10-15 minutes each session'
      },
      diet: {
        beneficial: ['White fungus', 'Lily bulb', 'Goji berries', 'Black sesame', 'Honey', 'Pears', 'Grapes', 'Duck meat'],
        avoid: ['Spicy foods', 'Fried foods', 'Warm-dry foods', 'Excessive coffee'],
        principles: ['Nourish yin and moisten dryness', 'Light diet', 'Drink plenty of water', 'Reduce spicy foods'],
        sampleMeals: ['White fungus lotus seed soup', 'Lily porridge', 'Honey lemon water', 'Steamed fish']
      },
      lifestyle: {
        exercise: ['Yoga', 'Tai Chi', 'Swimming', 'Walking'],
        sleep: ['Regular schedule', 'Create quiet sleep environment', 'Relax before sleep'],
        emotional: ['Maintain peaceful mind', 'Learn to release stress', 'Meditation practice'],
        seasonal: ['Nourish yin in autumn-winter', 'Avoid excessive sweating', 'Pay attention to hydration']
      },
      moxibustion: {
        points: ['Taixi', 'Sanyinjiao'],
        timing: 'Every other day',
        duration: '15-20 minutes per point',
        frequency: 'Gentle treatment',
        precautions: ['Temperature should not be too high', 'Duration should not be too long', 'Pay attention to hydration']
      }
    },
    phlegm_dampness: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Fenglong (ST40)',
            location: '8 cun above the lateral malleolus, 1.5 cun lateral to the anterior border of the tibia',
            function: 'Transform phlegm and eliminate dampness, strengthen spleen and harmonize stomach',
            method: 'Focus massage for 5-8 minutes'
          },
          {
            name: 'Yinlingquan (SP9)',
            location: 'Depression below the medial condyle of the tibia',
            function: 'Strengthen spleen and drain dampness, reduce swelling',
            method: 'Press until obvious soreness'
          },
          {
            name: 'Zhongwan (CV12)',
            location: '4 cun above the navel',
            function: 'Strengthen spleen and harmonize stomach, transform dampness and eliminate phlegm',
            method: 'Clockwise massage'
          }
        ],
        supportingPoints: [
          {
            name: 'Tianshu (ST25)',
            location: '2 cun lateral to the navel',
            function: 'Regulate intestines and stomach, eliminate abdominal distension',
            method: 'Massage both sides simultaneously'
          }
        ],
        massageTechnique: 'Slightly stronger pressure to promote qi and blood circulation',
        frequency: '2-3 times daily',
        duration: '15-20 minutes each session'
      },
      diet: {
        beneficial: ['Job\'s tears', 'Winter melon', 'White radish', 'Tangerine peel', 'Hawthorn', 'Lotus leaf', 'Mung beans'],
        avoid: ['Sweet greasy foods', 'Fried foods', 'Fatty meat', 'Excessive dairy products'],
        principles: ['Light diet', 'Low oil and salt', 'Control sweets', 'Eat more dampness-transforming foods'],
        sampleMeals: ['Job\'s tears and red bean soup', 'Winter melon soup', 'Hawthorn tea', 'Steamed vegetables']
      },
      lifestyle: {
        exercise: ['Brisk walking', 'Jogging', 'Swimming', 'Aerobic exercise'],
        sleep: ['Avoid excessive afternoon naps', 'Maintain regular schedule'],
        emotional: ['Maintain positive attitude', 'Avoid overthinking'],
        seasonal: ['Eliminate dampness in spring-summer', 'Warm tonification in autumn-winter', 'Avoid humid environments']
      },
      moxibustion: {
        points: ['Fenglong', 'Yinlingquan', 'Zhongwan'],
        timing: 'Daily or every other day',
        duration: '20-25 minutes per point',
        frequency: 'Persist in treatment',
        precautions: ['Combine with exercise', 'Control diet', 'Keep environment dry']
      }
    },
    damp_heat: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Quchi (LI11)',
            location: 'Lateral end of the elbow crease when elbow is flexed',
            function: 'Clear heat and detoxify, eliminate damp-heat',
            method: 'Press until feeling soreness'
          },
          {
            name: 'Yinlingquan (SP9)',
            location: 'Depression below the medial condyle of the tibia',
            function: 'Clear heat and drain dampness, strengthen spleen',
            method: 'Focus massage'
          },
          {
            name: 'Dazhui (GV14)',
            location: 'Below the 7th cervical vertebra',
            function: 'Clear heat and release exterior, regulate immunity',
            method: 'Gentle pressure'
          }
        ],
        supportingPoints: [
          {
            name: 'Hegu (LI4)',
            location: 'Between the 1st and 2nd metacarpals on the back of hand',
            function: 'Clear heat and detoxify, regulate facial area',
            method: 'Press for 2-3 minutes'
          }
        ],
        massageTechnique: 'Moderate force, focus on clearing heat',
        frequency: '1-2 times daily',
        duration: '10-15 minutes each session'
      },
      diet: {
        beneficial: ['Mung beans', 'Bitter melon', 'Cucumber', 'Watermelon', 'Job\'s tears', 'Poria', 'Lotus seed heart'],
        avoid: ['Spicy foods', 'Fried foods', 'Barbecue', 'Alcohol', 'Sweet greasy foods'],
        principles: ['Clear heat and drain dampness', 'Light diet', 'Drink plenty of water', 'Reduce rich foods'],
        sampleMeals: ['Mung bean soup', 'Stir-fried bitter melon with eggs', 'Job\'s tears porridge', 'Lotus seed heart tea']
      },
      lifestyle: {
        exercise: ['Swimming', 'Yoga', 'Tai Chi', 'Avoid vigorous exercise'],
        sleep: ['Keep cool sleep environment', 'Regular schedule'],
        emotional: ['Maintain peaceful mind', 'Avoid irritable emotions'],
        seasonal: ['Focus on clearing heat in summer', 'Avoid sun exposure', 'Keep environment ventilated']
      },
      moxibustion: {
        points: ['Yinlingquan'],
        timing: 'Use cautiously',
        duration: 'Shorter duration',
        frequency: 'Focus on massage',
        precautions: ['Avoid overheating', 'Focus on clearing heat', 'Can use scraping instead']
      }
    },
    blood_stasis: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Xuehai (SP10)',
            location: '2 cun above the medial superior border of the patella',
            function: 'Invigorate blood and resolve stasis, regulate menstruation and relieve pain',
            method: 'Massage until local warmth'
          },
          {
            name: 'Sanyinjiao (SP6)',
            location: '3 cun above the medial malleolus, behind the medial border of the tibia',
            function: 'Invigorate blood and regulate menstruation, resolve stasis and relieve pain',
            method: 'Focus pressure'
          },
          {
            name: 'Geshu (BL17)',
            location: '1.5 cun lateral to the 7th thoracic vertebra',
            function: 'Invigorate blood and resolve stasis, expand chest and regulate qi',
            method: 'Pressure combined with moxibustion'
          }
        ],
        supportingPoints: [
          {
            name: 'Taichong (LR3)',
            location: 'Between the 1st and 2nd metatarsals on foot dorsum',
            function: 'Soothe liver and regulate qi, invigorate blood and resolve stasis',
            method: 'Press until feeling soreness'
          }
        ],
        massageTechnique: 'Moderate force, focus on invigorating blood',
        frequency: '2 times daily',
        duration: '15-20 minutes each session'
      },
      diet: {
        beneficial: ['Hawthorn', 'Safflower', 'Angelica', 'Chuanxiong', 'Brown sugar', 'Black fungus', 'Onions'],
        avoid: ['Cold raw foods', 'Greasy foods', 'Excessively salty foods'],
        principles: ['Invigorate blood and resolve stasis', 'Warm and unblock meridians', 'Appropriate warm tonification'],
        sampleMeals: ['Hawthorn tea', 'Angelica stewed chicken', 'Stir-fried black fungus', 'Brown sugar ginger tea']
      },
      lifestyle: {
        exercise: ['Jogging', 'Tai Chi', 'Yoga', 'Moderate aerobic exercise'],
        sleep: ['Maintain regular schedule', 'Avoid staying up late'],
        emotional: ['Keep happy mood', 'Avoid emotional stagnation'],
        seasonal: ['Soothe liver in spring', 'Pay attention to keeping warm', 'Avoid catching cold']
      },
      moxibustion: {
        points: ['Xuehai', 'Sanyinjiao', 'Geshu'],
        timing: 'Daily or every other day',
        duration: '20-25 minutes per point',
        frequency: 'Focus treatment before and after menstruation',
        precautions: ['Use cautiously during menstruation', 'Pay attention to temperature', 'Combine with exercise']
      }
    },
    qi_stagnation: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Taichong (LR3)',
            location: 'Between the 1st and 2nd metatarsals on foot dorsum',
            function: 'Soothe liver and relieve depression, regulate qi movement',
            method: 'Press until obvious soreness'
          },
          {
            name: 'Qimen (LR14)',
            location: '6th intercostal space, directly below the nipple',
            function: 'Soothe liver and regulate qi, expand chest and relieve depression',
            method: 'Gentle massage'
          },
          {
            name: 'Shenmen (HE7)',
            location: 'Ulnar end of the wrist crease',
            function: 'Calm the mind and spirit, regulate emotions',
            method: 'Focus pressure before sleep'
          }
        ],
        supportingPoints: [
          {
            name: 'Yintang (EX-HN3)',
            location: 'Midpoint between the eyebrows',
            function: 'Calm the mind and spirit, open orifices and awaken brain',
            method: 'Gentle pressure'
          }
        ],
        massageTechnique: 'Gentle and soothing, focus on unblocking',
        frequency: '2-3 times daily',
        duration: '10-15 minutes each session'
      },
      diet: {
        beneficial: ['Rose flowers', 'Lemon', 'Orange', 'Buddha\'s hand', 'Citron', 'Mint', 'Jasmine flowers'],
        avoid: ['Excessively greasy food', 'Hard-to-digest foods', 'Excessive caffeine'],
        principles: ['Soothe liver and regulate qi', 'Light diet', 'Moderate aromatic foods'],
        sampleMeals: ['Rose flower tea', 'Lemon honey water', 'Mint tea', 'Light vegetables']
      },
      lifestyle: {
        exercise: ['Yoga', 'Tai Chi', 'Walking', 'Deep breathing exercises'],
        sleep: ['Regular schedule', 'Relax before sleep', 'Create quiet environment'],
        emotional: ['Learn to release stress', 'Cultivate hobbies', 'Appropriate socializing'],
        seasonal: ['Focus on soothing liver in spring', 'Keep happy mood', 'Avoid emotional fluctuations']
      },
      moxibustion: {
        points: ['Taichong', 'Shenmen'],
        timing: 'When emotions are poor',
        duration: '15-20 minutes per point',
        frequency: 'Treatment as needed',
        precautions: ['Gentle moxibustion', 'Combine with emotional regulation', 'Avoid excessive stimulation']
      }
    },
    special_diathesis: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Fengchi (GB20)',
            location: 'Depression between the sternocleidomastoid and trapezius muscles below the occiput',
            function: 'Dispel wind and release exterior, enhance resistance',
            method: 'Gentle pressure'
          },
          {
            name: 'Zusanli (ST36)',
            location: '3 cun below the knee, 1 finger-width lateral to the tibia',
            function: 'Regulate spleen and stomach, strengthen constitution',
            method: 'Gentle massage'
          }
        ],
        supportingPoints: [
          {
            name: 'Yingxiang (LI20)',
            location: 'Beside the midpoint of the lateral border of the nostril',
            function: 'Unblock nasal orifices, prevent allergies',
            method: 'Gentle massage'
          }
        ],
        massageTechnique: 'Gentle massage, avoid excessive stimulation',
        frequency: '1 time daily',
        duration: '10 minutes each session'
      },
      diet: {
        beneficial: ['Probiotic foods', 'Fresh vegetables and fruits', 'Quality protein', 'Anti-allergic foods'],
        avoid: ['Known allergens', 'Foods with many additives', 'Irritating foods'],
        principles: ['Avoid allergens', 'Enhance immunity', 'Balanced nutrition'],
        sampleMeals: ['Yogurt', 'Fresh fruits', 'Light vegetables', 'White meat']
      },
      lifestyle: {
        exercise: ['Moderate exercise', 'Avoid allergic environments', 'Strengthen constitution'],
        sleep: ['Maintain adequate sleep', 'Avoid allergens'],
        emotional: ['Maintain positive attitude', 'Learn to cope with allergies'],
        seasonal: ['Adjust according to seasons', 'Prevent allergic episodes']
      },
      moxibustion: {
        points: ['Zusanli'],
        timing: 'Use cautiously',
        duration: 'Shorter duration',
        frequency: 'Individualized treatment',
        precautions: ['Avoid allergic reactions', 'Individualized plan', 'Under medical guidance']
      }
    }
  }
};
