const tt = {
    A: {
        mon: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DS",
            },
            3: {
                name: "Maths",
            },
            4: {
                name: "OOPJ",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
        tue: {
            1: {
                name: "Maths",
            },
            2: {
                name: "Maths",
            },
            3: {
                name: "OOPJ",
            },
            4: {
                name: "LSD",
            },
            5: {
                name: "DS",
            },
            6: {
                name: "OOPJ",
            },
            7: {
                name: "DE",
            }
        },
        wed: {
            1: {
                name: "Maths",
            },
            2: {
                name: "DS",
            },
            3: {
                name: "LSD",
            },
            4: {
                name: "Plac",
            },
            5: {
                name: "DE",
            },
            6: {
                name: "DS",
            },
            7: {
                name: "LSD",
            }
        },
        thu: {
            1: {
                name: "DS",
            },
            2: {
                name: "OOPJ",
            },
            3: {
                name: "Maths",
            },
            4: {
                name: "LSD",
            },
            5: {
                name: "DE",
            },
            6: {
                name: "Maths",
            },
            7: {
                name: "OOPJ",
            }
        },
        fri: {
            1: {
                name: "LSD",
            },
            2: {
                name: "Lab",
            },
            3: {
                name: "Lab",
            },
            4: {
                name: "Lab",
            },
            5: {
                name: "OOPJ",
            },
            6: {
                name: "MAT",
            },
            7: {
                name: "DS",
            }
        },
        sat: {
            1: {
                name: "FREE",
            },
            2: {
                name: "FREE",
            },
            3: {
                name: "FREE",
            },
            4: {
                name: "FREE",
            },
            5: {
                name: "Sust",
            },
            6: {
                name: "Sust",
            },
            7: {
                name: "Plac",
            }
        }
    },
    B: {
        mon: {
            1: {
                name: "OOPJ",
            },
            2: {
                name: "Lab",
            },
            3: {
                name: "Lab",
            },
            4: {
                name: "Lab",
            },
            5: {
                name: "Maths",
            },
            6: {
                name: "LSD",
            },
            7: {
                name: "DS",
            }
        },
        tue: {
            1: {
                name: "DE",
            },
            2: {
                name: "OOPJ",
            },
            3: {
                name: "LSD",
            },
            4: {
                name: "DS",
            },
            5: {
                name: "Maths",
            },
            6: {
                name: "Maths",
            },
            7: {
                name: "PLA",
            }
        },
        wed: {
            1: {
                name: "LSD",
            },
            2: {
                name: "DE",
            },
            3: {
                name: "OOPJ",
            },
            4: {
                name: "DS",
            },
            5: {
                name: "LSD",
            },
            6: {
                name: "OOPJ",
            },
            7: {
                name: "Maths",
            }
        },
        thu: {
            1: {
                name: "LSD",
            },
            2: {
                name: "Maths",
            },
            3: {
                name: "OOPJ",
            },
            4: {
                name: "DS",
            },
            5: {
                name: "Lab",
            },
            6: {
                name: "Lab",
            },
            7: {
                name: "Lab",
            }
        },
        fri: {
            1: {
                name: "OOPJ",
            },
            2: {
                name: "Maths",
            },
            3: {
                name: "DS",
            },
            4: {
                name: "DE",
            },
            5: {
                name: "Maths",
            },
            6: {
                name: "LSD",
            },
            7: {
                name: "DS",
            }
        },
        sat: {
            1: {
                name: "FREE",
            },
            2: {
                name: "FREE",
            },
            3: {
                name: "FREE",
            },
            4: {
                name: "FREE",
            },
            5: {
                name: "Sust",
            },
            6: {
                name: "Sust",
            },
            7: {
                name: "Plac",
            }
        }
    }
};
const linktree = {
    A:{
        Maths :"https://meet.google.com/tnz-edsc-pmk",
        DS:"https://meet.google.com/afs-afxw-svs",
        LSD:"https://meet.google.com/izq-cpri-iwv",
        OOPJ :"https://meet.google.com/ziw-yaty-ydj",
        DE:"https://meet.google.com/bdw-vuqk-wig",
        Sust:"https://meet.google.com/hqr-kgjf-cou",
        Plac:"https://meet.google.com/mvz-soum-ngt",
        FREE:"#",
        Lab:"#"
    },
    B:{
        Maths:"https://meet.google.com/wti-xeqq-pey",
        DS:"http://meet.google.com/mqw-dcdw-juo",
        LSD:"https://meet.google.com/awy-dcki-emx",
        OOPJ :"https://meet.google.com/whv-wzvp-svk",
        DE:"https://meet.google.com/qks-doaq-heg",
        Sust:"https://meet.google.com/hqr-kgjf-cou",
        Plac:"https://meet.google.com/mvz-soum-ngt",
        FREE:"#",
        Lab:"#"
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
    var l = `${linktree[div][tt[div][day][hr].name]}`;
    if (l != "#"){
     window.open(l,"_blank");
    }
}
function main(){
    const date = new Date();
    day = dd[date.getDay()];
    set();
    
}
