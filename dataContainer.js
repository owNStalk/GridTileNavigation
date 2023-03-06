window.onload=()=>{
        Vue.createApp({
                setup() {
                        const [ selectData, selector ]=[
                                [
                                        { name: 'CU', text: '常用' },
                                        { name: 'video', text: '视频' },
                                        { name: 'learn', text: '学习' },
                                        { name: 'tools', text: '工具' },
                                        { name: 'webTools',text: '开发' },
                                        { name: 'theme', text: '主题' },
                                        { name: 'picSource', text: '图源' },
                                        { name: 'resources', text: '资源' },
                                        { name: 'game', text: '游戏' },
                                ],
                                [ 'video', 'learn', 'tools', 'webTools', 'theme', 'picSource', 'resources', 'game' ]
                        ];
                        const [ CU, video, learn, tools, webTools, theme, picSource, resources, game ] = [
                                [
                                        {name: '必应',link: 'https://cn.bing.com/'},
                                        {name: 'Google',link: 'https://www.google.com/'},
                                        {name: 'Google Play services',link: 'https://developers.google.cn/android'},
                                        {name: 'BOOS直聘',link: 'https://www.zhipin.com/'},
                                        {name: 'JIS',link: 'http://www.jingmen.gov.cn/JIS/login.do'},
                                        {name: 'QQ音乐',link: 'https://y.qq.com/?ADTAG=myqq&nomobile=1#type=index'},
                                        {name: 'BetterTTV',link: 'https://betterttv.com/'},
                                        {name: 'SENNHEISER',link: 'https://shop.sennheiser.com.cn/'},
                                ],
                                [
                                        {name:'哔哩哔哩',link:'https://www.bilibili.com/'},
                                        {name:'AcFun',link:'https://www.acfun.cn/'},
                                        {name:'樱花动漫',link:'http://yhdm16.com/'},
                                        {name:'优酷',link:'https://www.youku.com/'},
                                        {name:'嘀哩嘀哩',link:'http://dilidili9.com/acg/'},
                                        {name:'dilidili',link:'https://dilidili.io/'},
                                ],
                                [
                                        {name:'MDN Web Docs',link:'https://developer.mozilla.org/zh-CN/'},
                                        {name:'W3school',link:'https://www.w3school.com.cn/'},
                                        {name:'freeCodeCamp',link:'https://chinese.freecodecamp.org/learn/'},
                                        {name: 'ECMAScript 6 入门', link: 'https://es6.ruanyifeng.com/'},
                                        {name:'Dribbble',link: 'https://dribbble.com/'},
                                        {name:'现代 JavaScript 教程',link:'https://zh.javascript.info/'},
                                        {name: 'Runebook.dev',link: 'https://runebook.dev/'},
                                        {name:'学堂在线',link:'https://www.xuetangx.com/'},
                                        {name:'Coursera',link:'https://www.coursera.org/'},
                                        {name:'MOOC',link:'https://www.icourse163.org/'},
                                        {name:'菜鸟教程',link:'https://www.runoob.com/'},
                                        {name:'Tobias Ahlin',link:'https://tobiasahlin.com/'},
                                        {name:'segmentfault 思否',link:'https://segmentfault.com/'},
                                        {name:'设计导航',link:'http://hao.shejidaren.com/index.html'},
                                ],
                                [
                                        {name:'有道翻译',link:'https://fanyi.youdao.com/'},
                                        {name:'百度翻译',link:'https://fanyi.baidu.com/#auto/zh/'},
                                        {name:'蓝奏云',link:'https://pc.woozooo.com/account.php?action=login&ref=/mydisk.php'},
                                        {name:'Yandex Image Search',link:'https://yandex.eu/images/'},
                                        {name:'长风分享',link:'https://www.cfmem.com/'},
                                        {name:'TinyPNG',link:'https://tinypng.com/'},
                                        {name:'bigjpg',link:'https://bigjpg.com/'},
                                        {name:'OKTools',link:'https://oktools.net/'},
                                        {name:'mattkaydiary',link:'https://www.mattkaydiary.com/'},
                                        {name:'Ping检测',link:'http://ping.chinaz.com/'},
                                        {name:'IPAddress',link:'https://www.ipaddress.com/'},
                                        {name:'科学上网订阅',link:'https://github.com/Helpsoftware/fanqiang'},
                                        {name:'RGB/CMYK图片转换器',link:'https://www.fontke.com/tool/colorspaceconverter/'},
                                        {name:'改图宝',link:'https://www.gaitubao.com/'},
                                        {name:'CleverPDF',link:'https://www.cleverpdf.com/cn'},
                                        {name:'Speedpdf',link:'https://speedpdf.com/zh-cn/'},
                                        {name:'图片大小修改器',link:'https://www.sojson.com/image/change.html'},
                                        {name:'ACNVERT',link:'https://www.aconvert.com/'},
                                        {name:'KinhDown',link:'https://kinhdown.kinh.cc/'},
                                        {name: 'TOONME',link: 'https://toonme.com/'},
                                ],
                                [
                                        {name:'hype4 academy',link:'https://hype4.academy/tools'},
                                        {name:'UIVERSE.IO',link:'https://uiverse.io/'},
                                        {name:'Cool Backgrounds',link:'https://coolbackgrounds.io/'},
                                        {name:'Box-Shadow',link:'https://html-css-js.com/css/generator/box-shadow/'},
                                        {name:'CSS transitions',link:'https://www.transition.style/'},
                                        {name: 'Google Fonts',link: 'https://fonts.google.com/'},
                                        {name: 'Fast mock',link: 'http://129.204.116.48:3000/#/'},
                                        {name:'jQuery插件库',link: 'https://www.jq22.com/'},
                                        {name:'smooth shadows',link:'https://shadows.brumm.af/'},
                                        {name:'cubic-bezier',link:'https://cubic-bezier.com/#0,1,1,0'},
                                        {name:'You-need-to-know-css',link:'https://lhammer.cn/You-need-to-know-css/#/'},
                                        {name:'CSS-Inspiration',link:'https://csscoco.com/inspiration/#/'},
                                        {name:'Animate中文网',link:'http://www.animate.net.cn/'},
                                        {name:'Tailwind CSS',link:'https://www.tailwindcss.cn/'},
                                        {name:'Spacing.js',link:'https://spacingjs.com/'},
                                        {name:'Gradient Hunt',link:'https://gradienthunt.com/'},
                                        {name:'anime',link:'https://animejs.com/'},
                                        {name: 'OSCHINA',link: 'https://tool.oschina.net/'},
                                ],
                                [
                                        {name:'Customize Windows',link:'https://vsthemes.org/en/'},
                                        {name:'枫の主题社',link:'https://winmoes.com/'},
                                        {name:'Rainmeter',link:'https://bbs.rainmeter.cn/'},
                                        {name:'致美化',link:'https://zhutix.com/'},
                                ],
                                [
                                        {name:'Wallpaper Abyss',link:'https://wall.alphacoders.com/?lang=Chinese'},
                                        {name:'WallpaperCave',link:'https://wallpapercave.com/'},
                                        {name:'wallhere',link: 'https://wallhere.com/'},
                                        {name:'DeviantArt',link:'https://www.deviantart.com/'},
                                        {name:'zerochan',link:'https://www.zerochan.net/'},
                                        {name:'WallpaperAccess',link:'https://wallpaperaccess.com/'},
                                        {name:'HiPWallpaper',link:'https://hipwallpaper.com/'},
                                        {name:'pixiv',link:'https://www.pixiv.net/'},
                                        {name:'ARTSTATION',link:'https://www.artstation.com/?sort_by=community'},
                                        {name:'アニメ壁紙.com',link:'https://animekabegami.com/'},
                                        {name:'MOCAH WALLPAPER',link:'https://mocah.org/'},
                                        {name:'触站',link:'https://www.huashi6.com/'},
                                        {name:'vilipix',link:'https://www.vilipix.com/'},
                                        {name:'Pixivel',link:'https://pixivel.moe/'},
                                        {name:'UHD Wallpaper',link:'https://www.uhdpaper.com/'},
                                        {name:'Funny Pics',link:'https://funny.pinnedby.me/wtf/'},
                                        {name:'HDQwalls',link:'https://hdqwalls.com/'},
                                ],
                                [
                                        {name:'Nite07的小窝',link:'https://www.nite07.com/'},
                                        {name:'CrackingCity',link:'https://www.crackingcity.com/'},
                                        {name:'Repacks',link:'https://lrepacks.net/'},
                                        {name:'423DOWN',link:'https://www.423down.com/'},
                                        {name:'Free Crack Download',link:'https://freecrackdownload.com/'},
                                        {name:'Free Crack',link:'https://freecracke.com/'},
                                        {name:'sbcrack',link:'https://sbcrack.com/'},
                                        {name:'喔喔资源网',link:'https://wowoziyuan.com/'},
                                        {name:'一木收录阁',link:'https://ys.yimuapp.cn/'},
                                        {name:'初音社',link:'https://www.mikuclub.cc/'},
                                        {name:'软件SOS',link:'https://www.rjsos.com/Web'},
                                        {name:'23APE',link:'http://www.23ape.net/'},
                                        {name:'果核剥壳',link:'https://www.ghxi.com/'},
                                        {name:'稿定设计',link:'https://www.gaoding.com/'},
                                        {name:'简历下载',link:'https://jianlixiazai.cn/'},
                                        {name:'MusicEnc',link:'https://www.musicenc.com/'},
                                        {name:'辉哥博客',link:'https://www.haah.net/'},
                                        {name:'HiFiNi',link:'https://www.hifini.com/'},
                                        {name:'异次元软件世界',link:'https://www.iplaysoft.com/'},
                                        {name:'李跳跳',link:'https://www.litiaotiao.com/'},
                                        {name:'云萌Windows 10激活工具',link:'https://cmwtat.cloudmoe.com/cn.html#'},
                                        {name:'filehorse',link:'https://www.filehorse.com/'},
                                        {name:'数码小站',link:'https://wiki.shuma.ink/'},
                                        {name: '油小猴',link: 'https://www.baiduyun.wiki/'},
                                ],
                                [
                                        {name:'LonelyStar',link:'http://jspvz.com/'},
                                        {name:'Minecraftxz',link:'http://www.minecraftxz.com/'},
                                        {name:'游侠下载',link:'https://down.ali213.net/'},
                                        {name:'Fabric',link:'https://fabricmc.net/'},
                                        {name:'BDcraft',link:'https://bdcraft.net/'},
                                        {name:'NAPP',link:'https://napplab.com/'},
                                        {name:'KBH Games',link:'https://kbhgames.com/'},
                                        {name:'PACOGAMES',link:'https://www.pacogames.com/'},
                                ]
                        ]
                        return {
                                CU,
                                video,
                                learn,
                                tools,
                                webTools,
                                theme,
                                picSource,
                                resources,
                                game,
                                selectData,
                                selector
                        }
                }
        }).mount('#area')
}
//Design By owNStalk