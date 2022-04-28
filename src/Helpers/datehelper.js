export  function dateTimeGenerate(d){
    var date = new Date(d);
    let month = date.getMonth();
    month = month+1;
    return date.getFullYear() +"/"+month+"/"+date.getDate()+"  "+date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

export  function dateGenerate(d){
    var date = new Date(d);
    let month = date.getMonth();
    month = month+1;
    return date.getFullYear() +"/"+month+"/"+date.getDate()
}

export const GetDays = (d,Mention_today=false)=>{
    let DateArray = [];
    let days=d;
    for(let i=0;i<days;i++){
        // if(!Mention_today && i===0){i=1;days+=1}
        let date = new Date();
        let last = new Date(date.getTime() - (i * 24 * 60 * 60 * 1000));
        let day =last.getDate();
        let month=last.getMonth()+1;
        let year=last.getFullYear();
        const fulld = {
            "start" : (Number(year) + '-' + Number(month) + '-' + Number(day)),
            "end": (Number(year) + '-' + Number(month) + '-' + Number(day))
        } // Format date as you like
        DateArray.push(fulld);
    }

    return DateArray.reverse();
}