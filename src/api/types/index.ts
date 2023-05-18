import { ApiData } from '/#/axios';
import { apis } from '/@/api';

type UserInfo = ApiData<typeof apis.adminMy>;

export type { UserInfo };
