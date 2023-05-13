import { createRequest } from '/@/utils/http/axios';

/**
 * 添加黑名单
 */
export const addBlacklist = createRequest<
  {
    requestBody?: {
      max_bandwidth: number;
      max_energy: number;
      remark: string;
      status: number;
      wallet_address: string;
    };
  },
  { code: number; data: BlackWallet; msg: string; request_id: string }
>('addBlacklist', ({ requestBody }) => ({
  url: `/api/blacklist/add`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 删除管理员
 */
export const adminDelete = createRequest<
  {
    requestBody?: { id: number[] };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('adminDelete', ({ requestBody }) => ({
  url: `/api/admin/delete`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 管理员详情
 */
export const adminDetail = createRequest<
  {
    id?: number;
  },
  { code: number; data: AdminDetail; msg: string; request_id: string }
>('adminDetail', ({ id }) => ({
  url: `/api/admin/detail`,
  method: 'GET',
  params: {
    id,
  },
}));

/**
 * 添加管理员
 */
export const adminInsert = createRequest<
  {
    requestBody?: { account: string; email: string; name: string; password: string; phone: string };
  },
  { code: number; data: {}; msg: string; request_id: string }
>('adminInsert', ({ requestBody }) => ({
  url: `/api/admin/insert`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 管理员列表
 */
export const adminList = createRequest<
  {
    keyword?: string;
    name?: string;
    page?: string;
    page_size?: string;
    status?: string;
  },
  {
    code: number;
    data: AdminDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('adminList', ({ page, page_size, status, name, keyword }) => ({
  url: `/api/admin/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    status,
    name,
    keyword,
  },
}));

/**
 * 管理员日志
 */
export const adminLog = createRequest<
  {
    end_time?: string;
    log_content?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    start_time?: string;
    user?: string;
  },
  {
    code: number;
    data: {
      content?: string;
      create_time?: string;
      creator_id?: number;
      ct?: number;
      info_id?: number;
      is_read?: number;
      msg_id?: number;
      order_no?: string;
      title?: string;
      type?: number;
      url?: string;
    }[];
    msg: string;
    request_id: string;
  }
>('adminLog', ({ page, page_size, sort, order, log_content, user, start_time, end_time }) => ({
  url: `/api/log/adminlog`,
  method: 'GET',
  params: {
    page,
    page_size,
    sort,
    order,
    log_content,
    user,
    start_time,
    end_time,
  },
}));

/**
 * 管理员登录日志
 */
export const adminLoginLog = createRequest<
  {
    admin?: string;
    end_time?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    start_time?: string;
  },
  {
    code: number;
    data: {
      content?: string;
      create_time?: string;
      creator_id?: number;
      ct?: number;
      info_id?: number;
      is_read?: number;
      msg_id?: number;
      order_no?: string;
      title?: string;
      type?: number;
      url?: string;
    }[];
    msg: string;
    request_id: string;
  }
>('adminLoginLog', ({ page, page_size, sort, order, admin, start_time, end_time }) => ({
  url: `/api/log/adminlogin`,
  method: 'GET',
  params: {
    page,
    page_size,
    sort,
    order,
    admin,
    start_time,
    end_time,
  },
}));

/**
 * 我的信息
 */
export const adminMy = createRequest<
  undefined,
  { code: number; data: AdminDetail; msg: string; request_id: string }
>('adminMy', () => ({ url: `/api/admin/my`, method: 'GET' }));

/**
 * 恢复管理员
 */
export const adminRecovery = createRequest<
  {
    requestBody?: { id: number[] };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('adminRecovery', ({ requestBody }) => ({
  url: `/api/admin/recovery`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 编辑管理员
 */
export const adminUpdate = createRequest<
  {
    requestBody?: {
      account: string;
      admin_id: number;
      email: string;
      name: string;
      password: string;
      phone: string;
    };
  },
  { code: number; data: {}; msg: string; request_id: string }
>('adminUpdate', ({ requestBody }) => ({
  url: `/api/admin/update`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 申请列表
 */
export const agentApplyList = createRequest<
  undefined,
  {
    code: number;
    data: (null | DaiLiShenQingXiangQing[])[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>('agentApplyList', () => ({ url: `/api/agent/apply`, method: 'GET' }));

/**
 * 代理列表
 */
export const agentList = createRequest<
  {
    site_name?: string;
    status?: number;
  },
  {
    code: number;
    data: (null | DaiLiXiangQing1[])[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>('agentList', ({ site_name, status }) => ({
  url: `/api/agent/list`,
  method: 'GET',
  params: {
    site_name,
    status,
  },
}));

/**
 * 编辑代理详情
 */
export const agentUpdate = createRequest<
  {
    requestBody?: {
      agent_id: number;
      announcement_cn: string;
      announcement_en: string;
      domain: string;
      site_name: string;
      telegram_bot_name: string;
      telegram_bot_token: string;
      telegram_bot_username: string;
      telegram_cs_username: string;
    };
  },
  { code: number; data: DaiLiXiangQing1; msg: string; request_id: string }
>('agentUpdate', ({ requestBody }) => ({
  url: `/api/agent/update`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 允许卖家池列表
 */
export const allowFreezeList = createRequest<
  {
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    wallet_address?: string;
  },
  { code: number; data: SellerDetail[]; msg: string; pagination: Pagination; request_id: string }
>('allowFreezeList', ({ page, page_size, order, sort, wallet_address }) => ({
  url: `/api/seller/allow_freeze_list`,
  method: 'GET',
  params: {
    page,
    page_size,
    order,
    sort,
    wallet_address,
  },
}));

/**
 * 删除公告
 */
export const announcementDelete = createRequest<
  {
    requestBody?: { id: number[] };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('announcementDelete', ({ requestBody }) => ({
  url: `/api/announcement/delete`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 公告详情
 */
export const announcementDetail = createRequest<
  {
    id?: number;
  },
  { code: number; data: ArticleDetail; msg: string; request_id: string }
>('announcementDetail', ({ id }) => ({
  url: `/api/announcement/detail`,
  method: 'GET',
  params: {
    id,
  },
}));

/**
 * 添加公告
 */
export const announcementInsert = createRequest<
  {
    requestBody?: {
      content: string;
      content_en: string;
      image: string;
      image_en: string;
      is_popup: number;
      show_position: string;
      sort: number;
      status: number;
      summary: string;
      summary_en: string;
      title: string;
      title_en: string;
      url: string;
    };
  },
  { code: number; data: ArticleDetail; msg: string; request_id: string }
>('announcementInsert', ({ requestBody }) => ({
  url: `/api/announcement/insert`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 公告列表
 */
export const announcementList = createRequest<
  {
    keyword?: string;
    page?: string;
    page_size?: string;
    status?: string;
  },
  {
    code: number;
    data: ArticleDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('announcementList', ({ page, page_size, status, keyword }) => ({
  url: `/api/announcement/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    status,
    keyword,
  },
}));

/**
 * 编辑公告
 */
export const announcementUpdate = createRequest<
  {
    requestBody?: {
      article_id: number;
      content: string;
      content_en: string;
      image: string;
      image_en: string;
      is_popup: number;
      show_position: string;
      sort: number;
      status: number;
      summary: string;
      summary_en: string;
      title: string;
      title_en: string;
      url: string;
    };
  },
  { code: number; data: ArticleDetail; msg: string; request_id: string }
>('announcementUpdate', ({ requestBody }) => ({
  url: `/api/announcement/update`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * APIKEY列表
 */
export const apiKeyList = createRequest<
  {
    key?: string;
    name?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    status?: string;
    user_id?: string;
  },
  {
    code: number;
    data: null | (9747654 | null)[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>('apiKeyList', ({ page, page_size, sort, order, key, name, user_id, status }) => ({
  url: `/api/api/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    sort,
    order,
    key,
    name,
    user_id,
    status,
  },
}));

/**
 * 账号密码登录
 */
export const authLogin = createRequest<
  {
    requestBody?: { captcha?: string; captcha_id?: string; password: string; username: string };
  },
  { code: number; data: {}; msg: string; request_id: string }
>('authLogin', ({ requestBody }) => ({
  url: `/api/auth/login`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 获取AWSToken
 */
export const awsToken = createRequest<
  undefined,
  {
    code: number;
    data: {
      Credentials: {
        AccessKeyId: string;
        Expiration: string;
        SecretAccessKey: string;
        SessionToken: string;
      };
      ResultMetadata: {};
    };
    msg: string;
    request_id: string;
  }
>('awsToken', () => ({ url: `/api/file/AWSToken`, method: 'GET' }));

/**
 * 黑名单列表
 */
export const blackList = createRequest<
  {
    page?: number;
    page_size?: number;
    trx_address?: string;
  },
  {
    code: number;
    data: BlackWallet[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('blackList', ({ page, page_size, trx_address }) => ({
  url: `/api/blacklist/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    trx_address,
  },
}));

/**
 * 提现详情
 */
export const cashDetail = createRequest<
  {
    id?: number;
  },
  { code: number; data: CashDetail; msg: string; request_id: string }
>('cashDetail', ({ id }) => ({
  url: `/api/cash/detail`,
  method: 'GET',
  params: {
    id,
  },
}));

/**
 * 审核提现
 */
export const cashHandle = createRequest<
  {
    requestBody?: { audit_reason: string; cash_id: number; cash_status: number };
  },
  { code: number; data: null; msg: string; request_id: string }
>('cashHandle', ({ requestBody }) => ({
  url: `/api/cash/handle`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 提现列表
 */
export const cashList = createRequest<
  {
    account?: string;
    amount_max?: string;
    amount_min?: number;
    cash_status?: number;
    end_time?: string;
    order?: string;
    page?: number;
    page_size?: number;
    sort?: string;
    start_time?: string;
    symbol?: string;
    to_address?: string;
    txid?: string;
    user_id?: number;
  },
  {
    code: number;
    data: CashDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>(
  'cashList',
  ({
    page,
    page_size,
    sort,
    order,
    txid,
    user_id,
    cash_status,
    to_address,
    start_time,
    end_time,
    amount_min,
    amount_max,
    symbol,
    account,
  }) => ({
    url: `/api/cash/list`,
    method: 'GET',
    params: {
      page,
      page_size,
      sort,
      order,
      txid,
      user_id,
      cash_status,
      to_address,
      start_time,
      end_time,
      amount_min,
      amount_max,
      symbol,
      account,
    },
  }),
);

/**
 * 检查待审核提现
 */
export const checkAuditCash = createRequest<
  undefined,
  { code: number; data: { audit_num: number }; msg: string; request_id: string }
>('checkAuditCash', () => ({ url: `/api/cash/checkaudit`, method: 'GET' }));

/**
 * 检查退款订单
 */
export const checkRefundOrder = createRequest<undefined, {}>('checkRefundOrder', () => ({
  url: `/api/order/checkrefundorder`,
  method: 'GET',
}));

/**
 * 获取配置
 */
export const configList = createRequest<
  {
    category_id?: number;
  },
  { code: number; data: ConfigDetail[]; msg: string; request_id: string }
>('configList', ({ category_id }) => ({
  url: `/api/config/list`,
  method: 'GET',
  params: {
    category_id,
  },
}));

/**
 * 修改配置
 */
export const configUpdate = createRequest<
  {
    requestBody?: { KEY: string };
  },
  { code: number; msg: string; request_id: string }
>('configUpdate', ({ requestBody }) => ({
  url: `/api/config/update`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * Dapp用户
 */
export const dappUser = createRequest<
  {
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    wallet_address?: string;
  },
  { code: number; data: DappUserDetail[]; msg: string; pagination: Pagination; request_id: string }
>('dappUser', ({ page, page_size, sort, order, wallet_address }) => ({
  url: `/api/order/dapp`,
  method: 'GET',
  params: {
    page,
    page_size,
    sort,
    order,
    wallet_address,
  },
}));

/**
 * 删除折扣
 */
export const discountDelete = createRequest<
  {
    requestBody?: { id: number[] };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('discountDelete', ({ requestBody }) => ({
  url: `/api/discount/delete`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 添加折扣
 */
export const discountInsert = createRequest<
  {
    requestBody?: {
      extra_add_day: number;
      max: number;
      min: number;
      sun: number;
      sun_1h: number;
      sun_3h: number;
    };
  },
  { code: number; data: {}; msg: string; request_id: string }
>('discountInsert', ({ requestBody }) => ({
  url: `/api/discount/insert`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 折扣列表
 */
export const discountList = createRequest<
  {
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
  },
  {
    code: number;
    data: DiscountDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('discountList', ({ page, page_size, order, sort }) => ({
  url: `/api/discount/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    order,
    sort,
  },
}));

/**
 * 编辑折扣
 */
export const discountUpdate = createRequest<
  {
    requestBody?: {
      extra_add_day: number;
      max: number;
      min: number;
      sun: number;
      sun_1h: number;
      sun_3h: number;
    };
  },
  { code: number; data: {}; msg: string; request_id: string }
>('discountUpdate', ({ requestBody }) => ({
  url: `/api/discount/update`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 系统错误日志
 */
export const errorLog = createRequest<
  {
    content?: string;
    end_time?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    start_time?: string;
  },
  {
    code: number;
    data: {
      content?: string;
      create_time?: string;
      creator_id?: number;
      ct?: number;
      info_id?: number;
      is_read?: number;
      msg_id?: number;
      order_no?: string;
      title?: string;
      type?: number;
      url?: string;
    }[];
    msg: string;
    request_id: string;
  }
>('errorLog', ({ page, page_size, sort, order, content, start_time, end_time }) => ({
  url: `/api/log/error`,
  method: 'GET',
  params: {
    page,
    page_size,
    sort,
    order,
    content,
    start_time,
    end_time,
  },
}));

/**
 * 兑换记录
 */
export const exchangeList = createRequest<
  {
    amount_max?: number;
    amount_min?: number;
    end_time?: string;
    filter?: number;
    order_no?: string;
    page?: number;
    page_size?: number;
    pay_address?: string;
    receive_address?: string;
    start_time?: string;
    status?: number;
  },
  {
    code: number;
    data: ExchangeOrderDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>(
  'exchangeList',
  ({
    page,
    page_size,
    order_no,
    start_time,
    end_time,
    amount_min,
    amount_max,
    status,
    pay_address,
    receive_address,
    filter,
  }) => ({
    url: `/api/exchange/list`,
    method: 'GET',
    params: {
      page,
      page_size,
      order_no,
      start_time,
      end_time,
      amount_min,
      amount_max,
      status,
      pay_address,
      receive_address,
      filter,
    },
  }),
);

/**
 * 资金流
 */
export const fundingFlow = createRequest<
  {
    address?: string;
    end_time?: string;
    from_address?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    start_time?: string;
    symbol?: string;
    to_address?: string;
    txid?: string;
    type?: string;
    user?: string;
  },
  {
    code: number;
    data: TransactionDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>(
  'fundingFlow',
  ({
    page,
    page_size,
    sort,
    order,
    address,
    type,
    txid,
    from_address,
    to_address,
    user,
    start_time,
    end_time,
    symbol,
  }) => ({
    url: `/api/wallet/funding`,
    method: 'GET',
    params: {
      page,
      page_size,
      sort,
      order,
      address,
      type,
      txid,
      from_address,
      to_address,
      user,
      start_time,
      end_time,
      symbol,
    },
  }),
);

/**
 * 生成token
 */
export const genJwtToken = createRequest<
  {
    keyword?: string;
  },
  { code: number; data: { token: string }; msg: string; request_id: string }
>('genJwtToken', ({ keyword }) => ({
  url: `/api/tools/generate_jwt_token`,
  method: 'GET',
  params: {
    keyword,
  },
}));

/**
 * 能量到金额
 */
export const getAmountByResource = createRequest<
  {
    type?: number;
    value?: number;
  },
  {
    code: number;
    data: { frozen_balance: number; resource_type: number; resource_value: number };
    msg: string;
    request_id: string;
  }
>('getAmountByResource', ({ type, value }) => ({
  url: `/api/tools/get_amount_by_resource`,
  method: 'GET',
  params: {
    type,
    value,
  },
}));

/**
 * 获取验证码
 */
export const getCaptcha = createRequest<
  undefined,
  { code: number; data: { data: string; id: string }; msg: string; request_id: string }
>('getCaptcha', () => ({ url: `/api/captcha/get`, method: 'GET' }));

/**
 * 押金到能量
 */
export const getResourceByAmount = createRequest<
  {
    amount?: number;
    type?: number;
  },
  {
    code: number;
    data: { frozen_balance: number; resource_type: number; resource_value: number };
    msg: string;
    request_id: string;
  }
>('getResourceByAmount', ({ type, amount }) => ({
  url: `/api/tools/get_resource_by_amount`,
  method: 'GET',
  params: {
    type,
    amount,
  },
}));

/**
 * 握手
 */
export const handshake = createRequest<
  undefined,
  {
    code: number;
    data: {
      available_trx: number;
      aws: { bucket: string; region: string; url: string };
      frozen_trx: number;
      seller_available_trx: number;
      seller_frozen_trx: number;
    };
    msg: string;
    request_id: string;
  }
>('handshake', () => ({ url: `/api/init/handshake`, method: 'GET' }));

/**
 * 监控地址列表
 */
export const monitorAddressList = createRequest<
  {
    page: number;
    page_size: number;
    receive_notify_url?: number;
    receive_telegram?: number;
    wallet_address: string;
  },
  {
    code: number;
    data: string | MonitorAddressDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>(
  'monitorAddressList',
  ({ page, page_size, wallet_address, receive_telegram, receive_notify_url }) => ({
    url: `/api/monitor/address`,
    method: 'GET',
    params: {
      page,
      page_size,
      wallet_address,
      receive_telegram,
      receive_notify_url,
    },
  }),
);

/**
 * 竞品分析
 */
export const monitorFetch = createRequest<undefined, {}>('monitorFetch', () => ({
  url: `/api/overview/monitor`,
  method: 'GET',
}));

/**
 * 监听交易列表
 */
export const monitorTransactionList = createRequest<
  {
    act?: string;
    chain?: string;
    end_time?: string;
    page?: number;
    page_size?: number;
    requestBody?: {};
    start_time?: string;
    symbol?: string;
    user_id?: number;
    wallet_address?: string;
  },
  {
    code: number;
    data: null | MonitorTransactionDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>(
  'monitorTransactionList',
  ({
    user_id,
    chain,
    symbol,
    act,
    wallet_address,
    start_time,
    end_time,
    page,
    page_size,
    requestBody,
  }) => ({
    url: `/api/monitor/transaction`,
    method: 'GET',
    data: requestBody,
    params: {
      user_id,
      chain,
      symbol,
      act,
      wallet_address,
      start_time,
      end_time,
      page,
      page_size,
    },
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
);

/**
 * 取消订单
 */
export const orderCancel = createRequest<
  {
    requestBody?: { order_no?: string };
  },
  { code: number; msg: string; request_id: string }
>('orderCancel', ({ requestBody }) => ({
  url: `/api/order/cancel`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 订单统计图表
 */
export const orderChart = createRequest<
  {
    time_type?: number;
  },
  {
    code: number;
    data: {
      axis_data: string[];
      name: string;
      timeline: string;
      trx_amount: (number | number)[];
      trx_count: number[];
      usdt_amount: (number | number)[];
      usdt_count: number[];
    };
    msg: string;
    request_id: string;
  }
>('orderChart', ({ time_type }) => ({
  url: `/api/overview/orderChart`,
  method: 'GET',
  params: {
    time_type,
  },
}));

/**
 * 租用记录详情
 */
export const orderDetail = createRequest<
  {
    order_no?: string;
  },
  {
    code: number;
    data: OrderDetail;
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('orderDetail', ({ order_no }) => ({
  url: `/api/order/detail`,
  method: 'GET',
  params: {
    order_no,
  },
}));

/**
 * 租用记录
 */
export const orderList = createRequest<
  {
    amount_max?: string;
    amount_min?: string;
    api_key?: string;
    end_time?: string;
    filter?: number;
    frozen_tx_id?: string;
    level?: number;
    one_page?: number;
    order?: string;
    order_no?: string;
    order_type?: number;
    owner_address?: string;
    page?: string;
    page_size?: string;
    pay_address?: string;
    pay_tx_id?: string;
    receive_address?: string;
    resource_type?: number;
    sort?: string;
    start_time?: string;
    take_order_type?: number;
    user?: string;
  },
  { code: number; data: OrderDetail[]; msg: string; pagination: Pagination; request_id: string }
>(
  'orderList',
  ({
    page,
    page_size,
    sort,
    order,
    pay_address,
    owner_address,
    receive_address,
    user,
    api_key,
    frozen_tx_id,
    pay_tx_id,
    start_time,
    end_time,
    amount_min,
    amount_max,
    order_no,
    filter,
    take_order_type,
    order_type,
    level,
    one_page,
    resource_type,
  }) => ({
    url: `/api/order/list`,
    method: 'GET',
    params: {
      page,
      page_size,
      sort,
      order,
      pay_address,
      owner_address,
      receive_address,
      user,
      api_key,
      frozen_tx_id,
      pay_tx_id,
      start_time,
      end_time,
      amount_min,
      amount_max,
      order_no,
      filter,
      take_order_type,
      order_type,
      level,
      one_page,
      resource_type,
    },
  }),
);

/**
 * 锁定订单
 */
export const orderLock = createRequest<
  {
    requestBody?: { order_no: string };
  },
  {}
>('orderLock', ({ requestBody }) => ({
  url: `/api/order/lock`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 手工销售（锁定后）
 */
export const orderManualSales = createRequest<
  {
    requestBody?: {
      order_no?: string;
      settle_address: string;
      settle_amount?: number;
      settle_ratio?: number;
      tx_id: string;
    };
  },
  { code: number; msg: string; request_id: string }
>('orderManualSales', ({ requestBody }) => ({
  url: `/api/order/manual_sales`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 手工下单
 */
export const orderManualSubmit = createRequest<
  {
    requestBody?: {
      frozen_balance: number;
      pay_address: string;
      pay_amount: number;
      pay_tx_id: string;
      price_in_sun: number;
      receive_address: string;
      rent_duration: number;
      rent_time_unit: string;
      resource_type: number;
      resource_value: number;
      seller_id: number;
      skip_duplicate_check: number;
      skip_pay_tx_id_check: string;
      user_id?: number;
    };
  },
  { code: number; msg: string; request_id: string }
>('orderManualSubmit', ({ requestBody }) => ({
  url: `/api/order/manual_submit`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 子订单列表
 */
export const orderSubList = createRequest<
  {
    order_parent_no?: string;
    page?: string;
    page_size?: string;
  },
  { code: number; data: OrderDetail[]; msg: string; pagination: Pagination; request_id: string }
>('orderSubList', ({ page, page_size, order_parent_no }) => ({
  url: `/api/order/sub_order`,
  method: 'GET',
  params: {
    page,
    page_size,
    order_parent_no,
  },
}));

/**
 * 解锁订单
 */
export const orderUnlock = createRequest<
  {
    requestBody?: { order_no: string };
  },
  {}
>('orderUnlock', ({ requestBody }) => ({
  url: `/api/order/unlock`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 绑定关系
 */
export const promoteBind = createRequest<
  {
    requestBody?: { address?: string; invite_code?: string };
    uid?: number;
  },
  { code: number; data?: string; msg: string; request_id: string }
>('promoteBind', ({ uid, requestBody }) => ({
  url: `/v1/promote/bind`,
  method: 'POST',
  data: requestBody,
  params: {
    uid,
  },
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 推广佣金明细
 */
export const promoteFundDetails = createRequest<
  {
    from_address?: string;
    from_user_id?: number;
    page?: number;
    page_size?: number;
    user_id?: string;
  },
  {
    code: number;
    data: null | UserFundDetail[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>('promoteFundDetails', ({ page, page_size, from_address, from_user_id, user_id }) => ({
  url: `/api/promote/funddetails`,
  method: 'GET',
  params: {
    page,
    page_size,
    from_address,
    from_user_id,
    user_id,
  },
}));

/**
 * 推广数据
 */
export const promoteInfo = createRequest<
  {
    user_id?: string;
  },
  {
    code: number;
    data: {
      promote_address_count: number;
      promote_total_amount: number;
      promote_user_count: number;
    };
    msg: string;
    request_id: string;
  }
>('promoteInfo', ({ user_id }) => ({
  url: `/api/promote/info`,
  method: 'GET',
  params: {
    user_id,
  },
}));

/**
 * 推广钱包绑定明细
 */
export const promoteList = createRequest<
  {
    end_time?: string;
    keyword?: string;
    page?: number;
    page_size?: number;
    start_time?: string;
    target?: number;
    user_id?: string;
  },
  {
    code: number;
    data: null | PromotedWalletDetail[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>('promoteList', ({ page, page_size, user_id, keyword, start_time, end_time, target }) => ({
  url: `/api/promote/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    user_id,
    keyword,
    start_time,
    end_time,
    target,
  },
}));

/**
 * 推广用户注册明细
 */
export const promoteUsers = createRequest<
  {
    end_time?: string;
    keyword?: string;
    page?: number;
    page_size?: number;
    start_time?: string;
    target?: number;
    telegram_username?: string;
    user_id?: string;
  },
  {
    code: number;
    data:
      | null
      | {
          account: string;
          api_count?: number;
          cash_time: number;
          commission: number;
          commission_ratio: number;
          create_time: number;
          device_brand: string;
          device_type: string;
          email: string;
          energy_surplus?: number;
          invite_code: string;
          invite_url: string;
          is_seller: number;
          last_address: string;
          last_ip: string;
          last_login_ip: string;
          last_login_ip_address: string;
          last_login_time: number;
          last_time: number;
          monitor_wallet_limit: number;
          nickname: string;
          order_count?: number;
          os: string;
          os_version: string;
          parent?: UserDetail;
          parent_id: number;
          reg_ip: string;
          reg_ip_address: string;
          reg_time: number;
          rent_time: number;
          root_id: number;
          status: number;
          telegram_bot_used: number;
          telegram_first_name: string;
          telegram_last_name: string;
          telegram_user_id: number;
          telegram_username: string;
          tg_notify_energy: number;
          tg_notify_exchange: number;
          today_rent_energy?: number;
          total_recharge?: number;
          total_rent_energy?: number;
          tron_nonce: string;
          trx_address: string;
          trx_balance: number;
          trx_money: number;
          unique_id: string;
          user_id: number;
        }[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>(
  'promoteUsers',
  ({ page, page_size, keyword, telegram_username, start_time, end_time, user_id, target }) => ({
    url: `/api/promote/users`,
    method: 'GET',
    params: {
      page,
      page_size,
      keyword,
      telegram_username,
      start_time,
      end_time,
      user_id,
      target,
    },
  }),
);

/**
 * 充值记录详情
 */
export const rechargeDetail = createRequest<
  {
    recharge_id?: number;
    txid?: string;
  },
  {
    code: number;
    data: RechargeDetail;
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('rechargeDetail', ({ txid, recharge_id }) => ({
  url: `/api/recharge/detail`,
  method: 'GET',
  params: {
    txid,
    recharge_id,
  },
}));

/**
 * 移除黑名单
 */
export const removeBlacklist = createRequest<
  {
    requestBody?: { ids: number[] };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('removeBlacklist', ({ requestBody }) => ({
  url: `/api/blacklist/remove`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 日报表
 */
export const reportDaily = createRequest<
  {
    end_time?: string;
    page?: number;
    page_size?: number;
    start_time?: string;
  },
  {
    code: number;
    data: { list: Report[]; total: Report };
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>('reportDaily', ({ page, page_size, start_time, end_time }) => ({
  url: `/api/report/daily`,
  method: 'GET',
  params: {
    page,
    page_size,
    start_time,
    end_time,
  },
}));

/**
 * 卖家失信记录
 */
export const sellerBrokenPromiseList = createRequest<
  {
    keyword?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
  },
  {
    code: number;
    data: MaiJiaShiXinJiLuXiangQing[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>('sellerBrokenPromiseList', ({ page, page_size, order, sort, keyword }) => ({
  url: `/api/seller/broken_promise`,
  method: 'GET',
  params: {
    page,
    page_size,
    order,
    sort,
    keyword,
  },
}));

/**
 * 编辑卖家
 */
export const sellerEdit = createRequest<
  {
    requestBody?: {
      auto_freeze_v2: string;
      auto_vote: number;
      freezev2_keep_amount: number;
      remark?: string;
      role: number;
      seller_id: number;
      settle_address: string;
      settle_ratio: string;
      take_order: number;
      take_order_bandwidth_min_sun: number;
      take_order_energy_min_sun: number;
      take_order_resource: number;
      wallet_address: string;
      withdraw_keep_amount: number;
      withdraw_type: number;
    };
  },
  { code: number; data?: string; msg: string; request_id: string }
>('sellerEdit', ({ requestBody }) => ({
  url: `/api/seller/edit`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 卖家资金流
 */
export const sellerFundList = createRequest<
  {
    amount_max?: number;
    amount_min?: number;
    end_time?: string;
    from_address?: string;
    keyword?: string;
    order?: string;
    page?: number;
    page_size?: number;
    sort?: string;
    start_time?: string;
    to_address?: string;
    txid?: string;
    type?: number;
  },
  {
    code: number;
    data: SellerFundDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>(
  'sellerFundList',
  ({
    page,
    page_size,
    order,
    sort,
    keyword,
    type,
    txid,
    from_address,
    to_address,
    start_time,
    end_time,
    amount_min,
    amount_max,
  }) => ({
    url: `/api/seller/funding`,
    method: 'GET',
    params: {
      page,
      page_size,
      order,
      sort,
      keyword,
      type,
      txid,
      from_address,
      to_address,
      start_time,
      end_time,
      amount_min,
      amount_max,
    },
  }),
);

/**
 * 添加卖家
 */
export const sellerInsert = createRequest<
  {
    requestBody?: {
      filter: number;
      remark?: string;
      status: number;
      to_address: string;
      user_id: number;
      wallet_address: string;
    };
  },
  { code: number; data?: string; msg: string; request_id: string }
>('sellerInsert', ({ requestBody }) => ({
  url: `/api/seller/insert`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 卖家池列表
 */
export const sellerList = createRequest<
  {
    filter?: number;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    take_order_energy_min_sun?: number;
    to_address?: string;
    wallet_address?: string;
  },
  { code: number; data: SellerDetail[]; msg: string; pagination: Pagination; request_id: string }
>(
  'sellerList',
  ({
    page,
    page_size,
    order,
    sort,
    wallet_address,
    to_address,
    filter,
    take_order_energy_min_sun,
  }) => ({
    url: `/api/seller/list`,
    method: 'GET',
    params: {
      page,
      page_size,
      order,
      sort,
      wallet_address,
      to_address,
      filter,
      take_order_energy_min_sun,
    },
  }),
);

/**
 * 更新卖家信息
 */
export const sellerUpdate = createRequest<
  {
    seller_id?: number;
  },
  { code: number; data?: SellerDetail; msg: string; request_id: string }
>('sellerUpdate', ({ seller_id }) => ({
  url: `/api/seller/update`,
  method: 'GET',
  params: {
    seller_id,
  },
}));

/**
 * 简报
 */
export const statistics = createRequest<
  undefined,
  {
    last_week_power_reward: number;
    order_waiting_amount: { trx: number; usdt: number };
    order_waiting_bandwidth: number;
    order_waiting_energy: number;
    order_waiting_frozen_balance: number;
    order_waiting_num: number;
    this_week_power_reward: number;
    today_bandwidth_order_num: number;
    today_energy_order_num: number;
    today_frozen_trx: number;
    today_order_amount: { trx: number; usdt: number };
    today_order_num: number;
    today_order_settle_amount: number;
    today_platform_freed_balance: number;
    today_platform_freed_bandwidth: number;
    today_platform_freed_energy: number;
    today_register_num: { api_user: number; order_user: number };
    today_rent_bandwidth: number;
    today_rent_energy: number;
    today_seller_freed_balance: number;
    today_seller_freed_bandwidth: number;
    today_seller_freed_energy: number;
    today_total_profit: { trx: number; usdt: number };
    tomorrow_platform_freed_balance: number;
    tomorrow_platform_freed_bandwidth: number;
    tomorrow_platform_freed_energy: number;
    tomorrow_seller_freed_balance: number;
    tomorrow_seller_freed_bandwidth: number;
    tomorrow_seller_freed_energy: number;
    total_order_amount: { trx: number; usdt: number };
    total_profit: { trx: number; usdt: number };
    total_reward: number;
    total_settle: number;
    yesterday_bandwidth_order_num: number;
    yesterday_energy_order_num: number;
    yesterday_frozen_trx: number;
    yesterday_order_amount: { trx: number; usdt: number };
    yesterday_order_num: number;
    yesterday_order_settle_amount: number;
    yesterday_register_num: { api_user: number; order_user: number };
    yesterday_rent_bandwidth: number;
    yesterday_rent_energy: number;
    yesterday_total_profit: { trx: number; usdt: number };
  }
>('statistics', () => ({ url: `/api/overview/statistics`, method: 'GET' }));

/**
 * 发送广播
 */
export const tgBroadcast = createRequest<
  {
    requestBody?: { broadcast_id: number };
  },
  { code: number; data: null; msg: string; request_id: string }
>('tgBroadcast', ({ requestBody }) => ({
  url: `/api/tg_broadcast/broadcast`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 删除广播
 */
export const tgBroadcastDelete = createRequest<
  {
    requestBody?: { id: number[] };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('tgBroadcastDelete', ({ requestBody }) => ({
  url: `/api/tg_broadcast/delete`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 新建广播
 */
export const tgBroadcastInsert = createRequest<
  {
    requestBody?: {
      content_cn: string;
      content_en: string;
      enable_inline_keyboard: number;
      keyboard_command: { command_key: string; command_value: string; type: number }[][];
    };
  },
  { code: number; data: BroadcastDetail; msg: string; request_id: string }
>('tgBroadcastInsert', ({ requestBody }) => ({
  url: `/api/tg_broadcast/insert`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 广播列表
 */
export const tgBroadcastList = createRequest<
  {
    keyword?: string;
    order?: number;
    page?: number;
    page_size?: number;
    sort?: number;
    status?: number;
  },
  {
    code: number;
    data: BroadcastDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('tgBroadcastList', ({ page, page_size, sort, order, status, keyword }) => ({
  url: `/api/tg_broadcast/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    sort,
    order,
    status,
    keyword,
  },
}));

/**
 * 广播列表日志列表
 */
export const tgBroadcastLogList = createRequest<
  {
    broadcast_id?: number;
    keyword?: string;
    order?: number;
    page?: number;
    page_size?: number;
    sort?: number;
    status?: number;
    telegram_user_id?: number;
    user_id?: number;
  },
  {
    code: number;
    data: BroadcastLogDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>(
  'tgBroadcastLogList',
  ({ page, page_size, sort, order, status, keyword, broadcast_id, user_id, telegram_user_id }) => ({
    url: `/api/tg_broadcast/log/list`,
    method: 'GET',
    params: {
      page,
      page_size,
      sort,
      order,
      status,
      keyword,
      broadcast_id,
      user_id,
      telegram_user_id,
    },
  }),
);

/**
 * 失败重新发送
 */
export const tgBroadcastRetry = createRequest<
  {
    requestBody?: { broadcast_id: number };
  },
  { code: number; data: null; msg: string; request_id: string }
>('tgBroadcastRetry', ({ requestBody }) => ({
  url: `/api/tg_broadcast/retry`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 修改广播
 */
export const tgBroadcastUpdate = createRequest<
  {
    requestBody?: {
      content_cn: string;
      content_en: string;
      enable_inline_keyboard: number;
      id: number;
      keyboard_command: { command_key?: string; command_value?: string; type?: number }[][];
    };
  },
  { code: number; data: null; msg: string; request_id: string }
>('tgBroadcastUpdate', ({ requestBody }) => ({
  url: `/api/tg_broadcast/update`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 查看用户信息
 */
export const tronUser = createRequest<
  {
    address?: string;
  },
  {
    code: number;
    data: {
      address: string;
      bandwidth: number;
      bandwidth_use: number;
      energy: number;
      energy_use: number;
      frozen_balance: number;
      trx: number;
      usdt: number;
    };
    msg: string;
    request_id: string;
  }
>('tronUser', ({ address }) => ({
  url: `/api/order/tronUser`,
  method: 'GET',
  params: {
    address,
  },
}));

/**
 * 编辑黑名单
 */
export const updateBlacklist = createRequest<
  {
    requestBody?: {
      id: number;
      max_bandwidth: number;
      max_energy: number;
      remark: string;
      status: number;
      wallet_address: string;
    };
  },
  { code: number; data: ArticleDetail; msg: string; request_id: string }
>('updateBlacklist', ({ requestBody }) => ({
  url: `/api/blacklist/update`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 上传文件
 */
export const uploadAws = createRequest<
  {
    requestBody?: { 'file[]'?: Blob };
  },
  {}
>('uploadAws', ({ requestBody }) => ({
  url: `/api/file/upload`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'multipart/form-data' },
}));

/**
 * 变更余额
 */
export const userAddMoney = createRequest<
  {
    requestBody?: { action: number; amount: number; remark: string; user_id: number };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('userAddMoney', ({ requestBody }) => ({
  url: `/api/user/fund/addmoney`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 用户统计图表
 */
export const userChart = createRequest<
  {
    time_type?: number;
  },
  {
    code: number;
    data: {
      axis_data: string[];
      name: string;
      order_count: number[];
      reg_count: number[];
      timeline: string;
    };
    msg: string;
    request_id: string;
  }
>('userChart', ({ time_type }) => ({
  url: `/api/overview/userChart`,
  method: 'GET',
  params: {
    time_type,
  },
}));

/**
 * 用户详情
 */
export const userDetail = createRequest<
  {
    user_id?: number;
  },
  { code: number; data: UserDetail; msg: string; request_id: string }
>('userDetail', ({ user_id }) => ({
  url: `/api/user/detail`,
  method: 'GET',
  params: {
    user_id,
  },
}));

/**
 * 帐变记录
 */
export const userFundList = createRequest<
  {
    account?: string;
    amount_max?: string;
    amount_min?: string;
    end_time?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    start_time?: string;
    symbol?: string;
    tx_id?: string;
    type?: number;
    user_id?: number;
  },
  {
    code: number;
    data: null | FundDetail[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>(
  'userFundList',
  ({
    page,
    page_size,
    user_id,
    account,
    tx_id,
    start_time,
    end_time,
    amount_min,
    amount_max,
    symbol,
    sort,
    order,
    type,
  }) => ({
    url: `/api/user/fund/list`,
    method: 'GET',
    params: {
      page,
      page_size,
      user_id,
      account,
      tx_id,
      start_time,
      end_time,
      amount_min,
      amount_max,
      symbol,
      sort,
      order,
      type,
    },
  }),
);

/**
 * 用户处理
 */
export const userHandle = createRequest<
  {
    requestBody?: { ids: number[]; is_ban: number };
  },
  { code: number; data: { rows_affected: number }; msg: string; request_id: string }
>('userHandle', ({ requestBody }) => ({
  url: `/api/user/handle`,
  method: 'POST',
  data: requestBody,
  headers: { 'Content-Type': 'application/json' },
}));

/**
 * 用户列表
 */
export const userList = createRequest<
  {
    keyword?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    status?: string;
  },
  {
    code: number;
    data: null | UserDetail[];
    msg: string;
    pagination: { has_more: boolean; page: number; page_size: number; total: number };
    request_id: string;
  }
>('userList', ({ page, page_size, keyword, sort, order, status }) => ({
  url: `/api/user/list`,
  method: 'GET',
  params: {
    page,
    page_size,
    keyword,
    sort,
    order,
    status,
  },
}));

/**
 * 用户登录日志
 */
export const userLogin = createRequest<
  {
    account?: string;
    end_time?: string;
    ip?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    start_time?: string;
  },
  {
    code: number;
    data: {
      content?: string;
      create_time?: string;
      creator_id?: number;
      ct?: number;
      info_id?: number;
      is_read?: number;
      msg_id?: number;
      order_no?: string;
      title?: string;
      type?: number;
      url?: string;
    }[];
    msg: string;
    request_id: string;
  }
>('userLogin', ({ page, page_size, sort, order, account, start_time, end_time, ip }) => ({
  url: `/api/log/userlogin`,
  method: 'GET',
  params: {
    page,
    page_size,
    sort,
    order,
    account,
    start_time,
    end_time,
    ip,
  },
}));

/**
 * 充值记录
 */
export const userRechargeList = createRequest<
  {
    account?: string;
    amount_max?: string;
    amount_min?: string;
    end_time?: string;
    from_address?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    start_time?: string;
    symbol?: string;
    to_address?: string;
    txid?: string;
    user_id?: number;
  },
  {
    code: number;
    data: null | RechargeDetail[];
    msg: string;
    pagination: Pagination;
    request_id: string;
  }
>(
  'userRechargeList',
  ({
    page,
    page_size,
    to_address,
    from_address,
    user_id,
    account,
    txid,
    start_time,
    end_time,
    amount_min,
    amount_max,
    symbol,
    sort,
    order,
  }) => ({
    url: `/api/user/recharge/list`,
    method: 'GET',
    params: {
      page,
      page_size,
      to_address,
      from_address,
      user_id,
      account,
      txid,
      start_time,
      end_time,
      amount_min,
      amount_max,
      symbol,
      sort,
      order,
    },
  }),
);

/**
 * 验证码验证
 */
export const verifyCaptcha = createRequest<
  {
    id: string;
    value: string;
  },
  { code: number; msg: string }
>('verifyCaptcha', ({ id, value }) => ({
  url: `/api/captcha/verify`,
  method: 'GET',
  params: {
    id,
    value,
  },
}));

/**
 * 钱包地址列表
 */
export const walletList = createRequest<
  {
    address?: string;
    balance_max?: string;
    balance_min?: string;
    freeze_max?: string;
    freeze_min?: string;
    order?: string;
    page?: string;
    page_size?: string;
    sort?: string;
    status?: string;
    type?: string;
  },
  { code: number; data: WalletDetail[]; msg: string; pagination: Pagination; request_id: string }
>(
  'walletList',
  ({
    page,
    page_size,
    sort,
    order,
    address,
    type,
    status,
    balance_min,
    balance_max,
    freeze_min,
    freeze_max,
  }) => ({
    url: `/api/wallet/address`,
    method: 'GET',
    params: {
      page,
      page_size,
      sort,
      order,
      address,
      type,
      status,
      balance_min,
      balance_max,
      freeze_min,
      freeze_max,
    },
  }),
);

export interface AdminDetail {
  account: string;
  admin_id: number;
  create_time: string;
  last_error_time: number;
  last_ip: string;
  last_time: string;
  last_uri: string;
  level: number;
  login_error: number;
  login_time: string;
  name: string;
  power: string;
  status: number;
}

export interface ApiDetail {
  all_bandwidth_value: number;
  all_consume_trx_amount: number;
  all_energy_value: number;
  bandwidth_surplus: number;
  create_time: number;
  energy_surplus: number;
  id: number;
  key: string;
  name: string;
  status: number;
  today_bandwidth_value: number;
  today_consume_trx_amount: number;
  today_energy_value: number;
  user: UserDetail;
  user_id: number;
  yesterday_bandwidth_value: number;
  yesterday_consume_trx_amount: number;
  yesterday_energy_value: number;
}

export interface ArticleDetail {
  article_id: number;
  content: string;
  content_en: string;
  create_time: number;
  delete_time: number;
  image: string;
  image_en: string;
  is_popup: number;
  modify_time: number;
  show_position: string;
  sort: number;
  status: number;
  summary: string;
  summary_en: string;
  title: string;
  title_en: string;
  type: number;
  url: string;
}

export interface BlackWallet {
  create_time: string;
  id: number;
  max_bandwidth: string;
  max_energy: string;
  remark: string;
  status: string;
  wallet_address: string;
}

export interface BroadcastDetail {
  content_cn: string;
  content_en: string;
  create_time: number;
  failed_count: number;
  finish_time: number;
  id: number;
  send_time: number;
  status: number;
}

export interface BroadcastLogDetail {
  broadcast_id: number;
  content: string;
  create_time: number;
  fail_reason: string;
  id: number;
  lang: string;
  send_time: number;
  status: number;
  telegram_user_id: number;
  user: UserDetail;
  user_id: number;
}

export interface CashDetail {
  address: string;
  admin_id: number;
  amount: number;
  amount_decimals: number;
  audit_reason: string;
  audit_time: number;
  cash_id: number;
  cash_status: number;
  contract_address: string;
  create_time: number;
  decimals: number;
  device_brand: string;
  device_type: string;
  energy_fee: number;
  energy_usage_total: number;
  fail_reason: string;
  fee: number;
  finish_time: number;
  from_address: string;
  handle_status: number;
  handle_time: number;
  ipaddress: string;
  is_confirmed: number;
  net_fee: number;
  net_usage: number;
  order_no: string;
  os: string;
  os_version: string;
  parent_id: number;
  pay_time: number;
  remark: string;
  root_id: number;
  seller_id: number;
  symbol: string;
  to_address: string;
  tx_id: string;
  type: number;
  user: UserDetail;
  user_id: number;
  version: number;
}

export interface ConfigDetail {
  category_id: number;
  config_desc: string;
  config_name: string;
  config_sort: number;
  config_summary: string;
  config_type: number;
  config_value: string;
}

export interface DaiLiShenQingXiangQing {
  apply_id: number;
  channel: string;
  contacts: string;
  cooperation_content: string;
  create_time: number;
  delete_time: number;
  handle_time: number;
  status: number;
  user: UserDetail;
  user_id: number;
}

export interface DaiLiXiangQing {
  agent_id: number;
  announcement_cn: string;
  announcement_en: string;
  buy_settle_ratio: number;
  create_time: number;
  domain: string;
  remark: string;
  role: number;
  sell_settle_ratio: number;
  settle_address: string;
  site_name: string;
  status: number;
  telegram_bot_name: string;
  telegram_bot_token: string;
  telegram_bot_username: string;
  telegram_cs_username: string;
  template_code: string;
  total_buy_order_num: number;
  total_buy_settle_amount: number;
  total_sell_order_num: number;
  total_sell_settle_amount: number;
  total_settle_amount: number;
  update_run_status: number;
  update_run_time: number;
  user: UserDetail;
  user_id: number;
}

export interface DaiLiXiangQing1 {
  agent_id: number;
  announcement_cn: string;
  announcement_en: string;
  buy_settle_ratio: number;
  create_time: number;
  domain: string;
  remark: string;
  role: number;
  sell_settle_ratio: number;
  settle_address: string;
  site_name: string;
  status: number;
  telegram_bot_name: string;
  telegram_bot_token: string;
  telegram_bot_username: string;
  telegram_cs_username: string;
  template_code: string;
  total_buy_order_num: number;
  total_buy_settle_amount: number;
  total_sell_order_num: number;
  total_sell_settle_amount: number;
  total_settle_amount: number;
  update_run_status: number;
  update_run_time: number;
  user: UserDetail;
  user_id: number;
}

export interface DappUserDetail {
  account: string;
  analysis_time: number;
  bandwidth_freeze_order_num: number;
  bandwidth_freeze_value: number;
  bandwidth_frozen_balance: number;
  bandwidth_order_num: number;
  bandwidth_rent_value: number;
  create_source: number;
  create_time: number;
  device_brand: string;
  device_type: string;
  email: string;
  energy_freeze_order_num: number;
  energy_freeze_value: number;
  energy_frozen_balance: number;
  energy_order_num: number;
  energy_rent_value: number;
  has_exchange_dapp: number;
  has_exchange_transfer: number;
  has_order_cancel: number;
  has_order_dapp: number;
  has_order_freeze: number;
  has_order_transfer: number;
  has_recharge: number;
  is_link_wallet: number;
  last_ip: string;
  last_login_ip: string;
  last_login_time: number;
  last_operate: number;
  last_time: number;
  os: string;
  os_version: string;
  password: string;
  pay_amount_trx: number;
  pay_amount_usdt: number;
  reg_ip: string;
  reg_time: number;
  rent_time: number;
  status: number;
  tron_nonce: string;
  trx_address: string;
  trx_balance: number;
  trx_money: number;
  user_id: number;
}

export interface DiscountDetail {
  create_time: number;
  extra_add_day: number;
  id: number;
  max: number;
  min: number;
  modify_time: number;
  status: number;
  sun: number;
  sun_1h: number;
  sun_3h: number;
}

export interface ExchangeOrderDetail {
  contract_address: string;
  create_time: number;
  currency_rate: number;
  exchange_amount: number;
  exchange_pay_result: string;
  exchange_pay_status: number;
  exchange_rate: number;
  exchange_symbol: string;
  exchange_tx_id: string;
  finish_time: number;
  handle_status: number;
  is_telegram: number;
  language: string;
  modify_time: number;
  order_no: string;
  order_type: number;
  owner_address: string;
  pay_address: string;
  pay_amount: number;
  pay_expiration: number;
  pay_result: string;
  pay_status: number;
  pay_symbol: string;
  pay_time: number;
  pay_to_address: string;
  pay_tx_id: string;
  pay_type: number;
  platform_profit: number;
  promote_commissions: number;
  promote_commissions_ratio: number;
  promote_user_id: number;
  receive_address: string;
  seller_id: number;
  seller_user_id: number;
  status: number;
  telegram_notify_status: number;
  telegram_user_id: number;
  user_id: number;
}

export interface FundDetail {
  act: number;
  admin_id: number;
  amount: number;
  amount_after: number;
  amount_before: number;
  create_time: number;
  log_id: number;
  order_no: string;
  remark: string;
  symbol: string;
  tx_id: string;
  type: number;
  user: UserDetail;
  user_id: number;
}

export interface MaiJiaShiXinJiLuXiangQing {
  broken_amount: number;
  broken_num: number;
  create_time: number;
  last_broken_time: number;
  seller: SellerDetail;
  seller_id: number;
  user: UserDetail;
  wallet_address: string;
}

export interface MonitorAddressDetail {
  balance: number;
  chain: string;
  create_time: number;
  notify_url: string;
  receive_amount_limit: number;
  receive_detail: number;
  receive_in: number;
  receive_notify_url: number;
  receive_out: number;
  receive_telegram: number;
  receive_token: number;
  receive_usdt: number;
  remark: string;
  status: number;
  telegram_chat_id: number;
  usdt_balance: number;
  user?: UserDetail;
  user_id: number;
  wallet_address: string;
}

export interface MonitorData {
  didi_tron: OpponentDetail;
  e_market: OpponentDetail;
  token_goodies: OpponentDetail;
  tron_pulse: OpponentDetail;
}

export interface MonitorTransactionDetail {
  amount: number;
  amount_decimals: number;
  chain: string;
  contract_address: string;
  contract_type: number;
  create_time: number;
  decimals: number;
  energy_fee: number;
  energy_usage_total: number;
  fee: number;
  from_address: string;
  is_detail: number;
  monitor_address: string;
  net_fee: number;
  net_usage: number;
  notify_telegram_status: number;
  notify_telegram_time: number;
  notify_url_finish_time: number;
  notify_url_num: number;
  notify_url_status: number;
  notify_url_time: number;
  pay_time: number;
  remark: string;
  symbol: string;
  to_address: string;
  trx_balance: number;
  tx_hash: string;
  usdt_balance: number;
  user?: UserDetail;
  user_id: number;
  wallet?: MonitorAddressDetail;
}

export interface OpponentDetail {
  order_count: number;
  price_in_sun: number;
}

export interface OrderCancelDetail {
  amount: number;
  amount_decimals: number;
  contract_address: string;
  create_time: number;
  decimals: number;
  finish_time: number;
  from_address: string;
  handle_status: number;
  handle_time: number;
  is_confirmed: number;
  order_no: string;
  pay_result: string;
  pay_status: number;
  pay_time: number;
  remark: string;
  service_amount: number;
  symbol: string;
  to_address: string;
  txid: string;
  type: number;
  user_id: number;
}

export interface OrderDetail {
  api?: 9747654 | null;
  api_key: string;
  cancel?: 42077945 | null;
  cancel_amount: number;
  cancel_time: number;
  cancel_tx_id: string;
  check_status: number;
  create_time: number;
  energy_unit_price: number;
  expire_time: number;
  freeze_time: number;
  frozen_balance: number;
  frozen_duration: number;
  frozen_resource_value: number;
  frozen_status: number;
  frozen_tx_id: string;
  is_lock: number;
  is_settle: number;
  is_split: number;
  is_telegram: number;
  max_amount: number;
  max_freeze: number;
  max_payout: number;
  min_amount: number;
  min_freeze: number;
  min_payout: number;
  modify_time: number;
  net_unit_price: number;
  order_no: string;
  order_num: number;
  order_parent_no: string;
  order_type: number;
  owner_address: string;
  pay_action: number;
  pay_address: string;
  pay_amount: number;
  pay_expiration: number;
  pay_status: number;
  pay_symbol: string;
  pay_time: number;
  pay_to_address: string;
  pay_tx_id: string;
  price_in_sun: number;
  promote_commissions: number;
  promote_commissions_ratio: number;
  promote_user_id: number;
  receive_address: string;
  refund?: 42111359 | null;
  refund_amount: number;
  refund_time: number;
  refund_type: number;
  rent_duration: number;
  rent_expire_time: number;
  rent_time_unit: string;
  rent_use_duration: number;
  resource_split_value: number;
  resource_type: number;
  resource_value: number;
  seller?: {
    allow_delegate: number;
    allow_freeze: number;
    allow_freeze_v2: number;
    allow_undelegate: number;
    allow_unfreeze: number;
    allow_unfreeze_v2: number;
    allow_vote_witness: number;
    allow_withdraw_balance: number;
    auto_freeze_v2: number;
    available_unfreeze_count: number;
    can_delegated_bandwidth_max_size: number;
    can_delegated_energy_max_size: number;
    check_take_time: number;
    cooling_bandwidth_balance: number;
    cooling_energy_balance: number;
    create_time: number;
    delegate_time: number;
    delegated_balance_for_bandwidth: number;
    delegated_balance_for_energy: number;
    exclusive_agency: number;
    free_net_limit: number;
    free_net_used: number;
    freeze_time: number;
    freezev2_keep_amount: number;
    frozen_balance: number;
    frozen_bandwidth_balance: number;
    frozen_energy_balance: number;
    net_limit: number;
    net_surplus: number;
    net_used: number;
    permission_id: number;
    permission_name: string;
    power_limit: number;
    power_used: number;
    promote_settle_address: string;
    promote_settle_amount: number;
    promote_settle_date: string;
    promote_settle_ratio: number;
    remark: string;
    reward: number;
    reward_time: number;
    role: number;
    seller_id: number;
    settle_address: string;
    settle_ratio: number;
    status: number;
    take_freezing_amount: number;
    take_order: number;
    take_order_amount: number;
    take_order_bandwidth_min_sun: number;
    take_order_energy_min_sun: number;
    take_order_num: number;
    take_order_resource: number;
    take_settle_amount: number;
    to_address: string;
    total_assets: number;
    total_reward: number;
    trx_balance: number;
    undelegate_time: number;
    unfreeze_time: number;
    update_run_status: number;
    update_run_time: number;
    user_id: number;
    vote_annualized_rate: number;
    vote_time: number;
    wallet_address: string;
    withdraw_keep_amount: number;
    withdraw_type: number;
  };
  seller_id: number;
  seller_user_id: number;
  settle?: {
    amount: number;
    amount_decimals: number;
    contract_address: string;
    create_time: number;
    decimals: number;
    finish_time: number;
    from_address: string;
    handle_status: number;
    handle_time: number;
    is_confirmed: number;
    order_amount: number;
    order_no: string;
    pay_result: string;
    pay_status: number;
    pay_time: number;
    remark: string;
    seller_id: number;
    settle_ratio: number;
    symbol: string;
    to_address: string;
    txid: string;
    type: number;
    user_id: number;
  };
  settle_address: string;
  settle_amount: number;
  settle_ratio: number;
  settle_status: number;
  settle_symbol: string;
  settle_time: number;
  settle_type: number;
  stake_version: number;
  status: number;
  take_order_type: number;
  take_status: number;
  total_energy_limit: number;
  total_energy_weight: number;
  total_net_limit: number;
  total_net_weight: number;
  unfreeze_time: number;
  unfreeze_tx_id: string;
  user?: {
    account: string;
    cash_time: number;
    commission_ratio: number;
    create_time: number;
    device_brand: string;
    device_type: string;
    email: string;
    invite_code: string;
    invite_url: string;
    is_seller: number;
    last_address: string;
    last_ip: string;
    last_login_ip: string;
    last_login_ip_address: string;
    last_login_time: number;
    last_time: number;
    monitor_wallet_limit: number;
    nickname: string;
    os: string;
    os_version: string;
    parent_id: number;
    reg_ip: string;
    reg_ip_address: string;
    reg_time: number;
    rent_time: number;
    root_id: number;
    status: number;
    telegram_bot_used: number;
    telegram_first_name: string;
    telegram_last_name: string;
    telegram_user_id: number;
    telegram_username: string;
    tg_notify_energy: number;
    tg_notify_exchange: number;
    tron_nonce: string;
    trx_address: string;
    trx_balance: number;
    trx_money: number;
    unique_id: string;
    user_id: number;
  };
  user_id: number;
}

export interface OrderRefundDetail {
  amount: number;
  amount_decimals: number;
  contract_address: string;
  create_time: number;
  decimals: number;
  finish_time: number;
  from_address: string;
  handle_status: number;
  handle_time: number;
  is_confirmed: number;
  order_no: string;
  pay_result: string;
  pay_status: number;
  pay_time: number;
  remark: string;
  service_amount: number;
  symbol: string;
  to_address: string;
  txid: string;
  type: number;
  user_id: number;
}

export interface Pagination {
  cursor?: string;
  has_more: boolean;
  page: number;
  page_size: number;
  total?: number;
}

export interface PromotedUserDetail {
  account: string;
  commission: number;
  email: string;
  is_seller: number;
  last_login_time: number;
  last_time: number;
  parent?: UserDetail;
  reg_time: number;
  status: number;
  telegram_first_name: string;
  telegram_last_name: string;
  telegram_username: string;
  trx_address: string;
  unique_id: string;
  user_id: number;
}

export interface PromotedWalletDetail {
  address: string;
  commission: number;
  create_time: number;
  user: UserDetail;
  user_id: number;
}

export interface RechargeDetail {
  amount: number;
  amount_decimals: number;
  contract_address: string;
  contract_type: number;
  create_time: number;
  decimals: number;
  energy_fee: number;
  energy_usage_total: number;
  fee: number;
  from_address: string;
  is_confirmed: number;
  money: number;
  net_fee: number;
  net_usage: number;
  order_no: string;
  pay_time: number;
  receipt_result: string;
  recharge_id: number;
  remark: string;
  status: number;
  symbol: string;
  to_address: string;
  txid: string;
  user: UserDetail;
  user_id: number;
}

export interface Report {
  bandwidth_value: number;
  create_time: number;
  dapp_user_num: number;
  dateline: number;
  day: number;
  energy_value: number;
  exchange_commissions: number;
  exchange_in_trx: number;
  exchange_in_usdt: number;
  exchange_order_trx_num: number;
  exchange_order_usdt_num: number;
  exchange_out_trx: number;
  exchange_out_usdt: number;
  exchange_service_trx: number;
  exchange_service_usdt: number;
  frozen_amount: number;
  modify_time: number;
  month: number;
  order_bandwidth_num: number;
  order_commissions: number;
  order_energy_num: number;
  order_trx_amount: number;
  order_usdt_amount: number;
  profit_trx_amount: number;
  profit_usdt_amount: number;
  register_num: number;
  reward_amount: number;
  settle_amount: number;
  total_dapp_user_num: number;
  total_register_num: number;
  year: number;
}

export interface SellerDetail {
  allow_delegate: number;
  allow_freeze: number;
  allow_freeze_v2: number;
  allow_undelegate: number;
  allow_unfreeze: number;
  allow_unfreeze_v2: number;
  allow_vote_witness: number;
  allow_withdraw_balance: number;
  auto_freeze_v2: number;
  auto_vote: number;
  available_unfreeze_count: number;
  can_delegated_bandwidth_max_size: number;
  can_delegated_energy_max_size: number;
  check_take_time: number;
  cooling_bandwidth_balance: number;
  cooling_energy_balance: number;
  create_time: number;
  delegate_time: number;
  delegated_balance_for_bandwidth: number;
  delegated_balance_for_energy: number;
  exclusive_agency: number;
  free_net_limit: number;
  free_net_used: number;
  freeze_time: number;
  freezev2_keep_amount: number;
  frozen_balance: number;
  frozen_bandwidth_balance: number;
  frozen_energy_balance: number;
  net_limit: number;
  net_surplus: number;
  net_used: number;
  permission_id: number;
  permission_name: string;
  power_limit: number;
  power_used: number;
  promote_settle_address: string;
  promote_settle_amount: number;
  promote_settle_date: string;
  promote_settle_ratio: number;
  remark: string;
  reward: number;
  reward_time: number;
  role: number;
  seller_id: number;
  settle_address: string;
  settle_ratio: number;
  status: number;
  take_order: number;
  take_order_amount: number;
  take_order_bandwidth_min_sun: number;
  take_order_energy_min_sun: number;
  take_order_num: number;
  take_order_resource: number;
  take_settle_amount: number;
  to_address: string;
  total_assets: number;
  total_reward: number;
  trx_balance: number;
  undelegate_time: number;
  unfreeze_time: number;
  update_run_status: number;
  update_run_time: number;
  user?: {
    account: string;
    cash_time: number;
    commission_ratio: number;
    create_time: number;
    device_brand: string;
    device_type: string;
    email: string;
    invite_code: string;
    invite_url: string;
    is_agent: number;
    is_seller: number;
    last_address: string;
    last_ip: string;
    last_login_ip: string;
    last_login_ip_address: string;
    last_login_time: number;
    last_time: number;
    monitor_wallet_limit: number;
    nickname: string;
    os: string;
    os_version: string;
    parent_id: number;
    reg_ip: string;
    reg_ip_address: string;
    reg_time: number;
    rent_time: number;
    root_id: number;
    status: number;
    telegram_bot_used: number;
    telegram_first_name: string;
    telegram_last_name: string;
    telegram_user_id: number;
    telegram_username: string;
    tg_notify_energy: number;
    tg_notify_exchange: number;
    tron_nonce: string;
    trx_address: string;
    trx_balance: number;
    trx_money: number;
    unique_id: string;
    user_id: number;
  };
  user_id: number;
  vote_annualized_rate: number;
  vote_time: number;
  wallet_address: string;
  withdraw_keep_amount: number;
  withdraw_type: number;
}

export interface SellerFundDetail {
  amount: number;
  amount_decimals: number;
  contract_address: string;
  contract_type: number;
  create_time: number;
  decimals: number;
  fail_notify: number;
  fail_reason: string;
  fee: number;
  finish_time: number;
  from_address: string;
  handle_status: number;
  handle_time: number;
  is_confirmed: number;
  net_fee: number;
  net_usage: number;
  order_no: string;
  pay_status: number;
  pay_time: number;
  remark: string;
  seller: SellerDetail;
  seller_id: number;
  symbol: string;
  to_address: string;
  transaction_id: number;
  txid: string;
  type: number;
  user_id: number;
}

export interface StatisticsDetail {
  last_week_power_reward: number;
  order_waiting_amount: { trx: number; usdt: number };
  order_waiting_bandwidth: number;
  order_waiting_energy: number;
  order_waiting_frozen_balance: number;
  order_waiting_frozen_energy: number;
  order_waiting_num: number;
  this_week_power_reward: number;
  today_bandwidth_order_num: number;
  today_energy_order_num: number;
  today_frozen_trx: number;
  today_order_amount: { trx: number; usdt: number };
  today_order_commissions: number;
  today_order_num: number;
  today_order_settle_amount: number;
  today_order_waiting_settle_amount: number;
  today_platform_freed_balance: number;
  today_platform_freed_bandwidth: number;
  today_platform_freed_energy: number;
  today_platform_frozen_trx: number;
  today_promote_seller_settle_amount: number;
  today_register_num: { api_user: number; order_user: number };
  today_rent_bandwidth: number;
  today_rent_energy: number;
  today_retail_frozen_trx: number;
  today_seller_freed_balance: number;
  today_seller_freed_bandwidth: number;
  today_seller_freed_energy: number;
  today_seller_frozen_trx: number;
  today_total_profit: { trx: number; usdt: number };
  tomorrow_platform_freed_balance: number;
  tomorrow_platform_freed_bandwidth: number;
  tomorrow_platform_freed_energy: number;
  tomorrow_seller_freed_balance: number;
  tomorrow_seller_freed_bandwidth: number;
  tomorrow_seller_freed_energy: number;
  total_order_amount: { trx: number; usdt: number };
  total_profit: { trx: number; usdt: number };
  total_reward: number;
  total_settle: number;
  yesterday_bandwidth_order_num: number;
  yesterday_energy_order_num: number;
  yesterday_frozen_trx: number;
  yesterday_order_amount: { trx: number; usdt: number };
  yesterday_order_commissions: number;
  yesterday_order_num: number;
  yesterday_order_settle_amount: number;
  yesterday_platform_frozen_trx: number;
  yesterday_promote_seller_settle_amount: number;
  yesterday_register_num: { api_user: number; order_user: number };
  yesterday_rent_bandwidth: number;
  yesterday_rent_energy: number;
  yesterday_retail_frozen_trx: number;
  yesterday_seller_frozen_trx: number;
  yesterday_total_profit: { trx: number; usdt: number };
}

export interface TransactionDetail {
  amount: number;
  amount_decimals: number;
  api_key: string;
  contract_address: string;
  contract_type: number;
  create_time: number;
  decimals: number;
  energy_fee: number;
  energy_usage_total: number;
  fail_notify: number;
  fail_reason: string;
  fee: number;
  finish_time: number;
  from_address: string;
  handle_status: number;
  handle_time: number;
  is_confirmed: number;
  net_fee: number;
  net_usage: number;
  order_no: string;
  pay_status: number;
  pay_time: number;
  remark: string;
  symbol: string;
  to_address: string;
  transaction_id: number;
  txid: string;
  type: number;
  user_id: number;
}

export interface UserDetail {
  account: string;
  api_count?: number;
  cash_time: number;
  commission_ratio: number;
  create_time: number;
  device_brand: string;
  device_type: string;
  email: string;
  energy_surplus?: number;
  invite_code: string;
  invite_url: string;
  is_seller: number;
  last_address: string;
  last_ip: string;
  last_login_ip: string;
  last_login_ip_address: string;
  last_login_time: number;
  last_time: number;
  monitor_wallet_limit: number;
  nickname: string;
  order_count?: number;
  os: string;
  os_version: string;
  parent_id: number;
  reg_ip: string;
  reg_ip_address: string;
  reg_time: number;
  rent_time: number;
  root_id: number;
  status: number;
  telegram_bot_used: number;
  telegram_first_name: string;
  telegram_last_name: string;
  telegram_user_id: number;
  telegram_username: string;
  tg_notify_energy: number;
  tg_notify_exchange: number;
  today_rent_energy?: number;
  total_recharge?: number;
  total_rent_energy?: number;
  tron_nonce: string;
  trx_address: string;
  trx_balance: number;
  trx_money: number;
  unique_id: string;
  user_id: number;
}

export interface UserFundDetail {
  act: number;
  amount: number;
  create_time: number;
  log_id: number;
  order_no: string;
  remark: string;
  symbol: string;
  tx_id: string;
  type: number;
}

export interface WalletDetail {
  active_time: number;
  address: string;
  available_unfreeze_count: number;
  business_status: number;
  can_delegated_bandwidth_max_size: number;
  can_delegated_energy_max_size: number;
  cooling_bandwidth_balance: number;
  cooling_energy_balance: number;
  create_time: number;
  delegated_balance_for_bandwidth: number;
  delegated_balance_for_energy: number;
  energy_limit: number;
  energy_surplus: number;
  energy_used: number;
  free_net_limit: number;
  free_net_surplus: number;
  free_net_used: number;
  frozen_balance: number;
  frozen_bandwidth_balance: number;
  frozen_energy_balance: number;
  id: number;
  is_actived: number;
  modify_time: number;
  net_limit: number;
  net_surplus: number;
  net_used: number;
  power_limit: number;
  power_used: number;
  reward: number;
  reward_time: number;
  status: number;
  trx_balance: number;
  type: number;
  update_run_status: number;
  update_run_time: number;
  usdt_balance: number;
  vote_annualized_rate: number;
  vote_time: number;
}
