/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React, { lazy } from 'react';

const LoginPage = lazy(() => import('containers/LoginPage'));

const WelcomePage = lazy(() => import('containers/WelcomePage'));
const DashboardPage = lazy(() => import('containers/Dashboard'));
const AudiencePage = lazy(() => import('containers/AudiencePage'));
const RevenuePage = lazy(() => import('containers/RevenuePage'));
const BehaviorPage = lazy(() => import('containers/Behavior'));

const SubscriptionPage = lazy(() => import('containers/SubscriptionPage'));
const MemberRolesPage = lazy(() => import('containers/MemberRolesPage'));
const DataStreamPage = lazy(() => import('containers/DataStreamPage'));
const RegionCountryPage = lazy(() => import('containers/RegionCountryPage'));
const SettingPage = lazy(() => import('containers/SettingPage'));
const HelpCenterPage = lazy(() => import('containers/HelpCenterPage'));

const ProfilePage = lazy(() => import('containers/ProfilePage'));

const authRoutes = [
  {
    path: '/login',
    exact: true,
    main: () => <LoginPage />,
  },
];

const mainRoutes = [
  {
    path: ['/:domain', '/'],
    exact: true,
    main: () => <DashboardPage />,
  },
  {
    path: '/:domain/audience/overview',
    exact: true,
    main: () => <AudiencePage />,
  },
  { path: '/:domain/revenue', exact: true, main: () => <RevenuePage /> },
  {
    path: [
      '/:domain/behavior/overview',
      '/:domain/behavior/click-anchor',
      '/:domain/behavior/utm-tracking',
      '/:domain/behavior/events',
    ],
    exact: true,
    main: () => <BehaviorPage />,
  },
  {
    path: '/:domain/subscription',
    exact: true,
    main: () => <SubscriptionPage />,
  },
  {
    path: '/:domain/member-roles',
    exact: true,
    main: () => <MemberRolesPage />,
  },
  {
    path: '/:domain/data-stream',
    exact: true,
    main: () => <DataStreamPage />,
  },
  {
    path: ['/setting', '/setting/configuration'],
    exact: true,
    main: () => <SettingPage />,
  },
  {
    path: '/region-country',
    exact: true,
    main: () => <RegionCountryPage />,
  },
  {
    path: '/help-center',
    exact: true,
    main: () => <HelpCenterPage />,
  },
];

const settingRoutes = [
  {
    path: '/profile',
    exact: false,
    main: ({ match, location }) => <ProfilePage match={match} location={location} />,
  },
  {
    path: '/welcome',
    exact: true,
    main: () => <WelcomePage />,
  },
];

export { authRoutes, mainRoutes, settingRoutes };
