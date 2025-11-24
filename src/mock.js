export const challenges = [
  {
    id: 1,
    title: "Web安全 - XSS漏洞利用",
    category: "Web 安全",
    difficulty: 2,
    score: 230,
    description: "题目要求你找到输入点并注入 JS 脚本，用于触发弹窗或执行其他恶意操作。",
    hint: "检查输入是否反射到页面中，注意 HTML 标签闭合。"
  },
  {
    id: 2,
    title: "密码学 - RSA基础",
    category: "密码学",
    difficulty: 1,
    score: 180,
    description: "破解简单的 RSA 加密密钥，已知部分参数，请计算明文。",
    hint: "注意 e 是否较小，或 n 是否可分解。"
  },
  {
    id: 3,
    title: "逆向工程 - 恶意软件分析",
    category: "逆向工程",
    difficulty: 3,
    score: 450,
    description: "分析样本运行逻辑，找到隐藏的 Flag 提交点。",
    hint: "查看关键函数的参数和返回值。"
  },
  {
    id: 4,
    title: "日志分析 - Web服务器日志",
    category: "日志分析",
    difficulty: 2,
    score: 210,
    description: "从提供的 Web 日志文件中查找攻击者的 IP 和恶意请求。",
    hint: "注意 status code 和 访问频率异常。"
  },
  {
    id: 5,
    title: "网络协议 - TCP 分析",
    category: "网络协议",
    difficulty: 2,
    score: 195,
    description: "分析提供的 TCP 抓包文件，找出传输中存在的问题。",
    hint: "注意 SYN/ACK 和序列号。"
  }
];
