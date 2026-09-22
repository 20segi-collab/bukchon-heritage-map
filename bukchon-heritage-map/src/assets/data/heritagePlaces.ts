import { HeritagePlace } from '../../types';

export const HERITAGE_PLACES: HeritagePlace[] = [
  {
    id: 'baek-inje-house',
    name: {
      ko: '백인제가옥 (Baek In-je House)',
      en: 'Baek In-je House Heritage Museum',
      ja: '白麟済家屋 (ペク・인ジェ家屋)',
      zh: '白麟济家屋 传统韩屋博物馆'
    },
    category: 'architecture',
    grade: 'must-see',
    authenticityScore: 4.92,
    culturalValueScore: 4.95,
    commercialityRatio: 8,
    lat: 37.5815,
    lng: 126.9840,
    address: {
      ko: '서울특별시 종로구 북촌로7길 16',
      en: '16 Bukchon-ro 7-gil, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区北村路7ギル16',
      zh: '首尔特别市钟路区北村路7街16'
    },
    hours: {
      ko: '09:00 - 18:00 (월요일 휴무)',
      en: '09:00 - 18:00 (Closed on Mondays)',
      ja: '09:00 - 18:00 (月曜休館)',
      zh: '09:00 - 18:00 (周一闭馆)'
    },
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '1913년에 건립된 일제강점기 북촌의 대표적 근대 한옥입니다. 바깥주인채와 안채가 복도로 연결된 드문 구조와 전통 붉은 벽돌, 사랑채의 2층 다다미방이 조화를 이루는 국가등록문화재입니다.',
      en: 'Built in 1913, Baek In-je House is a representative modern Hanok preserved in Bukchon. Designated as Seoul Registered Cultural Heritage, it preserves authentic early 20th-century Korean architectural timber.',
      ja: '1913年に建てられた北村を代表する近代韓屋です。伝統的な木造建築の美しさと歴史的価値をそのまま保存しているソウル市有形文化財です。',
      zh: '建于1913年，是北村最具代表性的现代韩屋。作为首尔市有形文化财，完整保存了20世纪初韩国传统木造建筑的纯正技艺。'
    },
    docentAudioScript: {
      ko: '안녕하세요. 백인제가옥 도슨트입니다. 이곳은 압도적인 한옥 기와지붕과 아름다운 소나무 정원을 갖춘 전통 가옥으로, 퓨전 상업화되지 않은 진짜 근대 전통 건축의 미학을 경험하실 수 있습니다.',
      en: 'Welcome to Baek In-je House. This museum preserves pure traditional Korean Hanok timber framework and stone garden aesthetics, completely uncorrupted by commercial modifications.',
      ja: '白麟済家屋へようこそ。ここでは商業化されていない、本物の伝統的な韓屋建築の美的価値を体験することができます。',
      zh: '欢迎来到白麟济家屋。在这里您可以亲自体验未受过度商业化破坏的、最纯正的韩国传统韩屋建筑美学。'
    },
    positiveTags: ['#국가등록문화재', '#역사적가치', '#정통한옥양식', '#문화재전문도슨트', '#원본목조보존'],
    certifiedBy: 'Seoul Cultural Heritage Board & Cultural Heritage Administration',
    reviewsCount: 142,
    reviews: [
      {
        id: 'r1',
        user: 'Elena Vance (Art Historian)',
        date: '2026-08-14',
        authenticityRating: 5.0,
        culturalValueRating: 5.0,
        commercialityRating: 1.0,
        comment: 'An absolute masterpiece of authentic Korean preservation. Far superior to generic souvenir shops down the hill.',
        tags: ['#NationalHeritage', '#AuthenticArchitecture', '#MustVisit'],
        verifiedVisit: true,
        language: 'en'
      },
      {
        id: 'r2',
        user: '김민준 (전통건축연구원)',
        date: '2026-08-20',
        authenticityRating: 4.9,
        culturalValueRating: 5.0,
        commercialityRating: 1.0,
        comment: '상업적 퓨전 한옥들과 달리 1910년대 솟을대문과 툇마루 목재의 진짜 기법이 살아있습니다.',
        tags: ['#역사적가치', '#정통목조'],
        verifiedVisit: true,
        language: 'ko'
      }
    ]
  },
  {
    id: 'eunjinje-tea-house',
    name: {
      ko: '은진재 전통 다도원',
      en: 'Eunjinje Traditional Tea Culture House',
      ja: '恩真斎 伝統茶道院',
      zh: '恩真斋 传统茶道院'
    },
    category: 'tea',
    grade: 'must-see',
    authenticityScore: 4.95,
    culturalValueScore: 4.90,
    commercialityRatio: 5,
    lat: 37.5798,
    lng: 126.9862,
    address: {
      ko: '서울특별시 종로구 계동길 43',
      en: '43 Gyedong-gil, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区桂洞ギル43',
      zh: '首尔特别市钟路区桂洞街43'
    },
    hours: {
      ko: '11:00 - 19:00 (화요일 휴무)',
      en: '11:00 - 19:00 (Closed on Tuesdays)',
      ja: '11:00 - 19:00 (火曜休館)',
      zh: '11:00 - 19:00 (周二闭馆)'
    },
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '지리산 야생 수제 차와 전통 다기, 30년 경력 다도 명인이 직접 주재하는 한국 정통 다례(茶禮) 공간입니다. 인공 가공 시럽이나 인스타용 음료 없이 정통 차의 깊은 맛을 보존합니다.',
      en: 'Master tea house offering genuine Korean tea ceremony (Dado) using wild hand-harvested tea leaves from Mount Jirisan. No artificial syrups or mass tourist gimmicks.',
      ja: '智異山の野生の手摘み茶と伝統的な茶器を使用し、30年の経歴を持つ茶道名人が直接行う韓国伝統茶礼の空間です。',
      zh: '由拥有30年资历的茶道名家主理，选用智异山野生手工采摘茶青，呈现最地道的韩国传统茶礼文化。'
    },
    docentAudioScript: {
      ko: '은진재에서는 한국 전통 다례의 정수인 행다(行茶) 예법을 배우며, 옹기 다기와 놋쇠 찻상 위에 우려내는 야생 우전차의 향을 음미하실 수 있습니다.',
      en: 'Experience the serene rituals of Korean Dado tea ceremony served in handcrafted Onggi clay tea sets and brass tables.',
      ja: '伝統的な土器の茶器と真鍮の茶卓で淹れる野生のお茶の香りを静かにお楽しみください。',
      zh: '用手工陶制茶具在黄铜茶几上冲泡野生珍品绿茶，体验韩国茶道的庄严与安宁。'
    },
    positiveTags: ['#전통다도명인', '#야생수제차', '#정통다례예법', '#수공예다기', '#고즈넉한한옥'],
    certifiedBy: 'Korean Traditional Tea Master Association',
    reviewsCount: 98,
    reviews: [
      {
        id: 'r3',
        user: 'Kenji Sato',
        date: '2026-07-29',
        authenticityRating: 5.0,
        culturalValueRating: 4.8,
        commercialityRating: 1.0,
        comment: 'Pure peace. The master explained the spiritual philosophy of Korean Dado tea ceremony in detail.',
        tags: ['#TeaCeremony', '#MasterCraftsman'],
        verifiedVisit: true,
        language: 'ja'
      }
    ]
  },
  {
    id: 'seoul-intangible-heritage-hall',
    name: {
      ko: '서울무형문화재 돈화문 전시장',
      en: 'Seoul Intangible Cultural Heritage Hall',
      ja: 'ソウル無形文化財 敦化門展示場',
      zh: '首尔无形文化财 敦化门展示馆'
    },
    category: 'craft',
    grade: 'must-see',
    authenticityScore: 4.98,
    culturalValueScore: 4.99,
    commercialityRatio: 2,
    lat: 37.5772,
    lng: 126.9904,
    address: {
      ko: '서울특별시 종로구 율곡로 10길 13',
      en: '13 Yulgok-ro 10-gil, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区栗谷路10ギル13',
      zh: '首尔特别市钟路区栗谷路10街13'
    },
    hours: {
      ko: '10:00 - 17:00 (월요일 휴무)',
      en: '10:00 - 17:00 (Closed on Mondays)',
      ja: '10:00 - 17:00 (月曜休館)',
      zh: '10:00 - 17:00 (周一闭馆)'
    },
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '대한민국 국가 및 서울시 지정 무형문화재 장인들의 실물 작품 전시 및 매주 진행되는 상감나전, 매듭장, 소목장 실시간 시연장입니다. 상업적 복제품이 아닌 진짜 인간문화재의 작품입니다.',
      en: 'Official exhibition and live demonstration hall for designated Living Human Treasures & Master Craftsmen (Mother-of-pearl lacquerware, Traditional Knotting, Traditional Joinery).',
      ja: '国家およびソウル市指定の無形文化財職人たちの真の伝統工芸作品が展示され、実演を直接見ることができる空間です。',
      zh: '展示国家及首尔市指定的非物质文化遗产传承大师（螺钿漆器、传统结艺、木工雕刻）的原创作品及现场制作演示。'
    },
    docentAudioScript: {
      ko: '돈화문 전시장에서는 국가무형문화재 장인이 수십 년간 닦아온 정통 한국 전통 공예 기법을 눈앞에서 감상할 수 있습니다.',
      en: 'Observe the intricate detail of centuries-old royal lacquer and traditional knotting techniques executed by certified master artisans.',
      ja: '人間文化財の職人が数十年間磨き上げた本物の伝統工芸技法を目の前でご鑑賞いただけます。',
      zh: '在这里您可以近距离亲眼目睹非物质文化遗产传承人历经数十年锤炼的手工精湛技艺。'
    },
    positiveTags: ['#국가무형문화재', '#인간문화재시연', '#나전칠기', '#매듭장', '#최고의진정성'],
    certifiedBy: 'Cultural Heritage Administration & Seoul Metropolitan Government',
    reviewsCount: 210,
    reviews: [
      {
        id: 'r4',
        user: 'Mei Ling (Beijing Museum Curator)',
        date: '2026-08-02',
        authenticityRating: 5.0,
        culturalValueRating: 5.0,
        commercialityRating: 1.0,
        comment: 'This is real heritage. Seeing the 80-year-old master craft knotwork live was unforgettable.',
        tags: ['#LivingNationalTreasure', '#RealCrafts'],
        verifiedVisit: true,
        language: 'zh'
      }
    ]
  },
  {
    id: 'gahoe-museum',
    name: {
      ko: '가회민화박물관',
      en: 'Gahoe Museum of Folk Painting',
      ja: '嘉会民画博物館',
      zh: '嘉会民画博物馆'
    },
    category: 'museum',
    grade: 'must-see',
    authenticityScore: 4.78,
    culturalValueScore: 4.85,
    commercialityRatio: 12,
    lat: 37.5828,
    lng: 126.9865,
    address: {
      ko: '서울특별시 종로구 북촌로12길 52',
      en: '52 Bukchon-ro 12-gil, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区北村路12ギル52',
      zh: '首尔特别市钟路区北村路12街52'
    },
    hours: {
      ko: '10:00 - 18:00 (월요일 휴무)',
      en: '10:00 - 18:00 (Closed on Mondays)',
      ja: '10:00 - 18:00 (月曜休館)',
      zh: '10:00 - 18:00 (周一闭馆)'
    },
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '조선 시대 민중의 삶과 벽사(辟邪), 복을 기원하는 진짜 민화(Minhwa) 부적과 유물을 250여 점 소장한 한옥 박물관입니다. 정통 천연 안료를 사용한 부채 민화 그리기 체험을 제공합니다.',
      en: 'Specialized Hanok museum preserving over 250 authentic Joseon folk paintings and talismans. Offers folk painting workshops using traditional natural pigments.',
      ja: '朝鮮時代の民画と魔除けの札などの遺物を多数 systematically 所蔵する博物館です。伝統的な天然顔料を使用した民画体験が可能です。',
      zh: '收藏有250余件朝鲜时代民画与驱邪祈福文物的特色韩屋博物馆，并提供使用传统天然颜料的民画制作体验。'
    },
    docentAudioScript: {
      ko: '가회민화박물관은 까치와 호랑이(작호도), 십장생도 등 서민들의 해학과 염원이 담긴 진짜 조선 민화를 수집·보존하는 소중한 문화유산 공간입니다.',
      en: 'Explore the humorous and deep symbolism of Joseon dynasty folk paintings depicting tigers, magpies, and sacred longevity symbols.',
      ja: '虎やカササギを描いた民画など、朝鮮時代の庶民の祈りとユーモアが込められた本物の古美術をご鑑賞ください。',
      zh: '欣赏描绘喜鹊老虎与十长生图的朝鲜时代平民风俗民画，感受真挚而风趣的传统民俗信仰。'
    },
    positiveTags: ['#조선민화유물', '#천연안료체험', '#벽사부적', '#한옥박물관', '#학술적가치'],
    certifiedBy: 'Korean Museum Association',
    reviewsCount: 115,
    reviews: [
      {
        id: 'r5',
        user: 'Sarah Jenkins',
        date: '2026-07-15',
        authenticityRating: 4.8,
        culturalValueRating: 4.9,
        commercialityRating: 2.0,
        comment: 'Fascinating authentic folk art. The staff explained the traditional pig-blood and mineral pigments used in ancient Korea.',
        tags: ['#FolkArt', '#JoseonDynasty'],
        verifiedVisit: true,
        language: 'en'
      }
    ]
  },
  {
    id: 'bukchon-crafts-center',
    name: {
      ko: '북촌 전통공예체험관',
      en: 'Bukchon Traditional Crafts Center',
      ja: '北村 伝統工芸体験館',
      zh: '北村 传统工艺体验馆'
    },
    category: 'craft',
    grade: 'high',
    authenticityScore: 4.65,
    culturalValueScore: 4.70,
    commercialityRatio: 18,
    lat: 37.5810,
    lng: 126.9845,
    address: {
      ko: '서울특별시 종로구 북촌로12길 24-5',
      en: '24-5 Bukchon-ro 12-gil, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区北村路12ギル24-5',
      zh: '首尔特别市钟路区北村路12街24-5'
    },
    hours: {
      ko: '10:00 - 17:00 (연중무휴)',
      en: '10:00 - 17:00 (Open Daily)',
      ja: '10:00 - 17:00 (年中無休)',
      zh: '10:00 - 17:00 (全年无休)'
    },
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '서울시 종로구 공식 지원 공예관으로, 규방공예, 천연염색, 한지공예, 단청 채색 등 종로 무형문화재 지정 강사들이 직접 가르치는 공공 검증 체험 장소입니다.',
      en: 'Public craft sanctuary supported by Seoul City where certified traditional artisans instruct natural dyeing, Hanji papercraft, and Dancheong architectural painting.',
      ja: 'ソウル市公認の工芸館で、天然染色や伝統刺繍、伝統塗料塗装などを無形文化財講師から直接学べる空間です。',
      zh: '首尔市官方支持的工芸馆，由非物质文化遗产传承人亲自指导天然染织、韩纸工艺与丹青彩绘。'
    },
    docentAudioScript: {
      ko: '이곳은 조악한 상업용 공장형 체험장이 아닙니다. 장인들이 사용하는 천연 쪽 염료와 전통 실을 사용하여 진정한 한국 공예의 깊이를 체험할 수 있습니다.',
      en: 'Unlike tourist factory workshops, here you work with authentic indigo dyes and hand-spun silk threads under artisan guidance.',
      ja: '一般的な観光用の簡易体験ではなく、天然の藍染めや伝統的な絹糸を用いた本物の工芸技法を体験できます。',
      zh: '区别于简单的旅游观光流水线，这里使用纯天然靛蓝染料与手纺丝线，让您体验纯正手工艺的深厚底蕴。'
    },
    positiveTags: ['#공공검증장인', '#천연쪽염색', '#단청채색', '#한지공예', '#정통체험'],
    certifiedBy: 'Jongno District Office Cultural Tourism Dept.',
    reviewsCount: 88,
    reviews: []
  },
  {
    id: 'gyedong-onggi-studio',
    name: {
      ko: '계동 전통 옹기·도예 공방',
      en: 'Gyedong Master Onggi Ceramics Studio',
      ja: '桂洞 伝統甕器・陶芸工房',
      zh: '桂洞 传统瓮器与陶艺工房'
    },
    category: 'craft',
    grade: 'must-see',
    authenticityScore: 4.88,
    culturalValueScore: 4.90,
    commercialityRatio: 9,
    lat: 37.5802,
    lng: 126.9878,
    address: {
      ko: '서울특별시 종로구 계동길 62',
      en: '62 Gyedong-gil, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区桂洞ギル62',
      zh: '首尔特别市钟路区桂洞街62'
    },
    hours: {
      ko: '10:00 - 18:30 (일요일 휴무)',
      en: '10:00 - 18:30 (Closed on Sundays)',
      ja: '10:00 - 18:30 (日曜休館)',
      zh: '10:00 - 18:30 (周日闭馆)'
    },
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '3대째 가업으로 내려오는 숨 쉬는 옹기(Onggi) 및 분청사기 가마 공방입니다. 화학 유약을 배제하고 수제 잿물 유약과 전통 물레 기법으로 작품을 제작합니다.',
      en: '3rd-generation heritage Onggi earthenware wheel-kiln pottery studio. Uses 100% natural ash glaze and hand-wheel techniques without chemical finishes.',
      ja: '3代にわたり伝統を継承する甕器（オンギ）陶芸工房です。天然の灰釉薬と伝統的なろくろ技法で作品を制作しています。',
      zh: '传承三代的手工瓮器与粉青沙器柴窑陶艺工房，拒绝化学釉料，坚持使用天然木灰釉与传统手拉坯。'
    },
    docentAudioScript: {
      ko: '계동 옹기 공방은 통풍이 되는 한국 전통 발효 용기 옹기의 원형을 고집하며, 전통 장인의 수제 물레 손길이 고스란히 담겨 있습니다.',
      en: 'Learn how breathable Korean Onggi vessels preserve fermented kimchi and jang sauce through micro-porous natural clay composition.',
      ja: '通気性のある韓国伝統の醗酵容器「オンギ」の原型を守り続ける職人の手仕事をご体験ください。',
      zh: '探寻能微孔呼吸的韩国发酵瓮器（Onggi）原始风貌，感受三代匠人手工拉坯的温度。'
    },
    positiveTags: ['#3대가업장인', '#숨쉬는옹기', '#천연잿물유약', '#전통물레', '#핸드메이드'],
    certifiedBy: 'Korean Traditional Pottery Craftsmen Guild',
    reviewsCount: 76,
    reviews: []
  },
  {
    id: 'samcheong-fusion-hanbok',
    name: {
      ko: '삼청동 퓨전 한복 사진관 (상업 공간)',
      en: 'Samcheong Fusion Hanbok & Photo Studio (Commercial Spot)',
      ja: '三清洞 フュージョン韓服写真館 (商業施設)',
      zh: '三清洞 融合韩服影楼 (商业化化场所)'
    },
    category: 'commercial',
    grade: 'commercial',
    authenticityScore: 2.15,
    culturalValueScore: 2.00,
    commercialityRatio: 92,
    lat: 37.5812,
    lng: 126.9818,
    address: {
      ko: '서울특별시 종로구 삼청로 88',
      en: '88 Samcheong-ro, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区三清路88',
      zh: '首尔特别市钟路区三清路88'
    },
    hours: {
      ko: '10:00 - 20:00',
      en: '10:00 - 20:00',
      ja: '10:00 - 20:00',
      zh: '10:00 - 20:00'
    },
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '[상업성 주의] 전통 한복의 고유 복식 구조(저고리, 동정, 치마 폭)와 무관한 공장형 나일론 금박 의상 및 인스타용 포토부스 중심 영업 장소입니다. 문화재적 가치는 낮습니다.',
      en: '[Commercial Alert] Tourist photo salon renting synthetic shiny costumes lacking historical Korean Hanbok tailoring. High commercial pricing with low cultural educational value.',
      ja: '[商業的注意] 伝統韓服の考証とは無関係な化学繊維のコスチュームと撮影用フォトブースを中心とした商業店舗です。',
      zh: '[商业化提示] 租售非传统剪裁的亮片化纤服装及快照图廊，缺乏韩国传统服饰考据与历史文化内涵。'
    },
    docentAudioScript: {
      ko: '주의: 이 장소는 전통문화 보존 공간이 아닌 단순 상업 촬영소입니다. 진짜 한복의 고유한 품과 무형문화재 복식 양식을 원하신다면 국가 인증 한복 박물관을 추천합니다.',
      en: 'Note: This spot is a tourist commercial studio renting synthetic shiny costumes rather than historic Korean Hanbok textiles.',
      ja: 'ご注意：この場所は伝統文化の保存空間ではなく、観光用の撮影スタジオです。',
      zh: '注意：此地为商业观光拍照所，非传统文化传承场所，衣服多为大批量生产化纤混纺。'
    },
    positiveTags: ['#사진촬영'],
    commercialWarningTags: ['#공장형체험', '#단순포토존', '#퓨전변형의상', '#과도한상업화', '#역사고증부재'],
    reviewsCount: 310,
    reviews: [
      {
        id: 'r6',
        user: 'Tourist Feedback Team',
        date: '2026-08-10',
        authenticityRating: 1.8,
        culturalValueRating: 2.0,
        commercialityRating: 4.8,
        comment: 'Cheap polyester clothes with glued-on glitter. Not real Korean culture at all.',
        tags: ['#TouristTrap', '#SyntheticFabric'],
        verifiedVisit: true,
        language: 'en'
      }
    ]
  },
  {
    id: 'anguk-synthetic-souvenir',
    name: {
      ko: '안국 K-컬처 퓨전 굿즈 팝업 (상업 공간)',
      en: 'Anguk K-Pop & Fusion Souvenir Pop-up (Commercial Spot)',
      ja: '安国 K-POP 融合グッズポップアップ (商業施設)',
      zh: '安国 K-Pop 快闪纪念品店 (商业化场所)'
    },
    category: 'commercial',
    grade: 'commercial',
    authenticityScore: 1.85,
    culturalValueScore: 1.50,
    commercialityRatio: 96,
    lat: 37.5768,
    lng: 126.9850,
    address: {
      ko: '서울특별시 종로구 율곡로 45',
      en: '45 Yulgok-ro, Jongno-gu, Seoul',
      ja: 'ソウル特別市鐘路区栗谷路45',
      zh: '首尔特别市钟路区栗谷路45'
    },
    hours: {
      ko: '09:30 - 21:00',
      en: '09:30 - 21:00',
      ja: '09:30 - 21:00',
      zh: '09:30 - 21:00'
    },
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    docentSummary: {
      ko: '[상업성 주의] 플라스틱 열쇠고리와 수입 원산지 미상 기념품을 무분별하게 판매하는 팝업스토어로, 안국 전통지구의 고유 문화재적 진정성과는 거리가 멀며 상업성이 극대화되어 있습니다.',
      en: '[Commercial Alert] Souvenir retail outlet selling imported plastic keychains and synthetic trinkets. High commercial bias with zero traditional craftsmanship heritage.',
      ja: '[商業的注意] 輸入プラスチックのお土産品を中心に販売するショップで、伝統文化の価値は含まれていません。',
      zh: '[商业化提示] 主要销售进口塑料钥匙扣及批量小商品，缺乏传统工艺价值与历史传承。'
    },
    docentAudioScript: {
      ko: '이곳은 수입산 대량 생산 기념품을 판매하는 상점입니다. 장인의 손길이 담긴 정통 한국 공예품을 구입하시려면 인근 무형문화재 전시장이나 전통 공방을 방문해보세요.',
      en: 'Caution: This location offers factory mass-produced novelty trinkets rather than authentic artisan crafts.',
      ja: 'ご注意：大量生産品を扱うショップです。真の工芸品をお求めの場合は無形文化財展示場をご利用ください。',
      zh: '提示：本店铺主要销售流水线批量小商品，如欲购买真正的传统工匠手作，建议前往非遗展示馆。'
    },
    positiveTags: ['#기념품'],
    commercialWarningTags: ['#수입산대량생산', '#단순상업매장', '#전통성부재', '#바가지가격위험'],
    reviewsCount: 180,
    reviews: []
  }
];
