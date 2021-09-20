export type postDataType = {
    id: number;
    title: string;
    img: string;
    value: number;
}

export type dialogsDataType = {
    id: number;
    name: string;
    img:string;
}

export type messageDataType = {
    id : number;
    message: string;
    yourmesseges:boolean

}
export type profilePageType = {
    postData: Array<postDataType>,
    newPostText : string
}




export type stateType = {
    profilePage:profilePageType;
    messagesPage:{ messagesData: Array<messageDataType>,newMessageText:string ,dialogsData: Array<dialogsDataType>, };

}


type storeType = {
    _state: stateType;
    getState: ()=> stateType;
    _callSubscriber: ()=>void;
    addPost : ()=> void;
    addNewPostText: (newText:string)=>void;
    subscribe:(observer:()=>void)=>void;
    addNewMassage: ()=> void;
    addNewMessageText : (newText:string)=>void;
}

let store: storeType = {
    _state : {
        profilePage:{
            postData:[
                {
                    id: 1,
                    title: "my first posts",
                    value: 11,
                    img: "https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651",
                },
                {
                    id: 2,
                    title: "my to",
                    value: 23,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyhjuXjpN5uFiBSWPBOwkKbdCTmGD34EvR1TkdG17jTfK3km8K1CMmrbEZ7__tOrt-PU&usqp=CAU",
                },
            ],
            newPostText:"string",

        },
        messagesPage:{
            messagesData : [
                {id: 1, message: "hi" ,yourmesseges : true},
                {id: 2, message: "What's up ?", yourmesseges:false},
                {id: 3, message: "broooooooooooo", yourmesseges: true},
                {id: 4, message: "brroooo, what you do ?", yourmesseges:false},
                {id: 5, message: "im raiding on my bike", yourmesseges:true},
            ],
            newMessageText:"string",
            dialogsData:[
                {id: 1, name: 'Philipp', img:'https://farm1.static.flickr.com/95/222276161_c837076699.jpg'},
                {id: 2, name: 'Tanya', img:'http://aeoneal.com/imagery/alex-avatar-plaid-left-red.png' },
                {id: 3, name: 'Kirill',img:'http://eran.geek.co.il/wp-content/uploads/2005/11/South%20Park%20Avatar1.jpg'},
                {id: 4, name: 'Anya', img:'http://sun9-78.userapi.com/c1371/g2831414/a_296a6b5f.jpg'},
                {id: 5, name: 'Danila', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHDuKEec5wiYfw8UEM6tzJHmNY5pRiQjnmg&usqp=CAU'},
            ],

        },


    },
    getState (){
        return this._state
    },
    _callSubscriber (){
        console.log("state change")
    },
    addPost () {
        const newPost = {
            id:3,
            title:this._state.profilePage.newPostText,
            value: 0,
            img: "https://www.saashub.com/images/app/service_logos/34/fecf8242eb39/large.png?1551897651",
        }
        this._state.profilePage.postData.unshift(newPost)
        this._callSubscriber()
    },
    addNewPostText (newText:string){
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer:()=>void){
        this._callSubscriber = observer
    },
    addNewMassage () {
        const newMessage ={id: 2, message: this._state.messagesPage.newMessageText, yourmesseges:true}
        this._state.messagesPage.messagesData.push(newMessage)
        this._callSubscriber()
    },
    addNewMessageText (newText:string){
        this._state.messagesPage.newMessageText = newText
        this._callSubscriber()
    }

}











export default store;