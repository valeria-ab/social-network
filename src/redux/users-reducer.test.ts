import usersReducer, {actions, InitialState} from './users-reducer';

let state: InitialState;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: 'Marie 0',
                followed: false,
                status: "status 0",
                photos: {large: null, small: null}
            },
            {
                id: 1,
                name: 'Marie 1',
                followed: false,
                status: "status 1",
                photos: {large: null, small: null}
            },
            {
                id: 2,
                name: 'Marie 2',
                followed: true,
                status: "status 2",
                photos: {large: null, small: null}
            },
            {
                id: 3,
                name: 'Marie 3',
                followed: true,
                status: "status 3",
                photos: {large: null, small: null}
            },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }
})


test('follow success', () => {

   const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {

    const newState = usersReducer(state, actions.unfollowSuccess(2))

    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeTruthy()
})