// ** Mock
import mock from 'src/@fake-db/mock'

const data = {
  users: [
    // {
    //   id: 1,
    //   fullName: 'Galen Slixby',
    //   company: 'Yotz PVT LTD',
    //   role: 'editor',
    //   username: 'gslixby0',
    //   country: 'El Salvador',
    //   contact: '(479) 232-9151',
    //   email: 'gslixby0@abc.net.au',
    //   currentPlan: 'enterprise',
    //   status: 'inactive',
    //   avatar: '',
    //   avatarColor: 'primary'
    // },
    // {
    //   id: 1,
    //   fullName: 'Jim ONeal',
    //   username: 'jimoneal',
    //   avatar: '',
    //   email: 'jim.oneal@example.com',
    //   contact: '404-692-XXXX',
    //   // created: '2018-08-01',
    //   // updated: '2025-06-15',
    //   role: 'maintainer',
    //   status: 'active'
    // },
    // {
    //   id: 2,
    //   fullName: 'Halsey Redmore',
    //   company: 'Skinder PVT LTD',
    //   role: 'author',
    //   username: 'hredmore1',
    //   country: 'Albania',
    //   contact: '(472) 607-9137',
    //   email: 'hredmore1@imgur.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '/images/avatars/3.png'
    // },
    // {
    //   id: 3,
    //   fullName: 'Marjory Sicely',
    //   company: 'Oozz PVT LTD',
    //   role: 'maintainer',
    //   username: 'msicely2',
    //   country: 'Russia',
    //   contact: '(321) 264-4599',
    //   email: 'msicely2@who.int',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   avatar: '/images/avatars/1.png'
    // },
    // {
    //   id: 4,
    //   fullName: 'Cyrill Risby',
    //   company: 'Oozz PVT LTD',
    //   role: 'maintainer',
    //   username: 'crisby3',
    //   country: 'China',
    //   contact: '(923) 690-6806',
    //   email: 'crisby3@wordpress.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: '/images/avatars/3.png'
    // },
    // {
    //   id: 5,
    //   fullName: 'Maggy Hurran',
    //   company: 'Aimbo PVT LTD',
    //   role: 'subscriber',
    //   username: 'mhurran4',
    //   country: 'Pakistan',
    //   contact: '(669) 914-1078',
    //   email: 'mhurran4@yahoo.co.jp',
    //   currentPlan: 'enterprise',
    //   status: 'pending',
    //   avatar: '/images/avatars/1.png'
    // },
    // {
    //   id: 6,
    //   fullName: 'Silvain Halstead',
    //   company: 'Jaxbean PVT LTD',
    //   role: 'author',
    //   username: 'shalstead5',
    //   country: 'China',
    //   contact: '(958) 973-3093',
    //   email: 'shalstead5@shinystat.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: '',
    //   avatarColor: 'error'
    // },
    // {
    //   id: 7,
    //   fullName: 'Breena Gallemore',
    //   company: 'Jazzy PVT LTD',
    //   role: 'subscriber',
    //   username: 'bgallemore6',
    //   country: 'Canada',
    //   contact: '(825) 977-8152',
    //   email: 'bgallemore6@boston.com',
    //   currentPlan: 'company',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'warning'
    // },
    // {
    //   id: 8,
    //   fullName: 'Kathryne Liger',
    //   company: 'Pixoboo PVT LTD',
    //   role: 'author',
    //   username: 'kliger7',
    //   country: 'France',
    //   contact: '(187) 440-0934',
    //   email: 'kliger7@vinaora.com',
    //   currentPlan: 'enterprise',
    //   status: 'pending',
    //   avatar: '/images/avatars/4.png'
    // },
    // {
    //   id: 9,
    //   fullName: 'Franz Scotfurth',
    //   company: 'Tekfly PVT LTD',
    //   role: 'subscriber',
    //   username: 'fscotfurth8',
    //   country: 'China',
    //   contact: '(978) 146-5443',
    //   email: 'fscotfurth8@dailymotion.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '/images/avatars/2.png'
    // },
    // {
    //   id: 10,
    //   fullName: 'Jillene Bellany',
    //   company: 'Gigashots PVT LTD',
    //   role: 'maintainer',
    //   username: 'jbellany9',
    //   country: 'Jamaica',
    //   contact: '(589) 284-6732',
    //   email: 'jbellany9@kickstarter.com',
    //   currentPlan: 'company',
    //   status: 'inactive',
    //   avatar: '/images/avatars/5.png'
    // },
    // {
    //   id: 11,
    //   fullName: 'Jonah Wharlton',
    //   company: 'Eare PVT LTD',
    //   role: 'subscriber',
    //   username: 'jwharltona',
    //   country: 'United States',
    //   contact: '(176) 532-6824',
    //   email: 'jwharltona@oakley.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: '/images/avatars/4.png'
    // },
    // {
    //   id: 12,
    //   fullName: 'Seth Hallam',
    //   company: 'Yakitri PVT LTD',
    //   role: 'subscriber',
    //   username: 'shallamb',
    //   country: 'Peru',
    //   contact: '(234) 464-0600',
    //   email: 'shallamb@hugedomains.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '/images/avatars/5.png'
    // },
    // {
    //   id: 13,
    //   fullName: 'Yoko Pottie',
    //   company: 'Leenti PVT LTD',
    //   role: 'subscriber',
    //   username: 'ypottiec',
    //   country: 'Philippines',
    //   contact: '(907) 284-5083',
    //   email: 'ypottiec@privacy.gov.au',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   avatar: '/images/avatars/7.png'
    // },
    // {
    //   id: 14,
    //   fullName: 'Maximilianus Krause',
    //   company: 'Digitube PVT LTD',
    //   role: 'author',
    //   username: 'mkraused',
    //   country: 'Democratic Republic of the Congo',
    //   contact: '(167) 135-7392',
    //   email: 'mkraused@stanford.edu',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: '/images/avatars/6.png'
    // },
    // {
    //   id: 15,
    //   fullName: 'Zsazsa McCleverty',
    //   company: 'Kaymbo PVT LTD',
    //   role: 'maintainer',
    //   username: 'zmcclevertye',
    //   country: 'France',
    //   contact: '(317) 409-6565',
    //   email: 'zmcclevertye@soundcloud.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   avatar: '/images/avatars/2.png'
    // },
    // {
    //   id: 16,
    //   fullName: 'Bentlee Emblin',
    //   company: 'Yambee PVT LTD',
    //   role: 'author',
    //   username: 'bemblinf',
    //   country: 'Spain',
    //   contact: '(590) 606-1056',
    //   email: 'bemblinf@wired.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: '/images/avatars/6.png'
    // },
    // {
    //   id: 17,
    //   fullName: 'Brockie Myles',
    //   company: 'Wikivu PVT LTD',
    //   role: 'maintainer',
    //   username: 'bmylesg',
    //   country: 'Poland',
    //   contact: '(553) 225-9905',
    //   email: 'bmylesg@amazon.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   avatar: '',
    //   avatarColor: 'success'
    // },
    // {
    //   id: 18,
    //   fullName: 'Bertha Biner',
    //   company: 'Twinte PVT LTD',
    //   role: 'editor',
    //   username: 'bbinerh',
    //   country: 'Yemen',
    //   contact: '(901) 916-9287',
    //   email: 'bbinerh@mozilla.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: '/images/avatars/7.png'
    // },
    // {
    //   id: 19,
    //   fullName: 'Travus Bruntjen',
    //   company: 'Cogidoo PVT LTD',
    //   role: 'admin',
    //   username: 'tbruntjeni',
    //   country: 'France',
    //   contact: '(524) 586-6057',
    //   email: 'tbruntjeni@sitemeter.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   avatar: '',
    //   avatarColor: 'primary'
    // },
    // {
    //   id: 20,
    //   fullName: 'Wesley Burland',
    //   company: 'Bubblemix PVT LTD',
    //   role: 'editor',
    //   username: 'wburlandj',
    //   country: 'Honduras',
    //   contact: '(569) 683-1292',
    //   email: 'wburlandj@uiuc.edu',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: '/images/avatars/6.png'
    // },
    // {
    //   id: 21,
    //   fullName: 'Selina Kyle',
    //   company: 'Wayne Enterprises',
    //   role: 'admin',
    //   username: 'catwomen1940',
    //   country: 'USA',
    //   contact: '(829) 537-0057',
    //   email: 'irena.dubrovna@wayne.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: '/images/avatars/1.png'
    // },
    // {
    //   id: 22,
    //   fullName: 'Jameson Lyster',
    //   company: 'Quaxo PVT LTD',
    //   role: 'editor',
    //   username: 'jlysterl',
    //   country: 'Ukraine',
    //   contact: '(593) 624-0222',
    //   email: 'jlysterl@guardian.co.uk',
    //   currentPlan: 'company',
    //   status: 'inactive',
    //   avatar: '/images/avatars/8.png'
    // },
    // {
    //   id: 23,
    //   fullName: 'Kare Skitterel',
    //   company: 'Ainyx PVT LTD',
    //   role: 'maintainer',
    //   username: 'kskitterelm',
    //   country: 'Poland',
    //   contact: '(254) 845-4107',
    //   email: 'kskitterelm@ainyx.com',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: '/images/avatars/3.png'
    // },
    // {
    //   id: 24,
    //   fullName: 'Cleavland Hatherleigh',
    //   company: 'Flipopia PVT LTD',
    //   role: 'admin',
    //   username: 'chatherleighn',
    //   country: 'Brazil',
    //   contact: '(700) 783-7498',
    //   email: 'chatherleighn@washington.edu',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '/images/avatars/2.png'
    // },
    // {
    //   id: 25,
    //   fullName: 'Adeline Micco',
    //   company: 'Topicware PVT LTD',
    //   role: 'admin',
    //   username: 'amiccoo',
    //   country: 'France',
    //   contact: '(227) 598-1841',
    //   email: 'amiccoo@whitehouse.gov',
    //   currentPlan: 'enterprise',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'error'
    // },
    // {
    //   id: 26,
    //   fullName: 'Hugh Hasson',
    //   company: 'Skinix PVT LTD',
    //   role: 'admin',
    //   username: 'hhassonp',
    //   country: 'China',
    //   contact: '(582) 516-1324',
    //   email: 'hhassonp@bizjournals.com',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   avatar: '/images/avatars/4.png'
    // },
    // {
    //   id: 27,
    //   fullName: 'Germain Jacombs',
    //   company: 'Youopia PVT LTD',
    //   role: 'editor',
    //   username: 'gjacombsq',
    //   country: 'Zambia',
    //   contact: '(137) 467-5393',
    //   email: 'gjacombsq@jigsy.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   avatar: '/images/avatars/5.png'
    // },
    // {
    //   id: 28,
    //   fullName: 'Bree Kilday',
    //   company: 'Jetpulse PVT LTD',
    //   role: 'maintainer',
    //   username: 'bkildayr',
    //   country: 'Portugal',
    //   contact: '(412) 476-0854',
    //   email: 'bkildayr@mashable.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: '',
    //   avatarColor: 'warning'
    // },
    // {
    //   id: 29,
    //   fullName: 'Candice Pinyon',
    //   company: 'Kare PVT LTD',
    //   role: 'maintainer',
    //   username: 'cpinyons',
    //   country: 'Sweden',
    //   contact: '(170) 683-1520',
    //   email: 'cpinyons@behance.net',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: '/images/avatars/7.png'
    // },
    // {
    //   id: 30,
    //   fullName: 'Isabel Mallindine',
    //   company: 'Voomm PVT LTD',
    //   role: 'subscriber',
    //   username: 'imallindinet',
    //   country: 'Slovenia',
    //   contact: '(332) 803-1983',
    //   email: 'imallindinet@shinystat.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'info'
    // },
    // {
    //   id: 31,
    //   fullName: 'Gwendolyn Meineken',
    //   company: 'Oyondu PVT LTD',
    //   role: 'admin',
    //   username: 'gmeinekenu',
    //   country: 'Moldova',
    //   contact: '(551) 379-7460',
    //   email: 'gmeinekenu@hc360.com',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: '/images/avatars/1.png'
    // },
    // {
    //   id: 32,
    //   fullName: 'Rafaellle Snowball',
    //   company: 'Fivespan PVT LTD',
    //   role: 'editor',
    //   username: 'rsnowballv',
    //   country: 'Philippines',
    //   contact: '(974) 829-0911',
    //   email: 'rsnowballv@indiegogo.com',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: '/images/avatars/5.png'
    // },
    // {
    //   id: 33,
    //   fullName: 'Rochette Emer',
    //   company: 'Thoughtworks PVT LTD',
    //   role: 'admin',
    //   username: 'remerw',
    //   country: 'North Korea',
    //   contact: '(841) 889-3339',
    //   email: 'remerw@blogtalkradio.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   avatar: '/images/avatars/8.png'
    // },
    // {
    //   id: 34,
    //   fullName: 'Ophelie Fibbens',
    //   company: 'Jaxbean PVT LTD',
    //   role: 'subscriber',
    //   username: 'ofibbensx',
    //   country: 'Indonesia',
    //   contact: '(764) 885-7351',
    //   email: 'ofibbensx@booking.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: '/images/avatars/4.png'
    // },
    // {
    //   id: 35,
    //   fullName: 'Stephen MacGilfoyle',
    //   company: 'Browseblab PVT LTD',
    //   role: 'maintainer',
    //   username: 'smacgilfoyley',
    //   country: 'Japan',
    //   contact: '(350) 589-8520',
    //   email: 'smacgilfoyley@bigcartel.com',
    //   currentPlan: 'company',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'error'
    // },
    // {
    //   id: 36,
    //   fullName: 'Bradan Rosebotham',
    //   company: 'Agivu PVT LTD',
    //   role: 'subscriber',
    //   username: 'brosebothamz',
    //   country: 'Belarus',
    //   contact: '(882) 933-2180',
    //   email: 'brosebothamz@tripadvisor.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: '',
    //   avatarColor: 'success'
    // },
    // {
    //   id: 37,
    //   fullName: 'Skip Hebblethwaite',
    //   company: 'Katz PVT LTD',
    //   role: 'admin',
    //   username: 'shebblethwaite10',
    //   country: 'Canada',
    //   contact: '(610) 343-1024',
    //   email: 'shebblethwaite10@arizona.edu',
    //   currentPlan: 'company',
    //   status: 'inactive',
    //   avatar: '/images/avatars/1.png'
    // },
    // {
    //   id: 38,
    //   fullName: 'Moritz Piccard',
    //   company: 'Twitternation PVT LTD',
    //   role: 'maintainer',
    //   username: 'mpiccard11',
    //   country: 'Croatia',
    //   contact: '(365) 277-2986',
    //   email: 'mpiccard11@vimeo.com',
    //   currentPlan: 'enterprise',
    //   status: 'inactive',
    //   avatar: '/images/avatars/1.png'
    // },
    // {
    //   id: 39,
    //   fullName: 'Tyne Widmore',
    //   company: 'Yombu PVT LTD',
    //   role: 'subscriber',
    //   username: 'twidmore12',
    //   country: 'Finland',
    //   contact: '(531) 731-0928',
    //   email: 'twidmore12@bravesites.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'primary'
    // },
    // {
    //   id: 40,
    //   fullName: 'Florenza Desporte',
    //   company: 'Kamba PVT LTD',
    //   role: 'author',
    //   username: 'fdesporte13',
    //   country: 'Ukraine',
    //   contact: '(312) 104-2638',
    //   email: 'fdesporte13@omniture.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: '/images/avatars/6.png'
    // },
    // {
    //   id: 41,
    //   fullName: 'Edwina Baldetti',
    //   company: 'Dazzlesphere PVT LTD',
    //   role: 'maintainer',
    //   username: 'ebaldetti14',
    //   country: 'Haiti',
    //   contact: '(315) 329-3578',
    //   email: 'ebaldetti14@theguardian.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'info'
    // },
    // {
    //   id: 42,
    //   fullName: 'Benedetto Rossiter',
    //   company: 'Mybuzz PVT LTD',
    //   role: 'editor',
    //   username: 'brossiter15',
    //   country: 'Indonesia',
    //   contact: '(323) 175-6741',
    //   email: 'brossiter15@craigslist.org',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: '',
    //   avatarColor: 'warning'
    // },
    // {
    //   id: 43,
    //   fullName: 'Micaela McNirlan',
    //   company: 'Tambee PVT LTD',
    //   role: 'admin',
    //   username: 'mmcnirlan16',
    //   country: 'Indonesia',
    //   contact: '(242) 952-0916',
    //   email: 'mmcnirlan16@hc360.com',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   avatar: '',
    //   avatarColor: 'error'
    // },
    // {
    //   id: 44,
    //   fullName: 'Vladamir Koschek',
    //   company: 'Centimia PVT LTD',
    //   role: 'author',
    //   username: 'vkoschek17',
    //   country: 'Guatemala',
    //   contact: '(531) 758-8335',
    //   email: 'vkoschek17@abc.net.au',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: '',
    //   avatarColor: 'success'
    // },
    // {
    //   id: 45,
    //   fullName: 'Corrie Perot',
    //   company: 'Flipopia PVT LTD',
    //   role: 'subscriber',
    //   username: 'cperot18',
    //   country: 'China',
    //   contact: '(659) 385-6808',
    //   email: 'cperot18@goo.ne.jp',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: '/images/avatars/3.png'
    // },
    // {
    //   id: 46,
    //   fullName: 'Saunder Offner',
    //   company: 'Skalith PVT LTD',
    //   role: 'maintainer',
    //   username: 'soffner19',
    //   country: 'Poland',
    //   contact: '(200) 586-2264',
    //   email: 'soffner19@mac.com',
    //   currentPlan: 'enterprise',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'primary'
    // },
    // {
    //   id: 47,
    //   fullName: 'Karena Courtliff',
    //   company: 'Feedfire PVT LTD',
    //   role: 'admin',
    //   username: 'kcourtliff1a',
    //   country: 'China',
    //   contact: '(478) 199-0020',
    //   email: 'kcourtliff1a@bbc.co.uk',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   avatar: '/images/avatars/1.png'
    // },
    // {
    //   id: 48,
    //   fullName: 'Onfre Wind',
    //   company: 'Thoughtmix PVT LTD',
    //   role: 'admin',
    //   username: 'owind1b',
    //   country: 'Ukraine',
    //   contact: '(344) 262-7270',
    //   email: 'owind1b@yandex.ru',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: '',
    //   avatarColor: 'error'
    // },
    // {
    //   id: 49,
    //   fullName: 'Paulie Durber',
    //   company: 'Babbleblab PVT LTD',
    //   role: 'subscriber',
    //   username: 'pdurber1c',
    //   country: 'Sweden',
    //   contact: '(694) 676-1275',
    //   email: 'pdurber1c@gov.uk',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: '',
    //   avatarColor: 'warning'
    // },
    // {
    //   id: 50,
    //   fullName: 'Beverlie Krabbe',
    //   company: 'Kaymbo PVT LTD',
    //   role: 'editor',
    //   username: 'bkrabbe1d',
    //   country: 'China',
    //   contact: '(397) 294-5153',
    //   email: 'bkrabbe1d@home.pl',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: '/images/avatars/2.png'
    // }
    {
      id: 1,
      fullName: 'Jim ONeal',
      username: 'jimoneal',
      avatar: '/images/avatars/2.png',
      email: 'jim.oneal@example.com',
      phone: '479-232-9XXX',
      created: '2018-08-01',
      updated: '2025-06-15',
      role: 'author',
      status: 'inactive'
    },
    {
      id: 2,
      fullName: 'Justin Howard',
      username: 'justinhoward',
      avatar: '/images/avatars/3.png',
      email: 'justin.howard@example.com',
      phone: '472-607-9XXX',
      created: '2018-08-01',
      updated: '2018-08-01',
      role: 'author',
      status: 'active'
    },
    {
      id: 3,
      fullName: 'Rob Schmidt',
      username: 'robschmidt',
      avatar: '/images/avatars/1.png',
      email: 'rob.schmidt@example.com',
      phone: '321-264-4XXX',
      created: '2018-08-01',
      updated: '2025-06-01',
      role: 'maintainer',
      status: 'active'
    },
    {
      id: 4,
      fullName: 'Julie Thomas',
      username: 'juliethomas',
      avatar: '/images/avatars/3.png',
      email: 'julie.thomas@example.com',
      phone: '923-690-6XXX',
      created: '2018-08-01',
      updated: '2018-08-01',
      role: 'maintainer',
      status: 'inactive'
    },
    {
      id: 5,
      fullName: 'Greg Hoag',
      username: 'greghoag',
      avatar: '/images/avatars/1.png',
      email: 'greg.hoag@example.com',
      phone: '669-914-1XXX',
      created: '2019-01-15',
      updated: '2024-11-20',
      role: 'subscriber',
      status: 'active'
    },
    {
      id: 6,
      fullName: 'Ben Maude',
      username: 'benmaude',
      avatar: '',
      email: 'ben.maude@example.com',
      phone: '958-973-3XXX',
      created: '2020-11-01',
      updated: '2022-06-08',
      role: 'author',
      status: 'active'
    },
    {
      id: 7,
      fullName: 'Ryan Costello',
      username: 'ryancostello',
      avatar: '',
      email: 'ryan.costello@example.com',
      phone: '825-977-8XXX',
      created: '2020-11-01',
      updated: '2023-03-12',
      role: 'subscriber',
      status: 'active'
    },
    {
      id: 8,
      fullName: 'Jim ONeal',
      username: 'jimoneal2',
      avatar: '/images/avatars/4.png',
      email: 'jim.oneal2@example.com',
      phone: '187-440-0XXX',
      created: '2019-06-20',
      updated: '2025-01-05',
      role: 'author',
      status: 'active'
    },
    {
      id: 9,
      fullName: 'Justin Howard',
      username: 'justinhoward2',
      avatar: '/images/avatars/2.png',
      email: 'justin.howard2@example.com',
      phone: '978-146-5XXX',
      created: '2019-09-10',
      updated: '2024-10-10',
      role: 'subscriber',
      status: 'active'
    },
    {
      id: 10,
      fullName: 'Rob Schmidt',
      username: 'robschmidt2',
      avatar: '/images/avatars/5.png',
      email: 'rob.schmidt2@example.com',
      phone: '589-284-6XXX',
      created: '2018-08-01',
      updated: '2021-02-18',
      role: 'maintainer',
      status: 'inactive'
    },
    {
      id: 11,
      fullName: 'Julie Thomas',
      username: 'juliethomas2',
      avatar: '/images/avatars/4.png',
      email: 'julie.thomas2@example.com',
      phone: '176-532-6XXX',
      created: '2018-08-01',
      updated: '2023-08-03',
      role: 'subscriber',
      status: 'inactive'
    },
    {
      id: 12,
      fullName: 'Greg Hoag',
      username: 'greghoag2',
      avatar: '/images/avatars/5.png',
      email: 'greg.hoag2@example.com',
      phone: '234-464-0XXX',
      created: '2019-04-12',
      updated: '2019-04-12',
      role: 'subscriber',
      status: 'pending'
    },
    {
      id: 13,
      fullName: 'Yoko Pottie',
      username: 'ypottiec',
      avatar: '/images/avatars/7.png',
      email: 'ypottiec@privacy.gov.au',
      phone: '907-284-5XXX',
      created: '2018-08-01',
      updated: '2020-12-30',
      role: 'subscriber',
      status: 'inactive'
    },
    {
      id: 14,
      fullName: 'Maximilianus Krause',
      username: 'mkraused',
      avatar: '/images/avatars/6.png',
      email: 'mkraused@stanford.edu',
      phone: '167-135-7XXX',
      created: '2018-08-01',
      updated: '2025-06-01',
      role: 'author',
      status: 'active'
    },
    {
      id: 15,
      fullName: 'Zsazsa McCleverty',
      username: 'zmcclevertye',
      avatar: '/images/avatars/2.png',
      email: 'zmcclevertye@soundcloud.com',
      phone: '317-409-6XXX',
      created: '2019-08-21',
      updated: '2024-07-22',
      role: 'maintainer',
      status: 'active'
    },
    {
      id: 16,
      fullName: 'Bentlee Emblin',
      username: 'bemblinf',
      avatar: '/images/avatars/6.png',
      email: 'bemblinf@wired.com',
      phone: '590-606-1XXX',
      created: '2020-01-05',
      updated: '2024-05-14',
      role: 'author',
      status: 'active'
    },
    {
      id: 17,
      fullName: 'Brockie Myles',
      username: 'bmylesg',
      avatar: '',
      email: 'bmylesg@amazon.com',
      phone: '553-225-9XXX',
      created: '2018-08-01',
      updated: '2023-11-02',
      role: 'maintainer',
      status: 'active'
    },
    {
      id: 18,
      fullName: 'Bertha Biner',
      username: 'bbinerh',
      avatar: '/images/avatars/7.png',
      email: 'bbinerh@mozilla.com',
      phone: '901-916-9XXX',
      created: '2019-02-14',
      updated: '2024-02-28',
      role: 'editor',
      status: 'active'
    },
    {
      id: 19,
      fullName: 'Travus Bruntjen',
      username: 'tbruntjeni',
      avatar: '',
      email: 'tbruntjeni@sitemeter.com',
      phone: '524-586-6XXX',
      created: '2018-10-11',
      updated: '2024-09-09',
      role: 'admin',
      status: 'active'
    },
    {
      id: 20,
      fullName: 'Wesley Burland',
      username: 'wburlandj',
      avatar: '/images/avatars/6.png',
      email: 'wburlandj@uiuc.edu',
      phone: '569-683-1XXX',
      created: '2018-08-01',
      updated: '2022-07-07',
      role: 'editor',
      status: 'inactive'
    },
    {
      id: 21,
      fullName: 'Selina Kyle',
      username: 'catwomen1940',
      avatar: '/images/avatars/1.png',
      email: 'irena.dubrovna@wayne.com',
      phone: '829-537-0XXX',
      created: '2018-08-01',
      updated: '2025-02-11',
      role: 'admin',
      status: 'active'
    },
    {
      id: 22,
      fullName: 'Jameson Lyster',
      username: 'jlysterl',
      avatar: '/images/avatars/8.png',
      email: 'jlysterl@guardian.co.uk',
      phone: '593-624-0XXX',
      created: '2019-03-03',
      updated: '2021-06-06',
      role: 'editor',
      status: 'inactive'
    },
    {
      id: 23,
      fullName: 'Kare Skitterel',
      username: 'kskitterelm',
      avatar: '/images/avatars/3.png',
      email: 'kskitterelm@ainyx.com',
      phone: '254-845-4XXX',
      created: '2020-09-09',
      updated: '2024-08-08',
      role: 'maintainer',
      status: 'pending'
    },
    {
      id: 24,
      fullName: 'Cleavland Hatherleigh',
      username: 'chatherleighn',
      avatar: '/images/avatars/2.png',
      email: 'chatherleighn@washington.edu',
      phone: '700-783-7XXX',
      created: '2018-11-20',
      updated: '2023-05-05',
      role: 'admin',
      status: 'pending'
    },
    {
      id: 25,
      fullName: 'Adeline Micco',
      username: 'amiccoo',
      avatar: '',
      email: 'amiccoo@whitehouse.gov',
      phone: '227-598-1XXX',
      created: '2019-05-18',
      updated: '2024-03-03',
      role: 'admin',
      status: 'pending'
    },
    {
      id: 26,
      fullName: 'Hugh Hasson',
      username: 'hhassonp',
      avatar: '/images/avatars/4.png',
      email: 'hhassonp@bizjournals.com',
      phone: '582-516-1XXX',
      created: '2018-08-01',
      updated: '2022-10-10',
      role: 'admin',
      status: 'inactive'
    },
    {
      id: 27,
      fullName: 'Germain Jacombs',
      username: 'gjacombsq',
      avatar: '/images/avatars/5.png',
      email: 'gjacombsq@jigsy.com',
      phone: '137-467-5XXX',
      created: '2019-12-12',
      updated: '2024-12-12',
      role: 'editor',
      status: 'active'
    },
    {
      id: 28,
      fullName: 'Bree Kilday',
      username: 'bkildayr',
      avatar: '',
      email: 'bkildayr@mashable.com',
      phone: '412-476-0XXX',
      created: '2020-06-06',
      updated: '2024-06-06',
      role: 'maintainer',
      status: 'active'
    },
    {
      id: 29,
      fullName: 'Candice Pinyon',
      username: 'cpinyons',
      avatar: '/images/avatars/7.png',
      email: 'cpinyons@behance.net',
      phone: '170-683-1XXX',
      created: '2018-08-01',
      updated: '2025-03-15',
      role: 'maintainer',
      status: 'active'
    },
    {
      id: 30,
      fullName: 'Isabel Mallindine',
      username: 'imallindinet',
      avatar: '',
      email: 'imallindinet@shinystat.com',
      phone: '332-803-1XXX',
      created: '2021-01-01',
      updated: '2025-05-05',
      role: 'subscriber',
      status: 'pending'
    },
    {
      id: 31,
      fullName: 'Gwendolyn Meineken',
      username: 'gmeinekenu',
      avatar: '/images/avatars/1.png',
      email: 'gmeinekenu@hc360.com',
      phone: '551-379-7XXX',
      created: '2019-07-07',
      updated: '2024-09-09',
      role: 'admin',
      status: 'pending'
    },
    {
      id: 32,
      fullName: 'Rafaellle Snowball',
      username: 'rsnowballv',
      avatar: '/images/avatars/5.png',
      email: 'rsnowballv@indiegogo.com',
      phone: '974-829-0XXX',
      created: '2018-08-01',
      updated: '2023-07-07',
      role: 'editor',
      status: 'pending'
    },
    {
      id: 33,
      fullName: 'Rochette Emer',
      username: 'remerw',
      avatar: '/images/avatars/8.png',
      email: 'remerw@blogtalkradio.com',
      phone: '841-889-3XXX',
      created: '2018-08-01',
      updated: '2025-04-01',
      role: 'admin',
      status: 'active'
    },
    {
      id: 34,
      fullName: 'Ophelie Fibbens',
      username: 'ofibbensx',
      avatar: '/images/avatars/4.png',
      email: 'ofibbensx@booking.com',
      phone: '764-885-7XXX',
      created: '2019-09-09',
      updated: '2024-11-11',
      role: 'subscriber',
      status: 'active'
    },
    {
      id: 35,
      fullName: 'Stephen MacGilfoyle',
      username: 'smacgilfoyley',
      avatar: '',
      email: 'smacgilfoyley@bigcartel.com',
      phone: '350-589-8XXX',
      created: '2020-02-02',
      updated: '2024-02-02',
      role: 'maintainer',
      status: 'pending'
    },
    {
      id: 36,
      fullName: 'Bradan Rosebotham',
      username: 'brosebothamz',
      avatar: '',
      email: 'brosebothamz@tripadvisor.com',
      phone: '882-933-2XXX',
      created: '2019-10-10',
      updated: '2021-10-10',
      role: 'subscriber',
      status: 'inactive'
    },
    {
      id: 37,
      fullName: 'Skip Hebblethwaite',
      username: 'shebblethwaite10',
      avatar: '/images/avatars/1.png',
      email: 'shebblethwaite10@arizona.edu',
      phone: '610-343-1XXX',
      created: '2018-08-01',
      updated: '2020-05-05',
      role: 'admin',
      status: 'inactive'
    },
    {
      id: 38,
      fullName: 'Moritz Piccard',
      username: 'mpiccard11',
      avatar: '/images/avatars/1.png',
      email: 'mpiccard11@vimeo.com',
      phone: '365-277-2XXX',
      created: '2018-08-01',
      updated: '2022-08-08',
      role: 'maintainer',
      status: 'inactive'
    },
    {
      id: 39,
      fullName: 'Tyne Widmore',
      username: 'twidmore12',
      avatar: '',
      email: 'twidmore12@bravesites.com',
      phone: '531-731-0XXX',
      created: '2021-04-04',
      updated: '2024-04-04',
      role: 'subscriber',
      status: 'pending'
    },
    {
      id: 40,
      fullName: 'Florenza Desporte',
      username: 'fdesporte13',
      avatar: '/images/avatars/6.png',
      email: 'fdesporte13@omniture.com',
      phone: '312-104-2XXX',
      created: '2018-08-01',
      updated: '2025-01-20',
      role: 'author',
      status: 'active'
    },
    {
      id: 41,
      fullName: 'Edwina Baldetti',
      username: 'ebaldetti14',
      avatar: '',
      email: 'ebaldetti14@theguardian.com',
      phone: '315-329-3XXX',
      created: '2019-03-03',
      updated: '2024-03-03',
      role: 'maintainer',
      status: 'pending'
    },
    {
      id: 42,
      fullName: 'Benedetto Rossiter',
      username: 'brossiter15',
      avatar: '',
      email: 'brossiter15@craigslist.org',
      phone: '323-175-6XXX',
      created: '2019-05-05',
      updated: '2022-05-05',
      role: 'editor',
      status: 'inactive'
    },
    {
      id: 43,
      fullName: 'Micaela McNirlan',
      username: 'mmcnirlan16',
      avatar: '',
      email: 'mmcnirlan16@hc360.com',
      phone: '242-952-0XXX',
      created: '2018-08-01',
      updated: '2021-01-01',
      role: 'admin',
      status: 'inactive'
    },
    {
      id: 44,
      fullName: 'Vladamir Koschek',
      username: 'vkoschek17',
      avatar: '',
      email: 'vkoschek17@abc.net.au',
      phone: '531-758-8XXX',
      created: '2018-08-01',
      updated: '2024-08-08',
      role: 'author',
      status: 'active'
    },
    {
      id: 45,
      fullName: 'Corrie Perot',
      username: 'cperot18',
      avatar: '/images/avatars/3.png',
      email: 'cperot18@goo.ne.jp',
      phone: '659-385-6XXX',
      created: '2019-07-07',
      updated: '2024-07-07',
      role: 'subscriber',
      status: 'pending'
    },
    {
      id: 46,
      fullName: 'Saunder Offner',
      username: 'soffner19',
      avatar: '',
      email: 'soffner19@mac.com',
      phone: '200-586-2XXX',
      created: '2020-02-20',
      updated: '2023-02-20',
      role: 'maintainer',
      status: 'pending'
    },
    {
      id: 47,
      fullName: 'Karena Courtliff',
      username: 'kcourtliff1a',
      avatar: '/images/avatars/1.png',
      email: 'kcourtliff1a@bbc.co.uk',
      phone: '478-199-0XXX',
      created: '2018-08-01',
      updated: '2025-03-03',
      role: 'admin',
      status: 'active'
    },
    {
      id: 48,
      fullName: 'Onfre Wind',
      username: 'owind1b',
      avatar: '',
      email: 'owind1b@yandex.ru',
      phone: '344-262-7XXX',
      created: '2021-09-09',
      updated: '2024-09-09',
      role: 'admin',
      status: 'pending'
    },
    {
      id: 49,
      fullName: 'Paulie Durber',
      username: 'pdurber1c',
      avatar: '',
      email: 'pdurber1c@gov.uk',
      phone: '694-676-1XXX',
      created: '2019-11-11',
      updated: '2022-11-11',
      role: 'subscriber',
      status: 'inactive'
    },
    {
      id: 50,
      fullName: 'Beverlie Krabbe',
      username: 'bkrabbe1d',
      avatar: '/images/avatars/2.png',
      email: 'bkrabbe1d@home.pl',
      phone: '397-294-5XXX',
      created: '2018-08-01',
      updated: '2025-06-30',
      role: 'editor',
      status: 'active'
    }
  ]
}

