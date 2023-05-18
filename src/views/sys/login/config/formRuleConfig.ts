import { reactive, ref } from 'vue';
import type { Rule } from 'ant-design-vue/lib/form/interface';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

// 邮箱校验规则
export const emailRule = [
  {
    validator(_rule: Rule, value: string) {
      if (!value) return Promise.reject(t('custom.Kc9_yezNhqU69gkLO0uCH'));
      // 邮箱正则
      const rule =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (rule.test(value)) {
        return Promise.resolve();
      } else {
        return Promise.reject(t('custom.lRhI13znaT4QtqAcQuALu'));
      }
    },
  },
];
// 密码校验规则
const password = ref<string | number>('');
export const passwordRule = [
  {
    validator(_rule: Rule, value: string) {
      if (!value) return Promise.reject(t('custom.MDgyuUbUsE9PqnlIMG_-X'));
      password.value = value;
      // 密码大于 8位数
      if (value.length >= 8) {
        return Promise.resolve();
      } else {
        return Promise.reject(t('custom.SMReLG-0zs4IIQG320mGt'));
      }
    },
  },
];
// 确认密码校验规则
export const passwordConfirmRule = [
  {
    validator(_rule: Rule, value: string) {
      if (!value) return Promise.reject(t('custom.GQaXMifKrgxtdLUsPAxle'));
      // 密码大于 8位数
      if (value === password.value) {
        return Promise.resolve();
      } else {
        return Promise.reject(t('custom.qt1k-Atl6lQolNlVto1yj'));
      }
    },
  },
];
// 验证码校验规则
export const captchaRule = [
  {
    validator(_rule: Rule, value: string) {
      if (!value) return Promise.reject(t('custom.xYRNxo6GRKFnTm11yIQ6y'));
      if (value.length === 5) {
        return Promise.resolve();
      } else {
        return Promise.reject(t('custom.wonPyjiL9zEile47Mtmy1'));
      }
    },
  },
];

// 注册登录表单配置规则
export const registerAndLoginFormRuleConfig = () => {
  return reactive({
    email: emailRule,
    password: passwordRule,
    password_confirm: passwordConfirmRule,
    captcha: captchaRule,
  });
};
// 忘记密码表单配置
export const forgetPasswordFormRuleConfig = () => {
  return reactive({
    email: emailRule,
    captcha: captchaRule,
  });
};
// 重置密码表单配置
export const resetPasswordFormRuleConfig = () => {
  return reactive({
    email: emailRule,
    password: passwordRule,
    password_confirm: passwordConfirmRule,
    captcha: captchaRule,
  });
};
// 直接修改密码表单配置
export const changePasswordFormRuleConfig = () => {
  return reactive({
    password_old: [
      {
        validator(_rule: Rule, value: string) {
          if (!value) return Promise.reject(t('custom.MDgyuUbUsE9PqnlIMG_-X'));
          // 密码大于 8位数
          if (value.length >= 8) {
            return Promise.resolve();
          } else {
            return Promise.reject(t('custom.SMReLG-0zs4IIQG320mGt'));
          }
        },
      },
    ],
    password: passwordRule,
    password_confirm: passwordConfirmRule,
    // captcha: captchaRule,
  });
};

// 验证页面校验验证码配置
export const verifyPageRuleConfig = () => {
  return reactive({
    captcha: captchaRule,
  });
};

export const phoneRlue = [
  {
    validator(_rule: Rule, value: string) {
      if (!value) return Promise.reject('请输入手机号码');
      // 邮箱正则
      const rule = /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/;
      if (rule.test(value)) {
        return Promise.resolve();
      } else {
        return Promise.reject('请输入正确格式的手机号码');
      }
    },
  },
];
