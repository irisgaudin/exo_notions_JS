/* After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots

(ie: add up all the values that don't appear below a 0). --> TOUTES LES LIGNES BELOW A ZERO DON'T COUNT ! 

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
solution(matrix) = 9. */


// ---------------------- MY TURN --------------------- 

//pour chaque tableau dans le grand tableau, recuperer l'index où il se trouve un 0
// stocker l'index de J dans bannedJ 
// ensuite verifier si cet index existes dans les autres lignes, si oui, alors on ne l'ajoute pas au total 

function solution(matrix) {
    let bannedJ =[]
    let total = 0
   for (i=0;i<matrix.length;i++){
      for (j=0;j<matrix[i].length;j++){
          if(matrix[i][j]===0){
              bannedJ.push(j)
          }
          if (bannedJ.includes(j)===false){
           total += matrix[i][j] ;
          }
      } 
   } 
   return total
   } 
