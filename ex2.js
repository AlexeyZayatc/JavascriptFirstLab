let n = prompt("Введите n:");
if (!isNaN(parseFloat(n)) && isFinite(n) && n%1===0 &&(n>2 && n<15)){
    let strBeg = '<hr width=';
    let html = '';
    let latestWidth=0;
    for (let w = 100; w >= 100/n-1; w -= 100/n){
        html += strBeg + w +'%>';
        latestWidth=w;
    }
    document.write(html);
    
    html='<table align="center">';
    for(let i = 0; i < n; ++i){
        html+='<tr>';
        for(let j = 0; j < n; ++j){
            if(i%2==1 || j%2==1)
                html+='<td>'+(Math.min(i,j,n-i-1,n-j-1)+1)+'</td>';
            else
                html+='<td>'+(Math.min(i,j,n-i-1,n-j-1)+1)+'</td>';
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
