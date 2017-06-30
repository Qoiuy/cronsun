var language = {
  'email': '邮箱',
  'password': '密码',
  'new password': '新密码',
  'remember me': '记住登录状态',
  'login': '登入',
  'actived': '正常',
  'banned': '禁止登录',
  'ban': '禁止登录',
  'active': '正常',
  'remove session': '移除登录状态',
  'added time': '添加时间',
  'add account': '添加账号',
  'edit account': '编辑账号',
  'role': '角色',
  'save': '保存',
  'your password has been change': '您的密码已经修改',
  'dashboard': '仪表盘',
  'log': '日志',
  'job': '任务',
  'node': '节点',
  'account': '账号',
  'total number of jobs': '任务总数',
  'total number of executeds': '执行任务总次数',
  'total number of executeds(today)': '执行任务总次数（今天）',
  'total number of nodes': '节点总数',
  '{n} online': '在线 {0}',
  '{n} offline': '离线 {0}',
  '{n} damaged': '故障 {0}',
  '{n} successed': '成功 {0}',
  '{n} failed': '失败 {0}',
  'node stat': '节点概况',
  'executed stat(today)': '执行概况（今天）',

  'job name': '任务名称',
  'multiple names can separated by commas': '多个名称用英文逗号分隔',
  'job ID': '任务 ID',
  'multiple IDs can separated by commas': '多个 ID 用英文逗号分隔',
  'multiple IPs can separated by commas': '多个 IP 用英文逗号分隔',
  'starting date': '起始日期',
  'end date': '截至日期',
  'failure only': '只看失败的任务',
  'latest result of each job on each node': '只看每个任务在每个节点上最后一次运行的结果',
  'submit query': '查询',
  'executing node': '执行节点',
  'executing user': '执行用户',
  'executing time': '执行时间',
  'executing result': '执行结果',
  'executing job': '执行任务',
  'successed': '成功',
  'failed': '失败',
  'click to select a node and re-execute job': '点此选择节点重新执行任务',
  '{begin ~ end}, took {times}': '{0}，耗时 {1}',
  'executing job: {job}': '执行任务：“{0}”',
  'cancel': '取消',
  'execute now': '立刻执行任务',
  'view executing jobs': '查看执行中的任务',
  'view job list': '查看任务列表',
  'starting time': '开始时间',
  'process ID': '进程ID',

  'group filter': '分组过滤',
  'node filter': '节点过滤',
  'select a group': '选择分组',
  'select a node': '选择节点',
  'operation': '操作',
  'status': '状态',
  'group': '分组',
  'user': '用户',
  'name': '名称',
  'latest executed': '最近执行时间',
  'edit': '编辑',
  'open': '开启',
  'pause': '暂停',
  'delete': '删除',
  'all groups': '所有分组',
  'all nodes': '所有节点',
  '{begin ~ end}, on {node} took {times}': '{0}, 于 {1} 耗时 {2}',
  'create job': '新建任务',
  'update job': '更新任务',
  'output': '输出',
  'command': '执行的命令',
  'spend time': '耗时',
  'result': '结果',

  'job type': '任务类型',
  'common job': '普通任务',
  'single node single process': '单机单进程',
  'at the same time only one job process is executed on the cluster': '同一时间集群中只有一个任务进程在执行',
  'group level common': '组级别普通任务',
  'group level common help': '暂时没想到好名字，一个比较简单的说明是，把所有选中的节点视为一个大节点，那么该类型的任务就相当于在单个节点上的普通任务',
  'warning on': '开启报警',
  'warning off': '关闭报警',
  'job group': '任务分组',
  'script path': '任务脚本',
  '(only [{.suffixs}] files can be allowed)': '（只允许 [{0}] 文件）',
  'user(optional)': '用户（可选）',
  'user(required)': '用户（必选）',
  'the user which to execute the command': '指定执行的用户',
  'node group': '节点分组',
  'warning receiver': '报警接收人（任务失败时下面的地址也会接收到告警）',
  'e-mail address': '邮件地址',
  'retries(number of retries when failed, 0 means no retry)': '重试（失败时重试次数，0 为不重试）',
  'retry interval(in seconds)': '失败重试间隔时间（秒）',
  'parallel number in one node(0 for no limits)': '一个节点上面该任务并行数（0 表示不限制）',
  'timeout(in seconds, 0 for no limits)':'超时设置（单位“秒”，0 表示不限制）',
  '<sec> <min> <hr> <day> <month> <week>, rule is same with Cron': '<秒> <分> <时> <日> <月> <周>，规则与 Cron 一样',
  'and please running on those nodes': '同时在这些节点上面运行',
  'do not running on those nodes': '不要在这些节点上面运行',
  'the job dose not have a timer currently, please click the button below to add a timer': '当前任务没有定时器，点击下面按钮来添加定时器',
  'timer': '定时器',
  'add timer': '添加定时器',
  'save job': '保存任务',

  'node can not be deceted due to itself or network etc.': '因自身或网络等原因未检测到节点存活',
  'node is in maintenance or is shutdown manually': '手动下线/维护中的',
  'node is running': '正常运行的节点',
  '(total {n} nodes)': '（共 {0} 节点）',
  'node damaged': '故障节点',
  'node offline': '离线节点',
  'node normaly': '正常节点',
  'currently version': '当前版本号',
  'version inconsistent, node: {version}': '版本不一致，节点版本 {0}',
  'group manager': '分组管理',
  'create node group': '添加节点分组',
  'update node group': '更新节点分组',
  'create group': '新建分组',
  'group name': '分组名称',
  'save group': '保存分组',
  'delete group': '删除分组',
  'include nodes': '包含的节点',
  'select nodes': '选择节点',
  'select groups': '选择分组',
  'are you sure to delete the group {name}?': '确定删除分组 {0}?'
}

export default language;
