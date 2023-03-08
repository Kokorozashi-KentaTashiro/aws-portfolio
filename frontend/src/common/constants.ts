// APIGateway関係
export const API_NAME = "tashiro-cdk-restApi";
export const API_ENDPOINT =
  "https://z7eokf1c27.execute-api.ap-northeast-1.amazonaws.com/dev";

// Lambda関係
export const USERINFO_RESOURCE = "/userInfo";
export const TOURNAMENT_RESOURCE = "/tournament";
export const TOURNAMENTS_RESOURCE = "/tournaments";
export const APPLICATIONS_RESOURCE = "/applications";
export const SINGLES_APPLICATIONS_RESOURCE = "/singlesApplications";
export const TEAM_APPLICATIONS_RESOURCE = "/teamApplications";
export const TEAMS_RESOURCE = "/teams";

// プルダウン
export const tournamentClasses = [
  {
    index: 0,
    label: "団体戦",
  },
  {
    index: 1,
    label: "シングルス",
  },
  {
    index: 2,
    label: "ダブルス",
  },
];

export const teams = [
  {
    index: 0,
    label: "学校１",
  },
  {
    index: 1,
    label: "チーム２",
  },
  {
    index: 2,
    label: "学校３",
  },
];

export const zones = [
  {
    index: 0,
    label: "地区１",
  },
  {
    index: 1,
    label: "支部２",
  },
  {
    index: 2,
    label: "地区３",
  },
];

export const schoolYears = [
  {
    index: 0,
    label: "1",
  },
  {
    index: 1,
    label: "2",
  },
  {
    index: 2,
    label: "3",
  },
];

export const sexies = [
  {
    index: 0,
    label: "男子",
  },
  {
    index: 1,
    label: "女子",
  },
];
