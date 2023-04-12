let n = prompt("Введите n:");
if (!isNaN(parseFloat(n)) && isFinite(n) && n%1===0){
    let strBeg = '<hr width=';
    let html = '';
    let latestWidth=0;
    for (let w = 100; w >= 100/n-1; w -= 100/n){
        html += strBeg + w +'%>';
        latestWidth=w;
    }
    document.write(html);
    
    html='<table align="center">';
    for(let i = 0; i < 8; ++i){
        html+='<tr>';
        for(let j = 0; j < 8; ++j){
            if(i==0 || j==0 || i==7 || j==7)
                html+='<td>1</td>';
            else if (((j==1 || j==6)) || ((i==1||i==6)))
                html+='<td>2</td>';
            else if ((i==2 || i==5) || (j==2 || j==5))
                html+='<td>3</td>';
            else 
                html+='<td>4</td>';
        }
        html+='</tr>';
    }
    html+='</table>';
    document.write(html);
    html='';
    for (let w = latestWidth; w <= 100; w += 100/n){
        if(w>100) w = 100;
        html += strBeg + w +'%>';
    }
    document.write(html);
}
else{
    alert("Ошибка ввода");
}