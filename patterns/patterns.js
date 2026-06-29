// function pattern1(n){
//     for(let i =0; i<n; i++){
//         for(let j =0; j<5; j++ ){
//             process.stdout.write('*')
//         }
//         console.log()
//     }    
// }

// function pattern2(n){
//     for(let i =0; i<n; i++){
//         for(let j =0; j<=i; j++ ){
//             process.stdout.write('*')
//         }
//         console.log()
//     }    
// }

// function pattern3(n){
//     for(let i =0; i<=n; i++){
//         for(let j =1; j<=i; j++ ){
//             process.stdout.write(j.toString())
//         }
//         console.log()
//     }    
// }

// function pattern4(n){
//     for(let i =0; i<=n; i++){
//         for(let j =1; j<=i; j++ ){
//             process.stdout.write(i.toString())
//         }
//         console.log()
//     }    
// }

// function pattern5(n){
//     for(let i =0; i<=n; i++){
//         for(let j =0; j<=n-i; j++ ){
//             process.stdout.write('*')
//         }
//         console.log()
//     }    
// }

// function pattern6(n){
//     for(let i =0; i<=n; i++){
//         for(let j =1; j<=n-i; j++ ){
//             process.stdout.write(j.toString())
//         }
//         console.log()
//     }    
// }

// function pattern7(n){
//     for(let i =0; i<n; i++){
//         for(let j =0; j<n-i-1; j++ ){
//             process.stdout.write(' ')
//         }
//         for(let j =0; j<2*i+1; j++ ){
//             process.stdout.write('*')
//         }
//          for(let j =0; j<n-i-1; j++ ){
//             process.stdout.write(' ')
//         }
//         console.log()
//     }    
// }

// function pattern8(n){
//     for(let i =0; i<n; i++){
//         for(let j =0; j<i; j++ ){
//             process.stdout.write(' ')
//         }
//         for(let j =0; j<2*n-(2*i+1); j++ ){
//             process.stdout.write('*')
//         }
//          for(let j =0; j<i; j++ ){
//             process.stdout.write(' ')
//         }
//         console.log()
//     }    
// }

// function pattern9(n){
//         for(let i =0; i<n; i++){
//         for(let j =0; j<n-i-1; j++ ){
//             process.stdout.write(' ')
//         }
//         for(let j =0; j<2*i+1; j++ ){
//             process.stdout.write('*')
//         }
//          for(let j =0; j<n-i-1; j++ ){
//             process.stdout.write(' ')
//         }
//         console.log()
//     }    
//     for(let i =0; i<n; i++){
//         for(let j =0; j<i; j++ ){
//             process.stdout.write(' ')
//         }
//         for(let j =0; j<2*n-(2*i+1); j++ ){
//             process.stdout.write('*')
//         }
//          for(let j =0; j<i; j++ ){
//             process.stdout.write(' ')
//         }
//         console.log()
//     }    
// }

// function pattern10(n){
//     for(let i =0; i<=2*n-1; i++){

//         let breakpoint = i
        
//         for(let j =0; j<breakpoint; j++ ){
//              if(i>n) breakpoint = 2*n-i;     
//             process.stdout.write('*')
//         }
//         console.log()
//     }    
// }

function pattern(n){
    for(let i =0; i<=2*n-1; i++){

        let breakpoint = i
        if(i>n) breakpoint = 2*n-i;     

        for(let j =0; j<breakpoint; j++ ){
            process.stdout.write('*')
        }
        console.log()
    }    
}

pattern(5);