import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'monitor-outline',
    link: '/pages/customer/dashboard',
  },
  {
    title: 'Reports',
    icon: 'file-text-outline',
    link: '/pages/customer/report',
  },
  {
    title: 'Payments',
    icon: 'credit-card-outline',
    link: '/pages/customer/payments',
  },
  {
    title: 'Meetings',
    icon: 'clock-outline',
    link: '/pages/customer/meeting',
  },{
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
