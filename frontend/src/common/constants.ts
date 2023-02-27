// APIGateway関係
export const API_NAME = "tashiro-cdk-restApi";
export const API_ENDPOINT =
  "https://z7eokf1c27.execute-api.ap-northeast-1.amazonaws.com/dev";

// Lambda関係
export const USERINFO_RESOURCE = "/userInfo";
export const TOURNAMENT_RESOURCE = "/tournament";
export const TOURNAMENTS_RESOURCE = "/tournaments";
export const APPLICATIONS_RESOURCE = "/applications";

// プルダウン
export const tournamentClasses = [
  {
    index: 0,
    label: "団体",
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

export const schools = [
  {
    index: 0,
    label: "成田市立西中学校",
  },
  {
    index: 1,
    label: "栄中学校",
  },
  {
    index: 2,
    label: "私立和洋国府台中学校",
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
    label: "男",
  },
  {
    index: 1,
    label: "女",
  },
];
