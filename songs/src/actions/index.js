
//Action creator
export const selectSong = song => {
    //Return an action
    return {
        type : 'SONGE_SELECTED',
        payload : song
    };
};