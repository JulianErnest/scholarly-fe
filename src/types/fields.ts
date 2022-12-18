export type LoginFields = {
  email: string;
  password: string;
};

export type RegisterFields = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type TestFields = {
  test_subject: string;
  test_timelim: number;
  test_name: string;
  test_description: string;
};

export type QuestionFields = {
  question: string;
  choice_a: string;
  choice_b: string;
  choice_c: string;
  choice_d: string;
};