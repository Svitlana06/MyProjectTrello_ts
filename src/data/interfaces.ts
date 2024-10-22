interface InputData { 
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
  
  
  export { InputData, Url, ValuesForFields };
  