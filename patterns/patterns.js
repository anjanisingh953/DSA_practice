function pattern1(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 5; j++) {
            process.stdout.write('*')
        }
        console.log()
    }
}

function pattern2(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write('*')
        }
        console.log()
    }
}

function pattern3(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j.toString())
        }
        console.log()
    }
}

function pattern4(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(i.toString())
        }
        console.log()
    }
}

function pattern5(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write('*')
        }
        console.log()
    }
}

function pattern6(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(j.toString())
        }
        console.log()
    }
}

function pattern7(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ')
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            process.stdout.write('*')
        }
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ')
        }
        console.log()
    }
}

function pattern8(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(' ')
        }
        for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
            process.stdout.write('*')
        }
        for (let j = 0; j < i; j++) {
            process.stdout.write(' ')
        }
        console.log()
    }
}

function pattern9(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ')
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            process.stdout.write('*')
        }
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ')
        }
        console.log()
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(' ')
        }
        for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
            process.stdout.write('*')
        }
        for (let j = 0; j < i; j++) {
            process.stdout.write(' ')
        }
        console.log()
    }
}

function pattern10(n) {
    for (let i = 0; i <= 2 * n - 1; i++) {
        let breakpoint = i
        for (let j = 0; j < breakpoint; j++) {
            if (i > n) breakpoint = 2 * n - i;
            process.stdout.write('*')
        }
        console.log()
    }
}

function pattern11(n) {
    for (let i = 1; i <= n; i++) {
        let initialNum = (i % 2 == 0) ? 0 : 1;
        for (let j = 0; j < i; j++) {
            process.stdout.write(initialNum.toString())
            initialNum = 1 - initialNum
        }
        console.log()
    }
}

function pattern12(n) {
    let space = 2 * (n - 1);

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            process.stdout.write(j.toString())
        }

        for (let j = 1; j <= space; j++) {
            process.stdout.write(' ')
        }

        for (let j = i; j >= 1; j--) {
            process.stdout.write(j.toString())
        }
        space -= 2
        console.log()
    }
}

function pattern13(n) {
    let count = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(count.toString() + ' ');
            count = count + 1;
        }
        console.log()
    }
}

function pattern19(n) {
    //stars
    let initialSpace = 0
    for (i = 0; i < n; i++) {
        //stars
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write('*')
        }
        //space
        for (let j = 0; j < initialSpace; j++) {
            process.stdout.write(' ')
        }
        //stars
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write('*')
        }
        initialSpace += 2
        console.log();
    }

    //other symmetric
    initialSpace = 2 * n - 2
    for (i = 1; i <= n; i++) {
        //stars
        for (let j = 1; j <= i; j++) {
            process.stdout.write('*')
        }
        //space
        for (let j = 0; j < initialSpace; j++) {
            process.stdout.write(' ')
        }
        //stars
        for (let j = 1; j <= i; j++) {
            process.stdout.write('*')
        }
        initialSpace -= 2
        console.log();
    }
}

function pattern20(n) {
    let initialSpace = 2 * n - 2;

    for (let i = 1; i <= 2 * n - 1; i++) {
        let star = i;
        if (i > n) star = 2 * n - i

        //stars
        for (let j = 1; j <= star; j++) {
            process.stdout.write('*')
        }

        //space
        for (let j = 1; j <= initialSpace; j++) {
            process.stdout.write(' ')
        }

        //stars
        for (let j = 1; j <= star; j++) {
            process.stdout.write('*')
        }

        console.log();
        if (i < n) {
            initialSpace -= 2;
        } else {
            initialSpace += 2;
        }
    }

}

function pattern21(n) {

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
                process.stdout.write('*')
            } else {
                process.stdout.write(' ')
            }
        }

        console.log();

    }

}

function pattern22(n) {

    for (let i = 0; i < 2 * n - 1; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            let top = i;
            let left = j;
            let right = (2 * n - 2) - j;
            let bottom = (2 * n - 2) - i;
            let finalDigit =n-(Math.min(Math.min(top, bottom), Math.min(left, right)));
            process.stdout.write(finalDigit.toString());
        }
        console.log('');
    }
}
pattern22(4)
