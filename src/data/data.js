const inputData = {
  emailSignUp: 'oldd9000d560asd@gmail.com',
  emailLogIn: 'ssavchuk0609@gmail.com',
  password: '0609Maksymiv',
};

const url = {
  signup: '/signup',
  createFirstTeam: '/create-first-team',
  login: '/login',
  boards: '/boards',
  test: 'q=FirstBoard',
  filter: 'filter',
  filterOverdue: 'filter=overdue:true',
  newBoardUrl: '/newboard',
};
const valuesForFields = {
  registrationBoard: 'My first board',

  registrationListFirst: 'Треба зробити',
  registrationListSecond: 'У роботі',
  registrationListThird: 'Готово',

  registrationCardFirst: 'Планування проєкту',
  registrationCardSecond: 'Вступні збори',

  searchingBoard: 'FirstBoard',
  checkedFrequently: 'Періодично',

  newUserName: 'antonina678api90',
  newUserNameProfile: '@antonina678api90',

  newListName: 'NewList',
  newCardName: 'NewCard',
  newBoardName: 'NewBoard',

  nameExistedBoard: 'FirstBoard',

  username: 'Maria',
};

module.exports = {
  inputData,
  url,
  valuesForFields,
};