const projectListData = [
  {
    id: 1,
    hours: '18:42',
    progressValue: 78,
    totalTask: '122/240',
    progressColor: 'success',
    projectType: 'React Project',
    projectTitle: 'BGC eCommerce App',
    img: '/images/icons/project-icons/react.png'
  },
  {
    id: 2,
    hours: '20:42',
    progressValue: 18,
    totalTask: '9/56',
    progressColor: 'error',
    projectType: 'Figma Project',
    projectTitle: 'Falcon Logo Design',
    img: '/images/icons/project-icons/figma.png'
  },
  {
    id: 3,
    hours: '120:87',
    progressValue: 62,
    totalTask: '290/320',
    progressColor: 'primary',
    projectType: 'VueJs Project',
    projectTitle: 'Dashboard Design',
    img: '/images/icons/project-icons/vue.png'
  },
  {
    id: 4,
    hours: '89:19',
    progressValue: 8,
    totalTask: '7/63',
    progressColor: 'error',
    projectType: 'Xamarin Project',
    projectTitle: 'Foodista Mobile App',
    img: '/images/icons/project-icons/xamarin.png'
  },
  {
    id: 5,
    hours: '230:10',
    progressValue: 49,
    totalTask: '120/186',
    progressColor: 'warning',
    projectType: 'Python Project',
    projectTitle: 'Dojo React Project',
    img: '/images/icons/project-icons/python.png'
  },
  {
    id: 6,
    hours: '342:41',
    progressValue: 92,
    totalTask: '99/109',
    progressColor: 'success',
    projectType: 'Sketch Project',
    projectTitle: 'Blockchain Website',
    img: '/images/icons/project-icons/sketch.png'
  },
  {
    id: 7,
    hours: '12:45',
    progressValue: 88,
    totalTask: '98/110',
    progressColor: 'success',
    projectType: 'HTML Project',
    projectTitle: 'Hoffman Website',
    img: '/images/icons/project-icons/html5.png'
  }
]

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data
  const lastId = Math.max(...data.users.map(u => u.id), 0)
  user.id = lastId + 1
  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) &&
          user.currentPlan.toLowerCase().includes(queryLowered) &&
          user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data
  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})

// GET: DATA
mock.onGet('/apps/users/project-list').reply(config => {
  const { q = '' } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = projectListData.filter(
    user =>
      user.projectTitle.toLowerCase().includes(queryLowered) ||
      user.projectType.toLowerCase().includes(queryLowered) ||
      user.totalTask.toLowerCase().includes(queryLowered) ||
      user.hours.toLowerCase().includes(queryLowered) ||
      String(user.progressValue).toLowerCase().includes(queryLowered)
  )

  return [200, filteredData]
})
