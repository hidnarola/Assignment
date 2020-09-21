/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },

  {
    header: 'Apps',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [

      {
        url: null,
        name: 'Home',
        icon: 'HomeIcon',
        i18n: 'Home',
        submenu: [
          {
            url: '/apps/Home/vendoracc',
            name: 'Vendor Accounts',
            slug: 'app-home-vendoraccounts',
            i18n: 'Vendor Accounts'
          },
          {
            url: '/apps/Home/vendoracc/addnewvendor',
            name: 'Add New Vendor',
            slug: 'app-home-addnewvendor',
            i18n: 'Add New Vendor'
          }

        ]
      }
    ]
  }
]

