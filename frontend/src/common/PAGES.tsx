import { ReactNode } from 'react';

import Home from 'containers/Home';
import Tournaments from 'containers/Tournaments';
import TournamentRegist from 'containers/TournamentRegist';
import Other from 'containers/Other';

// 型定義
type PageInfo = {
    CONTEXT: string;
    URL: string;
    ELEMENT: ReactNode;
    VIEW: boolean;
};

export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// 各ページ情報の定義
export const HOME_INFO: PageInfo = {
    CONTEXT: 'ホーム',
    URL: '/',
    ELEMENT: <Home />,
    VIEW: true,
};

export const TOURNAMNTS_INFO: PageInfo = {
    CONTEXT: '大会一覧',
    URL: '/tournaments',
    ELEMENT: <Tournaments />,
    VIEW: true,
};

export const TOURNAMNT_REGIST_INFO: PageInfo = {
    CONTEXT: '大会登録',
    URL: '/tournament-regist',
    ELEMENT: <TournamentRegist />,
    VIEW: false,
};

export const OTHER_INFO: PageInfo = {
    CONTEXT: 'その他',
    URL: '/other',
    ELEMENT: <Other />,
    VIEW: true,
};

// 各ページを配列に詰めてexport
export const PAGEINFOS: PageInfo[] = [
    HOME_INFO,
    TOURNAMNTS_INFO,
    TOURNAMNT_REGIST_INFO,
    OTHER_INFO,
];