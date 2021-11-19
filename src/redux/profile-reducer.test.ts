import profileReducer, {
  AddPostActionCreator,
  DeletePostActionCreator,
} from "./profile-reducer";

it("new post should be added", () => {
  // 1. test data
  const action = AddPostActionCreator("New post");
  const startState = {
    profile: null,
    postsData: [
      { id: "1", postMessage: "Hi! It's my first post", likesCount: 3 },
      { id: "2", postMessage: "Yo!", likesCount: 12 },
    ],
    isAuth: false,
    status: "",
  };

  // 2. action data
  const newState = profileReducer(startState, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(3);
  expect(newState.postsData[2].postMessage).toBe("New post");
});

it("after deleting length of messages should be decremented", () => {
  // 1. test data
  const action = DeletePostActionCreator("3");
  const startState = {
    profile: null,
    postsData: [
      { id: "1", postMessage: "Hi! It's my first post", likesCount: 3 },
      { id: "2", postMessage: "Yo!", likesCount: 12 },
    ],
    isAuth: false,
    status: "",
  };

  // 2. action data
  const newState = profileReducer(startState, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(2);
});
