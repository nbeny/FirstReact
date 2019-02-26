/**
 * 17. Créer notre function a exporter avec en paramètres (user)
 * 18. Comme on est dans un actioncreator on return une action qui est un objet qui contient un type et un payload
 * 19. Pour plus de propreter on stock le type dans une variable qu'on export
 * 20. On import l'action que l'on vien de créer dans notre user_lit.js | (21. dans user_list.js) 
 * 24. On vérifie avec console.log('selected : ', user);
 * 25. Il faut créer un nouveau reducer qu'on vas appeler reducer_activeUser.js | 26. dans reducer_activeUser.js
 */
export const USER_SELECTED = 'USER_SELECTED'

export function selectUser(user){
    // console.log('----------------')
    // console.log('selected',user.name);
    // console.log('----------------');
    return {
        type : USER_SELECTED,
        payload : user
    }
}