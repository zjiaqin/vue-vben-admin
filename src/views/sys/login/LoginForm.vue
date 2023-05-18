<template>
  <Form class="p-4 enter-x" @keypress.enter="handleLogin">
    <Form.Item name="email" class="enter-x" v-bind="validateInfos.account">
      <a-input
        size="large"
        v-model:value="formData.username"
        placeholder="请输入用户名"
        class="fix-auto-fill"
      >
        <template #prefix>
          <Icon icon="ant-design:user-outlined" color="#266EF2" />
        </template>
      </a-input>
    </Form.Item>
    <Form.Item name="password" class="enter-x" v-bind="validateInfos.password">
      <InputPassword
        size="large"
        visibilityToggle
        v-model:value="formData.password"
        placeholder="请输入登录密码"
      >
        <template #prefix>
          <Icon icon="ant-design:lock-outlined" color="#266EF2" />
        </template>
      </InputPassword>
    </Form.Item>
    <Form.Item name="captcha" class="enter-x" v-bind="validateInfos.captcha">
      <div class="flex">
        <a-input size="large" v-model:value="formData.captcha" placeholder="请输入验证码">
          <template #prefix>
            <Icon icon="ant-design:safety-outlined" color="#266EF2" />
          </template>
        </a-input>
        <div v-if="captchaLoad" class="ml-2.5 w-30 h-10 flex items-center justify-center">
          <LoadingOutlined class="text-3xl primary-color" />
        </div>
        <img
          v-else
          class="ml-2.5 w-30 h-10 cursor-pointer"
          :src="getCaptchaBase64?.data"
          @click="setCaptchaBase64"
        />
      </div>
    </Form.Item>
    <Form.Item class="enter-x">
      <a-button type="primary" size="large" block @click="handleLogin" :loading="loading">
        {{ loading ? '登录中' : '登录' }}
      </a-button>
    </Form.Item>
  </Form>
</template>
<script lang="ts" setup>
  import { reactive, ref, watch } from 'vue';
  import { Form, InputPassword, message } from 'ant-design-vue';
  import { LoadingOutlined } from '@ant-design/icons-vue';
  import { Icon } from '/@/components/Icon';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { router } from '/@/router';

  import { registerAndLoginFormRuleConfig } from './config/formRuleConfig';
  import { useCaptcha } from '/@/hooks/web/useCaptcha';

  const { t } = useI18n();

  const userStore = useUserStore();

  const { notification, createErrorModal } = useMessage();
  const { prefixCls } = useDesign('login');
  const { getCaptchaBase64, setCaptchaBase64, loading: captchaLoad } = useCaptcha();

  watch(getCaptchaBase64, (newValue) => (formData.captcha_id = newValue?.id ?? ''));

  watch(getCaptchaBase64, (newValue) => {
    formData.captcha_id = newValue?.id as string;
  });

  const loading = ref(false);
  const formData = reactive({
    username: '',
    password: '',
    captcha: '',
    captcha_id: '',
  });

  const { validate, validateInfos } = Form.useForm(formData, registerAndLoginFormRuleConfig());

  // 处理响应 code
  function handleResponseCode(code: number, responseMessage: string) {
    if (code === 15024) {
      // 15024：验证邮箱
      router.replace({ name: 'PendingVerify', query: { email: formData.username, type: 1 } });
    } else {
      message.error(responseMessage);
      setCaptchaBase64();
    }
  }

  // 登录
  async function handleLogin() {
    validate().then(async () => {
      try {
        loading.value = true;

        const userInfo = await userStore
          .login({
            requestBody: formData,
            mode: 'none',
          })
          .catch((err) => {
            console.log(err.code);
            handleResponseCode(err.code, err.message);
          });

        if (userInfo) {
          notification.success({
            message: t('sys.login.loginSuccessTitle'),
            description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.name}`,
            duration: 3,
          });
        }
      } catch (error) {
        setCaptchaBase64();
        createErrorModal({
          title: t('sys.api.errorTip'),
          content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
          getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
        });
      } finally {
        loading.value = false;
      }
    });
  }

  // 注册

  // 忘记密码
</script>
