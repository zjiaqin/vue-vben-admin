import { ref } from 'vue';
import { getCaptcha } from '/@/api/apis';

import type { ApiData } from '/#/axios';

// type captchaGetType = GetApiResult<typeof getCaptcha>;
export type captchaGetType = ApiData<typeof getCaptcha>;

export function useCaptcha(immediate = true) {
  const getCaptchaBase64 = ref<captchaGetType>();
  const loading = ref(false);
  // 更新验证码
  async function setCaptchaBase64() {
    loading.value = true;
    try {
      getCaptchaBase64.value = await getCaptcha(undefined);
    } finally {
      loading.value = false;
    }
  }
  immediate && setCaptchaBase64();
  return { setCaptchaBase64, getCaptchaBase64, loading };
}
