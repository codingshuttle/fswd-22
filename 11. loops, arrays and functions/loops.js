// for loop


// with break
for(let i = 0; i <= 5; i++) {
    if(i == 3) {
        break;
    }
    console.log('hello break', i);
}

// with continue

for(let i = 0; i <= 5; i++) {
    if(i == 3 || i == 1) {
        continue;
    }
    console.log('going school, day', i);
}


// for in loop

for(let i = 0; i<words.length; i++) {
    
}

for(let i in words) {
    console.log('hello', words[i]);
}








// count++
// count += 1;
// count = count + 1;


// while loop 

// let n = 5;

// let i = 6;
// 0 < 5
// 1 < 5
// while (i < n) {
//     i++;
//     console.log("Hello World", i);
// }

// do-while loop

// let n = 5;

// let i = 6;

// do {
//     console.log(i, 'hello');
//     i++;
// } while(i < 5);