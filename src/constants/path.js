export const PATH = {
  //route 경로
  main: "/main",
  login: "/login",
  signup: "/signup",
  loginoption: "/loginoption",
  termsconditions: "/termsconditions",
  calendar: "/calendar",
  username: "/username",
  mypage: "/mypage",
  profile: "/profile",
  timer: "/",
  getcarrot: "/getcarrot",
  planner: "/planner/:username/:date",
  carrot: "/carrot",

  //그룹 페이지
  grouplist: "/group",
  groupadd: "/group/add",
  groupdetail: (groupId) => `/group/${groupId}`,
  groupupdate: (groupId) => `/group/${groupId}/update`,
  groupinvite: (groupId) => `/group/${groupId}/invite`,
};
