         let board=document.getElementById('board');
         console.log(board);
      
         for(let i=0;i<=8;i++)
         {
            const el=document.createElement('div');
            el.setAttribute('class','div');
             el.setAttribute('id',i);
            // console.log("tag is",el);
           board.appendChild(el);
         }
         // console.log(board);
         let curr='o';
         let temp=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
         let arr=['e','e','e','e','e','e','e','e','e']
         //                  11 12 20 \
                        //   4  5
        board.addEventListener('click',(e)=>{
               //   console.log(e.target.id);
               if(e.target.id>=0 && e.target.id<=8)
               {
                 e.target.innerText=curr;
               //   arr[Math.floor(e.target.id/3)][Math.floor(e.target.id%3)]=curr;
               arr[e.target.id]=curr;
                 curr=='o'?curr='x':curr='o';
                 console.log(arr);
                 check(arr);
               }
                 
                
                   
        })
        function check(arr)
        {
         let winner;
            for(let i=0;i<8;i++)
                 {
                  let j;
                  for(j=0;j<2;j++)
                  {
                     // if(arr[i][j]=='o'||arr[i][j+1]=='o'||arr[])
                     // arr[i][j]==undefined?null:arr[i][j];
                     // arr[i][j+1]==undefined?null:arr[i][j+1]
                     let p=temp[i][j];
                     let q=temp[i][j+1];
            // console.log(p,q);
            
                     if(arr[p]!='e' && arr[q]!='e')
                   {
                       if(arr[p]!=arr[q] )
                        break;
                     else if(j==1)
                     {
                        winner=arr[p];
                     }
                   }
                   else
                   break;
                  }
                if(j==2)
                   {
                       console.log("winner is",winner);
                       const el=document.createElement('p');
                       el.innerText=`winner is ${winner}`
                       let parent=document.getElementById('container');
                       parent.appendChild(el);
                       break;
                   }
                 }
                console.log('game over');
                
         
        }
        // end
      

         
         
