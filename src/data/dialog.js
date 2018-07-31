/***
id 命名规则：
1XXX: 我发起的第一层对话如 1000，1001
2XXX: 我发起的第二层对话如 2000，2001
3XXX: 我发起的第二层对话如 3000，3001
NXXXX: 我发起的第 N 层对话的连接对话 (多一位数)
9XXX: 默认用户发起的对话如 3000，3001
***/
export default {
    fromElevenBeans: [
        {
            id: 1000,
            details: [
                "欢迎来到我的站点，<br>",
                "很高兴在这里遇见你！"
            ],
            responses: [
                {
                    content: "我也是！",
                    nextElevenbeans: [
                        2000
                    ]
                },
                {
                    content: "真的吗？",
                    nextElevenbeans: [
                        2001
                    ]
                },
                {
                    content: "深表怀疑...",
                    nextElevenbeans: [
                        2002
                    ]
                }
            ]
        },
        { // yes
            id: 2000,
            details: [
                "关于我，你想要了解什么？",
            ],
            responses: [
                {
                    content: "你是谁？",
                    nextElevenbeans: [
                        3000
                    ]
                },
                {
                    content: "这是你的网站吗？",
                    nextElevenbeans: [
                        3001
                    ]
                },
                {
                    content: "业余时间都做什么呀？",
                    nextElevenbeans: [
                        3002
                    ]
                }
            ]
                
        },
        { // yes
            id: 3000,
            details: [
                "常用ID:圈住圈九酱<br>",
                "洋名:TaylorTaurus"
            ],
            responses: [
                {
                    content: "你是谁？",
                    nextElevenbeans: [
                        3000
                    ]
                },
                {
                    content: "这是你的网站吗？",
                    nextElevenbeans: [
                        3001
                    ]
                },
                {
                    content: "业余时间都做什么呀？",
                    nextElevenbeans: [
                        3002
                    ]
                }
            ],
            hasMore: 30000
        },
        { // no
            id: 30000,
            details: [
                "早年混迹于各大安卓论坛，折腾过几款机型",
                "<br/> <br/>目前已退出玩机圈，只偶尔逛逛酷安市场..."
            ],
            responses: [
                {
                    content: "你是谁？",
                    nextElevenbeans: [
                        3000
                    ]
                },
                {
                    content: "这是你的网站吗？",
                    nextElevenbeans: [
                        3001
                    ]
                },
                {
                    content: "业余时间都做什么呀？",
                    nextElevenbeans: [
                        3002
                    ]
                }
            ]
        },
	    { 
            id: 3001,
            details: [
                "是的，本页修改于Elevenbeans' Site,感谢原作者。",
                "<br /><br />博客为Hexo,",
                "<br />主题为NexT,",
                "<br />托管于Coding Pages。"
            ],
            responses: [
                {
                    content: "你是谁？",
                    nextElevenbeans: [
                        3000
                    ]
                },
                {
                    content: "这是你的网站吗？",
                    nextElevenbeans: [
                        3001
                    ]
                },
                {
                    content: "业余时间都做什么呀？",
                    nextElevenbeans: [
                        3002
                    ]
                }
            ]
        },
        { 
            id: 3002,
            details: [

                '写写博客，玩玩露露。',    
            ],
            hasMore: 30020,
        },
        {
            id: 30020,
            details: [
                '<img src = "./src/img/lulu.jpg" />'
            ],
            hasMore: 30021,
        },
        {
            id: 30021,
            details: [
                '日: ありがとう、ママハハ',
                '<br />中: 谢谢你，玛玛哈哈'
            ],
            hasMore: 30022,
        },
        {
            id: 30022,
            details: [
                '日: さあ、立ちなさい',
                '<br />中: 现在，站起来'
            ]
        },
        { 
            id: 2001,
            details: [
                "当然，亲~，网络世界中的不期而遇，本就是一种缘分。"
            ],
            hasMore: 2000,
        },
        { 
            id: 2002,
            details: [
                '聊不下去了，那就去逛逛我的博客吧<br> <br>',
                '<a href="https://blog.taylortaurus.top/" target="_blank">TaylorTaurus\' Blog</a>',
		        '<br/ >或是点击左上角，跳转',
            ]
        },
        { 
            id: 4000,
            details: [
                '<a href="https://blog.taylortaurus.top/" target="_blank">TaylorTaurus\' Blog</a>',
		        '<br/ >或是点击左上角，跳转',
            ]
        },
        { 
            id: 4001,
            details: [
                '<a href="https://ranorex.xyz/" target="_blank">Ranorex 用户手册</a>',
		        '<br/ >或是点击左上角，跳转',
            ]
        },
        { 
            id: 4002,
            details: [
                '那好吧，感谢跟我聊这么多，拜 ^-^'
            ]
        },  
    ],
    fromUser: [
        {
            id: 9002,
            brief: "Blog",
            content: "TaylorTaurus\' Blog",
            nextElevenbeans: 4000
        },
        {
            id: 9002,
            brief: "Ranorex",
            content: "Ranorex 用户手册",
            nextElevenbeans: 4001
        },
        {
            id: 9004,
            brief: "Bye bye",
            content: "有事先走了～",
            nextElevenbeans: 4002
        }
    ]
}