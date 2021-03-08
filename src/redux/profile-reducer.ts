import {ActionTypes, PostPropsType, ProfilePageType} from './state';


//тайпсриптовая штучка аналогичная type AddPostActionType = { type: 'ADD-POST'}
// но позволяющая не писать типизацию 100 раз, а брать её из экшн креэйтеров
export type AddPostActionType = ReturnType<typeof AddPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionCreator>


export const AddPostActionCreator = () => ({
    type: 'ADD-POST'
}) as const


export const UpdateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: text
}) as const


const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostPropsType = {
                id: 3,
                postMessage: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state;
        default:
            return state
    }
}


export default profileReducer;