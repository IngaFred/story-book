import { ChatItemProps } from '@views/chat/components/chat-item';

/**
 * 对话信息
 */
const allChatList: ChatItemProps[] = [
  {
    id: 1,
    contactsId: 1,
    chapterId: 2,
    type: 'action',
    info: '你是叫【布脱脱】，是【如意楼】的低级【如意郎】 (其实你只去取过情报, 送过钱，没干过什么刺激的特工工作)。你高颧骨、卷头发，一副蒙古人的样子，出生于北元(元朝被明朝所灭，剩余势力跑到了漠北，也就是现在的蒙古，历史上 称为北元 ,打小父母双亡，六七岁的你就在漠北靠着乞讨生活，经常饥一顿饱一顿,仗着自己身高体壮,实在是饿极了你也去打一些猎物吃,自小你就练就了一身蛮力、速度以及烤肉的好手艺。',
    area: '',
    time: '你的过去',
    nextResponseId: 2,
  },
  {
    id: 2,
    contactsId: 1,
    chapterId: 2,
    type: 'action',
    info: '这一天你正在大漠打猎，遇见了【林珀】',
    area: '大漠',
    time: '大明朝永乐六年（1408）',
  },
  {
    id: 3,
    contactsId: 2,
    chapterId: 4,
    type: 'action',
    info: '这一天你正在大漠跟一只黄羊和赛跑(其实是想打死黄羊吃肉)，眼见你被黄羊用角顶着翻了几个跟头，突然黄羊不动了，你喘着粗气，惊魂未定',
    area: '大漠',
    time: '',
  },
  {
    id: 4,
    contactsId: 2,
    chapterId: 4,
    name: '林珀',
    type: 'chat',
    info: '小兄弟，你没事吧',
    nextResponseId: 5,
  },
  {
    id: 5,
    contactsId: 2,
    chapterId: 4,
    type: 'action',
    info: '一抬头，只见一个身着紫色长衫，手持宝剑的女子，英姿飒爽，正关切地望着你，见你看他，爽朗一笑。',
    time: '',
  },
  {
    id: 6,
    contactsId: 2,
    chapterId: 4,
    name: '林珀',
    type: 'chat',
    info: '不必客气，小兄弟为何一人在此？',
    time: '',
  },
  {
    id: 7,
    contactsId: 2,
    chapterId: 4,
    name: '林珀',
    type: 'chat',
    info: '滚',
    time: '',
  },
  {
    id: 8,
    contactsId: 1,
    chapterId: 4,
    name: '林珀',
    type: 'chat',
    info: '哈哈哈，看你跑的挺快，要不要和我来干活，给你个邮差，也能挣点饭钱',
    time: '',
  },
  //     {
  //       contactsId: 1,
  //       chapterId: 4,
  //       type: 'action',
  //       info: '你早就想找一份正经工作了，只可惜没人看得上你。现在有个贵人带你，况且她是你的救命恩人，你想好好把握这次机会，并且好好的报答她',
  //       time: '',
  //     },
  //     {
  //       contactsId: 1,
  //       chapterId: 4,
  //       type: 'my',
  //       info: '请务必带带我',
  //       time: '',
  //     },
  //     {
  //       contactsId: 1,
  //       chapterId: 4,
  //       name: '林珀',
  //       type: 'chat',
  //       info: '随我来吧，小兄弟',
  //       time: '',
  //     },
  {
    contactsId: 1,
    chapterId: 5,
    type: 'action',
    info: '接着，你跟着【林珀】在如意楼里成为了一名低级的【如意郎】 【如意郎】 也分三个等级，等级之间地以武艺、文化、特长区分，只有同等级的【如意郎】们住在一个院内，互相之间也不过问别人的工作情况，不同等级的【如意郎】之间几乎不见面。说你是【如意郎】，但你因为识字不多，武功也基本不会，但看着高大威 猛有个好样儿，被【林珀】编进了三级(最低级) 【如意郎】 队伍里。【林珀】 也，教了你些武功，比如点穴什么的，她说学会了点穴最差也能止血治伤。你觉得自己 学会了点穴，总想试验试验，但有一次你看见路边的野狗腿部受伤了，你就跑过去在它伤口周边点了几下，嘿!还真灵!它不但不流血了，还站起来了，还她妈追了你两条街!辛亏你紧急关头发挥了正常的跑步水准。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 5,
    type: 'action',
    info: '因为你自小就来到了南京，南京话已经成为了你的语言，蒙古语你已经基本不 会说了，也是由于你口音纯正、跑步速度决，【林珀】 和【如意楼】的二号首长【王溟】经常都会安排你去接头，拿情报，夹个包袱送钱，但时间都是在半夜里。有时 候是在城东头第二棵 歪脖树下的垃圾桶里，有时候是城西头澡堂子里的第三号存柜因为你自小就来到了南京，南京话已经成为了你的语言，蒙古语你已经基本不 会说了，也是由于你口音纯正、跑步速度决，【林珀】 和【如意楼】的二号首长【王溟】经常都会安排你去接头，拿情报，夹个包袱送钱，但时间都是在半夜里。有时 候是在城东头第二棵 歪脖树下的垃圾桶里，有时候是城西头澡堂子里的第三号存柜里，有时候一份是在城东头树下垃圾桶里、一份是在城西头澡堂子的三号柜子里,反正你跑得快，也就是一会的事儿，在这过程中你从没跟人接触过。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 6,
    type: 'action',
    info: '慢慢的，你知道了你们【如意楼】不简单，这里明面上是全南京城最大的青楼,其实是个情报贩卖机构，老板【林珀】更是了不得，传说中【如意楼】酒辔的密室里藏着各色毒药，还有无数朝廷命官、大明国内或其他国的隐秘资料一一但你因为身份低微，从来没进去过。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 7,
    type: 'action',
    info: '在【如意楼】里漂亮姑娘有很多，最美的可算是琴姬【依依】了，听说她只给达官显贵弹琴，因为她住在后楼，你只瞧见过她一次，“天下还有如此美貌的人啊!”你常常这么想。你发现【依依】有个使唤丫头【扈扈hu】，她总是做出神神秘秘的举动，令人捉摸不透。有一天傍晚下雨，你在前院看到她把伞往垃圾桶一扔，走过去娇羞地对【王溟】说:王公子我没带伞，这雨太大了，能带我一起走吗?你好心立马把伞捡起来递给了她，并告诉她不用谢，自己做好事不求回报，但她看你的眼神有些奇怪。尤其是最近每天晚上，她定时来前院，鬼鬼祟祟的还拿着相当精致的小盒子，这里面肯定是清报，她一定跟你一样是个【如意郎】，这个点儿出门是传递情报的，说不定那天她跟【王溟】也是在传递情报呢。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 8,
    type: 'action',
    info: '话说就是在【如意楼】出事儿的前两天，【扈扈huü】看见准备出发送清报的你,竟然还问你拿的包裹里装的是什么?奇圣?这姑娘怎么这么不懂规矩啊，不知道你们【如意郎】之间都是单线联系吗?相互之间问东问西可是清报工作的大忌啊!你有点鄙视地看了他一眼，没回答她。随后，你就一路快跑去了城东头第二棵歪脖树下，将包裹（里面装着的是购买清报用的银子）放到垃圾桶里，拿起一个信封（里面装的情报）再回来交给【林珀】。这次的情报，【林珀】千叮咛万嘱咐一定要交给她本人，这是你的工作，你出色地完成了任务。你也很在意和珍惜【如意郎】的身份，“如意郎、如意郎，恩必报，债必偿”每当你默念叨这句标志着【如意楼】企业文化的标语时，都不禁热血沸腾，暗自感念，毕竟你现在可是在【如意楼】工作，怎么也比之前跟野狗和黄羊赛跑强，起码有口饱饭啊。在某一瞬间，你仿佛有了从未有过的家的感觉，虽然有时候工作到半夜而导致早上太困了，硬是起不来，还因此被上级处罚过,但想想就觉得,这在如意楼里的日子，很踏实。日子就这么波澜不惊地过着，你正为每天吃得饱穿得暖而暗自高兴时，直到——',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 9,
    type: 'action',
    info: '大明朝永乐十四年(1416)，那一天，你正在如意楼的花船岸边和兄弟们一起警戒，正当午的天空突然一片漆黑，天亮以后，花船靠岸，就见有人大喊胡大人和林珀都死了……现场一片混乱，你眼睁睁地看着锦衣卫都指挥使【胡刚】大人五官血肉模糊地被人抬出来，紧接着被抬出来的尸体是【林珀】…·….“这回灰消火灭了!(南京话:完蛋的意思)”你心里一激灵，身为【如意郎】，你不禁想起了前两天你取回来的情报，难道是那个情报导致了【林珀】的死亡?!但那个清报你只是亲手交给了【林珀】，并没有泄密啊?!莫不成是【如意楼】里出了内鬼?毕竟是【林珀】把你从漠北带来南京，又给你饱饭暖衣你打心里难过，同时，也深深地为【如意楼】还能开几天而担忧……',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 10,
    type: 'action',
    info: '果然，没过多久，二把手【王溟】召集如意楼的所有人众开会，大意是如意楼不能存在下去了，三级【如意郎】领一笔遣散费各回各家，看着小伙伴们各自领钱散去，偌大的如意楼只剩下了你一个人，你不禁有些伤感。前院后院你正漫无目的地转悠着，突然，你看到【扈扈hu】背着个包袱从后院【依依】平日所居住的绣房下来，手里还拿着一个精致的小盒子，鬼鬼祟祟地背着小包袱，夹着盒子就跑了出去。你内心疑惑?难道【如意楼】并没有解散，她还在给【如意楼】送情报?',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 11,
    type: 'action',
    info: '虽然空有一副蒙古皮囊，但你的内心还是个纯正的南京人，南京人嘛，讲究的是一个“蒙古街，北平路，不如南京的小卖部”。扎根南京吧，你如是想。本想拿钱买所小房子置两亩地过上小康生活的你,意外的发现首都南京的房价已是天价了，手上这点钱也就够在玄武湖边组个一居室的。一晃两个月过去，眼见坐吃山空的你，想起了当年在漠北和野狗黄羊追逐的日子，便置办了一副厨灶，拿起扇子，走街串巷你卖起了烤串。“羊肉串，羊肉串，正宗漠北的羊肉串!小朋友你要不吃一串?”你操着半生不熟的蒙古话，内心感叹着自己悲惨的命运，本来自己作为【如意楼】的一员，起码还能混个衣食无忧，但现在落得个卖串为生，已经逐渐忘却的蒙古话，如今成了你谋生的手段。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 12,
    type: 'action',
    info: '这几天秦淮河畔的眉寿桥边开了一个“善云酒肆”，掌柜的是一貌美妇人，名唤张氏。举止言谈不似寻常商贾，倒更多几分大家闺秀之气。你听传闻说她是死去的锦衣卫都指挥使【胡刚】的妻子【史霜云】。【史霜云】看起来冷艳，一副不食人间烟火的贵妇气质，看起来有些凄苦之色，让人心生敬畏，冰冰冷冷的，不太好相处，不过你在门口摆摊，她倒是也没轰过你。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 13,
    type: 'action',
    info: '“善云酒肆”有一个打杂的小姑娘，叫【扈扈hü】，小姑娘手脚麻利，招呼客人迎来送往，倒是撑起了酒肆的半边天。这就是【依依】的使唤丫头【扈扈hu】啊!她怎么在这里打杂?难道是在这里搜集清报?你虽然不是【如意郎】了，但你深深以这一段经历为骄傲，你也懂规矩,知道不该问的别问，你就假装跟她不太认识，并没有跟她聊过天。酒肆里客人众多，依靠着在门口摆摊烤串。你勉强也能混个温饱。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 14,
    type: 'action',
    info: '渐渐地,“善云酒肆”门口的商贩多了起来,有个卖鸭血粉丝汤的年轻人自称叫【胡软】，跟当年锦衣卫都指挥使【胡刚】大人的一个亲随有点相似，时长在背地里摩掌着一块木头牌子，离得远你没仔细看过，怎么【胡刚】死了他也不当锦衣卫了?这可能是个阴谋，说不定他现在假借摆摊又在探听什么情报。作为一个曾经的【如意郎】，你不屑于跟这样的人交往。但【扈扈hu】平日里对你还算不错，经常让给你端杯热水喝或是帮你撑把油纸伞，她居然有时候会对你咽口水，你觉得她对你肯定有一些好感，嗯，一定是她因为和你都是【如意郎】，都是战友嘛，而且你还帮她捡过伞，她一定还念着你的好呢。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 15,
    type: 'action',
    info: '“善云酒肆”门口有个算命的白胡子老头自称叫【鏖不到】，看起来獐头鼠目十分可憎，但因为在一次本来晴空万里的上午，一准确地预测了中午要下雨而颇得老百姓的信任。这个【廖不到】看着奇奇怪怪仿佛不仅是个江湖骗子那么简单。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 16,
    type: 'action',
    info: '你越看这三人越不对劲，估摸着他们仁中一定有一个是锦衣卫的探子或者是【如意楼】的情报人员,暗中潜伏在这里有秘密任务，想调查什么事清。',
    area: '',
    time: '大明朝永乐六年（1408）',
  },
  {
    contactsId: 1,
    chapterId: 17,
    type: 'action',
    info: '最近你有点苦恼，不，是很苦恼。入冬了，南京的天气越来越冷，吃烤羊肉串的人也越来越少了，毕竞烤出来的东西一会就凉了，吃起来口感会不好，慢慢地你的客人们少了一大半，再这样下去你恐怕连这个月的房租都付不起了，你几乎要走投无路了。但奇怪的是,突然之间你的生意好了起来,“酒肆”门前排队吃烤串的人络绎不绝，难道是老天开眼了?!不，一定是你做的烤羊肉串的口感感动了你的顾客霸霸们。',
    area: '',
    time: '最近的事',
  },
  {
    contactsId: 1,
    chapterId: 18,
    type: 'action',
    info: '正月十四，白天你们摆摊三人组因为一点小事发生了争吵。起因是【胡软】嫌你烤串儿调料满天飞，尤其是孜然胡椒面飞到了鸭血粉丝汤里，破坏了他粉丝汤鲜嫩爽滑的口感以及食材的完整性。他那鸭血粉丝汤还配谈完整性?!你心中生气。“哎呦喂怎么个意思，你这怎么烤串儿的嘿，看不见我跟这儿做粉丝汤吗，你那孜然胡椒面满天飞都落我锅里了!”【胡软】嚷嚷起来。“你不会把锅放远点，天天看见你真是眼睛一睁，不得安生。”你听着【胡软】那京片子就不高兴。“就这么大地界儿你让我把锅搁哪去?你这么弄我汤味儿都窜了!”【胡软】的声音越来越高。“你这纯粹是拉不下来那啥，怪地球么得吸引力!”你是真生气了，张口就是标准的南京土话。“这整条街谁不知道我【阿软鸭血】是最正宗的南京口味儿，你甭跟我这儿犯葛,有本事哥俩练练!”【胡软】的脾气也上来了，作势欲打你。 “你还敢跟我动手? !”你可是从小跟野狗赛跑的，还能怕他一个卖粉丝汤的?!“你还敢跟我动手?!”【布脱脱】作势欲打你。“二位，二位别吵别吵，且听老夫一言，坤为地，这二位既同处一地，有诗云:出门吉利行人到，是非口舌不相干，二位不如·……”你听着这话像是旁边算卦的【廖不到】说的，这老小子没事就爱装文化人你打心眼里瞧不起他那装模作样的做派,还没等他说完，你就和【胡软】撕打在了一起，把【廖不到】的眼镜都碰掉了;你看见这老小子还扶着自己的胡子…·…整个酒肆门口乱成一团，一还好【扈扈hu】出来及时止住了你们仁人，生意眼见得也做不成的你只得悻悻地回了你的一居室出租屋内。你边走边想:今天这【胡软】好像是在找花打架，劝架的【廖不到】也看起来鬼鬼祟崇的，难道你是【如意郎】的事情暴露了，他们想来试探你??',
    area: '',
    time: '最近的事',
  },
  {
    contactsId: 1,
    chapterId: 19,
    type: 'action',
    info: '你刚到家，在桌子上发现了一封信“作为一个【如意郎】，你想一夜暴富吗?善云酒店后院，老板【史霜云】的房间里有三万两银票，是如意楼出事那天【王溟】给【史霜云】的，去拿吧，拿了你就能买房置地走向人生巅峰。”落款是:知名不具（意思是:你知道我是谁)。奇怪!这信是谁写的?看起来这信的作者知道你很多事情,难道是他们仁中的一个写得吗?但不管怎么说，想着能拿钱走向人生巅峰,你真动了心开始谋划起来。你知道马上就是“上元节”(元宵节)了，南京城秦淮河畔要摆“灯市”，挂花灯、打灯谜，那一天全城人都要来，你就可以趁乱去偷钱,然后远走高飞了，那天晚上你睡得很甜，仿佛梦见』闪地足于n0梦里好像还有从未见过的爹爹妈妈，梦里仿佛有家的感觉',
    area: '',
    time: '最近的事',
  },
  {
    contactsId: 1,
    chapterId: 20,
    type: 'action',
    info: '转眼间来到了“上元节”(元宵节)的白天，想着晚上就能偷走三万两银票远走高飞了，一整天你都乐呵呵的。刚吃完午饭，地保(街道办主任)来到了酒肆门前,把你、【扈扈 hu】、【胡软】、【鏖不到】，四人叫在了一起“今天晚上上元节灯会，衙门人手不够，还缺一个人帮忙布置花灯和巡逻维持秩序，等大伙都散了还得打扫街面，可能要忙一夜到明天辰时(早上7点左右)了，不过报酬嘛……”说着，地保拿出了30两银票,“也是十分丰厚的! 你们合计一下谁来干这个活，商量完了告诉我。”说完，地保走了。',
    area: '',
    time: '最近的事',
  },
  {
    contactsId: 1,
    chapterId: 21,
    type: 'action',
    info: '30两银子!这够小门小户吃一年的了，要搁平时你肯定动心，但今天晚上你还有宏伟的计划，决不能因小失大!你看他们三个都一副跃跃欲试的样子，知道自己平时的收人也只能混个温饱，决不能露出不想要钱的样子，以免他们起疑。',
    area: '',
    time: '最近的事',
  },
];

export const getChatById = (id: number) => {
  const chat = allChatList.find((item) => item.id === id);
  return chat;
};

export const getChatList = (contactsId: number, chapterId: number) => {
  const list = allChatList.filter(
    (item) => item.contactsId === contactsId && item.chapterId === chapterId
  );
  return list;
};
