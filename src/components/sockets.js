import io from 'socket.io-client';
const socket = io('http://localhost:8010')
// section for use in metamask get an send cryptos and data users
export const emitwalletforbdd= (data)=>{
    socket.emit('client:datawalletanduser',data);
}
export const ondatawallet=(callback)=>{
    socket.on('server:walletolready',callback)
}

//section for use in login andlog out whit the server
export const emitstateofuser=(data)=>{
    socket.emit("client:statusofuser",data)
}
export const onStatusOfUser=(callback)=>{
    socket.on("server:statusofuser",callback)
}
export const onLoginRunning=(callback)=>{
    socket.on('server:infouser',callback);
}
export const stateOfUser=(data)=>{
    socket.emit('client:mystate',data)
}
//end section
//section for use in Gamewhhel whit sockets and the server  
export const initgamewheel=(data)=>{
    socket.emit('client:register-wheel', data)
}
export const onnewroom=(callback)=>{
    socket.on("server:next-room", callback)
}
export const onnumberofusers=(callback)=>{
    socket.on('server:numberofusers', callback)
}
export const readytoplayGW=(data)=>{
    socket.emit('client:readytoplay', data);
}
export const ondataroom=(callback)=>{
    socket.on('server:dataroom',callback);
}
export const onnumerofturns=(callback)=>{
    socket.on('server:numerofturns',callback);
}
export const onregisterstatus=(callback)=>{
    socket.on('server:register-wheel',callback);
}
export const regwinner=(data)=>{
    socket.emit('client:regwinner', data)
}
export const clearplayers=(data)=>{
    socket.emit('client:clear-players', data)
}
// end the "game wheel" section
// section for use in Game Towers ---
export const emitwithdrawals=(data)=>{
    socket.emit('client:withdrawals',data) 
}
//end the Game Mines section
// section for use in Dashboard conteiners
export const ondataHalloffame= (callback)=>{
    socket.on("server:datahalloffame", callback);
}
//
