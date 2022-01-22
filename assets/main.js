const tt = {
    A: {
        mon: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        tue: {
            1: {
                name: "mat",
            },
            2: {
                name: "mat",
            },
            3: {
                name: "oopj",
            },
            4: {
                name: "lsd",
            },
            5: {
                name: "ds",
            },
            6: {
                name: "oopj",
            },
            7: {
                name: "de",
            }
        },
        wed: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        thu: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        fri: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        sat: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
    },
    B: {
        mon: {
            1: {
                name: "lsd",
            },
            2: {
                name: "oopj",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        tue: {
            1: {
                name: "mat",
            },
            2: {
                name: "mat",
            },
            3: {
                name: "oopj",
            },
            4: {
                name: "lsd",
            },
            5: {
                name: "ds",
            },
            6: {
                name: "oopj",
            },
            7: {
                name: "de",
            }
        },
        wed: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        thu: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        fri: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        },
        sat: {
            1: {
                name: "lsd",
            },
            2: {
                name: "ds",
            },
            3: {
                name: "mat",
            },
            4: {
                name: "oopj",
            },
            5: {
                name: "lab",
            },
            6: {
                name: "lab",
            },
            7: {
                name: "lab",
            }
        }
    }
};
const linktree = {
    A:{
        mat:"mata",
        ds:"dsa",
        lsd:"lsda",
        oopj:"oopja",
        de:"dea",
        sus:"susa",
        plac:"placa"
    },
    B:{
        mat:"https://meet.google.com/wti-xeqq-pey",
        ds:"http://meet.google.com/mqw-dcdw-juo",
        lsd:"https://meet.google.com/awy-dcki-emx",
        oopj:"https://meet.google.com/whv-wzvp-svk",
        de:"https://meet.google.com/qks-doaq-heg",
        sus:"susbhttps://meet.google.com/hqr-kgjf-cou",
        plac:"https://meet.google.com/mvz-soum-ngt"
    },
}
const dd=['mon','mon','tue','wed','thu','fri','sat','mon'];
var div = "A";
var day = "mon";
function set() {
    for (let i = 1; i < 8 ; i++) {
        document.getElementById(`${i}sub`).innerHTML = tt[`${div}`][`${day}`][`${i}`].name; 
   }
}

function getday(d,d1) {
    day = d;
    document.getElementById("day-selector").innerText = d1;
    set();

}

function getdiv(d,d1) {
    div = d;
    document.getElementById("div-selector").innerText = d1;
    set();

}
function link(hr){
    console.log(`${linktree[div][tt[div][day][hr].name]}`  );
}
function main(){
    const date = new Date();
    day = dd[date.getDay()];
    set();
    
}