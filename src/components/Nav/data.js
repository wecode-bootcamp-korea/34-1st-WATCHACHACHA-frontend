const data = [
  {
    LOGIN_DATA: [
      {
        type: "email",
        text: "이메일",
        unValidClass: "unValidClass",
        errorMessage: "정확하지 않은 이메일 입니다.",
      },
      {
        type: "password",
        text: "비밀번호",
        unValidClass: "unValidClass",
        errorMessage: "비밀번호는 최소 6자리 이상이어야 합니다.",
      },
    ],
    SIGNUP_DATA: [
      {
        type: "signName",
        text: "이름",
        unValidClass: "unValidClass",
        errorMessage: "정확하지 않은 이름입니다.",
      },
      {
        type: "signEmail",
        text: "이메일",
        unValidClass: "unValidClass",
        errorMessage: "정확하지 않은 이메일입니다.",
      },
      {
        type: "signPassword",
        text: "비밀번호",
        unValidClass: "unValidClass",
        errorMessage:
          "비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 10자리 이상이여야 합니다.",
      },
      {
        type: "signBirth",
        text: "생년월일 8자리를 입력하세요.",
        unValidClass: "unValidClass",
        errorMessage: "정확하지 않은 생년월일입니다.",
      },
    ],
  },
];

export default data;
