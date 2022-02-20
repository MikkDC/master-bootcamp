console.log("Hello World!".toUpperCase());
console.log(7777);
console.log(Math.floor(Math.random()*10));

console.log("Grid 1")
let x = "    |    |    ";
let y = "--------------";
console.log(x);
console.log(x);
console.log(x);
console.log(y);
console.log(x);
console.log(x);
console.log(x);
console.log(y);
console.log(x);
console.log(x);
console.log(x);

console.log("Grid 2")

for (let i = 0; i < 9; i++) {
    if (i == 3 || i == 6){
    console.log("--------------");
    } console.log("    |    |    ");
}

console.log("Grid 3")

let grid = ["    |    |    ",
            "    |    |    ",
            "    |    |    ",
            "--------------",
            "    |    |    ",
            "    |    |    ",
            "    |    |    ",
            "--------------",
            "    |    |    ",
            "    |    |    ",
            "    |    |    "
        ];
    for(let i = 0; i < grid.length; i++){
        console.log(grid[i]);
    }

console.log("Grid 4")

for(let i = 0; i < 9;i++){
    let x = "--------------"
    let y = "    |    |    "
    if (i == 3 || i == 6){
        console.log(x);
    }
        console.log(y);
    }
