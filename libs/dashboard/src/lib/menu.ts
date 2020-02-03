import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/home'
  },
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/dashboard',
    home: true
  },
  {
    title: 'Admin',
    icon: 'shopping-cart-outline',
    link: '/admin'
  },
  {
    title: 'Accounts',
    icon: 'shopping-cart-outline',
    link: '/dashboard/accounts'
  },

  {
    title: 'FEATURES',
    group: true
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/dashboard/layout/stepper'
      },
      {
        title: 'List',
        link: '/dashboard/layout/list'
      },
      {
        title: 'Infinite List',
        link: '/dashboard/layout/infinite-list'
      },
      {
        title: 'Accordion',
        link: '/dashboard/layout/accordion'
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/dashboard/layout/tabs'
      }
    ]
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/dashboard/forms/inputs'
      },
      {
        title: 'Form Layouts',
        link: '/dashboard/forms/layouts'
      },
      {
        title: 'Buttons',
        link: '/dashboard/forms/buttons'
      },
      {
        title: 'Datepicker',
        link: '/dashboard/forms/datepicker'
      }
    ]
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/dashboard/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/dashboard/ui-features/grid'
      },
      {
        title: 'Icons',
        link: '/dashboard/ui-features/icons'
      },
      {
        title: 'Typography',
        link: '/dashboard/ui-features/typography'
      },
      {
        title: 'Animated Searches',
        link: '/dashboard/ui-features/search-fields'
      }
    ]
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/dashboard/modal-overlays/dialog'
      },
      {
        title: 'Window',
        link: '/dashboard/modal-overlays/window'
      },
      {
        title: 'Popover',
        link: '/dashboard/modal-overlays/popover'
      },
      {
        title: 'Toastr',
        link: '/dashboard/modal-overlays/toastr'
      },
      {
        title: 'Tooltip',
        link: '/dashboard/modal-overlays/tooltip'
      }
    ]
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/dashboard/extra-components/calendar'
      },
      {
        title: 'Progress Bar',
        link: '/dashboard/extra-components/progress-bar'
      },
      {
        title: 'Spinner',
        link: '/dashboard/extra-components/spinner'
      },
      {
        title: 'Alert',
        link: '/dashboard/extra-components/alert'
      },
      {
        title: 'Calendar Kit',
        link: '/dashboard/extra-components/calendar-kit'
      },
      {
        title: 'Chat',
        link: '/dashboard/extra-components/chat'
      }
    ]
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/dashboard/maps/gmaps'
      },
      {
        title: 'Leaflet Maps',
        link: '/dashboard/maps/leaflet'
      },
      {
        title: 'Bubble Maps',
        link: '/dashboard/maps/bubble'
      },
      {
        title: 'Search Maps',
        link: '/dashboard/maps/searchmap'
      }
    ]
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/dashboard/charts/echarts'
      },
      {
        title: 'Charts.js',
        link: '/dashboard/charts/chartjs'
      },
      {
        title: 'D3',
        link: '/dashboard/charts/d3'
      }
    ]
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/dashboard/editors/tinymce'
      },
      {
        title: 'CKEditor',
        link: '/dashboard/editors/ckeditor'
      }
    ]
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/dashboard/tables/smart-table'
      },
      {
        title: 'Tree Grid',
        link: '/dashboard/tables/tree-grid'
      }
    ]
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/dashboard/miscellaneous/404'
      }
    ]
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login'
      },
      {
        title: 'Register',
        link: '/auth/register'
      },
      {
        title: 'Request Password',
        link: '/auth/request-password'
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password'
      }
    ]
  }
];
