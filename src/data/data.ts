interface InputData { // інтерфейси винести окремо, дані залишити - почати з сінглтона і перевести всі компоненти на гетери і винести локатори вгору
  emailSignUp: string;
  emailLogIn: string;
  password: string;
}

interface Url {
  signup: string;
  createFirstTeam: string;
  login: string;
  boards: string;
  test: string;
  filter: string;
  filterOverdue: string;
  newBoardUrl: string;
}

interface ValuesForFields {
  registrationBoard: string;
  registrationListFirst: string;
  registrationListSecond: string;
  registrationListThird: string;
  registrationCardFirst: string;
  registrationCardSecond: string;
  searchingBoard: string;
  checkedFrequently: string;
  newUserName: string;
  newUserNameProfile: string;
  newListName: string;
  newCardName: string;
  newBoardName: string;
  nameExistedBoard: string;
  username: string;
}

const inputData: InputData = {
  emailSignUp: 'oldd9000d560asd@gmail.com',
  emailLogIn: 'ssavchuk0609@gmail.com',
  password: '0609Maksymiv',
};

const url: Url = {
  signup: '/signup',
  createFirstTeam: '/create-first-team',
  login: '/login',
  boards: '/boards',
  test: 'q=FirstBoard',
  filter: 'filter',
  filterOverdue: 'filter=overdue:true',
  newBoardUrl: '/newboard',
};

const valuesForFields: ValuesForFields = {
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

export { inputData, url, valuesForFields };
